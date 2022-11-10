function Brand({props, topHead})
{
    return (
        <div>
            <p style={{fontSize:"2vw", margin:"4vh 0 6vh 2vw", textAlign:"center"}}>{topHead}</p>
            <div style={{
            display:"flex",
            width:"100%",
            marginBottom:"15vh",
            }}>
                {props.map((el)=>
                    <div style={{width:"100%",}}>
                        <img style={{width:"80%", display:"block", margin:"auto"}} src={el.img}/>
                        <p style={{color:"#585858", textAlign:"center", marginTop:"2vh"}}>{el.name}</p>
                        <p style={{color:"#585858", textAlign:"center", marginTop:"2vh"}}>{el.brand}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Brand;