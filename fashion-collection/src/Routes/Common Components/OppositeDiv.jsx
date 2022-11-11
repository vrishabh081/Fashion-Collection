function OppositeDiv({image, heading, para, button})
{
    return(
        <div style={{
            display:"flex", 
            justifyContent:"space-between", 
            width:"100%",
            marginBottom:"15vh",
        }}>
            <div>
            <h1 style={{fontSize:"4vw", textAlign:"center", margin:"4vh 0"}}>{heading}</h1>
                <p style={{fontSize:"2vw",width:"70%", margin:"auto", textAlign:"center"}}>{para}</p>
                <button style={{
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
            <div>
                <img style={{width:"80vw"}} src ={image}/>
            </div>
        </div>
    );
}

export default OppositeDiv;