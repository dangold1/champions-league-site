import { useState, useEffect } from "react";
import axios from 'axios';

const useRequest = (params, requestOptions = {}) => {
    const { defaultData } = requestOptions;

    const [data, setData] = useState(defaultData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(params);
    }, []);

    // Fetch and set data function
    const fetchData = async (newParams) => {
        try {
            const { url, reqParams } = newParams;
            const { data } = await axios.get(url, reqParams);
            setData(data);
            setIsLoading(false);

        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };

    // Return data and status.
    return { data, isLoading, error };
};

export default useRequest;
