import React from 'react';
import {Typography} from "@mui/material";

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">Sub title 1</Typography>
            <Typography variant="subtitle2">Sub title 2</Typography>

            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis distinctio eveniet expedita fugit harum impedit in libero quae quaerat, quas qui quia quo repudiandae rerum sequi suscipit tenetur voluptas.</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut libero minus molestias neque nostrum odit similique temporibus voluptate voluptatibus. Amet assumenda beatae consequatur consequuntur laborum optio, perferendis quod tempora?</Typography>

        </div>
    );
};
