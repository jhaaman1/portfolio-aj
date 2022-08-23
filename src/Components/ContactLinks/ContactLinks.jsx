import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MediumIcon from '@mui/icons-material/Create';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import styles from "./ContactLinksStyles";
import { Typography, Button } from "@mui/material";
import Resume from "../../Assets/aman_jaiswal_resume.pdf";

const ContactLinks = () => {
    const classes = styles();
    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Primary
            </Typography>
            <a href="mailto:jhaaman061@gmail.com">
                <EmailIcon fontSize="large" className={classes.email} />
            </a>
            <a href="tel:+919608287233">
                <PhoneInTalkIcon fontSize="large" className={classes.phone} />
            </a>
            <Typography variant="h5" className={classes.title} mt={2}>
                Social
            </Typography>
            <a href="https://github.com/jhaaman1" target='_blank'>
                <GitHubIcon fontSize="large" className={classes.github} />
            </a>
            <a href="https://www.linkedin.com/in/aman-jha-729b521a9/" target='_blank'>
                <LinkedInIcon fontSize="large" className={classes.linkedin} />
            </a>
            {/* <a href="https://twitter.com/aman_jaiswal_" target='_blank'>
                <TwitterIcon fontSize="large" className={classes.twitter} />
            </a> */}
            <a href="https://medium.com/@jhaaman061" target='_blank'>
                <MediumIcon fontSize="large" className={classes.medium} />
            </a>
           
            {/* <a href="https://www.instagram.com/aman_jaiswal123/" target='_blank'>
                <InstagramIcon fontSize="large" className={classes.instagram} />
            </a> */}
            <Typography variant="h5" className={classes.title} mt={2} mb={2}>
                Resume
            </Typography>
            <Button variant="contained" href={"https://drive.google.com/file/d/1d_YOZTEd0wCT09eO3seT0HDBL36H17zx/view?usp=sharing"} target="_blank" className={classes.themeBtn} download>View Resume</Button>
        </>
    );
};

export default ContactLinks;