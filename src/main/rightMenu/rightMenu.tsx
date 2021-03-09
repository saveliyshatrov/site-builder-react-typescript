import React, {Component} from "react";
import './style.css'
import Cards from "./cardsCSS";

class rightMenu extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render (){
        return (
            <div className={"menu"}>
                <div className={"rightModalMenu"}>
                    <div className={"logoOfRightMenu"}>{this.props.css?this.props.elem:"Elements"}</div>
                    <div className={"MenuOfElements"}>
                        {/*{this.props.children}*/}
                        {/*{this.props.css?{*/}

                        {/*}:''}*/}
                        {this.props.css?<Cards />:this.props.children}
                    </div>
                    <div className={"btnDownload"} onClick={this.props.css?{}:this.props.exportModal}>{this.props.css?"Close":"Export"}</div>
                </div>
            </div>
        )
    }
}

export default rightMenu;