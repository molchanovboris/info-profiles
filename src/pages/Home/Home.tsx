import { Button, Card, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export const Home = () => {
    const [value, setValue] = useState("")

    const valueChangeHandle = (event: React.SyntheticEvent) => {
        setValue((event.target as HTMLInputElement).value);
    }

    return (
        <div>
            <h2 className={styles.homeTitle}>
                Home page!
            </h2>
            <Card sx={{ padding: 2 }}>
                <OutlinedInput onChange={valueChangeHandle} fullWidth placeholder="Search user" id="outlined-size-normal" />
                <Link to={`/${value}`}>
                    <Button style={{marginTop: '30px'}} variant="contained">Search</Button>
                </Link>
            </Card>
        </div>
    )
}