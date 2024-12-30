const app = require('./app.js');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
