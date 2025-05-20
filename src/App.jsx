import './App.css';
import { Footter } from './components/footer/footter.jsx';
import { Header } from './components/header/header.jsx';
import { Main } from './components/main/main.jsx';
import { Aside } from './components/aside/aside.jsx';

export function App() {
  return (
    <>
      <section className='head'><Header/></section>
      
      <section className='main'><Main/></section>
      
      <section className='aside'><Aside/></section>
      
      <section className='footer'><Footter/></section>
   </>
);
}