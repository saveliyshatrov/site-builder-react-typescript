import React, {Component} from "react";
import MarginCard from "./marginCard";
import PaddingCard from "./paddingCard"
import TextCard from "./textCard";
import PlaceholderCard from "./placeholderCard";
import TypeCard from "./typeCard";
import SrcCard from "./srcCard";
import ForCard from "./forCard"
import IDCard from "./IDCard"

let arrayOfWithTextElements = ['div', 'main', 'header', 'footer', 'li', 'button', 'label', 'p', 'body']
let arrayOfWithoutTextElements = ['ul', 'hr']
let arrayOfInput = ['input']
let arrayOfLabel = ['label']
let arrayOfImg = ['img']

type cardProps = {
    template: any,
    elemID: number,
    insertInfo: any
    elem: string,
    objInfo: any
}

class Cards extends Component<cardProps, any>{
    constructor(props: any) {
        super(props);
    }
    render(){
        return (
            <>
                {arrayOfWithTextElements.includes(this.props.template[this.props.elem].tagName)?<TextCard insertInfo={this.props.insertInfo}
                                                                                                          elemID={this.props.elemID}
                                                                                                          info={this.props.objInfo.text}/>:''}
                {arrayOfWithoutTextElements.includes(this.props.template[this.props.elem].tagName)?'':''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName)?<PlaceholderCard insertInfo={this.props.insertInfo}
                                                                                                      elemID={this.props.elemID}
                                                                                                      info={this.props.objInfo.placeholder}/>:''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName)?<TypeCard insertInfo={this.props.insertInfo}
                                                                                               elemID={this.props.elemID}
                                                                                               info={this.props.objInfo.type}/>:''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName)?<IDCard insertInfo={this.props.insertInfo}
                                                                                             elemID={this.props.elemID}
                                                                                             info={this.props.objInfo.ID}/>:''}
                {arrayOfLabel.includes(this.props.template[this.props.elem].tagName)?<ForCard insertInfo={this.props.insertInfo}
                                                                                              elemID={this.props.elemID}
                                                                                              info={this.props.objInfo.For}/>:''}
                {arrayOfImg.includes(this.props.template[this.props.elem].tagName)?<SrcCard insertInfo={this.props.insertInfo}
                                                                                            elemID={this.props.elemID}
                                                                                            info={this.props.objInfo.src}/>:''}
                {/*<MarginCard/>*/}
                {/*<PaddingCard/>*/}
                {/*<TextCard/>*/}
                {/*<PlaceholderCard/>*/}
                {/*<TypeCard/>*/}
                {/*<SrcCard/>*/}
            </>
        )
    }
}

//add href

export default Cards;