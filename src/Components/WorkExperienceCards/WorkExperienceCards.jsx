import React from 'react';
import styles from "./WorkExperienceCardsStyles.jsx";
import { Typography, Button, Card, CardContent, CardActions, Grid } from "@mui/material";
import "./Work.css"
// Work Experience Card



const WorkExperienceCards = (props) => {
    
    const classes = styles();
    return (
        <>
            <Grid
                item
                className={classes.grid}
                xs={12}
                md={6}
            >
                <Card className={classes.card}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="primary" >
                            <a href={props.work.url} target='_blank' className="txt">{props.work.company}</a>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div" color="secondary">
                            {props.work.role}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                            {props.work.duration}
                        </Typography>
                        <div style={{backgroundImage:`url(${props.work.propic})`,height:"300px",backgroundSize:"cover" }} ></div>
                        {props.work.description.map((line, index) => {
                            return (
                                <Typography  variant="body1" color="text.primary" className="text-xl" key={index}>
                                    {line}
                                </Typography>
                            );
                        })}
                    </CardContent>
                    <CardActions>
                        
                        <Button size="small" color="secondary" variant="outlined" href={props.work.link} target="_blank" rel="noreferrer" className={classes.websiteBtn} download>
                            Source Code
                        </Button>
                        <Button size="small" color="secondary" variant="outlined" href={props.work.url}  >Deployed Link</Button>
                        {props.work.feedback &&
                            <Button size="small" color="primary" variant="outlined" href={props.work.feedback} target="_blank" rel="noreferrer" download className={classes.feedback}>
                                Employer Feedback
                            </Button>
                            
                        }
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default WorkExperienceCards;