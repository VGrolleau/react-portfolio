import './App.scss';
import About from './components/About/index.js';
import Contact from './components/Contact/index.js';
import Home from './components/Home/index.js';
import Layout from './components/Layout/index.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
