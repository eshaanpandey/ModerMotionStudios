import React, { useEffect, useState } from 'react';
import ThumbnailGrid from '../components/ThumbnailGrid.tsx';
import Loader from '../components/Loader.tsx';
import { getProjectsByCategory } from '../utils/AllProjects.ts';
import { useParams } from 'react-router-dom';
import { Project } from '../types/ProjectDescription.ts';

const CategoryPage: React.FC = () => {
    const { category } = useParams();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch projects for the current category
    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const data = await getProjectsByCategory(category || '');
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects([]);
            }
            setLoading(false); 
        };

        fetchProjects();
    }, [category]);

    const fetchCategoryProjects = async (page: number) => {
        const pageSize = 10; // Limit to 10 projects per page
        const startIndex = (page - 1) * pageSize;
        return projects.slice(startIndex, startIndex + pageSize);
    };

    if (loading) {
        return <Loader />;
    }

    if (!projects.length) {
        return (
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-3xl font-bold mb-6 capitalize">{category} Projects</h1>
                <p className="text-gray-500 text-lg mt-4">
                    No projects found for the <span className="font-semibold capitalize">{category}</span> category.
                </p>
                <p className="text-gray-500 mt-2">Please check back later!</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
            <ThumbnailGrid fetchMoreData={fetchCategoryProjects} />
        </div>
    );
};

export default CategoryPage;
