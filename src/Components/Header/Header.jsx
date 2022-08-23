import {
    AppBar,
    Toolbar,
    useTheme,
    useMediaQuery,
    IconButton,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./HeaderStyles";
import { Link } from 'react-router-dom'
import SidebarDrawer from "../Sidebar/SidebarDrawer";
import Logo from '../../Assets/amanjha.png'
import MenuRounded from "@mui/icons-material/MenuRounded";
import { useLocation, useNavigate } from "react-router-dom";
import SmoothScroll from "../../Utils/smoothScroll";
// import './Header.css'
// NavBarElement component
export function NavBarElement(props) {

    
    const classes = styles();
    return (
        <div
            onClick={props.onClick}
            className={`${props.pathCheck ? classes.activeNav : classes.navLinks
                }`}
            style={props.style}
        >
            <div>{props.children}</div>
        </div>
    );
}

// Header component
function Header(props) {
    const [navcolor,setNavcolor]=useState(0);
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <AppBar className={classes.root} elevation={0}>
            <Toolbar className={classes.toolbar}>
                {/* Left Side */}
                <Link
                    to={`/`}
                    style={{ textDecoration: "none" }}
                >
                    <img src={Logo} variant="h5" className={classes.mainLogo}></img>
                </Link>
                {/* Right Side */}
                <div className={classes.cta}>
                    <>
                        <div
                            className={classes.navbarElementsContainer}
                        >
                            {!small ? (
                                <>
                                    <NavBarElement
                                        onClick={() => {navigate("/")
                                         SmoothScroll("#homep")
                                         setNavcolor(1)
                                        }}
                                        pathCheck={ navcolor==1}
                                    >
                                        Home
                                    </NavBarElement>
                                    <NavBarElement
                                    onClick={()=>{
                                        SmoothScroll("#about-section")
                                        setNavcolor(7)
                                    }}
                                    pathCheck={navcolor==7}
                                    >
                                    About
                                    </NavBarElement>
                                    <NavBarElement
                                      onClick={()=>{
                                          SmoothScroll("#skills-section")
                                          setNavcolor(6)
                                      }}
                                      pathCheck={navcolor==6}
                                    >
                                        Skills
                                    </NavBarElement>
                                    <NavBarElement
                                        onClick={() =>{
                                             SmoothScroll("#education")
                                             setNavcolor(2)  
                                             } }
                                        pathCheck={navcolor==2}
                                    >
                                        Education
                                    </NavBarElement>
                                    <NavBarElement
                                        onClick={() => {
                                            SmoothScroll("#project");
                                            setNavcolor(3)     
                                            }}
                                        pathCheck={navcolor==3}
                                    >
                                        Projects
                                    </NavBarElement>
                                    <NavBarElement
                                        onClick={() => {
                                                 SmoothScroll("#accom")
                                                 setNavcolor(4)   
                                                 }}
                                        pathCheck={navcolor==4}
                                    >
                                        Accomplishments
                                    </NavBarElement>
                                    <NavBarElement
                                        onClick={() => {SmoothScroll("#contact")
                                             setNavcolor(5)  
                                          }}
                                        pathCheck={navcolor==5}
                                    >
                                        Contact
                                    </NavBarElement>
                                </>
                            ) :
                                (
                                    <div>
                                        <IconButton
                                            edge="end"
                                            onClick={() => {
                                                setDrawerOpen(true);
                                            }}
                                            style={{ color: "black", borderColor: "black", marginLeft: "5px" }}
                                        >
                                            <MenuRounded />
                                        </IconButton>
                                    </div>
                                )}
                        </div>
                    </>
                </div>
            </Toolbar>
            {/* Swipeable Drawer */}
            <SwipeableDrawer
                anchor="left"
                variant="temporary"
                open={drawerOpen}
                onOpen={() => {
                    setDrawerOpen(true);
                }}
                onClose={() => {
                    setDrawerOpen(false);
                }}
            >
                <SidebarDrawer />
            </SwipeableDrawer>
        </AppBar>
    );
}

export default Header;