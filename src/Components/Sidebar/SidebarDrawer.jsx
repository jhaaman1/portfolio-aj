import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate, useLocation } from "react-router-dom";
import SmoothScroll from "../../Utils/smoothScroll";
import { useState } from "react";
// Setting styles for SidebarDrawer
const styles = makeStyles(({ breakpoints, palette }) => {
    return {
        sideBarElement: {
            display: "flex",
            alignItems: "center",
            margin: 12,
            marginTop: 10,
            fontWeight: 500,
            width: 200,
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: 5,
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#F0F3F9",
            },
        },
        sideBarElementActive: {
            backgroundColor: palette.primary.main,
            color: "white",
            "&:hover": {
                backgroundColor: `${palette.primary.alt}`,
            },
        },
        sideBarElementInactive: {
            backgroundColor: "#F4F7FD",
            color: "black",
            "&:hover": {
                backgroundColor: "#DAE1EF",
            },
        },
        root: {
            left: 0,
            top: 64,
            background: "#FFFFFF",
            zIndex: 1,
        },
        mainLogo: {
            fontFamily: "Avenir Next",
            display: "flex",
            marginLeft: "auto",
            marginTop: "20px !important",
            marginBottom: "20px !important",
            alignSelf: "center",
            justifyContent: "center",
            color: "black",
            fontWeight: "bolder !important",
        },
        textColored: {
            color: `${palette.primary.main} !important`,
        },
    };
});

// SidebarElement component
export function SidebarElement(props) {

    
    const classes = styles();
    return (
        <div
            onClick={props.onClick}
            className={`${classes.sideBarElement} ${props.pathCheck ? classes.sideBarElementActive : classes.sideBarElementInactive
                }`}
            styles={props.styles}
        >
            <div>{props.children}</div>
        </div>
    );
}

// SidebarDrawer component
export function SidebarDrawer(props) {
    const [snavcolor,setsNavcolor]=useState(0)
    const classes = styles();
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.mainLogo}>Aman&nbsp;<span className={classes.textColored}>Jaiswal</span></Typography>
            <SidebarElement
                onClick={() =>{ navigate("/")
                SmoothScroll("#homep")
                setsNavcolor(1)
                }}
                pathCheck={snavcolor==1}
            >
                Home
            </SidebarElement>
            <SidebarElement
            onClick={()=>{
                SmoothScroll("#about-section")
                setsNavcolor(7)
            }}
            pathCheck={snavcolor==7}
            >
                About
            </SidebarElement>
            <SidebarElement
            onClick={()=>{
                SmoothScroll("#skills-section")
                setsNavcolor(2);
            }}
            pathCheck={snavcolor==2}
            >
                Skills
            </SidebarElement>
            <SidebarElement
                onClick={() => {
                SmoothScroll("#education")
                setsNavcolor(3)
            }}
                pathCheck={snavcolor==3}
            >
                Education
            </SidebarElement>
            <SidebarElement
                onClick={() =>{ 
                 SmoothScroll("#project");
                 setsNavcolor(4)
            }}
                pathCheck={snavcolor==4}
            >
                Projects
            </SidebarElement>
            <SidebarElement
                onClick={() => {
                   SmoothScroll("#accom");
                   setsNavcolor(5)
            }}
                pathCheck={snavcolor==5}
            >
                Accomplishments
            </SidebarElement>
            <SidebarElement
                onClick={() => {
                SmoothScroll("#contact")
                setsNavcolor(6)
            }}
                pathCheck={snavcolor==6}
            >
                Contact
            </SidebarElement>
        </div>
    );
}

export default SidebarDrawer;