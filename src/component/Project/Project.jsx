import React, { useRef } from 'react';
import './Project.css';

import { PROJECT } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';
import Slider from "react-slick";


const Project = () => {
    const slideRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const slideRight = () => {
        slideRef.current.slickNext();
    };
    const slideLeft = () => {
        slideRef.current.slickPrev();
    };

    return (
        <div>
            <section className='project-container'>
                <h5>Project details</h5>
                <div className='project-content'>
                    <div className="arrow-right" onClick={slideRight}>
                        <span className="material-symbols-outlined">chevron_right</span>
                    </div>
                    <div className="arrow-left" onClick={slideLeft}>
                        <span className="material-symbols-outlined">chevron_left</span>
                    </div>
                    <Slider ref={slideRef} {...settings}>
                        {PROJECT.map((item) => (
                            <ProjectCard key={item.title} details={item} />
                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
};

export default Project;
