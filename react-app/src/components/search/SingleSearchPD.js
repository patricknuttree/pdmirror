import React from "react"
import {Link, useHistory} from "react-router-dom"
import "./singlesearchpd.css"

function SingleSearchPD({ pd, setSearch }) {

    const history = useHistory()
    const clearSearch = (e) => {
        e.preventDefault()
        setSearch("")
        history.push(`/pd/${pd.id}`)
    }

    return (
        <Link to={`/pd/${pd.id}`} onClick={clearSearch} className="search-results-link">
            <div className="search-results">
                {pd.department_name}
            </div> 
        </Link>
    )
}

export default SingleSearchPD