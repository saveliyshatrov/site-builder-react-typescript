import React, {Component} from "react";
import './style.css'
import Cards from "./cardsCSS";

type rightMenuProps = {
    css: boolean,
    elem: string,
    exportModal: any,
    searchString: string,
    changeSearchString: any
}

class rightMenu extends Component<rightMenuProps, any>{
    constructor(props:rightMenuProps) {
        super(props);
    }
    showText = (e: any) => {
        this.props.changeSearchString(e.target.value);
    }
    render (){
        return (
            <div className={"menu"}>
                <div className={"rightModalMenu"}>
                    {this.props.css?<div className={"logoOfRightMenu"}>{this.props.elem}</div>:<input className={"inputRightMenu"} type={"text"} placeholder={"Search"} onChange={(e)=>this.props.changeSearchString(e.target.value)}/>}
                    {/*<div className={"logoOfRightMenu"}>{this.props.css?this.props.elem:"Elements"}</div>*/}
                    <div className={"MenuOfElements"}>
                        {/*{this.props.children}*/}
                        {/*{this.props.css?{*/}

                        {/*}:''}*/}
                        {this.props.css?<Cards />:this.props.children}
                    </div>
                    <div className={"btnDownload"} onClick={this.props.css?()=>{}:this.props.exportModal}>{this.props.css?"Close":"Export"}</div>
                </div>
            </div>
        )
    }
}

export default rightMenu;