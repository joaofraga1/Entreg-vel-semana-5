import React from "react"
import './Login.css'

const Login = props => (


    <div class="login" >
       <div className="login-box"> 
           <div class="Content">    
             <div class="head-title">
                <h1>Login</h1>
                <br />
             </div>
             <form action="Get your Info.php">
                <label for="Name">Nome</label>
                
                <input type="name" name="name" id="name"/>
                <br />
                <label for="password">Senha</label>
                
                <input type="password" name="password" id="password"/>
             </form>
             
             <div className="botao"><a href="#">Login</a></div>
           </div>
        </div>
    </div>


)

export default Login