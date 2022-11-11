import GoogleButton from 'react-google-button'
import Button from './Button';

function Login()
{
    return (
        <div style={{
            display:"block", 
            margin:"auto", 
            width:"60vw", 
            border:"1px solid",
        }}>
            <h1>Come on in</h1>
            <h3>SIGN IN</h3>
            <label>Email address</label>
            <input type="email"/>
            <label>Password</label>
            <input type="password"/>
            <Button props="Sign In"/>
            <GoogleButton/>
        </div>
    );
}

export default Login;