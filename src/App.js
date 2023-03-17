import './App.css';
import Navbar from './componants/header/navbar';
import Newnavbar from './componants/newnavbar/newnav';
import Content from './componants/textcomponant/textcomp';
// import {Routes,Route} from 'react-router-dom';
function App() {
  return (
   <>
    <Navbar/>
    <Newnavbar/>
    <Content/>

   </>
  );
}

export default App;
