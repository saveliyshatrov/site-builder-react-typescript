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
                none: [30, '#AAABFF', '#BA55AF'],
                hover: ['#898989'],
                active: ['#FFFFFF'],
                focus: ['#FFFFFF']
            },
            margin: ['22%'],
            padding: ['22%'],
            boxShadow: {
                none: ['1px', '2px', '3px', '4px', '#BA3A5A'],
                hover: ['11%', '21%', '31%', '41%', '#935238'],
                active: ['12px', '22px', '32px', '42px', '#723045'],
                focus: ['13px', '23px', '32px', '43px', '#103739']
            },
            font: {
                none: {
                    fontFamily: 'Arial',
                    customFontFamily: '1',
                    size: 10,
                    fontWeight: '100',
                    typeSize: '%',
                    color: '#000000',
                },
                hover: {
                    fontFamily: 'Times',
                    customFontFamily: '2',
                    size: 11,
                    fontWeight: '200',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
                active: {
                    fontFamily: 'Arial',
                    customFontFamily: '3',
                    size: 12,
                    fontWeight: '300',
                    typeSize: '%',
                    color: '#FFF000',
                },
                focus: {
                    fontFamily: 'Times',
                    customFontFamily: '4',
                    size: 13,
                    fontWeight: '400',
                    typeSize: 'px',
                    color: '#000FFF',
                },
            },
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
                none: [30, '#AAABFF', '#909090'],
                hover: ['#898989'],
                active: ['#FFFFFF'],
                focus: ['#FFFFFF']
            },
            margin: ['30px'],
            padding: ['30px'],
            boxShadow: {
                none: ['2px', '3px', '4px', '5px', '#1A3A5A'],
                hover: ['21px', '31px', '41px', '51px', '#535258'],
                active: ['22px', '32px', '42px', '52px', '#72F045'],
                focus: ['23px', '33px', '43px', '53px', '#103AA9']
            },
            font: {
                none: {
                    fontFamily: 'Times New Roman',
                    customFontFamily: '1q',
                    size: 20,
                    fontWeight: '200',
                    typeSize: '%',
                    color: '#FF0000',
                },
                hover: {
                    fontFamily: 'Impact',
                    customFontFamily: '2q',
                    size: 21,
                    fontWeight: '300',
                    typeSize: 'px',
                    color: '#00FF00',
                },
                active: {
                    fontFamily: 'Times New Roman',
                    customFontFamily: '3q',
                    size: 22,
                    fontWeight: '400',
                    typeSize: '%',
                    color: '#0000FF',
                },
                focus: {
                    fontFamily: 'Impact',
                    customFontFamily: '4q',
                    size: 24,
                    fontWeight: '500',
                    typeSize: 'px',
                    color: '#FF00FF',
                },
            },
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
                none: [40, '#AAABFF', '#909090'],
                hover: ['#898989'],
                active: ['#FFFFFF'],
                focus: ['#FFFFFF']
            },
            margin: ['1%', '11%', '21%', '31%'],
            padding: ['1%', '11%', '21%', '31%'],
            boxShadow: {
                none: ['1px', '2px', '3px', '4px', '#BA3A5A'],
                hover: ['11px', '21px', '31px', '41px', '#935238'],
                active: ['12px', '22px', '32px', '42px', '#723045'],
                focus: ['13px', '23px', '32px', '43px', '#103739']
            },
            font: {
                none: {
                    fontFamily: '',
                    customFontFamily: '',
                    size: 10,
                    fontWeight: '',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
                hover: {
                    fontFamily: '',
                    customFontFamily: '',
                    size: 10,
                    fontWeight: '',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
                active: {
                    fontFamily: '',
                    customFontFamily: '',
                    size: 10,
                    fontWeight: '',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
                focus: {
                    fontFamily: '',
                    customFontFamily: '',
                    size: 10,
                    fontWeight: '',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
            },
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
                none: [30, '#AAABFA', '#0090AA'],
                hover: ['#898989'],
                active: ['#FFFFFF'],
                focus: ['#FFFFFF']
            },
            margin: ['0px', '10px', '20px', '30px'],
            padding: ['0px', '10px', '20px', '30px'],
            boxShadow: {
                none: ['1px', '2px', '3px', '4px', '#BA3A5A'],
                hover: ['11px', '21px', '31px', '41px', '#935238'],
                active: ['12px', '22px', '32px', '42px', '#723045'],
                focus: ['13px', '23px', '32px', '43px', '#103739']
            },
            font: {
                none: {
                    fontFamily: '',
                    customFontFamily: '',
                    size: 10,
                    fontWeight: '',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
                hover: {
                    fontFamily: '',
                    customFontFamily: '',
                    size: 10,
                    fontWeight: '',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
                active: {
                    fontFamily: '',
                    customFontFamily: '',
                    size: 10,
                    fontWeight: '',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
                focus: {
                    fontFamily: '',
                    customFontFamily: '',
                    size: 10,
                    fontWeight: '',
                    typeSize: 'px',
                    color: '#FFFFFF',
                },
            },
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

    allBackgroundColor = (text: Array<any>, type: string) => {
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
    mobileBackgroundColor = (text: Array<any>, type: string) => {
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
    tabletBackgroundColor = (text: Array<any>, type: string) => {
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
    desktopBackgroundColor = (text: Array<any>, type: string) => {
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

    allMargin = (args:Array<string>) => { 
        this.setState({
            all: {
                ...this.state.all,
                margin: args
            }
        })
    }
    mobileMargin = (args:Array<string>) => { 
        this.setState({
            mobile: {
                ...this.state.mobile,
                margin: args
            }
        })
    }
    tabletMargin = (args:Array<string>) => { 
        this.setState({
            tablet: {
                ...this.state.tablet,
                margin: args
            }
        })
    }
    desktopMargin = (args:Array<string>) => { 
        this.setState({
            desktop: {
                ...this.state.desktop,
                margin: args
            }
        })
    }

    allPadding = (args:Array<string>) => { 
        this.setState({
            all: {
                ...this.state.all,
                padding: args
            }
        })
    }
    mobilePadding = (args:Array<string>) => { 
        this.setState({
            mobile: {
                ...this.state.mobile,
                padding: args
            }
        })
    }
    tabletPadding = (args:Array<string>) => { 
        this.setState({
            tablet: {
                ...this.state.tablet,
                padding: args
            }
        })
    }
    desktopPadding = (args:Array<string>) => { 
        this.setState({
            desktop: {
                ...this.state.desktop,
                padding: args
            }
        })
    }

    allBoxShadow = (args: Array<string>, type: string) => {
        if(type === 'none'){
            this.setState({
                all:{
                    ...this.state.all,
                    boxShadow: {
                        ...this.state.all.boxShadow,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                all:{
                    ...this.state.all,
                    boxShadow: {
                        ...this.state.all.boxShadow,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                all:{
                    ...this.state.all,
                    boxShadow: {
                        ...this.state.all.boxShadow,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                all:{
                    ...this.state.all,
                    boxShadow: {
                        ...this.state.all.boxShadow,
                        focus: args
                    }
                }
            })
        }
    }
    mobileBoxShadow = (args: Array<string>, type: string) => {
        if(type === 'none'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    boxShadow: {
                        ...this.state.mobile.boxShadow,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    boxShadow: {
                        ...this.state.mobile.boxShadow,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    boxShadow: {
                        ...this.state.mobile.boxShadow,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    boxShadow: {
                        ...this.state.mobile.boxShadow,
                        focus: args
                    }
                }
            })
        }
    }
    tabletBoxShadow = (args: Array<string>, type: string) => {
        if(type === 'none'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    boxShadow: {
                        ...this.state.tablet.boxShadow,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    boxShadow: {
                        ...this.state.tablet.boxShadow,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    boxShadow: {
                        ...this.state.tablet.boxShadow,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    boxShadow: {
                        ...this.state.tablet.boxShadow,
                        focus: args
                    }
                }
            })
        }
    }
    desktopBoxShadow = (args: Array<string>, type: string) => {
        if(type === 'none'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    boxShadow: {
                        ...this.state.desktop.boxShadow,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    boxShadow: {
                        ...this.state.desktop.boxShadow,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    boxShadow: {
                        ...this.state.desktop.boxShadow,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    boxShadow: {
                        ...this.state.desktop.boxShadow,
                        focus: args
                    }
                }
            })
        }
    }

    allFont = (arg: string|number, command:string, type:string) => {
        console.warn('all', arg, command, type)
        if(type === 'none'){
            this.setState({
                all: {
                    ...this.state.all,
                    font:{
                        ...this.state.all.font,
                        none: {
                            fontFamily: command==='fontFamily'?arg:this.state.all.font.none.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.all.font.none.customFontFamily,
                            size: command==='size'?arg:this.state.all.font.none.size,
                            fontWeight: command==='fontWeight'?arg:this.state.all.font.none.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.all.font.none.typeSize,
                            color: command==='color'?arg:this.state.all.font.none.color,
                        }
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                all: {
                    ...this.state.all,
                    font:{
                        ...this.state.all.font,
                        hover: {
                            fontFamily: command==='fontFamily'?arg:this.state.all.font.hover.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.all.font.hover.customFontFamily,
                            size: command==='size'?arg:this.state.all.font.hover.size,
                            fontWeight: command==='fontWeight'?arg:this.state.all.font.hover.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.all.font.hover.typeSize,
                            color: command==='color'?arg:this.state.all.font.hover.color,
                        }
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                all: {
                    ...this.state.all,
                    font:{
                        ...this.state.all.font,
                        active: {
                            fontFamily: command==='fontFamily'?arg:this.state.all.font.active.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.all.font.active.customFontFamily,
                            size: command==='size'?arg:this.state.all.font.active.size,
                            fontWeight: command==='fontWeight'?arg:this.state.all.font.active.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.all.font.active.typeSize,
                            color: command==='color'?arg:this.state.all.font.active.color,
                        }
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                all: {
                    ...this.state.all,
                    font:{
                        ...this.state.all.font,
                        focus: {
                            fontFamily: command==='fontFamily'?arg:this.state.all.font.focus.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.all.font.focus.customFontFamily,
                            size: command==='size'?arg:this.state.all.font.focus.size,
                            fontWeight: command==='fontWeight'?arg:this.state.all.font.focus.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.all.font.focus.typeSize,
                            color: command==='color'?arg:this.state.all.font.focus.color,
                        }
                    }
                }
            })
        }
    }
    mobileFont = (arg: string|number, command:string, type:string) => {
        console.warn('mobile', arg, command, type)
        if(type === 'none'){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    font:{
                        ...this.state.mobile.font,
                        none: {
                            fontFamily: command==='fontFamily'?arg:this.state.mobile.font.none.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.mobile.font.none.customFontFamily,
                            size: command==='size'?arg:this.state.mobile.font.none.size,
                            fontWeight: command==='fontWeight'?arg:this.state.mobile.font.none.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.mobile.font.none.typeSize,
                            color: command==='color'?arg:this.state.mobile.font.none.color,
                        }
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    font:{
                        ...this.state.mobile.font,
                        hover: {
                            fontFamily: command==='fontFamily'?arg:this.state.mobile.font.hover.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.mobile.font.hover.customFontFamily,
                            size: command==='size'?arg:this.state.mobile.font.hover.size,
                            fontWeight: command==='fontWeight'?arg:this.state.mobile.font.hover.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.mobile.font.hover.typeSize,
                            color: command==='color'?arg:this.state.mobile.font.hover.color,
                        }
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    font:{
                        ...this.state.mobile.font,
                        active: {
                            fontFamily: command==='fontFamily'?arg:this.state.mobile.font.active.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.mobile.font.active.customFontFamily,
                            size: command==='size'?arg:this.state.mobile.font.active.size,
                            fontWeight: command==='fontWeight'?arg:this.state.mobile.font.active.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.mobile.font.active.typeSize,
                            color: command==='color'?arg:this.state.mobile.font.active.color,
                        }
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    font:{
                        ...this.state.mobile.font,
                        focus: {
                            fontFamily: command==='fontFamily'?arg:this.state.mobile.font.focus.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.mobile.font.focus.customFontFamily,
                            size: command==='size'?arg:this.state.mobile.font.focus.size,
                            fontWeight: command==='fontWeight'?arg:this.state.mobile.font.focus.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.mobile.font.focus.typeSize,
                            color: command==='color'?arg:this.state.mobile.font.focus.color,
                        }
                    }
                }
            })
        }
    }
    tabletFont = (arg: string|number, command:string, type:string) => {
        console.warn('tablet', arg, command, type)
        if(type === 'none'){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    font:{
                        ...this.state.tablet.font,
                        none: {
                            fontFamily: command==='fontFamily'?arg:this.state.tablet.font.none.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.tablet.font.none.customFontFamily,
                            size: command==='size'?arg:this.state.tablet.font.none.size,
                            fontWeight: command==='fontWeight'?arg:this.state.tablet.font.none.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.tablet.font.none.typeSize,
                            color: command==='color'?arg:this.state.tablet.font.none.color,
                        }
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    font:{
                        ...this.state.tablet.font,
                        hover: {
                            fontFamily: command==='fontFamily'?arg:this.state.tablet.font.hover.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.tablet.font.hover.customFontFamily,
                            size: command==='size'?arg:this.state.tablet.font.hover.size,
                            fontWeight: command==='fontWeight'?arg:this.state.tablet.font.hover.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.tablet.font.hover.typeSize,
                            color: command==='color'?arg:this.state.tablet.font.hover.color,
                        }
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    font:{
                        ...this.state.tablet.font,
                        active: {
                            fontFamily: command==='fontFamily'?arg:this.state.tablet.font.active.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.tablet.font.active.customFontFamily,
                            size: command==='size'?arg:this.state.tablet.font.active.size,
                            fontWeight: command==='fontWeight'?arg:this.state.tablet.font.active.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.tablet.font.active.typeSize,
                            color: command==='color'?arg:this.state.tablet.font.active.color,
                        }
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    font:{
                        ...this.state.tablet.font,
                        focus: {
                            fontFamily: command==='fontFamily'?arg:this.state.tablet.font.focus.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.tablet.font.focus.customFontFamily,
                            size: command==='size'?arg:this.state.tablet.font.focus.size,
                            fontWeight: command==='fontWeight'?arg:this.state.tablet.font.focus.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.tablet.font.focus.typeSize,
                            color: command==='color'?arg:this.state.tablet.font.focus.color,
                        }
                    }
                }
            })
        }
    }
    desktopFont = (arg: string|number, command:string, type:string) => {
        console.warn('desktop', arg, command, type)
        if(type === 'none'){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    font:{
                        ...this.state.desktop.font,
                        none: {
                            fontFamily: command==='fontFamily'?arg:this.state.desktop.font.none.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.desktop.font.none.customFontFamily,
                            size: command==='size'?arg:this.state.desktop.font.none.size,
                            fontWeight: command==='fontWeight'?arg:this.state.desktop.font.none.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.desktop.font.none.typeSize,
                            color: command==='color'?arg:this.state.desktop.font.none.color,
                        }
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    font:{
                        ...this.state.desktop.font,
                        hover: {
                            fontFamily: command==='fontFamily'?arg:this.state.desktop.font.hover.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.desktop.font.hover.customFontFamily,
                            size: command==='size'?arg:this.state.desktop.font.hover.size,
                            fontWeight: command==='fontWeight'?arg:this.state.desktop.font.hover.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.desktop.font.hover.typeSize,
                            color: command==='color'?arg:this.state.desktop.font.hover.color,
                        }
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    font:{
                        ...this.state.desktop.font,
                        active: {
                            fontFamily: command==='fontFamily'?arg:this.state.desktop.font.active.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.desktop.font.active.customFontFamily,
                            size: command==='size'?arg:this.state.desktop.font.active.size,
                            fontWeight: command==='fontWeight'?arg:this.state.desktop.font.active.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.desktop.font.active.typeSize,
                            color: command==='color'?arg:this.state.desktop.font.active.color,
                        }
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    font:{
                        ...this.state.desktop.font,
                        focus: {
                            fontFamily: command==='fontFamily'?arg:this.state.desktop.font.focus.fontFamily,
                            customFontFamily: command==='customFontFamily'?arg:this.state.desktop.font.focus.customFontFamily,
                            size: command==='size'?arg:this.state.desktop.font.focus.size,
                            fontWeight: command==='fontWeight'?arg:this.state.desktop.font.focus.fontWeight,
                            typeSize: command==='typeSize'?arg:this.state.desktop.font.focus.typeSize,
                            color: command==='color'?arg:this.state.desktop.font.focus.color,
                        }
                    }
                }
            })
        }
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
                {/*<NameCard/>*/}
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
                <MarginCard funcAll={this.allMargin}
                            funcMobile={this.mobileMargin}
                            funcTablet={this.tabletMargin}
                            funcDesktop={this.desktopMargin}
                            obj={this.state}/>
                <PaddingCard funcAll={this.allPadding}
                             funcMobile={this.mobilePadding}
                             funcTablet={this.tabletPadding}
                             funcDesktop={this.desktopPadding}
                             obj={this.state}/>
                <BoxShadowCard funcAll={this.allBoxShadow}
                               funcMobile={this.mobileBoxShadow}
                               funcTablet={this.tabletBoxShadow}
                               funcDesktop={this.desktopBoxShadow}
                               obj={this.state}/>
                <FontCard funcAll={this.allFont}
                          funcMobile={this.mobileFont}
                          funcTablet={this.tabletFont}
                          funcDesktop={this.desktopFont}
                          obj={this.state}/>
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