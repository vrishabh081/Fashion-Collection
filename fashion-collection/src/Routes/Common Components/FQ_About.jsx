function FQ_About({props})
{
    return(
        <div 
            style={{
                display:"flex",
                width:"95%",
                margin:"auto",
                marginBottom:"15vh",
                justifyContent:"space-between",
            }}>
                {props.map((el)=><div style={{
                    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    padding:"1vw",
                    width:"26vw"
                    }}>
                    <ion-icon name={el.icon} size="large"></ion-icon>
                    <p style={{marginTop:"1vh"}}>{el.name}</p>
                    <p style={{marginTop:"1vh"}}>{el.title}</p>
                </div>)}
        </div>
    )
}

export default FQ_About;