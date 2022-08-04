import React from 'react'
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function Register() {


    const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }
  return (
    
             <div>
                    <Form onSubmit={handleLogin}>
                     <div class="modal-content modal-create">
            {/* <div class="modal-close">
              <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> */}
            <div class="modal-header">
              <h5 class="modal-title-second" id="staticBackdropLabel">
                Tạo tài khoản
              </h5>
            </div>
            <div class="modal-body-second">
              <input type="text" required placeholder="Họ và tên:" />
              <input type="email" required placeholder="Email:" />
              <input type="password" required placeholder="Mật khẩu:" />
              <input type="password" required placeholder="Nhập lại mật khẩu:" />
            </div>
            <div class="accept">
              <label class="accept-para"><input required type="checkbox" /> Nhấn vào nút Đăng ký bên
                dưới đồng nghĩa với việc bạn đồng ý với các
                <mark className="mark">chính sách bảo mật</mark> và
                <mark className="mark">các điều khoản dịch vụ</mark> của chúng tôi</label>
            </div>
            <div class="modal-footer-second">
              <button type="submit" class="btn btn-primary-second">
                Đăng ký
              </button>
            </div>
            <div class="suggest">
              <button onClick={handleLogin}  class="btn-create" >
                Bạn đã có tài khoản?
              </button>
            </div>
            
             </div>
        </Form>
              
             </div>        
                     
                 
                    
  )
}

export default Register