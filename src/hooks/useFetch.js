import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(endpoint, baseUrl = "https://npowersitecms-production.up.railway.app/api") {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const api = "https://npowersitecms-production.up.railway.app";

    // Strapi API Token (Güvenli bir şekilde .env dosyasına koymalısın)
    const API_TOKEN = process.env.REACT_APP_STRAPI_API_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}${endpoint}`, {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`,
                    },
                });
                setData(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, baseUrl]);

    return { data, loading, error, api };
}

export default useFetch;
