import { LayoutGroupContext } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Filter_Sort from "../Filter_Sort";
import WomenShopping from "./WomenShopping";

function WomenShop()
{
    const [filterValue, setFilterValue] = useState("");
    const [sortingValue, setSortingValue] = useState("");
    const [paginate, setPaginate] = useState(1);
    const[data, setData] = useState(0);

    // for length of Data-----------------------------------------
    useEffect(()=>{
        fetch(`http://localhost:4000/posts`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
    })
    },[])

    // Filter---------------------------------------
    const handleChangeFilter=(e)=>
    {
        setFilterValue(e.target.value);
    }
    // Sorting--------------------------------------
    const handleChangeSort=(e)=>
    {
        setSortingValue(e.target.value);
    }

    return(
        <>
        <div style={{width:"95%", margin:"auto"}}>
            <p style={{margin:"1vh 0.5vw"}}>Women Home</p>
            <h1 style={{fontWeight:"bold", fontSize:"32px", margin:"3vh 0.5vw"}}>22% OFF YOUR NEW WARDROBE</h1>
            <p style={{margin:"1vh 0.5vw"}}>You can now shop the world’s most iconic designers with 22% off, for a limited time only. T&Cs apply; read them here.</p>
            <Link style={{textDecoration:"underline", margin:"5vh 0.5vw"}}>Shop Women</Link>

            {/* Filter and Sorting */}
            <Filter_Sort
                handleChangeFilter={handleChangeFilter}
                handleChangeSort={handleChangeSort}
            />
            <WomenShopping 
                filterValue={filterValue}
                sortingValue={sortingValue}
                paginate={paginate}
            />

            <div style={{margin:"5vh auto", width:"30vw", borderBottom:"1px solid grey", display:"flex", justifyContent:"space-evenly"}}>
            <button disabled={paginate===1} onClick={()=>setPaginate(paginate-1)}>Previous</button>
            <button disabled style={{fontWeight:"bold"}}>{paginate}</button>
            <button disabled={paginate===Math.ceil(data.length/9)} onClick={()=>setPaginate(paginate+1)}>Next</button>
       </div>
        </div>
        </>
    )
}

export default WomenShop;