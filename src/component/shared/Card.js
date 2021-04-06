import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin:5,
    },
    media: {
        height: 200,
    },
    typography:{
        color:'#4c003f'
    },
    buttonLabel: {
        color: '#4c003f'
    }
});

const MediaCard = (props) => {
    const { width = '150px', classes = {}, children, variant = 'secondary', className = '', ...rest } = props
    const cardClasses = useStyles();

    return (
        <Card className={cardClasses.root}>
            <CardActionArea>
                <CardMedia
                    className={cardClasses.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" className={cardClasses.typography} component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" className={cardClasses.typography} color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    variant={variant}
                    classes={{
                        label: cardClasses.buttonLabel,
                        ...classes
                    }}
                    color="#4c003f"
                >
                    Add to Bag
                </Button>
                <Button
                    size="small"
                    variant={variant}
                    classes={{
                        label: cardClasses.buttonLabel,
                        ...classes
                    }}
                    color="#4c003f"
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
export default MediaCard