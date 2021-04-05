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
    type: 'cssChanges' | 'tagChanges',
    styleTemplates: any,
    styleName: string
}

class Cards extends Component<cardProps, any>{
    public SHOWDebug:boolean = false;
    state = {
        all: {
            width: {
                none: this.props.styleTemplates[this.props.styleName]?.all?.width?.none?this.props.styleTemplates[this.props.styleName].all.width.none:'0px',
                hover: this.props.styleTemplates[this.props.styleName]?.all?.width?.hover?this.props.styleTemplates[this.props.styleName].all.width.hover:'0px',
                active: this.props.styleTemplates[this.props.styleName]?.all?.width?.active?this.props.styleTemplates[this.props.styleName].all.width.active:'0px',
                focus: this.props.styleTemplates[this.props.styleName]?.all?.width?.focus?this.props.styleTemplates[this.props.styleName].all.width.focus:'0px'
            },
            height: {
                none: this.props.styleTemplates[this.props.styleName]?.all?.height?.none?this.props.styleTemplates[this.props.styleName].all.height.none:'0px',
                hover: this.props.styleTemplates[this.props.styleName]?.all?.height?.hover?this.props.styleTemplates[this.props.styleName].all.height.hover:'0px',
                active: this.props.styleTemplates[this.props.styleName]?.all?.height?.active?this.props.styleTemplates[this.props.styleName].all.height.active:'0px',
                focus: this.props.styleTemplates[this.props.styleName]?.all?.height?.focus?this.props.styleTemplates[this.props.styleName].all.height.focus:'0px'
            },
            backgroundColor: {
                none: this.props.styleTemplates[this.props.styleName]?.all?.backgroundColor?.none?this.props.styleTemplates[this.props.styleName].all.backgroundColor.none:['#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.all?.backgroundColor?.hover?this.props.styleTemplates[this.props.styleName].all.backgroundColor.hover:['#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.all?.backgroundColor?.active?this.props.styleTemplates[this.props.styleName].all.backgroundColor.active:['#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.all?.backgroundColor?.focus?this.props.styleTemplates[this.props.styleName].all.backgroundColor.focus:['#000000']
            },
            margin: this.props.styleTemplates[this.props.styleName]?.all?.margin?this.props.styleTemplates[this.props.styleName].all.margin:['0px'],
            padding: this.props.styleTemplates[this.props.styleName]?.all?.padding?this.props.styleTemplates[this.props.styleName].all.padding:['0px'],
            boxShadow: {
                none: this.props.styleTemplates[this.props.styleName]?.all?.boxShadow?.none?this.props.styleTemplates[this.props.styleName].all.boxShadow.none:['0px', '0px', '0px', '0px', '#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.all?.boxShadow?.hover?this.props.styleTemplates[this.props.styleName].all.boxShadow.hover:['0px', '0px', '0px', '0px', '#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.all?.boxShadow?.active?this.props.styleTemplates[this.props.styleName].all.boxShadow.active:['0px', '0px', '0px', '0px', '#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.all?.boxShadow?.focus?this.props.styleTemplates[this.props.styleName].all.boxShadow.focus:['0px', '0px', '0px', '0px', '#000000']
            },
            font: {
                none: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.fontFamily?this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.size?this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.fontWeight?this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.typeSize?this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.color?this.props.styleTemplates[this.props.styleName]?.all?.font?.none?.color:'#000000'
                },
                hover: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.fontFamily?this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.size?this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.fontWeight?this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.typeSize?this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.color?this.props.styleTemplates[this.props.styleName]?.all?.font?.hover?.color:'#000000'
                },
                active: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.fontFamily?this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.size?this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.fontWeight?this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.typeSize?this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.color?this.props.styleTemplates[this.props.styleName]?.all?.font?.active?.color:'#000000'
                },
                focus: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.fontFamily?this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.size?this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.fontWeight?this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.typeSize?this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.color?this.props.styleTemplates[this.props.styleName]?.all?.font?.focus?.color:'#000000'
                },
            },
            position: this.props.styleTemplates[this.props.styleName]?.all?.position?this.props.styleTemplates[this.props.styleName].all.position:[false, false, false, false],
            border: this.props.styleTemplates[this.props.styleName]?.all?.border?this.props.styleTemplates[this.props.styleName].all.border:['0px'],
            borderColor: {
                none: this.props.styleTemplates[this.props.styleName]?.all?.borderColor?.none?this.props.styleTemplates[this.props.styleName].all.borderColor.none:['#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.all?.borderColor?.hover?this.props.styleTemplates[this.props.styleName].all.borderColor.hover:['#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.all?.borderColor?.active?this.props.styleTemplates[this.props.styleName].all.borderColor.active:['#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.all?.borderColor?.focus?this.props.styleTemplates[this.props.styleName].all.borderColor.focus:['#000000'],
            },
            borderRadius: {
                none: this.props.styleTemplates[this.props.styleName]?.all?.borderRadius?.none?this.props.styleTemplates[this.props.styleName].all.borderRadius.none:['0px'],
                hover: this.props.styleTemplates[this.props.styleName]?.all?.borderRadius?.hover?this.props.styleTemplates[this.props.styleName].all.borderRadius.hover:['0px'],
                active: this.props.styleTemplates[this.props.styleName]?.all?.borderRadius?.active?this.props.styleTemplates[this.props.styleName].all.borderRadius.active:['0px'],
                focus: this.props.styleTemplates[this.props.styleName]?.all?.borderRadius?.focus?this.props.styleTemplates[this.props.styleName].all.borderRadius.focus:['0px'],
            },
            transition: this.props.styleTemplates[this.props.styleName]?.all?.transition?this.props.styleTemplates[this.props.styleName].all.transition:400,
            objectFit: this.props.styleTemplates[this.props.styleName]?.all?.objectFit?this.props.styleTemplates[this.props.styleName].all.objectFit:'none',
            flex: {
                enable: this.props.styleTemplates[this.props.styleName]?.all?.flex?.enable?this.props.styleTemplates[this.props.styleName].all.flex.enable:false,
                flexDirection: this.props.styleTemplates[this.props.styleName]?.all?.flex?.flexDirection?this.props.styleTemplates[this.props.styleName].all.flex.flexDirection:'row',
                justifyContent: this.props.styleTemplates[this.props.styleName]?.all?.flex?.justifyContent?this.props.styleTemplates[this.props.styleName].all.flex.justifyContent:'space-around',
                alignItems: this.props.styleTemplates[this.props.styleName]?.all?.flex?.alignItems?this.props.styleTemplates[this.props.styleName].all.flex.alignItems:'center'
            }
        },
        mobile: {
            width: {
                none: this.props.styleTemplates[this.props.styleName]?.mobile?.width?.none?this.props.styleTemplates[this.props.styleName].mobile.width.none:'0px',
                hover: this.props.styleTemplates[this.props.styleName]?.mobile?.width?.hover?this.props.styleTemplates[this.props.styleName].mobile.width.hover:'0px',
                active: this.props.styleTemplates[this.props.styleName]?.mobile?.width?.active?this.props.styleTemplates[this.props.styleName].mobile.width.active:'0px',
                focus: this.props.styleTemplates[this.props.styleName]?.mobile?.width?.focus?this.props.styleTemplates[this.props.styleName].mobile.width.focus:'0px'
            },
            height: {
                none: this.props.styleTemplates[this.props.styleName]?.mobile?.height?.none?this.props.styleTemplates[this.props.styleName].mobile.height.none:'0px',
                hover: this.props.styleTemplates[this.props.styleName]?.mobile?.height?.hover?this.props.styleTemplates[this.props.styleName].mobile.height.hover:'0px',
                active: this.props.styleTemplates[this.props.styleName]?.mobile?.height?.active?this.props.styleTemplates[this.props.styleName].mobile.height.active:'0px',
                focus: this.props.styleTemplates[this.props.styleName]?.mobile?.height?.focus?this.props.styleTemplates[this.props.styleName].mobile.height.focus:'0px'
            },
            backgroundColor: {
                none: this.props.styleTemplates[this.props.styleName]?.mobile?.backgroundColor?.none?this.props.styleTemplates[this.props.styleName].mobile.backgroundColor.none:['#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.mobile?.backgroundColor?.hover?this.props.styleTemplates[this.props.styleName].mobile.backgroundColor.hover:['#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.mobile?.backgroundColor?.active?this.props.styleTemplates[this.props.styleName].mobile.backgroundColor.active:['#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.mobile?.backgroundColor?.focus?this.props.styleTemplates[this.props.styleName].mobile.backgroundColor.focus:['#000000']
            },
            margin: this.props.styleTemplates[this.props.styleName]?.mobile?.margin?this.props.styleTemplates[this.props.styleName].mobile.margin:['0px'],
            padding: this.props.styleTemplates[this.props.styleName]?.mobile?.padding?this.props.styleTemplates[this.props.styleName].mobile.padding:['0px'],
            boxShadow: {
                none: this.props.styleTemplates[this.props.styleName]?.mobile?.boxShadow?.none?this.props.styleTemplates[this.props.styleName].mobile.boxShadow.none:['0px', '0px', '0px', '0px', '#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.mobile?.boxShadow?.hover?this.props.styleTemplates[this.props.styleName].mobile.boxShadow.hover:['0px', '0px', '0px', '0px', '#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.mobile?.boxShadow?.active?this.props.styleTemplates[this.props.styleName].mobile.boxShadow.active:['0px', '0px', '0px', '0px', '#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.mobile?.boxShadow?.focus?this.props.styleTemplates[this.props.styleName].mobile.boxShadow.focus:['0px', '0px', '0px', '0px', '#000000']
            },
            font: {
                none: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.fontFamily?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.size?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.fontWeight?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.typeSize?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.color?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.none?.color:'#000000'
                },
                hover: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.fontFamily?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.size?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.fontWeight?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.typeSize?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.color?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.hover?.color:'#000000'
                },
                active: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.fontFamily?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.size?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.fontWeight?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.typeSize?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.color?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.active?.color:'#000000'
                },
                focus: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.fontFamily?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.size?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.fontWeight?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.typeSize?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.color?this.props.styleTemplates[this.props.styleName]?.mobile?.font?.focus?.color:'#000000'
                },
            },
            position: this.props.styleTemplates[this.props.styleName]?.mobile?.position?this.props.styleTemplates[this.props.styleName].mobile.position:[false, false, false, false],
            border: this.props.styleTemplates[this.props.styleName]?.mobile?.border?this.props.styleTemplates[this.props.styleName].mobile.border:['0px'],
            borderColor: {
                none: this.props.styleTemplates[this.props.styleName]?.mobile?.borderColor?.none?this.props.styleTemplates[this.props.styleName].mobile.borderColor.none:['#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.mobile?.borderColor?.hover?this.props.styleTemplates[this.props.styleName].mobile.borderColor.hover:['#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.mobile?.borderColor?.active?this.props.styleTemplates[this.props.styleName].mobile.borderColor.active:['#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.mobile?.borderColor?.focus?this.props.styleTemplates[this.props.styleName].mobile.borderColor.focus:['#000000'],
            },
            borderRadius: {
                none: this.props.styleTemplates[this.props.styleName]?.mobile?.borderRadius?.none?this.props.styleTemplates[this.props.styleName].mobile.borderRadius.none:['0px'],
                hover: this.props.styleTemplates[this.props.styleName]?.mobile?.borderRadius?.hover?this.props.styleTemplates[this.props.styleName].mobile.borderRadius.hover:['0px'],
                active: this.props.styleTemplates[this.props.styleName]?.mobile?.borderRadius?.active?this.props.styleTemplates[this.props.styleName].mobile.borderRadius.active:['0px'],
                focus: this.props.styleTemplates[this.props.styleName]?.mobile?.borderRadius?.focus?this.props.styleTemplates[this.props.styleName].mobile.borderRadius.focus:['0px'],
            },
            transition: this.props.styleTemplates[this.props.styleName]?.mobile?.transition?this.props.styleTemplates[this.props.styleName].mobile.transition:400,
            objectFit: this.props.styleTemplates[this.props.styleName]?.mobile?.objectFit?this.props.styleTemplates[this.props.styleName].mobile.objectFit:'none',
            flex: {
                enable: this.props.styleTemplates[this.props.styleName]?.mobile?.flex?.enable?this.props.styleTemplates[this.props.styleName].mobile.flex.enable:false,
                flexDirection: this.props.styleTemplates[this.props.styleName]?.mobile?.flex?.flexDirection?this.props.styleTemplates[this.props.styleName].mobile.flex.flexDirection:'row',
                justifyContent: this.props.styleTemplates[this.props.styleName]?.mobile?.flex?.justifyContent?this.props.styleTemplates[this.props.styleName].mobile.flex.justifyContent:'space-around',
                alignItems: this.props.styleTemplates[this.props.styleName]?.mobile?.flex?.alignItems?this.props.styleTemplates[this.props.styleName].mobile.flex.alignItems:'center'
            }
        },
        tablet: {
            width: {
                none: this.props.styleTemplates[this.props.styleName]?.tablet?.width?.none?this.props.styleTemplates[this.props.styleName].tablet.width.none:'0px',
                hover: this.props.styleTemplates[this.props.styleName]?.tablet?.width?.hover?this.props.styleTemplates[this.props.styleName].tablet.width.hover:'0px',
                active: this.props.styleTemplates[this.props.styleName]?.tablet?.width?.active?this.props.styleTemplates[this.props.styleName].tablet.width.active:'0px',
                focus: this.props.styleTemplates[this.props.styleName]?.tablet?.width?.focus?this.props.styleTemplates[this.props.styleName].tablet.width.focus:'0px'
            },
            height: {
                none: this.props.styleTemplates[this.props.styleName]?.tablet?.height?.none?this.props.styleTemplates[this.props.styleName].tablet.height.none:'0px',
                hover: this.props.styleTemplates[this.props.styleName]?.tablet?.height?.hover?this.props.styleTemplates[this.props.styleName].tablet.height.hover:'0px',
                active: this.props.styleTemplates[this.props.styleName]?.tablet?.height?.active?this.props.styleTemplates[this.props.styleName].tablet.height.active:'0px',
                focus: this.props.styleTemplates[this.props.styleName]?.tablet?.height?.focus?this.props.styleTemplates[this.props.styleName].tablet.height.focus:'0px'
            },
            backgroundColor: {
                none: this.props.styleTemplates[this.props.styleName]?.tablet?.backgroundColor?.none?this.props.styleTemplates[this.props.styleName].tablet.backgroundColor.none:['#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.tablet?.backgroundColor?.hover?this.props.styleTemplates[this.props.styleName].tablet.backgroundColor.hover:['#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.tablet?.backgroundColor?.active?this.props.styleTemplates[this.props.styleName].tablet.backgroundColor.active:['#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.tablet?.backgroundColor?.focus?this.props.styleTemplates[this.props.styleName].tablet.backgroundColor.focus:['#000000']
            },
            margin: this.props.styleTemplates[this.props.styleName]?.tablet?.margin?this.props.styleTemplates[this.props.styleName].tablet.margin:['0px'],
            padding: this.props.styleTemplates[this.props.styleName]?.tablet?.padding?this.props.styleTemplates[this.props.styleName].tablet.padding:['0px'],
            boxShadow: {
                none: this.props.styleTemplates[this.props.styleName]?.tablet?.boxShadow?.none?this.props.styleTemplates[this.props.styleName].tablet.boxShadow.none:['0px', '0px', '0px', '0px', '#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.tablet?.boxShadow?.hover?this.props.styleTemplates[this.props.styleName].tablet.boxShadow.hover:['0px', '0px', '0px', '0px', '#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.tablet?.boxShadow?.active?this.props.styleTemplates[this.props.styleName].tablet.boxShadow.active:['0px', '0px', '0px', '0px', '#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.tablet?.boxShadow?.focus?this.props.styleTemplates[this.props.styleName].tablet.boxShadow.focus:['0px', '0px', '0px', '0px', '#000000']
            },
            font: {
                none: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.fontFamily?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.size?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.fontWeight?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.typeSize?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.color?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.none?.color:'#000000'
                },
                hover: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.fontFamily?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.size?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.fontWeight?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.typeSize?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.color?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.hover?.color:'#000000'
                },
                active: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.fontFamily?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.size?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.fontWeight?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.typeSize?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.color?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.active?.color:'#000000'
                },
                focus: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.fontFamily?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.size?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.fontWeight?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.typeSize?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.color?this.props.styleTemplates[this.props.styleName]?.tablet?.font?.focus?.color:'#000000'
                },
            },
            position: this.props.styleTemplates[this.props.styleName]?.tablet?.position?this.props.styleTemplates[this.props.styleName].tablet.position:[false, false, false, false],
            border: this.props.styleTemplates[this.props.styleName]?.tablet?.border?this.props.styleTemplates[this.props.styleName].tablet.border:['0px'],
            borderColor: {
                none: this.props.styleTemplates[this.props.styleName]?.tablet?.borderColor?.none?this.props.styleTemplates[this.props.styleName].tablet.borderColor.none:['#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.tablet?.borderColor?.hover?this.props.styleTemplates[this.props.styleName].tablet.borderColor.hover:['#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.tablet?.borderColor?.active?this.props.styleTemplates[this.props.styleName].tablet.borderColor.active:['#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.tablet?.borderColor?.focus?this.props.styleTemplates[this.props.styleName].tablet.borderColor.focus:['#000000'],
            },
            borderRadius: {
                none: this.props.styleTemplates[this.props.styleName]?.tablet?.borderRadius?.none?this.props.styleTemplates[this.props.styleName].tablet.borderRadius.none:['0px'],
                hover: this.props.styleTemplates[this.props.styleName]?.tablet?.borderRadius?.hover?this.props.styleTemplates[this.props.styleName].tablet.borderRadius.hover:['0px'],
                active: this.props.styleTemplates[this.props.styleName]?.tablet?.borderRadius?.active?this.props.styleTemplates[this.props.styleName].tablet.borderRadius.active:['0px'],
                focus: this.props.styleTemplates[this.props.styleName]?.tablet?.borderRadius?.focus?this.props.styleTemplates[this.props.styleName].tablet.borderRadius.focus:['0px'],
            },
            transition: this.props.styleTemplates[this.props.styleName]?.tablet?.transition?this.props.styleTemplates[this.props.styleName].tablet.transition:400,
            objectFit: this.props.styleTemplates[this.props.styleName]?.tablet?.objectFit?this.props.styleTemplates[this.props.styleName].tablet.objectFit:'none',
            flex: {
                enable: this.props.styleTemplates[this.props.styleName]?.tablet?.flex?.enable?this.props.styleTemplates[this.props.styleName].tablet.flex.enable:false,
                flexDirection: this.props.styleTemplates[this.props.styleName]?.tablet?.flex?.flexDirection?this.props.styleTemplates[this.props.styleName].tablet.flex.flexDirection:'row',
                justifyContent: this.props.styleTemplates[this.props.styleName]?.tablet?.flex?.justifyContent?this.props.styleTemplates[this.props.styleName].tablet.flex.justifyContent:'space-around',
                alignItems: this.props.styleTemplates[this.props.styleName]?.tablet?.flex?.alignItems?this.props.styleTemplates[this.props.styleName].tablet.flex.alignItems:'center'
            }
        },
        desktop: {
            width: {
                none: this.props.styleTemplates[this.props.styleName]?.desktop?.width?.none?this.props.styleTemplates[this.props.styleName].desktop.width.none:'0px',
                hover: this.props.styleTemplates[this.props.styleName]?.desktop?.width?.hover?this.props.styleTemplates[this.props.styleName].desktop.width.hover:'0px',
                active: this.props.styleTemplates[this.props.styleName]?.desktop?.width?.active?this.props.styleTemplates[this.props.styleName].desktop.width.active:'0px',
                focus: this.props.styleTemplates[this.props.styleName]?.desktop?.width?.focus?this.props.styleTemplates[this.props.styleName].desktop.width.focus:'0px'
            },
            height: {
                none: this.props.styleTemplates[this.props.styleName]?.desktop?.height?.none?this.props.styleTemplates[this.props.styleName].desktop.height.none:'0px',
                hover: this.props.styleTemplates[this.props.styleName]?.desktop?.height?.hover?this.props.styleTemplates[this.props.styleName].desktop.height.hover:'0px',
                active: this.props.styleTemplates[this.props.styleName]?.desktop?.height?.active?this.props.styleTemplates[this.props.styleName].desktop.height.active:'0px',
                focus: this.props.styleTemplates[this.props.styleName]?.desktop?.height?.focus?this.props.styleTemplates[this.props.styleName].desktop.height.focus:'0px'
            },
            backgroundColor: {
                none: this.props.styleTemplates[this.props.styleName]?.desktop?.backgroundColor?.none?this.props.styleTemplates[this.props.styleName].desktop.backgroundColor.none:['#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.desktop?.backgroundColor?.hover?this.props.styleTemplates[this.props.styleName].desktop.backgroundColor.hover:['#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.desktop?.backgroundColor?.active?this.props.styleTemplates[this.props.styleName].desktop.backgroundColor.active:['#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.desktop?.backgroundColor?.focus?this.props.styleTemplates[this.props.styleName].desktop.backgroundColor.focus:['#000000']
            },
            margin: this.props.styleTemplates[this.props.styleName]?.desktop?.margin?this.props.styleTemplates[this.props.styleName].desktop.margin:['0px'],
            padding: this.props.styleTemplates[this.props.styleName]?.desktop?.padding?this.props.styleTemplates[this.props.styleName].desktop.padding:['0px'],
            boxShadow: {
                none: this.props.styleTemplates[this.props.styleName]?.desktop?.boxShadow?.none?this.props.styleTemplates[this.props.styleName].desktop.boxShadow.none:['0px', '0px', '0px', '0px', '#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.desktop?.boxShadow?.hover?this.props.styleTemplates[this.props.styleName].desktop.boxShadow.hover:['0px', '0px', '0px', '0px', '#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.desktop?.boxShadow?.active?this.props.styleTemplates[this.props.styleName].desktop.boxShadow.active:['0px', '0px', '0px', '0px', '#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.desktop?.boxShadow?.focus?this.props.styleTemplates[this.props.styleName].desktop.boxShadow.focus:['0px', '0px', '0px', '0px', '#000000']
            },
            font: {
                none: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.fontFamily?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.size?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.fontWeight?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.typeSize?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.color?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.none?.color:'#000000'
                },
                hover: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.fontFamily?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.size?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.fontWeight?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.typeSize?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.color?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.hover?.color:'#000000'
                },
                active: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.fontFamily?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.size?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.fontWeight?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.typeSize?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.color?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.active?.color:'#000000'
                },
                focus: {
                    fontFamily: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.fontFamily?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.fontFamily:'Arial',
                    customFontFamily: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.customFontFamily?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.customFontFamily:'',
                    size: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.size?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.size:10,
                    fontWeight: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.fontWeight?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.fontWeight:'100',
                    typeSize: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.typeSize?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.typeSize:'px',
                    color: this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.color?this.props.styleTemplates[this.props.styleName]?.desktop?.font?.focus?.color:'#000000'
                },
            },
            position: this.props.styleTemplates[this.props.styleName]?.desktop?.position?this.props.styleTemplates[this.props.styleName].desktop.position:[false, false, false, false],
            border: this.props.styleTemplates[this.props.styleName]?.desktop?.border?this.props.styleTemplates[this.props.styleName].desktop.border:['0px'],
            borderColor: {
                none: this.props.styleTemplates[this.props.styleName]?.desktop?.borderColor?.none?this.props.styleTemplates[this.props.styleName].desktop.borderColor.none:['#000000'],
                hover: this.props.styleTemplates[this.props.styleName]?.desktop?.borderColor?.hover?this.props.styleTemplates[this.props.styleName].desktop.borderColor.hover:['#000000'],
                active: this.props.styleTemplates[this.props.styleName]?.desktop?.borderColor?.active?this.props.styleTemplates[this.props.styleName].desktop.borderColor.active:['#000000'],
                focus: this.props.styleTemplates[this.props.styleName]?.desktop?.borderColor?.focus?this.props.styleTemplates[this.props.styleName].desktop.borderColor.focus:['#000000'],
            },
            borderRadius: {
                none: this.props.styleTemplates[this.props.styleName]?.desktop?.borderRadius?.none?this.props.styleTemplates[this.props.styleName].desktop.borderRadius.none:['0px'],
                hover: this.props.styleTemplates[this.props.styleName]?.desktop?.borderRadius?.hover?this.props.styleTemplates[this.props.styleName].desktop.borderRadius.hover:['0px'],
                active: this.props.styleTemplates[this.props.styleName]?.desktop?.borderRadius?.active?this.props.styleTemplates[this.props.styleName].desktop.borderRadius.active:['0px'],
                focus: this.props.styleTemplates[this.props.styleName]?.desktop?.borderRadius?.focus?this.props.styleTemplates[this.props.styleName].desktop.borderRadius.focus:['0px'],
            },
            transition: this.props.styleTemplates[this.props.styleName]?.desktop?.transition?this.props.styleTemplates[this.props.styleName].desktop.transition:400,
            objectFit: this.props.styleTemplates[this.props.styleName]?.desktop?.objectFit?this.props.styleTemplates[this.props.styleName].desktop.objectFit:'none',
            flex: {
                enable: this.props.styleTemplates[this.props.styleName]?.desktop?.flex?.enable?this.props.styleTemplates[this.props.styleName].desktop.flex.enable:false,
                flexDirection: this.props.styleTemplates[this.props.styleName]?.desktop?.flex?.flexDirection?this.props.styleTemplates[this.props.styleName].desktop.flex.flexDirection:'row',
                justifyContent: this.props.styleTemplates[this.props.styleName]?.desktop?.flex?.justifyContent?this.props.styleTemplates[this.props.styleName].desktop.flex.justifyContent:'space-around',
                alignItems: this.props.styleTemplates[this.props.styleName]?.desktop?.flex?.alignItems?this.props.styleTemplates[this.props.styleName].desktop.flex.alignItems:'center'
            }
        }
    }

    createObject = () => {
        if(this.props.styleTemplates[this.props.styleName] === undefined){
            this.props.styleTemplates[this.props.styleName] = {
                all: {
                    width: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    height: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    backgroundColor: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    margin: undefined,
                    padding: undefined,
                    boxShadow: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    font: {
                        none: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        hover: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        active: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        focus: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        }
                    },
                    position:undefined,
                    border: undefined,
                    borderColor: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    borderRadius: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    transition: undefined,
                    objectFit: undefined,
                    flex: {
                        enable: undefined,
                        flexDirection: undefined,
                        justifyContent: undefined,
                        alignItems: undefined
                    }
                },
                mobile: {
                    width: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    height: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    backgroundColor: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    margin: undefined,
                    padding: undefined,
                    boxShadow: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    font: {
                        none: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        hover: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        active: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        focus: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        }
                    },
                    position:undefined,
                    border: undefined,
                    borderColor: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    borderRadius: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    transition: undefined,
                    objectFit: undefined,
                    flex: {
                        enable: undefined,
                        flexDirection: undefined,
                        justifyContent: undefined,
                        alignItems: undefined
                    }
                },
                tablet: {
                    width: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    height: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    backgroundColor: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    margin: undefined,
                    padding: undefined,
                    boxShadow: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    font: {
                        none: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        hover: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        active: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        focus: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        }
                    },
                    position:undefined,
                    border: undefined,
                    borderColor: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    borderRadius: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    transition: undefined,
                    objectFit: undefined,
                    flex: {
                        enable: undefined,
                        flexDirection: undefined,
                        justifyContent: undefined,
                        alignItems: undefined
                    }
                },
                desktop: {
                    width: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    height: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    backgroundColor: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    margin: undefined,
                    padding: undefined,
                    boxShadow: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    font: {
                        none: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        hover: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        active: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        },
                        focus: {
                            fontFamily: undefined,
                            customFontFamily: undefined,
                            size: undefined,
                            fontWeight: undefined,
                            typeSize: undefined,
                            color: undefined
                        }
                    },
                    position:undefined,
                    border: undefined,
                    borderColor: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    borderRadius: {
                        none: undefined,
                        hover: undefined,
                        active: undefined,
                        focus: undefined
                    },
                    transition: undefined,
                    objectFit: undefined,
                    flex: {
                        enable: undefined,
                        flexDirection: undefined,
                        justifyContent: undefined,
                        alignItems: undefined
                    }
                }
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
                }, ()=>{
                    this.createObject()
                    this.props.styleTemplates[this.props.styleName].all.width.none = this.state.all.width.none;
                    console.log(this.props.styleTemplates[this.props.styleName])
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
                }, ()=>{
                    this.createObject()
                    this.props.styleTemplates[this.props.styleName].all.width.hover = this.state.all.width.hover;
                    console.log(this.props.styleTemplates[this.props.styleName])
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
                }, ()=>{
                    this.createObject()
                    this.props.styleTemplates[this.props.styleName].all.width.active = this.state.all.width.active;
                    console.log(this.props.styleTemplates[this.props.styleName])
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
                }, ()=>{
                    this.createObject()
                    this.props.styleTemplates[this.props.styleName].all.width.focus = this.state.all.width.focus;
                    console.log(this.props.styleTemplates[this.props.styleName])
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
