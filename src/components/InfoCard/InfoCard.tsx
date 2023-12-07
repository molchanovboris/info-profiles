import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"

interface InfoCardProps {
    title: string;
    avatarUrl: string;
    linkUrl: string;
    textLink: string;
}

export const InfoCard: FC<InfoCardProps> = (props): JSX.Element => {
    const {
        title,
        avatarUrl,
        linkUrl,
        textLink
    } = props;

    return (
        <Card sx={{ width: 300 }}>
            <CardMedia
                sx={{ height: 250, backgroundColor: "white" }}
                image={avatarUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={linkUrl}>
                    <Button size="small">{textLink}</Button>
                </Link>
            </CardActions>
        </Card>
    )
}