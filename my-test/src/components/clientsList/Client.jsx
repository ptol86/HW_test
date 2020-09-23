import React from "react";
import { format } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Client = ({firstName, lastName, registrationDate}) => {
    const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
        maxWidth: 360,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
      },
    }));
    const classes = useStyles();
    return (
        <ListItem className={classes.root} >
            <ListItemIcon style={{minWidth: "24px", marginBottom: "30px"}}>
              <PermIdentityIcon />
            </ListItemIcon>
            <span>{`${firstName} ${lastName}`}</span>
            <p >{`Registered ${format(registrationDate, 'MM-dd-yyyy (hh-mm a)')}`}</p>
        </ListItem>
    )
    
}

export default Client;
