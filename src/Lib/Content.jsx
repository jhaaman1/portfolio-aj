/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import amazon from "./propic/amazon.png"
import portfolio from "./propic/portfolio.png"
import kindmeal from "./propic/kindmeal.png"
import tomtop from "./propic/Tomtop.png"
import snapdeal from "./propic/snapdeal.png"

export default {
    managerialSkills: ["Leadership", "Strategising", "Team Motivation",  "Research", "Finance Management"],
    technicalSkills: [{name:"React",logo:`<i className="fa-brands fa-reacteurope"></i>`}, {name:"JavaScript",logo:`<i className="fa-brands fa-js-square"></i>`}, {name:"Material UI",logo:`<i className="fa-brands fa-uikit"></i>`}, {name:"Chakra UI",logo:`<i className="fa-brands fa-uikit"></i>`}, {name:"Bootstrap",icon:`<i className="fa-brands fa-bootstrap"></i>`}, {name:"CSS",icon:`<i className="fa-brands fa-css3-alt"></i>`}, {name:"Express",icon:`<i className="fa-solid fa-gauge-simple"></i>`}, {name:"Git & GitHub",icon:`<i className="fa-brands fa-git-alt"></i>`}, {name:"MongoDB",icon:`<i className="fa-solid fa-database"></i>`}, {name:"TypeScript",icon:`<i className="fa-brands fa-jsfiddle"></i>`}, {name:"Jest",icon:`<i className="fa-solid fa-flask-vial"></i>`}, {name:"Node.js",icon:`<i className="fa-brands fa-node-js"></i>`},{name:"Data Structures",icon:`<i className="fa-solid fa-cubes-stacked"></i>`}],
    marketingSkills: ["VS Code", "Postman", "Git", "CodeSandbox"],
    education: {
        bc:{
            name: "Masai School",
            type: "Bootcamp",
            course: "Full Stack Web Development (MERN)",
            duration: "2022-2023"
            
        },
        ug: {
            name: "Haldia Institute of Technology",
            type: "University",
            course: "B.Tech in Civil Engineering",
            duration: "2017-2021"
            
        },
        highSchool: {
            name: "Rose Public School, Darbhanga",
            type: "High School",
            course: "PCM ",
            duration: "2015-2017"
        },
        juniorSchool: {
            name: "Rose Public School, Darbhanga",
            type: "Primary School",
            course: "General",
            duration: "2008 -2015"
        }
    },
    work: [
        
        {
            company: "Amazon Clone",
            link: "https://github.com/jhaaman1/clone-amazon-web",
            role: "ReactJS, Redux ,MaterialUI, Firebase",
            description: ["Created a very popular website know as Amazon.The Look and all the functionality of our website is very similar to the original website.From this website, users can order any material like book, electronics, fashion etc. across the world. This project completed within 5 days.  "],
            duration: "August 2022- August 2022",
            feedback: "",
            url:"https://clone-ed0c7.web.app/",
            propic:amazon
        },
        {
            company: "React Portfolio",
            link: "https://github.com/jhaaman1/my-portfolio",
            role: "ReactJS , MaterialUI",
            description:["A full detailed portfolio of my self where you can see all the details of my skills,projects,contact at one place."],
            duration: "August 2022- August 2022",
            feedback:"",
            url : "",
            propic:portfolio
        },
        {
            company: "Kindmeal Clone",
            link: "https://github.com/Devashishsaurabh/KindMeal.my-Clone",
            role: "HTML5, CSS3, JS (DOM),ES6",
            description: ["Clone of a very popular vegeterian website kindmeal.my from where you can learn making vegeterian things. Our Cloned website of Kindmeal contains almost every functionality that the original one have. This is a team project which we completed with in 5days "],
            duration: "May 2022 - May 2022",
            feedback: "",
            url:" https://lucent-narwhal-b8e29a.netlify.app/",
            propic:kindmeal
        },
        {
            company: "TomTop Clone",
            link: "https://github.com/jhaaman1/TomTop-clone",
            role: "HTML,CSS,JS,ES6",
            description: ["Clone of World's leading a reliable wholesale and retail online shop with Diverse & High Quality Products where you can buy Products at Best Price and Free Coupons!. A team project completed within 5 days with simple,well defined navigation."],
            duration: "june 2022 - June 2022",
            feedback: "",
            url:"https://scintillating-starship-f9b8be.netlify.app/",
            propic:tomtop
        },
        {
            company: "Snapdeal Clone",
            link: "https://github.com/Bhavesh2302/Snapdeal",
            role: "HTML,CSS,JS",
            description: ["Clone of India's leading shopping Website where you can do shopping of various fashion products. A team project completed within 5 days with simple,well defined navigation."],
            duration: "April 2022 - April 2022",
            feedback: "",
            url:"https://effortless-boba-8bd7ff.netlify.app",
            propic:snapdeal
        },
    
    ],
    accomplishments: [{
        award: "Deveotee Service Samman",
        description: "Voluntarily participated and serves more than 100000 devotees in Isckon Ratha Yatra 2019 and 2022,Kolkata",
        by: "ISCKON Kolkata",
        when: "JULY 2019 & JULY2022",
    }, {
        award: "Best Actor Award",
        description: "Won the Best Actor Award on acting on tyrany on LGBTQ community and also perform on many stages",
        by: "HIT_ONE_ACT_PLAY",
        when: "NOV 2017",
    }, {
        award: "Volunteer Seva",
        description: "Helping by becoming an volunteer in Food for Life campaign during heavy Amphan cyclone ",
        by: "ISCKON Haldia",
        when: "JULY 2020"
    }],
};