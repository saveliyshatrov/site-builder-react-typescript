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
    styles: boolean,
    uiFramework: string,
    showCssFunc: any,
    hideStylesFunc: any,
    tagChanges: boolean,
    hideTagChanges: any,
    styleTemplates: object
}

class rightMenu extends Component<rightMenuProps, any>{
    state = {
        styleName: ''
    }
    constructor(props:rightMenuProps) {
        super(props);
    }
    setStyleName = (name: string) => {
        this.setState({
            styleName: name
        })
    }
    showText = (e: any) => {
        this.props.changeSearchString(e.target.value);
    }
    getPropsResult = () => {
        return this.props.css || this.props.styles || this.props.tagChanges
    }
    render (){
        return (
            <div className={"menu"}>
                <div className={"rightModalMenu"} id={"rightModalMenu"} style={{height: `${(window.innerHeight - 120) * 0.9}px`}}>
                    {this.getPropsResult()?<div className={"logoOfRightMenu"}>{this.props.css?this.state.styleName:this.props.elem}</div>:<input className={"inputRightMenu"} type={"text"} placeholder={"Search"} onChange={(e)=>this.props.changeSearchString(e.target.value)}/>}
                    {/*<div className={"logoOfRightMenu"}>{this.props.css?this.props.elem:"Elements"}</div>*/}
                    <div className={"MenuOfElements"} style={{height: (this.getPropsResult()?'80%':'calc(90% - 2px)')}}>
                        {this.props.tagChanges?<Cards elem={this.props.elem}
                                                      template={this.props.template}
                                                      elemID={this.props.elemID}
                                                      insertInfo={this.props.insertInfo}
                                                      objInfo={this.props.objInfo}
                                                      type={'tagChanges'}
                                                      styleTemplates={{}}
                                                      styleName={''}/>:''}
                        {this.props.css?<Cards elem={this.props.elem}
                                               template={this.props.template}
                                               elemID={this.props.elemID}
                                               insertInfo={this.props.insertInfo}
                                               objInfo={this.props.objInfo}
                                               type={'cssChanges'}
                                               styleTemplates={this.props.styleTemplates}
                                               styleName={this.state.styleName}/>:''}
                        {this.props.styles?<Styles elem={this.props.elem}
                                                   elemID={this.props.elemID}
                                                   objInfo={this.props.objInfo}
                                                   insertInfo={this.props.insertInfo}
                                                   uiFramework={this.props.uiFramework}
                                                   showCssFunc={this.props.showCssFunc}
                                                   hideStylesFunc={this.props.hideStylesFunc}
                                                   setStyleName={this.setStyleName}/>: ''}
                        {this.getPropsResult()? '': this.props.children}
                    </div>
                    <div className={"btnDownload"} style={{display: (this.getPropsResult()?'flex':'none')}}>{this.props.css?'< Back':"Close"}</div>
                </div>
            </div>
        )
    }
}

export default rightMenu;
