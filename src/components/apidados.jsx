import { useEffect, useState } from 'react';

const ApiDados = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') // exemplo de API ficticio
      .then((response) => response.json())
      .then((data) => setDados(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Dados Complementares</h1>

      <div className="w-11/12 max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {dados.map((item) => (
          <div key={item.id} className="mb-6 border-b border-gray-700 pb-4">
            <h2 className="text-xl font-semibold text-green-400">{item.title}</h2>
            <p className="text-gray-300">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiDados;
