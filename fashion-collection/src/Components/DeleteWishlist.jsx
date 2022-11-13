import { useState } from "react"
import Loader from "./Loader";


// Main funciton-------------------------------------
function DeleteWishlist({ id })
{
    const [loader, setLoader] = useState(false);
    const deletePost = ()=>
    {
        window.location.reload(false)
        setLoader(true)
        fetch(`http://localhost:4000/wishlist/${id}`,
        {
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            },
        })
        .then(res=>res.json())
        .then(data=>{
            setLoader(false);
            window.location.reload(true)
        })
        .catch(err=>{
            console.log(err)
        })    
    }
    

    if(loader)
    {
        return <Loader/>
    }
    
    // Return Statement-----------------------
    return(
        <div style={{textAlign:"right"}}>
            <ion-icon
                onClick={deletePost}
                name="trash-outline" 
                style={{color:"red", fontSize:"20px", cursor:"pointer"}}></ion-icon>
        </div>
    )
}

export default DeleteWishlist;