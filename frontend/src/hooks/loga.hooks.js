import {useEffect, useState} from "react";


export const useQuery = (queryFn) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = () => {
        setLoading(true);
        setIsError(false);
        setError(null);

        queryFn()
            .then(data => {
                setLoading(false);
                setData(data);
            })
            .catch(error => {
                setIsError(true);
                setError(error)
            })
    }

    useEffect(() => {
        console.log("Load todos")
        fetchData();
    }, []);

    return {loading, error, isError, data, refetch: fetchData}
}