import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import SingleSearchPD from "./SingleSearchPD"

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
        <div>
            <div>
                <input value={search} type="text" placeholder="Search for a police department..." onChange={(e) => setSearch(e.target.value)} />
            </div>
            {filteredPDs.length < 5 && filteredPDs.length > 0 && <div>
                {search.length >= 1 && filteredPDs.map(pd => (
                    <SingleSearchPD pd={pd} setSearch={setSearch} filteredPDs={filteredPDs} key={pd.id} />
                ))}
                </div>}
            {filteredPDs.length === 0 && <div>
                <p>Police Department is not currently reflecting</p>
                </div>}
        </div>
    )
}

export default Search