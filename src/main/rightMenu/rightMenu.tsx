import React, {Component} from "react";
import './style.css'
import Cards from "./cardsCSS";
import Styles from "./Styles";

type rightMenuProps = {
    css: boolean,
    elem: string,
    exportModal: any,
    searchString: string,
    changeSearchString: any,
    template: any,
    elemID: number,
    insertInfo: any,
    objInfo: any,
    styles: boolean
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
                    {this.props.css||this.props.styles?<div className={"logoOfRightMenu"}>{this.props.elem}</div>:<input className={"inputRightMenu"} type={"text"} placeholder={"Search"} onChange={(e)=>this.props.changeSearchString(e.target.value)}/>}
                    {/*<div className={"logoOfRightMenu"}>{this.props.css?this.props.elem:"Elements"}</div>*/}
                    <div className={"MenuOfElements"} style={{height: (this.props.css||this.props.styles?'80%':'calc(90% - 2px)')}}>
                        {this.props.css||this.props.styles?(this.props.css?
                            <Cards elem={this.props.elem}
                                   template={this.props.template}
                                   elemID={this.props.elemID}
                                   insertInfo={this.props.insertInfo}
                                   objInfo={this.props.objInfo}/>:
                            <Styles elem={this.props.elem}
                                    elemID={this.props.elemID}
                                    objInfo={this.props.objInfo}
                                    insertInfo={this.props.insertInfo}/>)
                            :this.props.children}
                    </div>
                    <div className={"btnDownload"} style={{display: (this.props.css||this.props.styles?'flex':'none')}}>Close</div>
                </div>
            </div>
        )
    }
}

export default rightMenu;