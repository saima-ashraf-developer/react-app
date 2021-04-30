import React, { useState , useRef} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import { AppBar, FormGroup, FormHelperText, FormLabel, Grid, Tabs } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import {green} from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
      marginTop: '10rem'
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[600],
      },
    },
  }));
const Homepage=()=>{
const classes= useStyles();
const [value, setValue] = React.useState(0);



return (
    <div className={classes.root}>
    <AppBar position='static' color='default'>
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
        >
        
        </Tabs>
    </AppBar>
    </div>
        
    
    )
}

export default Homepage;