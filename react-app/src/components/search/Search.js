import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import SingleSearchPD from "./SingleSearchPD"
import "./search.css"

function Search(){
    const [search, setSearch] = useState('')
    const [filteredPDs, setFilteredPDs] = useState([]);

    const pds = useSelector(state => {
        return state.pd.list.map(pdId => state.pd[pdId])
    })

    useEffect(() => {
        setFilteredPDs(pds.filter(pd =>{
            return pd.department_name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search])

    return (
        <div className="search-container">
            <div className="search-container-outer">
                <div className="search-input-container-inner">
                    <input value={search} type="text" placeholder="Search Police Department Name" onChange={(e) => setSearch(e.target.value)} className="search-input"/>
                </div>
                {filteredPDs.length < 5 && filteredPDs.length > 0 && <div className="search-output-container">
                    {search.length >= 1 && filteredPDs.map(pd => (
                        <SingleSearchPD pd={pd} setSearch={setSearch} filteredPDs={filteredPDs} key={pd.id} />
                        ))}
                    </div>}
                {filteredPDs.length === 0 && <div className="search-output-container">
                    <p className="nothing-found">No department found...</p>
                    <p className="nothing-found">PDMirror currently only has police departments around Cleveland's Westside. Try searching Avon if looking to just Demo PDMirror.</p>
                    </div>}
            </div>
        </div>
    )
}

export default Search