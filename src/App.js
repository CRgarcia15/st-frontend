import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Err from './components/404';
import Signup from './components/Signup';
import {Route, Routes} from "react-router-dom"
import UserHome from './components/UserHome';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/UserHome" element={<UserHome />}/>
          <Route path="/404" element={<Err />}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
