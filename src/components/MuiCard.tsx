import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";
export const MuiCard = () => {
    return (
    <Box width="300px">
        <Card>
            <CardMedia
                component="img"
                height="150px"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
            >

            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">React

                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
Share
                </Button>
                <Button size="small">
                    Learn more
                </Button>
            </CardActions>
        </Card>
    </Box>
    );
};
