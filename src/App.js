import './App.scss';
import About from './components/About/index.js';
import Contact from './components/Contact/index.js';
import Home from './components/Home/index.js';
import Layout from './components/Layout/index.js';
import Skills from './components/Skills/index.js';
import Portfolio from './components/Portfolio/index.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
