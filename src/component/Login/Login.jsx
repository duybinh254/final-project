import React from 'react'
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'

function Login() {


    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    }

    const handleClick = () => {

        navigate("/register")
    
      }

  return (

    
        <Form onSubmit={handleSubmit}>

                     <div class="modal-content">
                {/* <div class="modal-close">
                  <button  type="button" class="btn-close" ></button>
                </div> */}
                <div class="modal-header">
                  <h5 class="modal-title-second" id="staticBackdropLabel">Đăng nhập</h5>
                  
                </div>
                <div class="modal-body-second">
                  <input  type="email" id="email" required placeholder="Email:"/>
                  <input  type="password" id="pass" required placeholder="Mật khẩu:" />              
                </div>
                <div class="modal-footer-second">
                  
                  <button type="submit" id="btn-login" class="btn btn-primary-second" >Đăng nhập </button>
                </div>
                <div class="suggest">
                  <p>Bạn chưa có tài khoản? <button onClick={handleClick}  class="btn-log" >Đăng ký ngay</button></p>

                </div>
              </div>

        </Form>
              
                    


    )
}

export default Login