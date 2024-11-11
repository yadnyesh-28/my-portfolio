import React from 'react'
import './Hero.css'
import { FaHtml5, FaJava} from 'react-icons/fa'
import { FaReact } from "react-icons/fa";
import img1 from '../../Assets/img.jpeg'
import img from '../../Assets/image_search_1726833503092.png'
import img2 from '../../Assets/image_search_1726832669666.png'
import img3 from '../../Assets/image_search_1726832770860.png'
import img4 from '../../Assets/image_search_1726832606732.png'

export const Hero = () => {
  return (
    <section id='hero' className='hero-container'>
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloremque, veritatis doloribus, perferendis eveniet sapiente dolor dolores deserunt
            </p>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                <img src={img} alt="default" />
                </div>
                <img src={img1} alt="default" />
            </div>

            <div>
                <div className="tech-icon">
                <img src={img2} alt="default" />
                </div>
                <div className="tech-icon">
                <img src={img3} alt="default" />
                </div>
                <div className="tech-icon">
                <img src={img4} alt="default" />
                </div>


            </div>
        </div>
    </section>
  )
}
