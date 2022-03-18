import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before":{
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after":{
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before":{
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.265rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "left",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "tomato tomato transparent transparent",
            }
        }
    },
    timeLineItems: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before":{
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.265rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "tomato tomato transparent transparent",
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.237rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before":{
            display: "none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n):before":{
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center">
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItem} >
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Full Stack Developer with PHP
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "#fff"}}>
                        Gai Technology (Himachal Pradesh)
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Note :- Learnt PHP and Mysql to create some basic projects, <br />
                            Worked on WordPress theme customization, <br />
                            Worked on ve blog WordPress project and change some theme designs,<br />
                            integrated Google Form/Live Chat Support.
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItems}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Front End Developer
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "#fff"}}>
                        Decoders (Delhi)
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Note :- Worked on multiple projects E-Commerce/Company Websites/API integration shipping
and cart page, registration/profile/add-edit address forms with Google and Map API
covering all the possible scenarios. Abstracted login/social-login/logout/login-verifying logic in internal libraries by building
 Extended application for an entire new tenant by creating feature toggle and updating
the existing components to support feature configuration.
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Navgurukul Foundation
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "#fff"}}>
                        MentorShip / Procurement Manager
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Note :-Mentorship in front end development, Communication and collaboration with different salespersons ,Learn conveyancing power and handle misbehaviour people.
                    </Typography>
                </Box>

                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2021
                    </Typography>
                </Box>
                
            </Box>
        </>
    )
}

export default Resume
