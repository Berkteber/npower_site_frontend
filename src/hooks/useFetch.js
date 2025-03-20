import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(endpoint, baseUrl = "https://npowersitecms-production.up.railway.app/api") {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const api = "https://npowersitecms-production.up.railway.app";

    useEffect(() => {
        //const API_TOKEN = process.env.REACT_APP_STRAPI_API_TOKEN; 
        const API_TOKEN = "9586f31333e1daa35a687913c5deb7ba6643b4b9a7007e1fbc6094084b049a42aa4ca7f78c659b2affaa75c1e4becfb50c4445973919b1c610b73c378dc24c1a2067a7c6101f73046bea7b901fc1821082ea49eebf433af0f63c288961de134fb9572d4ad2e23654c9b067166a2be32a86f55d5e3b97d383a04ca33966576458";
        
        console.log("🔍 API İsteği:", `${baseUrl}${endpoint}`);
        console.log("🛡️ Kullanılan Token:", API_TOKEN);

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
