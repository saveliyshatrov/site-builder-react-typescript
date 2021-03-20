import React, {Component} from "react";
import './style.css'



class Mobile extends Component<any, any> {
    constructor(props:any) {
        super(props);
    }
    render() {
        return <div className={"phone"}>
            <iframe className="screen"
                    width="100%" id={"iframe"}/>
        </div>
    }
}

class MobileRotated extends Component<any, any>{
    render(){
        return(
            <div className={"phone-rotated"}>
                <iframe className="screen-rotated"
                        width="100%" id={"iframe"}/>
            </div>
        )
    }
}


export  {Mobile, MobileRotated};