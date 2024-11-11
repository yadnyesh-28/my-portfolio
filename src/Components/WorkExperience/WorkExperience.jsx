import React, { useRef } from 'react'
import './WorkExperience.css'
import { Work_Experience } from '../../utils/data'
import { WorkExperienceCard } from './WorkExperienceCard/WorkExperienceCard'
import Slider from 'react-slick'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'


export const WorkExperience = () => {
    const slideRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
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

    const slideRight= ()=>{
        slideRef.current.slickNext();
    };

    const slideLeft = ()=>{
        slideRef.current.slickPrev();
    };

    return (
        <section id='workExperience' className='experience-container'>
            <h5>Work Experience</h5>

            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span><MdOutlineKeyboardArrowRight /></span>
                </div>

                <div className="arrow-left" onClick={slideLeft}>
                    <span> <MdOutlineKeyboardArrowLeft /></span>
                </div>


                <Slider ref={slideRef} {...settings}>
                    {
                        Work_Experience.map((item) => (
                            <WorkExperienceCard key={item.title} details={item} />
                        ))}
                </Slider>
            </div>
        </section>
    )
}
