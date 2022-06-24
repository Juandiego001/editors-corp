import { Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index/Index';
import InicioSesion from './pages/InicioSesion/InicioSesion';
import Registrarse from './pages/Registrarse/Registrarse';
import PerfilEditor from './pages/PerfilEditor/PerfilEditor';
import TiposEditores from './pages/TiposEditores/TiposEditores';
import MisionVision from './pages/MisionVision/MisionVision';
import Terminos from './pages/Terminos/Terminos';
import Contacto from './pages/Contacto/Contacto';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos';
import Trato from './pages/Trato/Trato';
import MetodosPagos from './pages/MetodosPagos/MetodosPagos';

function App() {
  return (
    <Routes>
        {/* Pages */}
        <Route path='/' element={<InicioSesion />} />

        <Route path='/index' element={<Index />} />

        <Route path='/mi-perfil/:miperfil' element={<PerfilEditor />} />
        
        <Route path='/registrarse' element={<Registrarse />} />

        <Route path='/tipos-editores' element={<TiposEditores />} />

        <Route path='/mision-vision' element={<MisionVision />} />

        <Route path='/terminos' element={<Terminos />} />

        <Route path='/contacto' element={<Contacto />} />

        <Route path='/quienes-somos' element={<QuienesSomos />} />

        <Route path='/trato' element={<Trato />}/>

        <Route path='/metodos-pagos' element={<MetodosPagos />} />
    </Routes>
  );
}

export default App;
