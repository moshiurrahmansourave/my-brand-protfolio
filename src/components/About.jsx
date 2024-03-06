import ME from '../assets/me-about.jpg'
import { FaAward, FaUsers } from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import './About.css'
const About = () => {
    return (
        <div className=''>
            <div className="" id="about">
            <div className='text-center items-center my-16'>
            <h1 className='text-2xl font-bold text-cyan-400'>Get To Know</h1>
            <h1 className='underline text-slate-300'>about</h1>
            </div>

            <div className="containerrr grid grid-cols-2 gap-24 about-container">
            <div className="about_me ">
                <div className="about_me_img">
                    <img src={ME} alt="about image" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card '>
                        <FaAward className='about_icon'/>
                        <h5>Exprience</h5>
                        <small>1+ year working </small>
                    </article>

                    <article className='about_card'>
                        <FaUsers className='about_icon'/>
                        <h5>Clients</h5>
                        <small>200+ worldwide</small>
                    </article>

                    <article className='about_card'>
                        <VscFolderLibrary className='about_icon'/>
                        <h5>Projects</h5>
                        <small>20+</small>
                    </article>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae molestias nulla recusandae magni, tempore sequi accusamus tenetur nesciunt. Magnam, temporibus asperiores eligendi voluptas doloribus optio aperiam. Accusantium molestiae consequatur perspiciatis!
                </p>
                <a href="#contact" id='btn-style'>Let's talk</a>
            </div>
            </div>
        </div>
        </div>
    );
};

export default About;