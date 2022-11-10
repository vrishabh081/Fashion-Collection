function Button({props})
{
    return (
        <button style={{
            width:"96%",
            padding:"2vh 0",
            backgroundColor:"black",
            color:"white",
            borderRadius:"5px",
        }}>
            {props}
        </button>
    );
}

export default Button;