
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Simulador from './components/simulador';
import Historico from './components/historico';
import ApiDados from './components/apidados';

const App = () => {
  return (
    <Router>
      <div className="bg-black text-green-400 min-h-screen flex flex-col items-center justify-center">
        <nav className="mb-6">
          <a className="mx-4 hover:text-green-300" href="/">Home</a>
          <a className="mx-4 hover:text-green-300" href="/simulador">Simulador</a>
          <a className="mx-4 hover:text-green-300" href="/historico">Histórico</a>
          <a className="mx-4 hover:text-green-300" href="/api-dados">API Dados</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/api-dados" element={<ApiDados />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

