import { useEffect } from "react";
import { useState } from "react";
import Error from "../Error";
import Loader from "../Loader";

function WomenShopping({sortingValue, paginate, filterValue})
{
    console.log(filterValue)
    // Hooks----------------------------------
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    // Conditionally Rendering----------------

    useEffect(()=>{
        if(filterValue!=="" && sortingValue!=="")
        {
            setLoader(true);
            fetch(`http://localhost:4000/posts?category=${filterValue}&_sort=${sortingValue}&_order=asc&_page=${paginate}&_limit=9`)
            .then(res=>res.json())
            .then(data=>{
                setData(data);
                setLoader(false)
            })
            .catch(err=>{
            setLoader(false)
            setError(true)
        })
        }
        else if(filterValue==="" && sortingValue!=="")
        {
            setLoader(true);
            fetch(`http://localhost:4000/posts?_sort=${sortingValue}&_order=asc&_page=${paginate}&_limit=9`)
            .then(res=>res.json())
            .then(data=>{
                setData(data);
                setLoader(false)
            })
            .catch(err=>{
            setLoader(false)
            setError(true)
        })
        }
        else if(filterValue!=="" && sortingValue==="")
        {
            setLoader(true);
            fetch(`http://localhost:4000/posts?category=${filterValue}&_page=${paginate}&_limit=9`)
            .then(res=>res.json())
            .then(data=>{
                setData(data);
                setLoader(false)
            })
            .catch(err=>{
            setLoader(false)
            setError(true)
        })
        }
        else if(filterValue==="" && sortingValue==="")
        {
            setLoader(true);
            fetch(`http://localhost:4000/posts?_page=${paginate}&_limit=9`)
            .then(res=>res.json())
            .then(data=>{
                setData(data);
                setLoader(false)
            })
            .catch(err=>{
            setLoader(false)
            setError(true)
        })
        }
    }, [paginate, sortingValue, filterValue])

    // Loader----------------------------------
    if(loader)
    {
        return <Loader/>
    }

    // Error-----------------------------------
    if(error)
    {
        return <Error/>
    }

    // Return Statement------------------------
    return(
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"5vw", margin:"1vh 1vw"}}>
                {data.map(el=>
                <div 
                    key={el.id}
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(27, 31, 35, 0.2) 0px 0px 0px 1px",
                        padding:"2vh 2vw"
                }}>
                        <img src={el.image} style={{width:"60%"}}/>
                        <p style={{fontWeight:"bold"}}>{el.title}</p>
                        <p>{el.name}</p>
                        <p>$ {el.price}</p>
                </div>)}
            </div>
    );
}

export default WomenShopping;