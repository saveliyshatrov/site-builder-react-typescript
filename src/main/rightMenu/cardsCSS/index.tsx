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
import FlexCard from "./flexCard";

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

let SHOWDedug = true

class Cards extends Component<cardProps, any>{
    public SHOWDebug:boolean = true
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
            position: [false, true, true, false],
            border: ['22%'],
            borderColor: {
                none: ['#FFF000','#000FFF','#F0F0F0','#0F0F0F'],
                hover: ['#0F0F0F'],
                active: ['#00FFFF'],
                focus: ['#000FFF','#F0F0F0','#0F0F0F','#FFF000']
            },
            borderRadius: {
                none: ['1px', '2px', '3px', '4px'],
                hover: ['11%', '21%', '31%', '41%'],
                active: ['42px'],
                focus: ['13px']
            },
            transition: 400,
            objectFit: 'cover',
            flex: {
                enable: false,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
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
            position: [true, true, false, false],
            border: ['30px'],
            borderColor: {
                none: ['#FFF000','#000FFF','#F0F0F0','#0F0F0F'],
                hover: ['#00FFFF','#50A5F0','#0F0F0F','#FFF000'],
                active: ['#0F0F0F','#FFF000','#000FFF','#50F550'],
                focus: ['#0F0F0F']
            },
            borderRadius: {
                none: ['1px', '2px', '3px', '4px'],
                hover: ['11%', '21%', '31%', '41%'],
                active: ['42px'],
                focus: ['13px']
            },
            transition: 400,
            objectFit: 'cover',
            flex: {
                enable: false,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
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
            position: [false, false, false, false],
            border: ['1%', '11%', '21%', '31%'],
            borderColor: {
                none: ['#FF0000','#0000FF','#00FF00','#000000'],
                hover: ['#F0F0F0','#0F0F0F','#00F00F','#F00F00'],
                active: ['#FFF000'],
                focus: ['#0F0F0F']
            },
            borderRadius: {
                none: ['1px', '2px', '3px', '4px'],
                hover: ['11%', '21%', '31%', '41%'],
                active: ['42px'],
                focus: ['13px']
            },
            transition: 400,
            objectFit: 'cover',
            flex: {
                enable: false,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
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
            position: [false, false, true, true],
            border: ['0px', '10px', '20px', '30px'],
            borderColor: {
                none: ['#FFF000','#000FFF','#F0F0F0','#0F0F0F'],
                hover: ['#000FFF','#F0F0F0','#0F0F0F','#FFF000'],
                active: ['#0F0F0F','#FFF000','#000FFF','#F0F0F0'],
                focus: ['#0F0F0F']
            },
            borderRadius: {
                none: ['1px', '2px', '3px', '4px'],
                hover: ['11%', '21%', '31%', '41%'],
                active: ['42px'],
                focus: ['13px']
            },
            transition: 400,
            objectFit: 'cover',
            flex: {
                enable: false,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
        }
    }

    allWidth = (text: string, command: string, type: string) => {
        if(this.SHOWDebug){console.log('allWidth', type, text)}
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
        if(this.SHOWDebug){console.log('mobileWidth', type, text)}
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
        if(this.SHOWDebug){console.log('tabletWidth', type, text)}
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
        if(this.SHOWDebug){console.log('desktopWidth', type, text)}
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
        if(this.SHOWDebug){console.log('allHeight', type, text)}
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
        if(this.SHOWDebug){console.log('mobileHeight', type, text)}
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
        if(this.SHOWDebug){console.log('tabletHeight', type, text)}
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
        if(this.SHOWDebug){console.log('desktopHeight', type, text)}
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
        if(this.SHOWDebug){console.log('allBackgroundColor', type, text)}
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
        if(this.SHOWDebug){console.log('mobileBackgroundColor', type, text)}
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
        if(this.SHOWDebug){console.log('tabletBackgroundColor', type, text)}
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
        if(this.SHOWDebug){console.log('desktopBackgroundColor', type, text)}
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
        if(this.SHOWDebug){console.log('allMargin', args)}
        this.setState({
            all: {
                ...this.state.all,
                margin: args
            }
        })
    }
    mobileMargin = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('mobileMargin', args)}
        this.setState({
            mobile: {
                ...this.state.mobile,
                margin: args
            }
        })
    }
    tabletMargin = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('tabletMargin', args)}
        this.setState({
            tablet: {
                ...this.state.tablet,
                margin: args
            }
        })
    }
    desktopMargin = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('desktopMargin', args)}
        this.setState({
            desktop: {
                ...this.state.desktop,
                margin: args
            }
        })
    }

    allPadding = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('allPadding', args)}
        this.setState({
            all: {
                ...this.state.all,
                padding: args
            }
        })
    }
    mobilePadding = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('mobilePadding', args)}
        this.setState({
            mobile: {
                ...this.state.mobile,
                padding: args
            }
        })
    }
    tabletPadding = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('tabletPadding', args)}
        this.setState({
            tablet: {
                ...this.state.tablet,
                padding: args
            }
        })
    }
    desktopPadding = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('desktopPadding', args)}
        this.setState({
            desktop: {
                ...this.state.desktop,
                padding: args
            }
        })
    }

    allBoxShadow = (args: Array<string>, type: string) => {
        if(this.SHOWDebug){console.log('allBoxShadow', args, type)}
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
        if(this.SHOWDebug){console.log('mobileBoxShadow', args, type)}
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
        if(this.SHOWDebug){console.log('tabletBoxShadow', args, type)}
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
        if(this.SHOWDebug){console.log('desktopBoxShadow', args, type)}
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
        if(this.SHOWDebug){console.log('allFont', arg, type, command)}
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
        if(this.SHOWDebug){console.log('mobileFont', arg, type, command)}
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
        if(this.SHOWDebug){console.log('tabletFont', arg, type, command)}
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
        if(this.SHOWDebug){console.log('desktopFont', arg, type, command)}
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

    allBorder = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('allBorder', args)}
        this.setState({
            all: {
                ...this.state.all,
                border: args
            }
        })
    }
    mobileBorder = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('mobileBorder', args)}
        this.setState({
            mobile: {
                ...this.state.mobile,
                border: args
            }
        })
    }
    tabletBorder = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('tabletBorder', args)}
        this.setState({
            tablet: {
                ...this.state.tablet,
                border: args
            }
        })
    }
    desktopBorder = (args:Array<string>) => {
        if(this.SHOWDebug){console.log('desktopBorder', args)}
        this.setState({
            desktop: {
                ...this.state.desktop,
                border: args
            }
        })
    }

    allBorderRadius = (args:Array<string>, type:string) => {
        if(this.SHOWDebug){console.log('allBorderRadius', type, args)}
        if(type === 'none'){
            this.setState({
                all:{
                    ...this.state.all,
                    borderRadius: {
                        ...this.state.all.borderRadius,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                all:{
                    ...this.state.all,
                    borderRadius: {
                        ...this.state.all.borderRadius,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                all:{
                    ...this.state.all,
                    borderRadius: {
                        ...this.state.all.borderRadius,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                all:{
                    ...this.state.all,
                    borderRadius: {
                        ...this.state.all.borderRadius,
                        focus: args
                    }
                }
            })
        }
    }
    mobileBorderRadius = (args:Array<string>, type:string) => {
        if(this.SHOWDebug){console.log('mobileBorderRadius', type, args)}
        if(type === 'none'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    borderRadius: {
                        ...this.state.mobile.borderRadius,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    borderRadius: {
                        ...this.state.mobile.borderRadius,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    borderRadius: {
                        ...this.state.mobile.borderRadius,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    borderRadius: {
                        ...this.state.mobile.borderRadius,
                        focus: args
                    }
                }
            })
        }
    }
    tabletBorderRadius = (args:Array<string>, type:string) => {
        if(this.SHOWDebug){console.log('tabletBorderRadius', type, args)}
        if(type === 'none'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    borderRadius: {
                        ...this.state.tablet.borderRadius,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    borderRadius: {
                        ...this.state.tablet.borderRadius,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    borderRadius: {
                        ...this.state.tablet.borderRadius,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    borderRadius: {
                        ...this.state.tablet.borderRadius,
                        focus: args
                    }
                }
            })
        }
    }
    desktopBorderRadius = (args:Array<string>, type:string) => {
        if(this.SHOWDebug){console.log('desktopBorderRadius', type, args)}
        if(type === 'none'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    borderRadius: {
                        ...this.state.desktop.borderRadius,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    borderRadius: {
                        ...this.state.desktop.borderRadius,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    borderRadius: {
                        ...this.state.desktop.borderRadius,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    borderRadius: {
                        ...this.state.desktop.borderRadius,
                        focus: args
                    }
                }
            })
        }
    }

    allBorderColor = (args:Array<string>, type:string) => {
        if(this.SHOWDebug){console.log('allBorderColor', type, args)}
        if(type === 'none'){
            this.setState({
                all:{
                    ...this.state.all,
                    borderRadius: {
                        ...this.state.all.borderRadius,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                all:{
                    ...this.state.all,
                    borderRadius: {
                        ...this.state.all.borderRadius,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                all:{
                    ...this.state.all,
                    borderRadius: {
                        ...this.state.all.borderRadius,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                all:{
                    ...this.state.all,
                    borderRadius: {
                        ...this.state.all.borderRadius,
                        focus: args
                    }
                }
            })
        }
    }
    mobileBorderColor = (args:Array<string>, type:string) => {
        if(this.SHOWDebug){console.log('mobileBorderColor', type, args)}
        if(type === 'none'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    borderRadius: {
                        ...this.state.mobile.borderRadius,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    borderRadius: {
                        ...this.state.mobile.borderRadius,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    borderRadius: {
                        ...this.state.mobile.borderRadius,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    borderRadius: {
                        ...this.state.mobile.borderRadius,
                        focus: args
                    }
                }
            })
        }
    }
    tabletBorderColor = (args:Array<string>, type:string) => {
        if(this.SHOWDebug){console.log('tabletBorderColor', type, args)}
        if(type === 'none'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    borderRadius: {
                        ...this.state.tablet.borderRadius,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    borderRadius: {
                        ...this.state.tablet.borderRadius,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    borderRadius: {
                        ...this.state.tablet.borderRadius,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    borderRadius: {
                        ...this.state.tablet.borderRadius,
                        focus: args
                    }
                }
            })
        }
    }
    desktopBorderColor = (args:Array<string>, type:string) => {
        if(this.SHOWDebug){console.log('desktopBorderColor', type, args)}
        if(type === 'none'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    borderRadius: {
                        ...this.state.desktop.borderRadius,
                        none: args
                    }
                }
            })
        }
        if(type === 'hover'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    borderRadius: {
                        ...this.state.desktop.borderRadius,
                        hover: args
                    }
                }
            })
        }
        if(type === 'active'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    borderRadius: {
                        ...this.state.desktop.borderRadius,
                        active: args
                    }
                }
            })
        }
        if(type === 'focus'){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    borderRadius: {
                        ...this.state.desktop.borderRadius,
                        focus: args
                    }
                }
            })
        }
    }

    allPosition = (args: Array<boolean>) => {
        if(this.SHOWDebug){console.log('allPosition', args)}
        this.setState({
            all: {
                ...this.state.all,
                position: args
            }
        })
    }
    mobilePosition = (args: Array<boolean>) => {
        if(this.SHOWDebug){console.log('mobilePosition', args)}
        this.setState({
            mobile: {
                ...this.state.mobile,
                position: args
            }
        })
    }
    tabletPosition = (args: Array<boolean>) => {
        if(this.SHOWDebug){console.log('tabletPosition', args)}
        this.setState({
            tablet: {
                ...this.state.tablet,
                position: args
            }
        })
    }
    desktopPosition = (args: Array<boolean>) => {
        if(this.SHOWDebug){console.log('desktopPosition', args)}
        this.setState({
            desktop: {
                ...this.state.desktop,
                position: args
            }
        })
    }

    allTransition = (arg:number) => {
        if(this.SHOWDebug){console.log('allTransition', arg)}
        this.setState({
            all: {
                ...this.state.all,
                transition: arg
            },
            mobile: {
                ...this.state.mobile,
                transition: arg
            },
            tablet: {
                ...this.state.tablet,
                transition: arg
            },
            desktop: {
                ...this.state.desktop,
                transition: arg
            }
        })
    }
    allObjectFit = (arg: string) => {
        if(this.SHOWDebug){console.log('allObjectFit', arg)}
        this.setState({
            all: {
                ...this.state.all,
                objectFit: arg
            },
            mobile: {
                ...this.state.mobile,
                objectFit: arg
            },
            tablet: {
                ...this.state.tablet,
                objectFit: arg
            },
            desktop: {
                ...this.state.desktop,
                objectFit: arg
            }
        })
    }

    allFlex = (args:[boolean, string, string, string]) => {
        if(this.SHOWDebug){console.log('allFlex', args)}
        this.setState({
            all:{
                ...this.state.all,
                flex: {
                    enable: args[0],
                    flexDirection: args[1],
                    justifyContent: args[2],
                    alignItems: args[3]
                }
            }
        })
    }
    mobileFlex = (args:[boolean, string, string, string]) => {
        if(this.SHOWDebug){console.log('mobileFlex', args)}
        this.setState({
            all:{
                ...this.state.all,
                flex: {
                    enable: args[0],
                    flexDirection: args[1],
                    justifyContent: args[2],
                    alignItems: args[3]
                }
            }
        })
    }
    tabletFlex = (args:[boolean, string, string, string]) => {
        if(this.SHOWDebug){console.log('tabletFlex', args)}
        this.setState({
            all:{
                ...this.state.all,
                flex: {
                    enable: args[0],
                    flexDirection: args[1],
                    justifyContent: args[2],
                    alignItems: args[3]
                }
            }
        })
    }
    desktopFlex = (args:[boolean, string, string, string]) => {
        if(this.SHOWDebug){console.log('desktopFlex', args)}
        this.setState({
            all:{
                ...this.state.all,
                flex: {
                    enable: args[0],
                    flexDirection: args[1],
                    justifyContent: args[2],
                    alignItems: args[3]
                }
            }
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
                <FlexCard funcAll={this.allFlex}
                          funcMobile={this.mobileFlex}
                          funcTablet={this.tabletFlex}
                          funcDesktop={this.desktopFlex}
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
                <BorderCard funcAll={this.allBorder}
                            funcMobile={this.mobileBorder}
                            funcTablet={this.tabletBorder}
                            funcDesktop={this.desktopBorder}
                            obj={this.state}/>
                <BorderColorCard funcAll={this.allBorderColor}
                                 funcMobile={this.mobileBorderColor}
                                 funcTablet={this.tabletBorderColor}
                                 funcDesktop={this.desktopBorderColor}
                                 obj={this.state}/>
                <BorderRadiusCard funcAll={this.allBorderRadius}
                                  funcMobile={this.mobileBorderRadius}
                                  funcTablet={this.tabletBorderRadius}
                                  funcDesktop={this.desktopBorderRadius}
                                  obj={this.state}/>
                <PositionCard funcAll={this.allPosition}
                              funcMobile={this.mobilePosition}
                              funcTablet={this.tabletPosition}
                              funcDesktop={this.desktopPosition}
                              obj={this.state}/>
                <TransitionCard funcAll={this.allTransition}
                                obj={this.state.all.transition}/>
                <ObjectFitCard funcAll={this.allObjectFit}
                               obj={this.state.all.objectFit}/>
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