import "../Style/TenPercentOff.css";
import Button from "./Button";

function TenPercentOff()
{
    return (
        <div id="TenPercentOffDiv">
            <h1>GET 10% OFF YOUR FIRST ORDER</h1>
            <p>Sign up for promotions, tailored new arrivals, stock updates and more - straight to your inbox</p>
            <input className="RadioButton" type="radio"/><label>Womenwear</label>
            <input className="RadioButton" type="radio"/><label>Menwear</label>
            <div>
            <p>GET UPDATES BY</p>
            <input type="checkbox" /><label>Email</label>
            <input
                style={{
                    display:"block",
                    width:"96%",
                    padding:"2vh 0",
                    borderRadius:"5px",
                    border:"1px solid grey"
                }}
                type="email" placeholder="Your email address" />
            <input type="checkbox" /><label>SMS</label>
            </div>
            <Button props="Sign Up"/>
            <p>By signing up, you agree to our Privacy Policy. Unsubscribe anytime at the bottom of our emails.</p>
        </div>
    );
}

export default TenPercentOff;