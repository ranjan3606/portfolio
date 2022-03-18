import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typed from 'react-typed'
import avatar from '../avatar.png'

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1)
    },
    title: {
        color: '#fff',
        fontSize: '4rem',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: '2rem',
        color: '#fff',
        marginBottom: '3rem'
    },
    typeContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typeContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt='right' />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Ranjan Kumar"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Front-End Developer | Reactjs"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Typography>
            <Typography variant="h5" align="left" style={{ color: "#fff" }}>
                Front end developer with years of 1+ experience hands-on in designing and responsive web
                development and familiar with CSS frameworks/firebase, with extensive knowledge of UI.
            </Typography>
            <hr />
            <Typography variant="h6" align="left" style={{ color: "#fff" }}>
                <Typed strings={["Relevant Skills"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /><br />
                Languages : TypeScript | Python <br />
                Frameworks/Libraries: Reactjs | Vuejs <br />
                Designing: HTML5 | CSS3 | Bootstrap | Animation, Web-Components | API integration<br />
                Platforms and Tools : Windows | Linux CLI | Git | Web Hosting | Firebase
            </Typography>
        </Box>
    )
}

export default Header
