import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { apiService } from "../../libs/services/api";
import { InfoCard, ListOfItems } from "../../components";
import Logo from "../../assets/GitHub-logo.png";
import styles from "./RepositoryInfo.module.scss";

export const RepositoryInfo = () => {
    const { login, name } = useParams();

    const [repoInfo, repoBranches] = useQueries({
        queries: [
            {
                queryKey: ['repo'],
                queryFn: () => apiService(`repos/${login}/${name}`)

            },

            {
                queryKey: ['repoBranches'],
                queryFn: () => apiService(`repos/${login}/${name}/branches`)
            },
        ],
    });

    if (repoInfo.isLoading || repoBranches.isLoading) return (<h1>Loading....</h1>);
    if (repoInfo.isError || repoBranches.isError) return (<h1>Error loading data!!!</h1>);

    return (
        <article className={styles.userInfoContainer}>
            <section className={styles.listOfBranches}>
                <ListOfItems primaryText="Branch Name" title="List of branches" data={repoBranches.data} />
            </section>
            <section>
                <InfoCard
                    avatarUrl={Logo}
                    title={repoInfo.data?.name}
                    linkUrl={`/${repoInfo.data?.owner.login}`}
                    textLink={repoInfo.data?.owner.login}
                />
            </section>
        </article>
    )
}