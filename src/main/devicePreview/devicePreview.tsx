import React, {Component, FC} from "react";
import './style.css'

type Device = {
    // mobile: boolean
    // tablet: boolean
    // laptop: boolean
    // rotated: boolean
}

class devicePreview extends Component<any, any>{
    render() {
        return (
            <div className={"devicePreviewer"}>
                {this.props.children}
            </div>
        );
    }
}

export default devicePreview;