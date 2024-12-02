const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-green-500">Energy EV Dashboard</h1>
        <p className="text-lg mt-4">
          Bem-vindo ao Energy EV Dashboard, uma plataforma interativa para estimar o consumo
          energético de veículos elétricos e explorar dados simulados.
        </p>
      </header>

      <section className="w-11/12 max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">Nosso Objetivo</h2>
        <p className="text-gray-300 leading-6">
          Nosso objetivo é fornecer uma ferramenta que permita usuários simularem o consumo
          energético com base em velocidade, tempo de uso e outros parâmetros, promovendo
          a conscientização sobre eficiência energética no uso de veículos elétricos.
        </p>
      </section>

      <section className="w-11/12 max-w-4xl bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">Recursos Disponíveis</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Simulador de Energia para análise personalizada.</li>
          <li>Histórico de Simulações com informações detalhadas.</li>
          <li>API integrada para dados adicionais fictícios.</li>
        </ul>
      </section>

      <section className="w-11/12 max-w-4xl bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">Por que Sustentabilidade?</h2>
        <p className="text-gray-300 leading-6">
          O futuro da mobilidade depende de soluções energéticas sustentáveis. Acreditamos
          que a tecnologia pode ajudar a tornar o transporte mais eficiente e menos poluente.
        </p>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Energy EV Dashboard. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
