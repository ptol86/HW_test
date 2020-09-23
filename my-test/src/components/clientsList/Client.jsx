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
            <h3>{`${firstName} ${lastName}`}</h3>
            <h4>{`Registered ${format(registrationDate, 'MM-dd-yyyy (hh-mm a)')}`}</h4>
        </ListItem>
    )
    
}

export default Client;
