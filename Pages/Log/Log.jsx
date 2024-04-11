import React from "react";
import './Log.css'
import Header from "../../components/Header/Header";
function Log (){
    return(
        <div>
            <Header/>
    <div className="Container1"> 
<div className="limiter">
<div className="container-login100">
<div className="wrap-login100">
<form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
<span className="login100-form-title" >
<h1 id="nav">Se connecter</h1>
</span>

<div className="wrap-input100 validate-input m-b-16" data-validate="Email:">
<input className="input100" type="mail" name="username" id="in1" placeholder="Email"/>
<span className="focus-input100"></span>
</div>
<div className="wrap-input100 validate-input" data-validate="Please enter password">
<input className="input100" type="password" name="pass" id="in2"placeholder="Mot de passe"/>
<span className="focus-input100"></span>
</div>
<div className="text-right p-t-13 p-b-23">
<a href="#" className="txt2">
 Mot de passe oublié?
</a>
</div>
<div className="container-login100-form-btn">
<button className="btn btn-outline-success" id="btn">
Se connecter
</button>
</div>
<div className="flex-col-c p-t-170 p-b-40" id="mdp">
<span className="txt1 p-b-9">
Pas de compte?
</span>
<a href="#" className="txt3">
S'inscrire maintenant
</a>
</div>
</form>
</div>
</div>
</div></div></div>
)
}
export default Log;
    