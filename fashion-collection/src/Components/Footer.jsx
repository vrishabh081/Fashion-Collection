import { NavLink } from "react-router-dom";
import "../Style/Footer.css"

function Footer()
{
    return (
        <div id="footerDiv">
            <div>
                <p>FARFETCH APP</p>
                <p>Farfetch App for iOS and Android</p>
            </div>

            <div>
                <p>DESTINATION/REGION, CURRENCY AND LANGUAGE</p>
                <p>India, USD $</p>
                <p>FOLLOW US</p>
                <NavLink to="/" className="iconClass">
                    <ion-icon name="logo-instagram"></ion-icon>
                </NavLink>
                <NavLink to="/" className="iconClass">
                    <ion-icon name="logo-facebook"></ion-icon>
                </NavLink>
                <NavLink to="/" className="iconClass">
                    <ion-icon name="logo-twitter"></ion-icon>
                </NavLink>
                <NavLink to="/" className="iconClass">
                    <ion-icon name="logo-pinterest"></ion-icon>
                </NavLink>
                <NavLink to="/" className="iconClass">
                    <ion-icon name="logo-youtube"></ion-icon>
                </NavLink>
            </div>
            <div>
                <p>CUSTOMER SERVICE</p>
                <p>Contact us</p>
                <p>Orders & Delivery</p>
                <p>Payment & Pricing</p>
                <p>Cryptocurrency Payments</p>
                <p>Returns & Refunds</p>
                <p>FAQs</p>
                <p>Terms & Conditions</p>
                <p>Promotion Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Accessibility</p>
            </div>

            <div>
                <p>ABOUT FARFETCH</p>
                <p>About Us</p>
                <p>Investors</p>
                <p>Boutique Partners</p>
                <p>Affliate Programme</p>
                <p>Student Discount UNIDAYS</p>
                <p>Youth Discount</p>
                <p>Carrers</p>
                <p>Customer Promise</p>
                <p>FARFETCH APP</p>
                <p>Sitemap</p>
                <p>Positively FARFETCH</p>
            </div>
        </div>
    );
}

export default Footer;