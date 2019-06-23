import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
 card: {
     height: '100%',
     display: 'flex',
     flexDirection: 'column',
   },
   cardMedia: {
     paddingTop: '56.25%', // 16:9
   },
   cardContent: {
     flexGrow: 1,
   },
  
});

const PostCard = (props) => {
  const {classes, card} = props
  const {    
    name,
    email
  } = card
  return (
     <Card className={classes.card}>     
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              { name }
            </Typography>
            <Typography>
             {email}
            </Typography>`
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View todo
            </Button>
            <Button size="small" color="primary">
              Edit todo
            </Button>
          </CardActions>
        </Card>
  );
};

export default withStyles(styles)(PostCard)