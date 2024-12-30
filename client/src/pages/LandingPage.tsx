import React from 'react';
import ThumbnailGrid from '../components/ThumbnailGrid.tsx';
import { fetchMoreData } from '../utils/AllProjects.ts';
import ShowReel from '../components/ShowReel.tsx';

const LandingPage: React.FC = () => {
    const showreelVideoUrl = "https://drive.google.com/file/d/1x9CkXG1p_sXn9X61HlekwLYzeH1BSbob/preview";

    return (
        <div className="container mx-auto p-4">
            <ShowReel videoUrl={showreelVideoUrl} />
            <h1 className="text-3xl font-bold mb-6">All Projects</h1>
            <ThumbnailGrid fetchMoreData={fetchMoreData} />
        </div>
    );
};

export default LandingPage;
