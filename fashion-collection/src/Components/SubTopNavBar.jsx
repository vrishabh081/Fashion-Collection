import "../Style/SubTopNavBar.css"
import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Women"
  },
  {
    to: "/men",
    title: "Men"
  },
  {
    to: "/kids",
    title: "Kids"
  },
];
// logout only should be shown if user is logged in

function SubTopNavBar() {

    let activeStyle = {
        color: "black",
        fontWeight:"bold"
      };
      let normalStyle = {
        textDecoration: "none",
      };

  return (
    <div id="SubTopNavBar">
        <div>
            {links.map((link) => (
                <NavLink
                    className="NavItemClass"
                    style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                    key={link.to}
                    to={link.to}
                    end
                >
                    {link.title}
                </NavLink>
            ))}
        </div>

        <div>
            <NavLink to="/">
                <img 
                    src ="https://i.ibb.co/74CvPWM/Fashion-Club-Logo.png"
                    style={{width:"120px"}}
                    />
            </NavLink>
        </div>

        <div>
        <NavLink to="/login" className="NavItemClass NavItemIcon">
            <ion-icon name="person-outline"></ion-icon>
        </NavLink>

        <NavLink to="/wishlist" className="NavItemClass NavItemIcon">
            <ion-icon name="heart-outline"></ion-icon>
        </NavLink>

        <NavLink to="/bag" className="NavItemClass NavItemIcon">
            <ion-icon name="bag-outline"></ion-icon>
        </NavLink>
        </div>
    </div>
  );
}

export default SubTopNavBar;
