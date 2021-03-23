import React, {Component} from "react";
import MarginCard from "./marginCard";
import PaddingCard from "./paddingCard"
import TextCard from "./textCard";
import PlaceholderCard from "./placeholderCard";
import TypeCard from "./typeCard";
import SrcCard from "./srcCard";
import ForCard from "./forCard"
import IDCard from "./IDCard"
import WidthCard from "./widthCard"
import HeightCard from "./heightCard";
import NameCard from "./nameCard";
import BoxShadowCard from "./boxshadowCard";
import FontCard from "./fontCard";
import BackgroundCard from "./backgroundCard";
import PositionCard from "./positionCard";
import BorderCard from "./borderCard";
import BorderColorCard from "./borderColorCard";
import BorderRadiusCard from "./borderRadiusCard";
import TransitionCard from "./transitionCard";
import ObjectFitCard from "./objectFitCard";

let arrayOfWithTextElements = ['div', 'main', 'header', 'footer', 'li', 'button', 'label', 'p', 'body','h1', 'h2', 'h3', 'h4', 'h5', 'h6']
let arrayOfWithoutTextElements = ['ul', 'hr']
let arrayOfInput = ['input']
let arrayOfLabel = ['label']
let arrayOfImg = ['img']

type cardProps = {
    template: any,
    elemID: number,
    insertInfo: any
    elem: string,
    objInfo: any,
    type: 'cssChanges' | 'tagChanges'
}

class Cards extends Component<cardProps, any>{
    constructor(props: any) {
        super(props);
    }
    state = {
        all: {
            width: {
                none: '',
                hover: '',
                active: '',
                focus: ''
            },
            height: '',
            backgroundColor: '',
            margin: '',
            padding: '',
            boxShadow: '',
            font: '',
            position: '',
            border: '',
            borderColor: '',
            borderRadius: '',
            transition: '',
            objectFit: ''
        },
        mobile: {
            width: {
                none: '',
                hover: '',
                active: '',
                focus: ''
            },
            height: '',
            backgroundColor: '',
            margin: '',
            padding: '',
            boxShadow: '',
            font: '',
            position: '',
            border: '',
            borderColor: '',
            borderRadius: '',
            transition: '',
            objectFit: ''
        },
        tablet: {
            width: {
                none: '',
                hover: '',
                active: '',
                focus: ''
            },
            height: '',
            backgroundColor: '',
            margin: '',
            padding: '',
            boxShadow: '',
            font: '',
            position: '',
            border: '',
            borderColor: '',
            borderRadius: '',
            transition: '',
            objectFit: ''
        },
        desktop: {
            width: {
                none: '',
                hover: '',
                active: '',
                focus: ''
            },
            height: '',
            backgroundColor: '',
            margin: '',
            padding: '',
            boxShadow: '',
            font: '',
            position: '',
            border: '',
            borderColor: '',
            borderRadius: '',
            transition: '',
            objectFit: ''
        }
    }

