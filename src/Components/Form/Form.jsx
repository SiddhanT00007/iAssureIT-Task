import React from 'react';
import "./Form.css";

const Form = () => {
  return (
    <>
    
    <div className="form card border">
            {/* <div class="form-container form card border rounded "> */}
            
                <h2 className='need'>Need Help ?</h2>
                <p className='pro'>Proactively fashion world-class leadership vis-a-vis<br/> enterprise e-services. Great strong leadership</p>
            
              <form class="login-form">
                <div className='form-inside'>
                <div className='my-3'>
                  {/* <label for="name">Name </label> */}
                  <input type="text" placeholder="Name"/>
                </div>

                <div className='my-3'>
                  {/* <label for="email">Email </label> */}
                  <input id="email" type="email" placeholder="Email" />
                </div>

                <div className='my-3'>
                  {/* <label for="password">Subject </label> */}
                  <input type="subject" placeholder="Subject" />
                </div>

                <div className='my-3'>
                  {/* <label for="password">Message </label> */}
                  <input className='textarea' type="textarea" placeholder="Your Message" />
                </div>

                <button class="btn btn-light  btn--form" >
                  SEND INQUIRY
                </button>
                </div>
              </form>
            </div>
          {/* </div> */}
    
    </>
  )
}

export default Form