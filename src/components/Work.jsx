import { useState } from 'react';
import './work.css'
import { FaArrowRight, FaGithub, FaLink } from "react-icons/fa";

const myProjects = [
    
    
    {
        projectTitle: "css project",
        category: ["css"],
        liveLing: "https://moshiurrahmansourave.github.io/Fruit-brust-assignment/",
        gihubLink: "",
        imgPath: "https://i.ibb.co/C8KyBjh/Screenshot-172.png",
    },
    
    {
        projectTitle: "js project",
        category: [ "js"],
        liveLing: "https://assignment_7-course.surge.sh/",
        gihubLink: "",
        imgPath: "https://i.ibb.co/VJS8Lzy/Screenshot-171.png",
    },
    {
        projectTitle: "react project",
        category: [ "react"],
        liveLing: "https://assignment-10-brand-shop.web.app/",
        gihubLink: "",
        imgPath: "https://i.ibb.co/sbWvCNf/Screenshot-170.png",
    },
    {
        projectTitle: "react project",
        category: [ "react"],
        liveLing: "https://group-study-assignment-ca6d9.web.app/",
        githubLink: "",
        imgPath: "https://i.ibb.co/zZbXN3r/Screenshot-169.png",
    },
    {
        projectTitle: "react project",
        category: [ "react"],
        githubLink: "",
        liveLing: "https://assignment-12-final-13189.web.app/",
        imgPath: "https://i.ibb.co/NYhwkK3/Screenshot-168.png",
    },
    {
        projectTitle: "team project",
        category: [ "react"],
        githubLink: "",
        liveLing: "https://swift-mail-5a7d7.web.app",
        imgPath: "https://i.ibb.co/0BQ4P4h/Screenshot-62.png",
    },
]
const Work = () => {

    const [currentActive, setCurrentActive] = useState('all');
    const [arr, setarr] = useState(myProjects);

    const handleClick = (buttonCategory) =>{
        setCurrentActive(buttonCategory);

                        const newArr = myProjects.filter((item) => {
                            const zzz = item.category.find((myItem) => {
                                return myItem === buttonCategory;
                            });

                            return zzz === buttonCategory;
                        })

                        setarr(newArr)
    }

    return (
        <div className=" flex main max-w-[1320px] mx-auto" id="work">
            <section className="left-section flex ">
                <button
                    onClick={() => { setCurrentActive("all") }}
                    className={currentActive === "all" ? 'activeee' : null}
                >All Projects</button>

                <button
                    onClick={() => {
                        handleClick("css")
                    }}
                    className={currentActive === "css" ? 'activeee' : null}
                >HTML & CSS</button>

                <button 
                onClick={() => {
                        handleClick("js")
                    }} className={currentActive === "js" ? 'activeee' : null}>JavaScript</button>
                <button
                 onClick={() => {
                        handleClick("react")
                    }} className={currentActive === "react" ? 'activeee' : null}>ReactJs</button>


            </section>

            <section className="right-section  flex">
                {arr.map((item) => {
                    return (
                        <article key={item.imgPath} className='cardproject border'>
                            <img width={350} src={item.imgPath} alt="" />
                            <div className='box w-[350px]'>
                                <h1 className='text-2xl px-3'>{item.projectTitle}</h1>
                                <p className='p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ratione ullam tempora itaque enim perspiciatis.</p>
                                <div className="flex justify-between">
                                    <div className='flex gap-3 text-2xl px-2'>
                                        <a href={item.liveLing} target="_blank" rel="noopener noreferrer"><FaLink /></a>
                                        
                                        <FaGithub />
                                    </div>
                                    <a className='flex items-center text-center gap-2 mr-2' href="">
                                        more <span><FaArrowRight /></span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    );
};

export default Work;