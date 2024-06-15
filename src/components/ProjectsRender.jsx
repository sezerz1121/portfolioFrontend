import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Project from './Project.jsx';

const ProjectsRender = () => {
    const [projects, setProjects] = useState([]); // Initialize as an empty array
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URL}/project/projectall`);
                setProjects(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };
        
        fetchData();
    }, []); // Add dependency array

    if (!projects) {
        return <div>Loading</div>;
    }

    const showMoreProjects = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    const reversedProjects = [...projects].reverse();

    return (
        <div className='projectListEdting'>
            <div className='SkilsTitleII'>Projects</div>
            {reversedProjects.slice(0, visibleCount).map(project => (
                <Project key={project._id} _id={project._id} CoverImage={project.projectImageOne} projectName={project.projectName} Features={project.projectFeature} Link={project.projectLink} /> 
            ))}
            {visibleCount < projects.length && ( 
                <button onClick={showMoreProjects}>Load More</button>
            )}
        </div>
    );
};

export default ProjectsRender;
