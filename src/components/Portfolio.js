import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
    Grid, 
    Box, 
    CardActionArea, 
    Card, 
    CardMedia, 
    Typography,
    CardContent, 
    Button,
    CardActions,
    Container
} from '@material-ui/core'
import Navbar from './Navbar'
import project1 from '../images/ecommerce.png'
import project2 from '../images/aliean.png'

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
    },
    cardContainer: {
        maxWidth: 400,
        margin: "3rem",
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Container>
            <Grid container justify="center" alignItems="center">
                {/* {project1} */}
                <Grid item sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    E-Commerce
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecandary" component="p">
                                    The Project develop on reactjs, used function component, hooks, bootstrap, ecommerce API integration
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://621b0287d9ab74b64d50e2fb--sharp-fermi-181c2b.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Voice New Finder
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecandary" component="p">
                                 Voice AI News App using Reactjs / Hooks, Material Ui, Api integration, 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://suspicious-bell-d330b6.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Portfolio
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecandary" component="p">
                                    PortFolio used with reactjs, material ui, typed module,
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                <a href="https://nifty-colden-784c7a.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}

export default Portfolio
