import React, {Component} from "react";
import MarginCard from "./marginCard";
import PaddingCard from "./paddingCard"
import TextCard from "./textCard";
import PlaceholderCard from "./placeholderCard";
import TypeCard from "./typeCard";
import SrcCard from "./srcCard";

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



class Cards extends Component<any, any>{

    render(){
        return (
            <>
                <MarginCard/>
                <PaddingCard/>
                <TextCard/>
                <PlaceholderCard/>
                <TypeCard/>
                <SrcCard/>
            </>
        )
    }
}

//add href

export default Cards;