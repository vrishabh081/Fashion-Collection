function Crawsale({props, topHead})
{
    return(
        <div>
            <p style={{fontSize:"20px", margin:"4vh 0 6vh 1vw"}}>{topHead}</p>
            <div style={{
            display:"flex",
            width:"100%",
            marginBottom:"15vh",
            }}>
                {props.map((el)=>
                    <div style={{
                        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                        padding:"1vw",
                        width:"100%",
                        }}>
                        <img style={{width:"80%", display:"block", margin:"auto"}} src={el.img}/>
                        <p style={{color:"#585858", marginBottom:"2vh", marginLeft:"1vw"}}>{el.seasion}</p>
                        <p style={{color:"black", fontWeight:"bold", marginLeft:"1vw"}}>{el.brand}</p>
                        <p style={{color:"#585858", marginBottom:"4vh", marginLeft:"1vw"}}>{el.name}</p>
                        <p style={{color:"#585858", marginLeft:"1vw"}}>{el.price}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Crawsale