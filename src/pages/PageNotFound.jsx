import React from "react";
import {Link} from 'react-router-dom'
import "../styles/PageNotFound.scss"

export default function PageNotFound(props) {
    return (
        <div className="notfound">
            <h2>A keresett oldal nem található</h2>
            <Link to="/">Vissza a kezdőlapra</Link>
        </div>
    )
}