    allWidth = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    all: {
                        width: {
                            none: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.all.width.none)
                })
            }
            if(type === 'hover'){
                this.setState({
                    all:{
                        width: {
                            hover: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.all.width.hover)
                })
            }
            if(type === 'active'){
                this.setState({
                    all: {
                        width: {
                            active: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.all.width.active)
                })
            }
            if(type === 'focus'){
                this.setState({
                    all: {
                        width: {
                            focus: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.all.width.focus)
                })
            }
        }
        if(command === 'get'){
            if(type === 'none'){
                return this.state.all.width.none
            }
            if(type === 'hover'){
                return this.state.all.width.hover
            }
            if(type === 'active'){
                return this.state.all.width.active
            }
            if(type === 'focus'){
                return this.state.all.width.focus
            }
        }
    }
    mobileWidth = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    mobile: {
                        width: {
                            none: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.mobile.width.none)
                })
            }
            if(type === 'hover'){
                this.setState({
                    mobile: {
                        width: {
                            hover: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.mobile.width.hover)
                })
            }
            if(type === 'active'){
                this.setState({
                    mobile: {
                        width: {
                            active: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.mobile.width.active)
                })
            }
            if(type === 'focus'){
                this.setState({
                    mobile: {
                        width: {
                            focus: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.mobile.width.focus)
                })
            }
        }
        if(command === 'get'){
            if(type === 'none'){
                return this.state.mobile.width.none
            }
            if(type === 'hover'){
                return this.state.mobile.width.hover
            }
            if(type === 'active'){
                return this.state.mobile.width.active
            }
            if(type === 'focus'){
                return this.state.mobile.width.focus
            }
        }
    }
    tabletWidth = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    tablet: {
                        width: {
                            none: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.tablet.width.none)
                })
            }
            if(type === 'hover'){
                this.setState({
                    tablet: {
                        width: {
                            hover: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.tablet.width.hover)
                })
            }
            if(type === 'active'){
                this.setState({
                    tablet: {
                        width: {
                            active: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.tablet.width.active)
                })
            }
            if(type === 'focus'){
                this.setState({
                    tablet: {
                        width: {
                            focus: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.tablet.width.focus)
                })
            }
        }
        if(command === 'get'){
            if(type === 'none'){
                return this.state.tablet.width.none
            }
            if(type === 'hover'){
                return this.state.tablet.width.hover
            }
            if(type === 'active'){
                return this.state.tablet.width.active
            }
            if(type === 'focus'){
                return this.state.tablet.width.focus
            }
        }
    }
    desktopWidth = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    desktop: {
                        width: {
                            none: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.desktop.width.none)
                })
            }
            if(type === 'hover'){
                this.setState({
                    desktop: {
                        width: {
                            hover: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.desktop.width.hover)
                })
            }
            if(type === 'active'){
                this.setState({
                    desktop: {
                        width: {
                            active: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.desktop.width.active)
                })
            }
            if(type === 'focus'){
                this.setState({
                    desktop: {
                        width: {
                            focus: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.desktop.width.focus)
                })
            }
        }
        if(command === 'get'){
            if(type === 'none'){
                return this.state.desktop.width.none
            }
            if(type === 'hover'){
                return this.state.desktop.width.hover
            }
            if(type === 'active'){
                return this.state.desktop.width.active
            }
            if(type === 'focus'){
                return this.state.desktop.width.focus
            }
        }
    }

    setHeight = (text: string) => {
        this.setState({
            height: text
        }, ()=>{
            console.log()
        })
    }
    setBackgroundColor = (text: string) => {
        this.setState({
            backgroundColor: text
        })
    }
    setMargin = (text: string) => {
        this.setState({
            margin: text
        })
    }
    setPadding = (text: string) => {
        this.setState({
            padding: text
        })
    }
    setBoxShadow = (text: string) => {
        this.setState({
            boxShadow: text
        })
    }
    setFont = (text: string) => {
        this.setState({
            font: text
        })
    }
    setPosition = (text: string) => {
        this.setState({
            position: text
        })
    }
    setBorder = (text: string) => {
        this.setState({

        })
    }
    setBorderColor = (text: string) => {
        this.setState({
            borderColor: text
        })
    }
    setBorderRadius = (text: string) => {
        this.setState({
            borderRadius: text
        })
    }
    setTransition = (text: string) => {
        this.setState({
            transition: text
        })
    }
    setObjectFit = (text: string) => {
        this.setState({
            objectFit: text
        })
    }

    showTagChanges = () => {
        return (
            <>
                {arrayOfWithTextElements.includes(this.props.template[this.props.elem].tagName) ?
                    <TextCard insertInfo={this.props.insertInfo}
                              elemID={this.props.elemID}
                              info={this.props.objInfo.text}/> : ''}
                {arrayOfWithoutTextElements.includes(this.props.template[this.props.elem].tagName) ? '' : ''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName) ?
                    <PlaceholderCard insertInfo={this.props.insertInfo}
                                     elemID={this.props.elemID}
                                     info={this.props.objInfo.placeholder}/> : ''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName) ?
                    <TypeCard insertInfo={this.props.insertInfo}
                              elemID={this.props.elemID}
                              info={this.props.objInfo.type}/> : ''}
                {arrayOfInput.includes(this.props.template[this.props.elem].tagName) ?
                    <IDCard insertInfo={this.props.insertInfo}
                            elemID={this.props.elemID}
                            info={this.props.objInfo.ID}/> : ''}
                {arrayOfLabel.includes(this.props.template[this.props.elem].tagName) ?
                    <ForCard insertInfo={this.props.insertInfo}
                             elemID={this.props.elemID}
                             info={this.props.objInfo.For}/> : ''}
                {arrayOfImg.includes(this.props.template[this.props.elem].tagName) ?
                    <SrcCard insertInfo={this.props.insertInfo}
                             elemID={this.props.elemID}
                             info={this.props.objInfo.src}/> : ''}
            </>

        )
    }
    showCssChanges = () => {
        return (
            <>
                <NameCard/>
                <WidthCard funcAll={this.allWidth}
                           funcMobile={this.mobileWidth}
                           funcTablet={this.tabletWidth}
                           funcDesktop={this.desktopWidth}/>
                <HeightCard/>
                <BackgroundCard/>
                <MarginCard/>
                <PaddingCard/>
                <BoxShadowCard/>
                <FontCard/>
                <PositionCard/>
                <BorderCard/>
                <BorderColorCard/>
                <BorderRadiusCard/>
                <TransitionCard/>
                <ObjectFitCard/>
            </>
            )
    }
    getCards = () => {
        if(this.props.type === 'tagChanges'){
            return this.showTagChanges()
        }
        if(this.props.type === 'cssChanges'){
            return this.showCssChanges()
        }
        return <></>
    }
    render(){
        return (
            this.getCards()
        )
    }
}

//add href

export default Cards;