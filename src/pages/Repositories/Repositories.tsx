import { useQuery } from "@tanstack/react-query";
import { apiService } from "../../libs/services/api";
import { useParams } from "react-router-dom";
import styles from "./Repositories.module.scss";
import { ListOfItems } from "../../components";
import { useState } from "react";
import { Pagination } from "@mui/material";

const LIMIT = 10;

export const Repositories = () => {
    const { username } = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['star'],
        queryFn: () => apiService(`users/${username}/starred`)
    });

    const totalPages = Math.ceil(data?.length / LIMIT);
    const startIndex = (currentPage - 1) * LIMIT;
    const endIndex = startIndex + LIMIT;
    const currentItems = data && data.length > 0 && data.slice(startIndex, endIndex);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
    };

    if (isLoading) return (<h1>Loading....</h1>);
    if (isError) return (<h1>Error loading data!!!</h1>);

    return (
        <article>
            <h2>Repositories</h2>
            <section className={styles.userInfoRepositoriesList}>
                <ListOfItems title="Star" data={currentItems} primaryText="Repository Name" />
                <Pagination onChange={handlePageChange} count={totalPages} page={currentPage} color="primary" />
            </section>
        </article>
    )
}