const NodeCache = require('node-cache');
const myCache = new NodeCache();

// Cache middleware to check if the data is available in cache before hitting the database or external API
const cache = (req, res, next) => {
    const key = req.originalUrl || req.url;
    const cachedData = myCache.get(key);

    if (cachedData) {
        return res.status(200).json(cachedData);
    } else {
        res.sendResponse = res.json;
        res.json = (body) => {
            myCache.set(key, body, 10000); // Cache data for 10 seconds
            res.sendResponse(body);
        };
        next();
    }
};

module.exports = { cache };
