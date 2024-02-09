

import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import axios from "axios";
import Footer from './components/Footer/Footer';


axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
function App() {
  console.log(process.env.REACT_APP_API_URL)
  return (

    <div className="App">
      <NavBar/>
      <section id="home"><Home/></section>
      <section id="about"><About/></section>
      <section id='projects'><Projects/></section>
      <section id='contact'><Contact/></section>
      <Footer/>
    </div>
  );
}

export default App;
