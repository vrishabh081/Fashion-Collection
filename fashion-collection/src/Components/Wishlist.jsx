import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Components/Button";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import DeleteWishlist from "./DeleteWishlist";

// getUser data function --------------------------------
function getUserById() {
    return fetch(
      // url
      `http://localhost:4000/wishlist`
    ).then((res) => res.json());
  }


//   Main function--------------------------------------
function Wishlist()
{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        getUserById()
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
    return(
        <div style={{width:"95%", margin:"5vh auto"}}>
            {
                data.map(el=>{
                    return (
                        <div key={el.id} style={{width:"38vw", margin:"2vh auto", padding:"2vh 1vw",boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", }}>
                            <DeleteWishlist id={el.id}/>
                            <div 
                                style={{textAlign:'center'}}
                                key={el.id}
                            >
                                    <img style={{width:"20vw", margin:"1vh auto"}} src={el.image}/>
                                    <p style={{fontWeight:"bold"}}>{el.title}</p>
                                    <p>{el.name}</p>
                                    <p style={{fontWeight:"bold"}}>$ {el.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Wishlist