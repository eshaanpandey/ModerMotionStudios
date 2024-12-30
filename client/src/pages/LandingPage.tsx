import React from 'react';
import ThumbnailGrid from '../components/ThumbnailGrid.tsx';
import { fetchMoreData } from '../utils/AllProjects.ts';

const LandingPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">All Projects</h1>
            <ThumbnailGrid fetchMoreData={fetchMoreData} />
        </div>
    );
};

export default LandingPage;
