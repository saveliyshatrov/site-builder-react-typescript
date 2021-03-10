import React, {Component} from "react";
import './style.css'

class leftMenu extends Component<any, any>{
    render(){
        return (
            <div className={"menu"} id={"Tree"} >
                <div className={"leftModalMenu"} id={"leftModalMenu"} style={{height: `${(window.innerHeight - 120) * 0.9}px`}}>
                    <div className={"logoOfLeftMenu"}>Tree</div>
                    {this.props.tree}
                </div>
            </div>
        )
    }
}


export default leftMenu;