import  { useEffect, useState } from 'react';

const Historico = () => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('historico')) || [];
    setHistorico(dados);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Histórico de Simulações</h1>

      {historico.length === 0 ? (
        <p className="text-gray-400">Nenhum histórico encontrado.</p>
      ) : (
        <div className="w-11/12 max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
          <ul>
            {historico.map((item) => (
              <li key={item.id} className="mb-4 border-b border-gray-700 pb-4">
                <p>Velocidade: <span className="text-green-400">{item.velocidade} km/h</span></p>
                <p>Tempo: <span className="text-green-400">{item.tempo} horas</span></p>
                <p>Consumo: <span className="text-green-400">{item.consumo} kWh</span></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Historico;
