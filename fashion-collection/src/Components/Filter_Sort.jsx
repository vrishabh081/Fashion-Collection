function Filter_Sort({handleChangeSort, handleChangeFilter})
{
    return(
        <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>
                <label style={{margin:"4vh 0.5vw", fontWeight:"bold"}}>Filter</label>
                <select onChange={handleChangeFilter} style={{margin:"4vh 1.5vw", cursor:"pointer",}} >
                    <option value="fashion-collection">Select</option>
                    <option value="bag">Bags</option>
                    <option value="clothing">Clothes</option>
                    <option value="sandal">Sandals/Shoes</option>
                </select>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", gap:"2vw"}}>
                    <label style={{margin:"4vh 0vw",fontWeight:"bold"}}>Sort</label>
                    <select onChange={handleChangeSort} style={{margin:"4vh 0.5vw", cursor:"pointer",}}>
                        <option value="">Select</option>
                        <option value ="title">Brand</option>
                        <option value ="name">Brand Name</option>
                        <option value ="price">Price</option>
                    </select>
                </div>
            </div>

    );
}

export default Filter_Sort;