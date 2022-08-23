import { Container, Grid, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import styles from "./HeadStyles.jsx";
import AmanJaiswal from "../../Assets/amanjha.png";
import Shape from '../../Assets/shape.png';
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";
import Resume from "../../Assets/aman_jaiswal_resume.pdf";
import './HeadSection.css'
import SmoothScroll from "../../Utils/smoothScroll.js";
function HeadSection() {
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
            {/* Head Section */}
            <Container maxWidth="lg" id="head-section">
                <Grid
                    container
                    className={classes.root}
                >
                    {small && (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            style={{ textAlign: "center" }}
                        >   
               
                             
                        </Grid>
                    )}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        style={{ minHeight: "200px" }}
                    >
                        <Typography variant="h3" className={classes.welcomeTitle}>Hey!</Typography>
                        <Typography variant="h3" className={classes.title}>
                            I'm <span className={classes.textColored}>Aman.</span>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            <Typewriter
                                options={{
                                    strings: ['I am a full stack web developer.', 'I write code and develop projects.', 'I  can convert ideas into codes .', 'I enjoy working in team.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Typography>
                        <Button variant="contained" onClick={()=>SmoothScroll("#contact")} className={classes.themeBtn}>Get In Touch</Button>
                        <Button variant="outlined" href={"https://drive.google.com/file/d/1GDqiMvoE-HmMXToYGIxhbuoDlGqwRRqu/view"} target="_blank" className={classes.altBtn}>View Resume</Button>
                    </Grid>
                    {!small && (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            style={{ textAlign: "center" }}
                        >
                             <div className="images"> 
            <img src={Shape} className="shape"/>
            <img src={AmanJaiswal} className="girl"/>
            </div>
                            
                        </Grid>
                    )}
                </Grid>
                {!small && (<span className="scroll-btn">
                    <a href="#about-section" onClick={e => {
                        let whereTo = document.getElementById("about-section");
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

export default HeadSection;

