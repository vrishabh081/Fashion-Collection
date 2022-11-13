import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Components/Button";
import Error from "../Components/Error";
import Loader from "../Components/Loader";

// getUser data function --------------------------------
function getUserById(id) {
    return fetch(
      // url
      `http://localhost:4000/posts/${id}`
    ).then((res) => res.json());
  }


//   Main function--------------------------------------
function SingleWomenItem()
{
    const params = useParams(1);
    const navigateBag = useNavigate();
    const navigateWishlist = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [data, setData] = useState(null);

    // Get Data function
    useEffect(() => {
        setLoading(true);
        getUserById(params.id)
        .then((res) => {
            setData(res);
            setLoading(false);
            setError(false);
        })
        .catch((err) => {
            setLoading(false);
            setError(true)
        });
    }, []);

    if(loading)
    {
        return <Loader/>
    }
    if(error)
    {
        return <Error/>
    }


    // Add To Cart Post function-------------------------------
    const addToCart = ()=>
    {
        setLoading(true)
        fetch("http://localhost:4000/cart",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setLoading(false)
            navigateBag("/bag")
        })
    }

    // Add To Cart function-------------------------------
    const addToWishlist = ()=>
    {
        setLoading(true)
        fetch("http://localhost:4000/wishlist",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setLoading(false)
            navigateWishlist("/wishlist")
        })
    }

    // Return Statement-----------------------------------
    return(
        <div style={{width:"95%", margin:"auto", display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"50%"}}>
                <img 
                    style={{width:"30vw"}}
                    src={data.image} />
            </div>
            <div style={{width:"40%"}}>
                <p style={{fontSize:"22px", fontWeight:"bold", marginTop:"5vh"}}>{data.title}</p>
                <p style={{color:"grey", marginBottom:"6vh"}}>{data.name}</p>
                <p style={{fontSize:"20px", color:"grey"}}>{data.price}</p>
                <p style={{color:"grey", marginBottom:"6vh"}}>import duties included</p>
                <button
                onClick={addToCart} 
                style={{
                    width:"96%",
                    padding:"1.8vh 0",
                    margin:"2vh 0",
                    backgroundColor:"black",
                    color:"white",
                    borderRadius:"5px",
                    cursor:"pointer",
                    border:"1px solid",
                    textAlign:"center",
                    fontWeight:'bold',
                }}>
                    {loading ? <Loader/> : "Add To Cart"}
                </button>
                <div 
                    onClick={addToWishlist}
                    style={{
                        width:"96%",
                        padding:"1.8vh 0",
                        margin:"2vh 0",
                        backgroundColor:"white",
                        color:"black",
                        borderRadius:"5px",
                        cursor:"pointer",
                        border:"1px solid",
                        textAlign:"center",
                        fontWeight:'bold',
                    }}
                >
                    <p>Add To Wishlisht
                    <span>
                        <ion-icon name="heart-outline" style={{fontSize:"20px", margin:"-0.8vh 2vh"}}></ion-icon>
                    </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SingleWomenItem;