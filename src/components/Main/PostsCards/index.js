import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postsOperations } from "../../../store/posts"; 
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import PostCard from './PostCard'

const styles = theme => ({
 cardGrid: {
     paddingTop: theme.spacing(8),
     paddingBottom: theme.spacing(8),
   },    
});


class PostsCards extends Component {
  componentDidMount() {
    const { getAllPosts } = this.props;
    console.log("GrandChild did mount.");
    getAllPosts();
  }

  render(){
    const {classes,
           isCardsLoading,
           cards} = this.props
    
    if (isCardsLoading) {
      return <p> Loading… </p>;
    }

    const cardsList =  cards.map(card => (
      <Grid item key={card.id} xs={12} sm={6} md={4}>
        <PostCard card = {card}/>
      </Grid>
    ))

    return (
     <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
           {cardsList}
          </Grid>
        </Container>
   );
  }  
};

PostsCards.propTypes = {
  cards: PropTypes.array
};

const mapStateToProps = state => {
  return {
    isCardsLoading: state.posts.isLoading,
    cards: state.posts.postsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(postsOperations.fetchPostsData())
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(withStyles(styles)(PostsCards));
