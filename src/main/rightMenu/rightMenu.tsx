import React, {Component} from "react";
import './style.css'
import Cards from "./cardsCSS";

type rightMenuProps = {
    css: boolean,
    elem: string,
    exportModal: any,
    searchString: string,
    changeSearchString: any,
    template: any,
    elemID: number,
    insertInfo: any,
    objInfo: any
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
                <div className={"rightModalMenu"} id={"rightModalMenu"} style={{height: `${(window.innerHeight - 120) * 0.9}px`}}>
                    {this.props.css?<div className={"logoOfRightMenu"}>{this.props.elem}</div>:<input className={"inputRightMenu"} type={"text"} placeholder={"Search"} onChange={(e)=>this.props.changeSearchString(e.target.value)}/>}
                    {/*<div className={"logoOfRightMenu"}>{this.props.css?this.props.elem:"Elements"}</div>*/}
                    <div className={"MenuOfElements"}>
                        {/*{this.props.children}*/}
                        {/*{this.props.css?{*/}

                        {/*}:''}*/}
                        {this.props.css?<Cards elem={this.props.elem}
                                               template={this.props.template}
                                               elemID={this.props.elemID}
                                               insertInfo={this.props.insertInfo}
                                               objInfo={this.props.objInfo}/>:this.props.children}
                    </div>
                    <div className={"btnDownload"} onClick={this.props.css?()=>{}:this.props.exportModal}>{this.props.css?"Close":"Export"}</div>
                </div>
            </div>
        )
    }
}

export default rightMenu;