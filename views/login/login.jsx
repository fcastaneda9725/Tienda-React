import React from 'react';
import { auth } from './firebase/auth.jsx';

class Login extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div className="main__body">
        <div className="container">

          <div className="login__page">
            <div className="row justify-content-center">
                <div className="form-control form-mod col-md-5 col-md-offset-5">
                  <div className="login__card">

                        <form name="formLogin">
                          <h3 className="text-center">Iniciar Sesión</h3>
                          <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" className="form-control" name="email" required pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="contraseña">Contraseña</label>
                            <input type="password" className="form-control" name="password" required />
                          </div>

                          <div className="form-group text-center">
                            <button type="submit" className="btn btn-success">
                              Entrar

                            </button>
                          </div>

                        </form>

                  </div>
                </div>

            </div>
          </div>

        </div>
      </div>



    )
  }
}

export default Login;
