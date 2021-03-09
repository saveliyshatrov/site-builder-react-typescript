import React, {Component} from "react";
import './style.css'



class leftMenu extends Component<any, any>{
    render(){
        return (
            <div className={"menu"}>
                <div className={"leftModalMenu"}>
                    <div className={"logoOfLeftMenu"}>Tree</div>
                    {this.props.tree}
                </div>
            </div>
        )
    }
}


export default leftMenu;