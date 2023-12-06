import { useEffect, useState } from 'react';
import axios from "axios";

export function useFindBooks() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function listBooksuseFindBooks() {
        try {

            await new Promise(resolve => setTimeout(resolve, 1500));

            const result = await
                axios.get('http://localhost:3000/api/Books');
            setLoading(false);

            if (result.data) {
                setData(result.data);
            } else {
                setData([]);
            }
        } catch (err) {
            setError("Lamento, ocorreu um erro!");
            setData([]);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        setError(null);

        listBooksuseFindBooks();
    }, []);
    return { data, loading, error };
}
