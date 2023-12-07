import { useParams } from "react-router-dom";
import styles from "./UserInfo.module.scss";
import { useQueries } from "@tanstack/react-query";
import { apiService } from "../../libs/services/api";
import { InfoCard, ListOfItems } from "../../components";

export const UserInfo = () => {
    const { username } = useParams();

    const [userInfo, userRepos] = useQueries({
        queries: [
            {
                queryKey: ['posts'],
                queryFn: () => apiService(`users/${username}`)

            },

            {
                queryKey: ['users'],
                queryFn: () => apiService(`users/${username}/repos`, 10)
            },
        ],
    });

    if (userInfo.isLoading || userRepos.isLoading) return (<h1>Loading....</h1>)
    if (userInfo.isError || userRepos.isError) return (<h1>Error loading data!!!</h1>)

    return (
        <article className={styles.userInfoContainer}>
            <section>
                <InfoCard
                    avatarUrl={userInfo.data?.avatar_url}
                    title={userInfo.data?.login}
                    linkUrl={`/star/${userInfo.data?.login}`}
                    textLink="Star" />
            </section>
            <section className={styles.userInfoRepositoriesList}>
                <ListOfItems
                    primaryText="Repository Name"
                    title="List of repositories"
                    data={userRepos.data}
                 />
            </section>
        </article>
    )
}