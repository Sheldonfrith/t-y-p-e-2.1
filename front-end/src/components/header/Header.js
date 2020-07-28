import React from 'react';
import { Typography } from '@material-ui/core';
import { handleError } from './../../global/utils';

export default function Header(props) {
    return (
        <div>
        <Typography>Sheldon Frith's Full Stack App Template</Typography>
        <Typography>Redux example:{props.children}</Typography>
        </div>
    );
}