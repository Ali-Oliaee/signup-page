import './style.scss'

const SignupPage = ()  => {
  return (
    <div className='signup-page'>
      <div className="form-container">
        <div className="premium-box">
          <p>
            <strong>Try it free 7 days </strong>
            then $20/mo.thereafter
          </p>
          </div>
        <div className="form">
          <form action="#">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Email Address'/>
            <input type="password" placeholder='Password'/>
            <button type='submit'>CLAIM YOUR FREE TRIAL</button>
          </form>
          <p>
            By clicking the button you are going to our 
            <a href="/"> Terms and Services</a>
          </p>
        </div>
      </div>
      <div className="description-container"></div>
    </div>
  )
}

export default SignupPage;
