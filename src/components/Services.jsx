import {BsPatchCheckFill} from 'react-icons/bs'
import "./Services.css"
const Services = () => {
    return (
        <div className="max-w-7xl mx-auto my-40" id="services">
            <div>
                <div className='text-center my-7'>
                <h5 className='text-2xl text-cyan-400 font-semibold'>What Skills I Have</h5>
                <h2>My Experience</h2>
                </div>

                <div className=" experience_container">
                    <div className="experience_front">
                        <h3>Frontend Development</h3>
                        <div className="experience_content">
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                                <div>
                                <h4>HTML</h4>
                                <small className='text-cyan-400'>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                                <div>
                                <h4>CSS</h4>
                                <small className='text-cyan-400'>Intermediate</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                                <div>
                                <h4>JavaScript</h4>
                                <small className='text-cyan-400'>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                                <div>
                                <h4>DaisiUi</h4>
                                <small className='text-cyan-400'>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                                <div>
                                <h4>Tailwind</h4>
                                <small className='text-cyan-400'>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                                <div>
                                <h4>React</h4>
                                <small className='text-cyan-400'>Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="experience_backend">
                    <h3>Backend Development</h3>
                        <div className="experience_content">
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                                <div>
                                <h4>Node Js</h4>
                                <small className='text-cyan-400'>Experienced</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                                <div>
                                <h4>MongoDb</h4>
                                <small className='text-cyan-400'>Intermediate</small>
                                </div>
                            </article>
                            <article className="experience_details">
                                <BsPatchCheckFill className="experience_details-icon"/>
                               <div>
                               <h4>Firebase</h4>
                                <small className='text-cyan-400'>Experienced</small>
                               </div>
                            </article>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;