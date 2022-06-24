import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout.js';
import MyModules from './components/pages/MyModules.js';
import AddModule from './components/pages/AddModule.js';
import PageNotFound from './components/pages/404.js';
import './App.css';


export default function App() {

/* This is total abuse of React and shouldn't be done!
 * I'm doing this to pass onSubmit and onCancel to siblings
 * and enable <MyModules> to redefine these methods i.e. 
 * effectively one sibling passes actions to another! 
 * Don't do this at home, boys and girls!
 */

  let onSubmit = () => { }; // 
  let onCancel = () => { }; // 

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<MyModules handleSubmit={onSubmit} handleCancel={onCancel} />} />
          <Route path='/addModule' element={<AddModule onSubmit={onSubmit} onCancel={onCancel} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
