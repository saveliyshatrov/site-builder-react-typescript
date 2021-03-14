import React, {Component} from "react";
import './style.css'
import styled from "styled-components";



class Mobile extends Component<any, any> {
    render() {
        return <div className="phone">
            <iframe className="screen"
                    width="100%" id={"iframe"}/>
        </div>
    }
}

const MobileRotated = () => {
    return <div className="phone-rotated">
        <iframe className="screen-rotated"
                width="100%" id={"iframe"}/>
    </div>
}


export  {Mobile, MobileRotated};