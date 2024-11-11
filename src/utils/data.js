
import { BiCreditCardFront } from "react-icons/bi"
import { BsDatabaseFill, BsTools } from "react-icons/bs"
import { GiSkills } from "react-icons/gi"
import { HiCode } from "react-icons/hi"

export const Data = [
    {
        title: "Frontend",
        icon: <BiCreditCardFront />,
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3", percentage: "75%" },
            { skill: "JavaScript", percentage: "85%" },
            { skill: "React.js", percentage: "85%" },
        ],
    },
    {
        title: "Backend",
        icon: <HiCode />,
        skills: [
            { skill: "Node.js", percentage: "70%" },
            { skill: "Express.js", percentage: "65%" },
            { skill: "Core Java", percentage: "90%" },
            { skill: "Spring MVC", percentage: "90%" },
            { skill: ".Net (MVC)", percentage: "70%" },
        ],

    },
    {
        title: "Tools",
        icon: <BsTools />,
        skills: [
            { skill: "Git & Github", percentage: "65%" },
            { skill: "Visual Studio Code", percentage: "65%" },
            { skill: "Webpack", percentage: "60%" },
            { skill: "Responsive design", percentage: "70%" },
        ],
    },
    {
        title: "Database",
        icon: <BsDatabaseFill />,
        skills: [
            { skill: "MySQL", percentage: "90%" },
            { skill: "Oracle", percentage: "80%" },
            { skill: "Mongodb", percentage: "80%" },
            { skill: "Stored Procedure ,  triggers and Functions", percentage: "70%" },
        ],
    }, {
        title: "SoftSkills",
        icon: <GiSkills />,
        skills: [
            { skill: "Problem Solving", percentage: "85%" },
            { skill: "Collaboration", percentage: "90%" },
            { skill: "Communication Skill ", percentage: "70%" },
            { skill: "Team Player", percentage: "80%" },
        ],

    }
]


export const Work_Experience=[
    {
        title:"Associate Engineer",
        date:"April 2023-August 2023",
        responsibilities:[
            "Developed and implemented multiple features for the company's flagship product.",
            "Collaborated with cross-functional teams to identify and prioritize project requirements.",
            "Participated in code reviews to ensure high-quality code and adherence to coding standards.",
        ],
    },
    {
        title:"Strategic  Career Break",
        date: "Sept 2023-March 2024",
        responsibilities:[
            "Developed and implemented multiple features for the company's flagship product.",
            "Collaborated with cross-functional teams to identify and prioritize project requirements.",
            "Participated in code reviews to ensure high-quality code and adherence to coding standards.",
        ],
    },
    
]