import './style.scss'

const SignupPage = ()  => {
  return (
    <div className='signup-page'>
      <div className="description-container">
        <h1 className='description-title'>Learn to code by watching others</h1>
        <p className='description'>
          See how expeirenced developers solve problems in real-time.<br/>
          Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </div>
      <div className="form-container">
        <div className="premium-box">
          <p>
            <strong>Try it free 7 days </strong>
            then $20/mo. thereafter
          </p>
          </div>
        <div className="form">
          <form action="#" >
            <input 
              id="FirstName"
              name='FirstName'
              type="text" 
              placeholder='First Name'
            />
            <input 
              name='LastName'
              type="text" 
              placeholder='Last Name'
            />
            <input 
              id="email"
              name="email"
              type="email"
              placeholder='Email Address'
            />
            <input 
              id='Password'
              name='Password'
              type="password" 
              placeholder='Password'
            />
            <button type='submit'>CLAIM YOUR FREE TRIAL</button>
          </form>
          <p>
            By clicking the button you are going to our 
            <a href="/"> Terms and Services</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
