import { useNavigate } from "react-router-dom";

function StraightDiv({image, heading, para, button})
{
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/womenshop")
    }
    return(
        <div style={{
            display:"flex", 
            justifyContent:"space-between", 
            width:"100%",
            marginBottom:"15vh",
        }}>
            <div>
                <img style={{width:"40vw"}} src ={image}/>
            </div>
            <div>
                <h1 style={{fontSize:"4vw", textAlign:"center", margin:"4vh 0"}}>{heading}</h1>
                <p style={{fontSize:"2vw",width:"70%", margin:"auto", textAlign:"center"}}>{para}</p>
                <button 
                    onClick={handleClick}
                    style={{
                        display:"block",
                        margin:"5vh auto",
                        fontSize:"2vw", 
                        padding:"1.5vh 2.2vw", 
                        backgroundColor:"white",
                        border:"1px solid #040f13",
                        borderRadius:"5px",
                }}>
                    {button}
                </button>
            </div>
        </div>
    );
}

export default StraightDiv;