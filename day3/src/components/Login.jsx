import * as React from 'react'
import'../assets/css/Login.css';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
const Login = () => {

const [formdata, SetFormData]=React.useState({
            
    username:"",
    password:""

})
//const dispatch = useDispatch();

const handleonChange = (e) =>{
    const [name, value] =[e.target.name, e.target.value];
    SetFormData({
       ...formdata,
       [name]: value
    })  
    
}

const SubmitForm = (e) =>{
    e.preventDefault();
    console.log(formdata);
}

  return (  
<div class="section">
<div class="container">
<div class="row full-height justify-content-center">
<div class="col-12 text-center align-self-center py-5">
<div class="section pb-5 pt-5 pt-sm-2 text-center">
<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
<label for="reg-log"></label>
<div class="card-3d-wrap mx-auto">
<div class="card-3d-wrapper">
<div class="card-front">
<div class="center-wrap">
<div class="section text-center">
<h4 class="mb-4 pb-3">Log In</h4>
<div class="form-group">
<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
<i class="input-icon uil uil-at"></i>
</div>
<div class="form-group mt-2">
<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
<i class="input-icon uil uil-lock-alt"></i>
</div>
<a href="#" class="btn mt-4">submit</a>
<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
</div>
</div>
</div>
<div class="card-back">
<div class="center-wrap">
<div class="section text-center">
<h4 class="mb-4 pb-3">Sign Up</h4>
<div class="form-group">
<input type="text" name="logname" class="form-style" placeholder="Username" id="logname" autocomplete="off"/>
<i class="input-icon uil uil-user"></i>
</div>
<div class="form-group mt-2">
<input type="email" name="logemail" class="form-style" placeholder="Email" id="logemail" autocomplete="off"/>
<i class="input-icon uil uil-at"></i>
</div>
<div class="form-group mt-2">
<input type="password" name="logpass" class="form-style" placeholder="Password" id="logpass" autocomplete="off"/>
<i class="input-icon uil uil-lock-alt"></i>
</div>
<div class="form-group mt-2">
<input type="password" name="logpass" class="form-style" placeholder="Confirm Password" id="logpass" autocomplete="off"/>
<i class="input-icon uil uil-lock-alt"></i>
</div>
<a href="#" class="btn mt-4">submit</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
        
        
  )
}

export default Login