import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./AboutStyles.jsx";
import { useEffect } from "react";

function AboutSection() {
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    return (
        <>
            {/* About Section */}
            <Container maxWidth="lg" id="about-section">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="h3" className={classes.title}>
                            About <span className={classes.textColored}>Me</span>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            Originally from Darbhanga in India, Recently I am pursuing my full-stack web development course at <a href="https://www.masaischool.com/" target="_blank" rel="noreferrer" className={classes.hiddenLinks}>Masai School</a>. During this course, I worked on many projects.I also got the opportunity to lead my group several time.I think I am a nice team player.I enjoy working in team and executing the task well.I am passionate about solving real-world problems in the field of web development. 
             
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            After completing my graduation and searching for my Right carrer path i decided to make my carrer as a web developer. In the initial days it was not easy to learn these things but as i spend more and more time in this i started enjoying these things.Now i can proudly say one thing that i am a passionate developer who is always ready to work on any of the project.I am a enthusiastic, hard working and a self-motivated
                            person who is always looking forward to learn new
                            skills. A complete Team Player who is excited to be at
                            the deployment phase of his new career as a full-stack
                            Web developer.      
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            In my free time, I love to listen songs, kirtan, go for long drives.
                        </Typography>
                    </Grid>
                </Grid>
                {!small && (<span className="scroll-btn">
                    <a href="#skills-section" onClick={e => {
                        let whereTo = document.getElementById("skills-section");
                        e.preventDefault();
                        whereTo && whereTo.scrollIntoView({ behavior: "smooth", block: "start" });
                    }} style={{
                        display: "flex", justifyContent: "center",
                    }}
                    >
                        <span className="mouse">
                            <span>
                            </span>
                        </span>
                    </a>
                </span>
                )}
            </Container>
        </>
    );
}

export default AboutSection;

