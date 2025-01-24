import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/User/Login';
import Err from './components/404';
import Signup from './components/User/Signup';
import CreateProject from './components/Project/CreateProject';
import ExpandedPrct from './components/Project/ExpandedPrjct';
import UserProjects from './components/User/userProjects';
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
            <Route path="/User/userProjects" element={<UserProjects />}/>
            <Route path="/project/create" element={<CreateProject />}/>
            <Route path="/project/expanded" element={<ExpandedPrct />}/>
            <Route path="/*" element={<Err />}/>
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
