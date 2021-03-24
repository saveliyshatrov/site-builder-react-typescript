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
                none: '10%',
                hover: '11%',
                active: '12%',
                focus: '13%'
            },
            height: {
                none: '1px',
                hover: '2px',
                active: '3px',
                focus: '4%'
            },
            backgroundColor: {
                none: '#AAABFF',
                hover: '#898989',
                active: '#FFFFFF',
                focus: '#FFFFFF'
            },
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
                none: '20px',
                hover: '21px',
                active: '22px',
                focus: '23px'
            },
            height: {
                none: '11px',
                hover: '12px',
                active: '13px',
                focus: '14px'
            },
            backgroundColor: {
                none: '#995634',
                hover: '#FFFFFF',
                active: '#FFFFFF',
                focus: '#FFFFFF'
            },
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
                none: '30px',
                hover: '31px',
                active: '32px',
                focus: '33px'
            },
            height: {
                none: '21px',
                hover: '22px',
                active: '23px',
                focus: '24px'
            },
            backgroundColor: {
                none: '#FFFFFF',
                hover: '#FFFFFF',
                active: '#FFFFFF',
                focus: '#FFFFFF'
            },
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
                none: '40px',
                hover: '41px',
                active: '42px',
                focus: '43px'
            },
            height: {
                none: '40px',
                hover: '41px',
                active: '42px',
                focus: '43px'
            },
            backgroundColor: {
                none: '#FFFFFF',
                hover: '#FFFFFF',
                active: '#FFFFFF',
                focus: '#FFFFFF'
            },
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
                        ...this.state.all,
                        width: {
                            ...this.state.all.width,
                            none: text,
                        }
                    }
                })
            }
            if(type === 'hover'){
                this.setState({
                    all:{
                        ...this.state.all,
                        width: {
                            ...this.state.all.width,
                            hover: text,
                        }
                    }
                })
            }
            if(type === 'active'){
                this.setState({
                    all: {
                        ...this.state.all,
                        width: {
                            ...this.state.all.width,
                            active: text
                        }
                    }
                })
            }
            if(type === 'focus'){
                this.setState({
                    all: {
                        ...this.state.all,
                        width: {
                            ...this.state.all.width,
                            focus: text
                        }
                    }
                })
            }
        }
    }
    mobileWidth = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        width: {
                            ...this.state.mobile.width,
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
                        ...this.state.mobile,
                        width: {
                            ...this.state.mobile.width,
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
                        ...this.state.mobile,
                        width: {
                            ...this.state.mobile.width,
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
                        ...this.state.mobile,
                        width: {
                            ...this.state.mobile.width,
                            focus: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.mobile.width.focus)
                })
            }
        }
    }
    tabletWidth = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        width: {
                            ...this.state.tablet.width,
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
                        ...this.state.tablet,
                        width: {
                            ...this.state.tablet.width,
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
                        ...this.state.tablet,
                        width: {
                            ...this.state.tablet.width,
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
                        ...this.state.tablet,
                        width: {
                            ...this.state.tablet.width,
                            focus: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.tablet.width.focus)
                })
            }
        }
    }
    desktopWidth = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    desktop: {
                        ...this.state.tablet,
                        width: {
                            ...this.state.desktop.width,
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
                        ...this.state.tablet,
                        width: {
                            ...this.state.desktop.width,
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
                        ...this.state.tablet,
                        width: {
                            ...this.state.desktop.width,
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
                        ...this.state.tablet,
                        width: {
                            ...this.state.desktop.width,
                            focus: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.desktop.width.focus)
                })
            }
        }
    }

    allHeight = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    all: {
                        ...this.state.all,
                        height: {
                            ...this.state.all.height,
                            none: text,
                        }
                    }
                })
            }
            if(type === 'hover'){
                this.setState({
                    all:{
                        ...this.state.all,
                        height: {
                            ...this.state.all.height,
                            hover: text,
                        }
                    }
                })
            }
            if(type === 'active'){
                this.setState({
                    all: {
                        ...this.state.all,
                        height: {
                            ...this.state.all.height,
                            active: text
                        }
                    }
                })
            }
            if(type === 'focus'){
                this.setState({
                    all: {
                        ...this.state.all,
                        height: {
                            ...this.state.all.height,
                            focus: text
                        }
                    }
                })
            }
        }
    }
    mobileHeight = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        height: {
                            ...this.state.mobile.height,
                            none: text
                        }
                    }
                }, ()=>{
                    console.log(this.state.mobile.height.none)
                })
            }
            if(type === 'hover'){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        height: {
                            ...this.state.mobile.height,
                            hover: text
                        }
                    }
                })
            }
            if(type === 'active'){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        height: {
                            ...this.state.mobile.height,
                            active: text
                        }
                    }
                })
            }
            if(type === 'focus'){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        height: {
                            ...this.state.mobile.height,
                            focus: text
                        }
                    }
                })
            }
        }
    }
    tabletHeight = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        height: {
                            ...this.state.tablet.height,
                            none: text
                        }
                    }
                })
            }
            if(type === 'hover'){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        height: {
                            ...this.state.tablet.height,
                            hover: text
                        }
                    }
                })
            }
            if(type === 'active'){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        height: {
                            ...this.state.tablet.height,
                            active: text
                        }
                    }
                })
            }
            if(type === 'focus'){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        height: {
                            ...this.state.tablet.height,
                            focus: text
                        }
                    }
                })
            }
        }
    }
    desktopHeight = (text: string, command: string, type: string) => {
        if(command === 'set'){
            if(type === 'none'){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        height: {
                            ...this.state.desktop.height,
                            none: text
                        }
                    }
                })
            }
            if(type === 'hover'){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        height: {
                            ...this.state.desktop.height,
                            hover: text
                        }
                    }
                })
            }
            if(type === 'active'){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        height: {
                            ...this.state.desktop.height,
                            active: text
                        }
                    }
                })
            }
            if(type === 'focus'){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        height: {
                            ...this.state.desktop.height,
                            focus: text
                        }
                    }
                })
            }
        }
    }

    allBackgroundColor = (text: string, type: string) => {
        if(type === 'none'){
            this.setState({
                all:{
                    ...this.state.all,
                    backgroundColor: {
                        ...this.state.all.backgroundColor,
                        none: text
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                all:{
                    ...this.state.all,
                    backgroundColor: {
                        ...this.state.all.backgroundColor,
                        hover: text
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                all:{
                    ...this.state.all,
                    backgroundColor: {
                        ...this.state.all.backgroundColor,
                        active: text
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                all:{
                    ...this.state.all,
                    backgroundColor: {
                        ...this.state.all.backgroundColor,
                        focus: text
                    }
                }
            })
        }
    }
    mobileBackgroundColor = (text: string, type: string) => {
        if(type === 'none'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    backgroundColor: {
                        ...this.state.mobile.backgroundColor,
                        none: text
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    backgroundColor: {
                        ...this.state.mobile.backgroundColor,
                        hover: text
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    backgroundColor: {
                        ...this.state.mobile.backgroundColor,
                        active: text
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    backgroundColor: {
                        ...this.state.mobile.backgroundColor,
                        focus: text
                    }
                }
            })
        }
    }
    tabletBackgroundColor = (text: string, type: string) => {
        if(type === 'none'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    backgroundColor: {
                        ...this.state.tablet.backgroundColor,
                        none: text
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    backgroundColor: {
                        ...this.state.tablet.backgroundColor,
                        hover: text
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    backgroundColor: {
                        ...this.state.tablet.backgroundColor,
                        active: text
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    backgroundColor: {
                        ...this.state.tablet.backgroundColor,
                        focus: text
                    }
                }
            })
        }
    }
    desktopBackgroundColor = (text: string, type: string) => {
        if(type === 'none'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    backgroundColor: {
                        ...this.state.desktop.backgroundColor,
                        none: text
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    backgroundColor: {
                        ...this.state.desktop.backgroundColor,
                        hover: text
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    backgroundColor: {
                        ...this.state.desktop.backgroundColor,
                        active: text
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    backgroundColor: {
                        ...this.state.desktop.backgroundColor,
                        focus: text
                    }
                }
            })
        }
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
                           funcDesktop={this.desktopWidth}
                           obj={this.state}/>
                <HeightCard funcAll={this.allHeight}
                            funcMobile={this.mobileHeight}
                            funcTablet={this.tabletHeight}
                            funcDesktop={this.desktopHeight}
                            obj={this.state}/>
                <BackgroundCard funcAll={this.allBackgroundColor}
                                funcMobile={this.mobileBackgroundColor}
                                funcTablet={this.tabletBackgroundColor}
                                funcDesktop={this.desktopBackgroundColor}
                                obj={this.state}/>
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