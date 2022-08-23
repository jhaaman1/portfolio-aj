import { Container, Grid, Typography } from "@mui/material";
import styles from "./SkillsStyles.jsx";
import Chip from '@mui/material/Chip';
import Content from '../../Lib/Content.jsx';
import { Link } from 'react-router-dom';
import { parse } from 'node-html-parser';
import SmoothScroll from "../../Utils/smoothScroll.js";
function SkillsSection() {
    const classes = styles();
    var stringToHTML = function (str) {
        // var parser = new DOMParser();
        // var doc = parser.parseFromString(str, 'text/html');
        // // console.log(doc.body.outt)
        // return doc.body.innerHTML;
        let root=parse(str);
       console.log(root.toString());
    };
    return (
        <>
            {/* Skills Section */}
            <Container maxWidth="lg" id="skills-section">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="h3" className={classes.title}>
                            My <span className={classes.textColored}>Skills</span>
                        </Typography>
                        <Typography variant="h5" className={classes.subtitle}>
                            Managerial
                        </Typography>
                        <Grid container spacing={1}>
                            {Content.managerialSkills.map((item, index) => {
                                return (<Grid item key={index}><Chip label={item} color="primary" size="medium" className={(index % 2 === 0) ? classes.ChipPrimary : classes.ChipSecondary} key={index} md={3} /></Grid>);
                            }
                            )}
                        </Grid>
                        <Typography variant="h5" className={classes.subtitle}>
                            Technical
                        </Typography>
                        <Grid container spacing={1}>
                            {Content.technicalSkills.map((item, index) => {
                                return (<Grid item key={index}><Chip label={item.name} color="primary" size="medium" className={(index % 2 === 0) ? classes.ChipPrimary : classes.ChipSecondary} key={index} md={3} /></Grid>);
                            }
                            )}
                        </Grid>
                        <Typography variant="h5" className={classes.subtitle}>
                            Tools
                        </Typography>
                        <Grid container spacing={1}>
                            {Content.marketingSkills.map((item, index) => {
                                return (<Grid item key={index}><Chip label={item} color="primary" size="medium" className={(index % 2 === 0) ? classes.ChipPrimary : classes.ChipSecondary} key={index} md={3} /></Grid>);
                            }
                            )}
                        </Grid>
                        <Typography variant="body1" className={classes.byLine}>
                            You can check out some of <a href="https://github.com/jhaaman1" className={classes.textColored} target="_blank" rel="noreferrer">my work</a> or <span style={{textDecoration:"underline"}} onClick={()=>SmoothScroll("#contact")} className={classes.textColored}>get in touch</span> with me.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default SkillsSection;

