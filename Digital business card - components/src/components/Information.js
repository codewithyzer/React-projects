import React from "react";
import headshot from '../images/headshot1.png'

export default function Information() {
    return (
        <div>
            <img src={headshot} alt="" />
            <p className="name">Yzer De Boda</p>
            <p className="occupation">Software Engineer</p>
            <p className="website-name">YzerTech.website</p>
        </div>
    )
}