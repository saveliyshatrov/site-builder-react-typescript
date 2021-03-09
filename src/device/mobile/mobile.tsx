import React from "react";
import './style.css'

const Mobile = () => {
    return <div className="phone">
        <iframe className="screen" name="Constructor"
                width="100%" id={"iframe"}></iframe>
    </div>
}

const MobileRotated = () => {
    return <div className="phone-rotated">
        <iframe className="screen-rotated" name="Constructor"
                width="100%" id={"iframe"}></iframe>
    </div>
}

export  {Mobile, MobileRotated};