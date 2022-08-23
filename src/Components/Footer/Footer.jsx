import { Container, Grid, Typography } from "@mui/material";
import styles from "./FooterStyles.jsx";

function Footer() {
    const classes = styles();

    return (
        <>
            {/* Footer Section */}
            <Container maxWidth="lg" id="footer">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="body1" className={classes.attribution}>
                            Made With 💓 <a href="https://www.linkedin.com/in/aman-jha-729b521a9/" className={classes.textColored} target="_blank" rel="noreferrer">Aman Jha</a>.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Footer;

