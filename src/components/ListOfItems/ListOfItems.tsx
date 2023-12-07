import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Typography } from "@mui/material";
import { stringAvatar } from "../../libs/utils/stringAvatar";
import { FC } from "react";
import { Link } from "react-router-dom";

type TOwner = {
    login: string;
};

type TData = {
    id?: number;
    name: string;
    owner?: TOwner;

};

interface ListOfItemsProps {
    title: string;
    data: TData[];
    primaryText: string;
}

export const ListOfItems: FC<ListOfItemsProps> = (props): JSX.Element => {
    const { title, data, primaryText } = props;

    return (
        <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    {title}
                </ListSubheader>
            }>
            {data && data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id || item.name}>
                        <Link to={item.owner ? `/repository/${item.owner.login}/${item.name}` : ""}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar
                                        style={{ textTransform: "uppercase" }}
                                        {...stringAvatar(item.name)}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={primaryText}
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {item.name}
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                        </Link>
                        <Divider variant="inset" component="li" />
                    </div>
                ))

            ) : <p>List is empty</p>}
        </List>
    )

}