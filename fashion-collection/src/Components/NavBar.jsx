import SubTopNavBar from "./SubTopNavBar";
import TopNavBar from "./TopNavBar";

function NavBar()
{
    return(
        <div style={{
            paddingBottom:"5vh",
            position:"sticky",
            top:"0",
            backgroundColor:"white"
            }}>
            <SubTopNavBar/>
            <TopNavBar/>
        </div>
    );
}

export default NavBar;