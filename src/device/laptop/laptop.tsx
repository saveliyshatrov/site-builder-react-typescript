import React from "react";
import './style.css';

const Laptop = () => {
    return (
        <div className={"laptop-place"}>
            <div className={"screen-laptop"}>
                <iframe className="display-laptop"  name="Constructor"
                        width="100%" id={"iframe"}/>
            </div>
            <div className={"keyboard"}/>
        </div>
    )
}

export default Laptop;