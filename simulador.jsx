import { useState } from 'react';

const Simulador = () => {
  const [velocidade, setVelocidade] = useState('');
  const [tempo, setTempo] = useState('');
  const [consumo, setConsumo] = useState(null);

  const calcularConsumo = () => {
    const consumoCalculado = (velocidade * tempo * 0.2).toFixed(2); // Simulação simples
    setConsumo(consumoCalculado);
    salvarNoHistorico(consumoCalculado);
  };

  const salvarNoHistorico = (valor) => {
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.push({ velocidade, tempo, consumo: valor });
    localStorage.setItem('historico', JSON.stringify(historico));
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Simulador de Consumo</h1>
      <input
        type="number"
        placeholder="Velocidade (km/h)"
        className="mb-4 px-4 py-2 rounded"
        value={velocidade}
        onChange={(e) => setVelocidade(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tempo (horas)"
        className="mb-4 px-4 py-2 rounded"
        value={tempo}
        onChange={(e) => setTempo(e.target.value)}
      />
      <button
        onClick={calcularConsumo}
        className="bg-green-500 px-6 py-2 rounded hover:bg-green-700"
      >
        Calcular Consumo
      </button>

      {consumo && (
        <p className="mt-4 text-lg">
          Consumo estimado: <strong>{consumo} kWh</strong>
        </p>
      )}
    </div>
  );
};

export default Simulador;
