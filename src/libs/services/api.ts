import axios from "axios";
const serverUrl = import.meta.env.VITE_API_URL;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const apiService = (urlParams?: string, limit?: number) => {
    const response = axios.get(`${serverUrl}/${urlParams}`, {
        headers: {
            Authorization: `token ${accessToken}`
        },
        params: {
            per_page: limit,
        }
    }).then((res) => res.data);

    return response;
}