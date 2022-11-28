import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Err from './components/404';
import Signup from './components/Signup';
import CreateProject from './components/CreateProject';
import ExpandedPrct from './components/ExpandedPrjct';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom"



function App() {
  return (
      <div className="App bg-gray-100 h-screen">
        <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/projects/create" element={<CreateProject />}/>
            <Route path="/projects/expanded" element={<ExpandedPrct />}/>
            <Route path="/*" element={<Err />}/>
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
