import React from "react"
import {Link, useHistory} from "react-router-dom"

function SingleSearchPD({ pd, setSearch }) {

    const history = useHistory()
    const clearSearch = (e) => {
        e.preventDefault()
        setSearch("")
        history.push(`/pd/${pd.id}`)
    }

    return (
        <div>
            <Link to={`/pd/${pd.id}`} onClick={clearSearch}>{pd.department_name}</Link>
        </div>
    )
}

export default SingleSearchPD