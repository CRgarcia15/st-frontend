import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Err from './components/404';
import Signup from './components/Signup';
import CreateProject from './components/CreateProject';
import {Route, Routes} from "react-router-dom"



function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/projects/create" element={<CreateProject />}/>
          <Route path="/*" element={<Err />}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
