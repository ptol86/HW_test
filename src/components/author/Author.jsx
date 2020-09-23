import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authorDataSelector } from "../redux/author/author.selectors";
import * as authorActions from "../redux/author/author.actions";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
    },
  },
}));

const Author = ({getAuthorData, authorData}) => {
  const classes = useStyles();
  useEffect(() => {
    getAuthorData();
  }, [getAuthorData]);
  return (
    <>
    <div className={classes.root}>
      <Avatar style={{"width": "100px", "height": "100px"}} alt="Avatar" src={authorData.avatar_url}/>
    </div>
    <div>
      <div className="user__info">
        <Typography variant="h6" align="center" color="textSecondary">
          {authorData.name}
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          {authorData.bio}
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          {authorData.company}
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          {authorData.blog}
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          {authorData.location}
        </Typography>
      </div>
    </div>
    </>
  );
  
}
const mapState = state => {
  return {
    authorData: authorDataSelector(state),
  }
}

const mapDispatch = {
  getAuthorData: authorActions.getAuthorData,
}

export default connect(mapState, mapDispatch)(Author); 

