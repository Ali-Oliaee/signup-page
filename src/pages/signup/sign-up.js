import { Button, Form, Input } from 'antd'
import './style.scss'

const SignupPage = ()  => {
  const validation = (values) => {
    console.log('values', values);
  }
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
          <Form action="#" onFinish={validation}>
            <Form.Item name='FirstName'>
              <Input type="text" placeholder='First Name'/>
            </Form.Item>
            <Form.Item name='LastName'>
              <Input type="text" placeholder='Last Name'/>
            </Form.Item>
            <Form.Item name='Email'>
              <Input type="email" placeholder='Email'/>
            </Form.Item>
            <Form.Item name="password">
              <Input.Password type='password' placeholder='Password' />
            </Form.Item>
            <Button htmlType='submit' className='submit-button'>
              CLAIM YOUR FREE TRIAL
            </Button>
          </Form>
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
