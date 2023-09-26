import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import './assets/css/Login.css'
import Dashboard from './components/Dashboard';
import './assets/css/DashBoard.css';
import{BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Signup from './components/Signup';
import './assets/css/Signup.css';
import './assets/css/PrivacyPolicy.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import Menu from './components/Menu';
import './assets/css/Menu.css';


export default function RouteApp(){
    return(
      <div className='App'> 

        <Router>
              <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dash" element={<Dashboard/>}></Route>
                <Route path="/sign" element={<Signup/>}></Route>
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
                <Route path="/Menu" element={<Menu/>}></Route>
                
              </Routes>
x
        </Router>
    
       
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);