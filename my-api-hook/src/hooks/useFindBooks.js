import { useEffect, useState } from 'react';
import axios from "axios";
// O hook é apenas uma simples função que podemos exportar
export function useFindBooks() {
    // Definimos os estados necessários para o nosso hook, isso inclui:
    // usuários (data), estado de carregamento (loading) e erros (error)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // Busca os usuários da API JSONPlaceholder
    async function listBooksuseFindBooks() {
        try {

            await new Promise(resolve => setTimeout(resolve, 3000));

            const result = await
                axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
            // Atualiza o estado de 'loading'
            setLoading(false);
            // Atualiza o estado de 'data' com o resultado da API
            if (result.data) {
                setData(result.data);
            } else {
                setData([]);
            }
        } catch (err) {
            // Atualiza o estado de 'error', 'data' e de 'loading'
            setError("Lamento, ocorreu um erro!");
            setData([]);
            setLoading(false);
        }
    };
    // A cada renderização do componente, o hook useEffect
    // executa a função listBooksuseFindBooks().
    useEffect(() => {
        // Primeiro, definimos os estados de loading e error
        setLoading(true);
        setError(null);
        // executa a função listBooksuseFindBooks().
        listBooksuseFindBooks();
    }, []);
    return { data, loading, error };
}
