import React, {Component} from "react";
import MarginCard from "./marginCard";
import PaddingCard from "./paddingCard"
import TextCard from "./textCard";
import PlaceholderCard from "./placeholderCard";
import TypeCard from "./typeCard";
import SrcCard from "./srcCard";
import ForCard from "./forCard"
import IDCard from "./IDCard"

type styles = {
    input?: {
        border:{
            top: string
            right: string
            bottom: string
            left: string
        }
        border_radius:{
            top_left: string
            top_right: string
            bottom_left: string
            bottom_right: string
        }
        background:{
            color: string
        }
        color: string
        font: {
            size: string
            weight: string
            family: string
        }
        box_sizing:string
        padding:{
            top: string
            right: string
            bottom:string
            left: string
        }
        margin: {
            top: string
            right: string
            bottom:string
            left: string
        }
    }
    div?: {
        border:{
            top: string
            right: string
            bottom: string
            left: string
        }
        border_radius:{
            top_left: string
            top_right: string
            bottom_left: string
            bottom_right: string
        }
        background:{
            color: string
        }
        color: string
        font: {
            size: string
            weight: string
            family: string
        }
        box_sizing:string
        padding:{
            top: string
            right: string
            bottom:string
            left: string
        }
        margin: {
            top: string
            right: string
            bottom:string
            left: string
        }
        display: {
            flex: {
                enable: boolean
                direction: string
                justify_content: string
                align_items: string
            }
        }
        position: {
            fixed: boolean
        }
        top: string
        left: string
        bottom: string
        right: string
    }
    img?: {
        object_fit:string
    }
    a?: {
        text_decoration: boolean
        font: {
            size: string
            weight: string
            family: string
        }
    }
}
// object-fit - fill, contain, cover, scale-down, none

let arrayOfWithTextElements = ['div', 'main', 'header', 'footer', 'li', 'button', 'label', 'p']
let arrayOfWithoutTextElements = ['ul', 'hr']
let arrayOfInput = ['input']
let arrayOfLabel = ['label']
let arrayOfImg = ['img']

type cardProps = {
    template: any,
    elemID: number,
    insertInfo: any
    elem: string
}

class Cards extends Component<cardProps, any>{
    constructor(props: any) {
        super(props);
    }
    render(){
        return (
            <>
                {console.log(this.props.elem)}
                {console.log(this.props.template[this.props.elem])}
                {arrayOfWithTextElements.includes(this.props.template[this.props.elem].tagName)?<TextCard insertInfo={this.props.insertInfo}
                                                                                                          elemID={this.props.elemID}/>:''}
                {arrayOfWithoutTextElements.includes(this.props.template[this.props.elem].tagName)?'':''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName)?<PlaceholderCard insertInfo={this.props.insertInfo}
                                                                                                      elemID={this.props.elemID}/>:''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName)?<TypeCard insertInfo={this.props.insertInfo}
                                                                                               elemID={this.props.elemID}/>:''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName)?<IDCard insertInfo={this.props.insertInfo}
                                                                                               elemID={this.props.elemID}/>:''}
                {arrayOfLabel.includes(this.props.template[this.props.elem].tagName)?<ForCard insertInfo={this.props.insertInfo}
                                                                                                      elemID={this.props.elemID}/>:''}
                {arrayOfImg.includes(this.props.template[this.props.elem].tagName)?<SrcCard insertInfo={this.props.insertInfo}
                                                                                            elemID={this.props.elemID}/>:''}
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