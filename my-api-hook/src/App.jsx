import React from 'react';
import { useFindBooks } from './hooks/useFindBooks';
function App() {
  // use seu próprio hook para carregar os dados da API
  const { data, loading, error } = useFindBooks()
  if (loading) return <div><img id='Load' src="https://media.tenor.com/6gHLhmwO87sAAAAj/gg.gif" alt="" /></div>
  if (error) return <div>{error}</div>
  return (
    <div>
      <h3>Consulta à API</h3>
      <ul>
        {
          data &&
          data.length > 0 &&
          data.map(item => (
            <li key={item.id}>
              {item.title}: {item.description}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default App;
