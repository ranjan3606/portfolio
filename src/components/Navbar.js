import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    makeStyles,
    ListItemIcon
} from '@material-ui/core'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import avatar from '../avatar.png'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#000',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    ListItem: {
        color: '#fff'
    }
}));

const menuIcons = [
    {
        listIcon: <Home />,
        list: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        list: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        list: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail />,
        list: "Contacts",
        listPath: "/contact"
    },

]


const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open })
    })

    const classes = useStyles()

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Russle app" />
            <Divider />
            <List>
                {menuIcons.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.ListItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.ListItem} primary={lsItem.list} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>

            <Box component="nav">
                <AppBar position="static" style={{ background: '#000' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{ background: '#fff' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: '#fff' }}>Portfolio</Typography>
                        <MobileRightMenuSlider
                            open={state.right}
                            onClose={toggleSlider("right, false")}
                            anchor="right"
                        >
                            {sideList('right')}
                            <Footer />
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
