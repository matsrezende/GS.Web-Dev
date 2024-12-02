import { useState } from 'react';

const Simulador = () => {
  const [velocidade, setVelocidade] = useState('');
  const [tempo, setTempo] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularConsumo = () => {
    if (velocidade && tempo) {
      const consumo = (velocidade * tempo * 0.2).toFixed(2); // ficticiao
      setResultado(consumo);
      salvarNoHistorico(velocidade, tempo, consumo);
    }
  };

  const salvarNoHistorico = (velocidade, tempo, consumo) => {
    const historicoAtual = JSON.parse(localStorage.getItem('historico')) || [];
    const novoRegistro = {
      id: Date.now(),
      velocidade,
      tempo,
      consumo,
    };
    localStorage.setItem('historico', JSON.stringify([...historicoAtual, novoRegistro]));
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Simulador de Consumo</h1>

      <div className="w-11/12 max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block mb-4">
          <span className="text-green-400">Velocidade (km/h):</span>
          <input
            type="number"
            value={velocidade}
            onChange={(e) => setVelocidade(e.target.value)}
            className="w-full mt-2 p-2 bg-gray-900 text-white rounded"
          />
        </label>

        <label className="block mb-4">
          <span className="text-green-400">Tempo de Uso (horas):</span>
          <input
            type="number"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
            className="w-full mt-2 p-2 bg-gray-900 text-white rounded"
          />
        </label>

        <button
          onClick={calcularConsumo}
          className="w-full bg-green-500 hover:bg-green-600 text-black py-2 mt-4 rounded"
        >
          Calcular Consumo
        </button>

        {resultado && (
          <div className="mt-6 text-center">
            <p className="text-lg">Consumo Estimado:</p>
            <p className="text-2xl font-semibold text-green-400">{resultado} kWh</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulador;

