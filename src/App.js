import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout.js';
import MyModules from './components/pages/MyModules.js';
import AddModule from './components/pages/AddModule.js';
import PageNotFound from './components/pages/404.js';
import './App.css';


export default function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<MyModules />} />
          <Route path='/addModule' element={<AddModule />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
