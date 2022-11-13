import { useEffect } from "react";
import { useState } from "react";

function Search ()
{
    const [data, setData] = useState();
    const [searchData, setSearchData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4000/posts?q=${data}`)
        .then(res=>res.json())
        .then(res=>setSearchData(res))
    },[data])

    console.log(data)
    console.log(searchData)

    return (
        < div style={{display:"block", margin:'auto',}}>
            <input 
                onChange={(e)=>setData(e.target.value)}
                style={{width:"15vw", padding:"0 1vw"}}
                placeholder="Search"
            />
            {
                data !== "" ? (searchData.map(el=>
                <div 
                    style={{display:'flex', width:"20vw", height:"10vh", justifyContent:"space-between", margin:"2vh auto", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}
                    key={el.id}>
                        <div><img style={{width:"3vw"}} src={el.image}/></div>
                        <div style={{width:"15vw"}}>
                            <p style={{fontSize:"12px", fontWeight:"bold"}}>{el.title}</p>
                            <p style={{fontSize:"12px"}}>{el.name}</p>
                            <p style={{fontSize:"12px"}}>$ {el.price}</p>
                        </div>
                    </div>
                )) : setData()
            }
        </div>
    )
}

export default Search;