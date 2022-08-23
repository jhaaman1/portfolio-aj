import Header from "../Components/Header/Header";
import { Container, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Footer from "../Components/Footer/Footer.jsx";
import { makeStyles } from "@mui/styles";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Content from '../Lib/Content';
import AmanJaiswal from '../Assets/amanjha.png';

// Styles for Education page
const styles = makeStyles(({ breakpoints, palette }) => {
  return {
    textColored: {
      color: `${palette.primary.main} !important`,
    },
    root: {
      height: "100%",
      minHeight: "100vh",
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "7vh",
      [breakpoints.down("sm")]: {
        marginTop: "10vh",
      },
    },
    title: {
      fontWeight: "bolder !important",
      [breakpoints.down("sm")]: {
        fontSize: "1.8rem !important",
      },
    },
    hideSmall: {
      [breakpoints.down("sm")]: {
        display: "none !important"
      },
    },
    hiddenLinks: {
      color: `${palette.primary.main}`,
      "&:hover": {
        color: `${palette.primary.alt} !important`,
      },
    },
    photo: {
      width: "250px",
      height: "auto",
      borderRadius: "10px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      [breakpoints.up("md")]: {
        marginLeft: "30px",
      },
    },
    timeline: {
      [breakpoints.up("md")]: {
        marginRight: "30px",
      },
    }
  };
});

function Education() {
  const classes = styles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div id="education">
      {/* Education Page */}
      <Header />
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.root}
        >
          {/* Heading */}
          <Grid
            item
            xs={12}
          >
            <Typography variant="h3" className={classes.title}>
              Education
            </Typography>
          </Grid>
          {/* Grid */}
          <Grid
            item
            xs={12}
            sm={2}
            className={classes.hideSmall}
          >
            <img src={AmanJaiswal} alt="Aman jha" className={classes.photo} draggable="false" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
          >
            {/* Timeline */}
            <Timeline position={(small) ? "left" : "right"} className={classes.timeline}>
            <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.bc.type}
                  </Typography>
                  <Typography>{Content.education.bc.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.bc.name}
                  </Typography>
                  <Typography>{Content.education.bc.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.ug.type}
                  </Typography>
                  <Typography>{Content.education.ug.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.ug.name}
                  </Typography>
                  <Typography>{Content.education.ug.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.highSchool.type}
                  </Typography>
                  <Typography>{Content.education.highSchool.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.highSchool.name}
                  </Typography>
                  <Typography>{Content.education.highSchool.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.juniorSchool.type}
                  </Typography>
                  <Typography>{Content.education.juniorSchool.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.juniorSchool.name}
                  </Typography>
                  <Typography>{Content.education.juniorSchool.course}</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
         
        </Grid>
      </Container>
      
    </div>
  );
}

export default Education;