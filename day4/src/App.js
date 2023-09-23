import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import './assets/css/Login.css'
import Dashboard from './components/Dashboard';
import './assets/css/DashBoard.css';
import{BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Signup from './components/Signup';
import './assets/css/Signup.css';



export default function RouteApp(){
    return(
      <div className='App'> 

        <Router>
              <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dash" element={<Dashboard/>}></Route>
                <Route path="/sign" element={<Signup/>}></Route>
                
              </Routes>

        </Router>
    
       
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);