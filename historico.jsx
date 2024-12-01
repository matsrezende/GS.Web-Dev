import{ useEffect, useState } from 'react';

const Historico = () => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('historico')) || [];
    setHistorico(data);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Histórico de Simulações</h1>
      <ul>
        {historico.map((item, index) => (
          <li key={index} className="mb-2">
            Velocidade: {item.velocidade} km/h, Tempo: {item.tempo} horas, Consumo: {item.consumo} kWh
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;
