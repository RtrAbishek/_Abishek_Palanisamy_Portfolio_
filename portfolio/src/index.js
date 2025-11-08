import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './navbar.css';
import App from './App';
import Courses from './courses.js';
import AboutUs from './about_us.js';
import Contact from './contact.js';
import Navbar from './navbar.js';
import Rotaractabout from './rtr.js';
import Skill from './skills.js';
import Language from './languages.js';
import Footer from './footer.js';
import Aboutus from './about_us.js';
import Download from './download.js';
import RotaractAbout from './rtr.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar /><Download/>
  <br/><br/>
  <Aboutus/>
  <br/>
  <hr/>
  <Skill />
  <Courses/>
  <br/>
  <Language/>
  <br/>
  <Rotaractabout/>
    <App />
    <br/>
    <hr/>
    <Contact/>
    <hr/>
    <br/>
    <Footer/>
    <br/>
  </>
);
