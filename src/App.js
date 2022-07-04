import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Pages/Header';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
function App() {
  return (
    <Routes>
      <Route exact path='/' element ={<Home/>}/>
      <Route exact path='/movie' element ={<Header/>}/>
      <Route path="/details/:id" element={<Detail/>}/>
    </Routes>
  );
}

export default App;
