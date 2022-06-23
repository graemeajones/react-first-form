import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout.js';
import MyModules from './components/pages/MyModules.js';
import AddModule from './components/pages/AddModule.js';
import PageNotFound from './components/pages/404.js';
import './App.css';


export default function App() {

  let onSubmit = () => { }; // This is total abuse of React and shouldn't be done!
  let onCancel = () => { };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<MyModules handleSubmit={onSubmit} handleCancel={onCancel} />} />
          <Route path='/assessments'  element={<AddModule onSubmit={onSubmit} onCancel={onCancel} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
