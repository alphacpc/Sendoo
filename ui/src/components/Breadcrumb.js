import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

const breadcrumb ={
  padding:'10px 0',
  margin:'20px 0'
}

export default function Breadcrumb() {
  return (
    <Breadcrumbs style={breadcrumb} aria-label="breadcrumb">
      
      <StyledBreadcrumb
        component="a"
        href="/"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
      />
      <StyledBreadcrumb component="a" href="/" label="Category"/>
      <Typography variant="p" style={{fontSize:14}} component="h6">Titre de l'article</Typography>
      
    </Breadcrumbs>
  );
}