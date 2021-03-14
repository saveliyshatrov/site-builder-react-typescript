import React from "react";
import "./style.css"

const Tablet = () => {
    return (
        <div className={"tablet"}>
            <iframe className="screen-tablet" name="Constructor"
                    width="768" height="1024" id={"iframe"}>
            </iframe>
        </div>
    )
}

const TabletRotated = () => {
    return (
        <div className="tablet-rotated">
            <iframe className="screen-tablet-rotated" name="Constructor"
                    width="1024" height="768" id={"iframe"}>
            </iframe>
        </div>

    )
}

export {Tablet, TabletRotated};