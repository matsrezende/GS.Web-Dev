import { useEffect, useState } from 'react';

const ApiDados = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setDados(data.slice(0, 5)));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Dados da API</h1>
      <ul>
        {dados.map((item) => (
          <li key={item.id} className="mb-2">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDados;
