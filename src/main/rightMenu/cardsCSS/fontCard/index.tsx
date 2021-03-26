import React, {Component} from "react";
import {
    ButtonArrowDown,
    ButtonArrowUp,
    ButtonsArrows,
    CardHeader,
    CustomInputBlock,
    DivOptions, DivOptionsRow2, DivOptionsTwo,
    Select, DivMargin, DivName, CustomInputBlockAll,
    Input, ButtonHeaderCard, DivOptionsSelector
} from "../elems";
import styled from "styled-components";
import InputColor from "react-input-color";


const InputS = styled.input`
  width: 100%;
  height: 27px;
  padding: 0px 9px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #545454;
  color: white;
  outline: none;
  font-size: 11px;
  transition: all 0.2s ease;
  cursor: pointer;
  :hover{
    border: 1px solid #404040;
  }
  :focus{
    border: 1px solid lightgray;
  }
`

export default class FontCard extends Component<any, any> {
    state = {
        all:{
            none:{
                fontFamily: this.props.obj.all.font.none.fontFamily!==''?this.props.obj.all.font.none.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.all.font.none.customFontFamily!==''?this.props.obj.all.font.none.customFontFamily:'',
                size: this.props.obj.all.font.none.size,
                fontWeight: this.props.obj.all.font.none.fontWeight!==''?this.props.obj.all.font.none.fontWeight:'300',
                typeSize: this.props.obj.all.font.none.typeSize,
                color: this.props.obj.all.font.none.color,
            },
            hover:{
                fontFamily: this.props.obj.all.font.hover.fontFamily!==''?this.props.obj.all.font.hover.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.all.font.hover.customFontFamily!==''?this.props.obj.all.font.hover.customFontFamily:'',
                size: this.props.obj.all.font.hover.size,
                fontWeight: this.props.obj.all.font.hover.fontWeight!==''?this.props.obj.all.font.hover.fontWeight:'300',
                typeSize: this.props.obj.all.font.hover.typeSize,
                color: this.props.obj.all.font.hover.color,
            },
            active:{
                fontFamily: this.props.obj.all.font.active.fontFamily!==''?this.props.obj.all.font.active.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.all.font.active.customFontFamily!==''?this.props.obj.all.font.active.customFontFamily:'',
                size: this.props.obj.all.font.active.size,
                fontWeight: this.props.obj.all.font.active.fontWeight!==''?this.props.obj.all.font.active.fontWeight:'300',
                typeSize: this.props.obj.all.font.active.typeSize,
                color: this.props.obj.all.font.active.color,
            },
            focus:{
                fontFamily: this.props.obj.all.font.focus.fontFamily!==''?this.props.obj.all.font.focus.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.all.font.focus.customFontFamily!==''?this.props.obj.all.font.focus.customFontFamily:'',
                size: this.props.obj.all.font.focus.size,
                fontWeight: this.props.obj.all.font.focus.fontWeight!==''?this.props.obj.all.font.focus.fontWeight:'300',
                typeSize: this.props.obj.all.font.focus.typeSize,
                color: this.props.obj.all.font.focus.color,
            }
        },
        mobile:{
            none:{
                fontFamily: this.props.obj.mobile.font.none.fontFamily!==''?this.props.obj.mobile.font.none.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.mobile.font.none.customFontFamily!==''?this.props.obj.mobile.font.none.customFontFamily:'',
                size: this.props.obj.mobile.font.none.size,
                fontWeight: this.props.obj.mobile.font.none.fontWeight!==''?this.props.obj.mobile.font.none.fontWeight:'300',
                typeSize: this.props.obj.mobile.font.none.typeSize,
                color: this.props.obj.mobile.font.none.color,
            },
            hover:{
                fontFamily: this.props.obj.mobile.font.hover.fontFamily!==''?this.props.obj.mobile.font.hover.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.mobile.font.hover.customFontFamily!==''?this.props.obj.mobile.font.hover.customFontFamily:'',
                size: this.props.obj.mobile.font.hover.size,
                fontWeight: this.props.obj.mobile.font.hover.fontWeight!==''?this.props.obj.mobile.font.hover.fontWeight:'300',
                typeSize: this.props.obj.mobile.font.hover.typeSize,
                color: this.props.obj.mobile.font.hover.color,
            },
            active:{
                fontFamily: this.props.obj.mobile.font.active.fontFamily!==''?this.props.obj.mobile.font.active.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.mobile.font.active.customFontFamily!==''?this.props.obj.mobile.font.active.customFontFamily:'',
                size: this.props.obj.mobile.font.active.size,
                fontWeight: this.props.obj.mobile.font.active.fontWeight!==''?this.props.obj.mobile.font.active.fontWeight:'300',
                typeSize: this.props.obj.mobile.font.active.typeSize,
                color: this.props.obj.mobile.font.active.color,
            },
            focus:{
                fontFamily: this.props.obj.mobile.font.focus.fontFamily!==''?this.props.obj.mobile.font.focus.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.mobile.font.focus.customFontFamily!==''?this.props.obj.mobile.font.focus.customFontFamily:'',
                size: this.props.obj.mobile.font.focus.size,
                fontWeight: this.props.obj.mobile.font.focus.fontWeight!==''?this.props.obj.mobile.font.focus.fontWeight:'300',
                typeSize: this.props.obj.mobile.font.focus.typeSize,
                color: this.props.obj.mobile.font.focus.color,
            }
        },
        tablet:{
            none:{
                fontFamily: this.props.obj.tablet.font.none.fontFamily!==''?this.props.obj.tablet.font.none.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.tablet.font.none.customFontFamily!==''?this.props.obj.tablet.font.none.customFontFamily:'',
                size: this.props.obj.tablet.font.none.size,
                fontWeight: this.props.obj.tablet.font.none.fontWeight!==''?this.props.obj.tablet.font.none.fontWeight:'300',
                typeSize: this.props.obj.tablet.font.none.typeSize,
                color: this.props.obj.tablet.font.none.color,
            },
            hover:{
                fontFamily: this.props.obj.tablet.font.hover.fontFamily!==''?this.props.obj.tablet.font.hover.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.tablet.font.hover.customFontFamily!==''?this.props.obj.tablet.font.hover.customFontFamily:'',
                size: this.props.obj.tablet.font.hover.size,
                fontWeight: this.props.obj.tablet.font.hover.fontWeight!==''?this.props.obj.tablet.font.hover.fontWeight:'300',
                typeSize: this.props.obj.tablet.font.hover.typeSize,
                color: this.props.obj.tablet.font.hover.color,
            },
            active:{
                fontFamily: this.props.obj.tablet.font.active.fontFamily!==''?this.props.obj.tablet.font.active.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.tablet.font.active.customFontFamily!==''?this.props.obj.tablet.font.active.customFontFamily:'',
                size: this.props.obj.tablet.font.active.size,
                fontWeight: this.props.obj.tablet.font.active.fontWeight!==''?this.props.obj.tablet.font.active.fontWeight:'300',
                typeSize: this.props.obj.tablet.font.active.typeSize,
                color: this.props.obj.tablet.font.active.color,
            },
            focus:{
                fontFamily: this.props.obj.tablet.font.focus.fontFamily!==''?this.props.obj.tablet.font.focus.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.tablet.font.focus.customFontFamily!==''?this.props.obj.tablet.font.focus.customFontFamily:'',
                size: this.props.obj.tablet.font.focus.size,
                fontWeight: this.props.obj.tablet.font.focus.fontWeight!==''?this.props.obj.tablet.font.focus.fontWeight:'300',
                typeSize: this.props.obj.tablet.font.focus.typeSize,
                color: this.props.obj.tablet.font.focus.color,
            }
        },
        desktop:{
            none:{
                fontFamily: this.props.obj.desktop.font.none.fontFamily!==''?this.props.obj.desktop.font.none.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.desktop.font.none.customFontFamily!==''?this.props.obj.desktop.font.none.customFontFamily:'',
                size: this.props.obj.desktop.font.none.size,
                fontWeight: this.props.obj.desktop.font.none.fontWeight!==''?this.props.obj.desktop.font.none.fontWeight:'300',
                typeSize: this.props.obj.desktop.font.none.typeSize,
                color: this.props.obj.desktop.font.none.color,
            },
            hover:{
                fontFamily: this.props.obj.desktop.font.hover.fontFamily!==''?this.props.obj.desktop.font.hover.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.desktop.font.hover.customFontFamily!==''?this.props.obj.desktop.font.hover.customFontFamily:'',
                size: this.props.obj.desktop.font.hover.size,
                fontWeight: this.props.obj.desktop.font.hover.fontWeight!==''?this.props.obj.desktop.font.hover.fontWeight:'300',
                typeSize: this.props.obj.desktop.font.hover.typeSize,
                color: this.props.obj.desktop.font.hover.color,
            },
            active:{
                fontFamily: this.props.obj.desktop.font.active.fontFamily!==''?this.props.obj.desktop.font.active.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.desktop.font.active.customFontFamily!==''?this.props.obj.desktop.font.active.customFontFamily:'',
                size: this.props.obj.desktop.font.active.size,
                fontWeight: this.props.obj.desktop.font.active.fontWeight!==''?this.props.obj.desktop.font.active.fontWeight:'300',
                typeSize: this.props.obj.desktop.font.active.typeSize,
                color: this.props.obj.desktop.font.active.color,
            },
            focus:{
                fontFamily: this.props.obj.desktop.font.focus.fontFamily!==''?this.props.obj.desktop.font.focus.fontFamily:'Helvetica',
                customFontFamily: this.props.obj.desktop.font.focus.customFontFamily!==''?this.props.obj.desktop.font.focus.customFontFamily:'',
                size: this.props.obj.desktop.font.focus.size,
                fontWeight: this.props.obj.desktop.font.focus.fontWeight!==''?this.props.obj.desktop.font.focus.fontWeight:'300',
                typeSize: this.props.obj.desktop.font.focus.typeSize,
                color: this.props.obj.desktop.font.focus.color,
            }
        },
        fontFamily: '',
        customFontFamily: '',
        size: 10,
        fontWeight: '',
        typeSize: 'px',
        color: '#FFFFFF',
        mob: false,
        tab: false,
        des: false,
        hov: false,
        act: false,
        foc: false,
    }
    
    setInfo = (command: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                if(command === 'fontFamily'){
                    this.props.funcAll(this.getFontFamily(), command, 'none')
                }
                if(command === 'customFontFamily'){
                    this.props.funcAll(this.getCustomFontFamily(), command, 'none')
                }
                if(command === 'size'){
                    this.props.funcAll(this.getSize(), command, 'none')
                }
                if(command === 'fontWeight'){
                    this.props.funcAll(this.getFontWeight(), command, 'none')
                }
                if(command === 'typeSize'){
                    this.props.funcAll(this.getTypeSize(), command, 'none')
                }
                if(command === 'color'){
                    this.props.funcAll(this.getColor(), command, 'none')
                }
            }
            if(this.state.hov){
                if(command === 'fontFamily'){
                    this.props.funcAll(this.getFontFamily(), command, 'hover')
                }
                if(command === 'customFontFamily'){
                    this.props.funcAll(this.getCustomFontFamily(), command, 'hover')
                }
                if(command === 'size'){
                    this.props.funcAll(this.getSize(), command, 'hover')
                }
                if(command === 'fontWeight'){
                    this.props.funcAll(this.getFontWeight(), command, 'hover')
                }
                if(command === 'typeSize'){
                    this.props.funcAll(this.getTypeSize(), command, 'hover')
                }
                if(command === 'color'){
                    this.props.funcAll(this.getColor(), command, 'hover')
                }
            }
            if(this.state.act){
                if(command === 'fontFamily'){
                    this.props.funcAll(this.getFontFamily(), command, 'active')
                }
                if(command === 'customFontFamily'){
                    this.props.funcAll(this.getCustomFontFamily(), command, 'active')
                }
                if(command === 'size'){
                    this.props.funcAll(this.getSize(), command, 'active')
                }
                if(command === 'fontWeight'){
                    this.props.funcAll(this.getFontWeight(), command, 'active')
                }
                if(command === 'typeSize'){
                    this.props.funcAll(this.getTypeSize(), command, 'active')
                }
                if(command === 'color'){
                    this.props.funcAll(this.getColor(), command, 'active')
                }
            }
            if(this.state.foc){
                if(command === 'fontFamily'){
                    this.props.funcAll(this.getFontFamily(), command, 'focus')
                }
                if(command === 'customFontFamily'){
                    this.props.funcAll(this.getCustomFontFamily(), command, 'focus')
                }
                if(command === 'size'){
                    this.props.funcAll(this.getSize(), command, 'focus')
                }
                if(command === 'fontWeight'){
                    this.props.funcAll(this.getFontWeight(), command, 'focus')
                }
                if(command === 'typeSize'){
                    this.props.funcAll(this.getTypeSize(), command, 'focus')
                }
                if(command === 'color'){
                    this.props.funcAll(this.getColor(), command, 'focus')
                }
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                if(command === 'fontFamily'){
                    this.props.funcMobile(this.getFontFamily(), command, 'none')
                }
                if(command === 'customFontFamily'){
                    this.props.funcMobile(this.getCustomFontFamily(), command, 'none')
                }
                if(command === 'size'){
                    this.props.funcMobile(this.getSize(), command, 'none')
                }
                if(command === 'fontWeight'){
                    this.props.funcMobile(this.getFontWeight(), command, 'none')
                }
                if(command === 'typeSize'){
                    this.props.funcMobile(this.getTypeSize(), command, 'none')
                }
                if(command === 'color'){
                    this.props.funcMobile(this.getColor(), command, 'none')
                }
            }
            if(this.state.hov){
                if(command === 'fontFamily'){
                    this.props.funcMobile(this.getFontFamily(), command, 'hover')
                }
                if(command === 'customFontFamily'){
                    this.props.funcMobile(this.getCustomFontFamily(), command, 'hover')
                }
                if(command === 'size'){
                    this.props.funcMobile(this.getSize(), command, 'hover')
                }
                if(command === 'fontWeight'){
                    this.props.funcMobile(this.getFontWeight(), command, 'hover')
                }
                if(command === 'typeSize'){
                    this.props.funcMobile(this.getTypeSize(), command, 'hover')
                }
                if(command === 'color'){
                    this.props.funcMobile(this.getColor(), command, 'hover')
                }
            }
            if(this.state.act){
                if(command === 'fontFamily'){
                    this.props.funcMobile(this.getFontFamily(), command, 'active')
                }
                if(command === 'customFontFamily'){
                    this.props.funcMobile(this.getCustomFontFamily(), command, 'active')
                }
                if(command === 'size'){
                    this.props.funcMobile(this.getSize(), command, 'active')
                }
                if(command === 'fontWeight'){
                    this.props.funcMobile(this.getFontWeight(), command, 'active')
                }
                if(command === 'typeSize'){
                    this.props.funcMobile(this.getTypeSize(), command, 'active')
                }
                if(command === 'color'){
                    this.props.funcMobile(this.getColor(), command, 'active')
                }
            }
            if(this.state.foc){
                if(command === 'fontFamily'){
                    this.props.funcMobile(this.getFontFamily(), command, 'focus')
                }
                if(command === 'customFontFamily'){
                    this.props.funcMobile(this.getCustomFontFamily(), command, 'focus')
                }
                if(command === 'size'){
                    this.props.funcMobile(this.getSize(), command, 'focus')
                }
                if(command === 'fontWeight'){
                    this.props.funcMobile(this.getFontWeight(), command, 'focus')
                }
                if(command === 'typeSize'){
                    this.props.funcMobile(this.getTypeSize(), command, 'focus')
                }
                if(command === 'color'){
                    this.props.funcMobile(this.getColor(), command, 'focus')
                }
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                if(command === 'fontFamily'){
                    this.props.funcTablet(this.getFontFamily(), command, 'none')
                }
                if(command === 'customFontFamily'){
                    this.props.funcTablet(this.getCustomFontFamily(), command, 'none')
                }
                if(command === 'size'){
                    this.props.funcTablet(this.getSize(), command, 'none')
                }
                if(command === 'fontWeight'){
                    this.props.funcTablet(this.getFontWeight(), command, 'none')
                }
                if(command === 'typeSize'){
                    this.props.funcTablet(this.getTypeSize(), command, 'none')
                }
                if(command === 'color'){
                    this.props.funcTablet(this.getColor(), command, 'none')
                }
            }
            if(this.state.hov){
                if(command === 'fontFamily'){
                    this.props.funcTablet(this.getFontFamily(), command, 'hover')
                }
                if(command === 'customFontFamily'){
                    this.props.funcTablet(this.getCustomFontFamily(), command, 'hover')
                }
                if(command === 'size'){
                    this.props.funcTablet(this.getSize(), command, 'hover')
                }
                if(command === 'fontWeight'){
                    this.props.funcTablet(this.getFontWeight(), command, 'hover')
                }
                if(command === 'typeSize'){
                    this.props.funcTablet(this.getTypeSize(), command, 'hover')
                }
                if(command === 'color'){
                    this.props.funcTablet(this.getColor(), command, 'hover')
                }
            }
            if(this.state.act){
                if(command === 'fontFamily'){
                    this.props.funcTablet(this.getFontFamily(), command, 'active')
                }
                if(command === 'customFontFamily'){
                    this.props.funcTablet(this.getCustomFontFamily(), command, 'active')
                }
                if(command === 'size'){
                    this.props.funcTablet(this.getSize(), command, 'active')
                }
                if(command === 'fontWeight'){
                    this.props.funcTablet(this.getFontWeight(), command, 'active')
                }
                if(command === 'typeSize'){
                    this.props.funcTablet(this.getTypeSize(), command, 'active')
                }
                if(command === 'color'){
                    this.props.funcTablet(this.getColor(), command, 'active')
                }
            }
            if(this.state.foc){
                if(command === 'fontFamily'){
                    this.props.funcTablet(this.getFontFamily(), command, 'focus')
                }
                if(command === 'customFontFamily'){
                    this.props.funcTablet(this.getCustomFontFamily(), command, 'focus')
                }
                if(command === 'size'){
                    this.props.funcTablet(this.getSize(), command, 'focus')
                }
                if(command === 'fontWeight'){
                    this.props.funcTablet(this.getFontWeight(), command, 'focus')
                }
                if(command === 'typeSize'){
                    this.props.funcTablet(this.getTypeSize(), command, 'focus')
                }
                if(command === 'color'){
                    this.props.funcTablet(this.getColor(), command, 'focus')
                }
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                if(command === 'fontFamily'){
                    this.props.funcDesktop(this.getFontFamily(), command, 'none')
                }
                if(command === 'customFontFamily'){
                    this.props.funcDesktop(this.getCustomFontFamily(), command, 'none')
                }
                if(command === 'size'){
                    this.props.funcDesktop(this.getSize(), command, 'none')
                }
                if(command === 'fontWeight'){
                    this.props.funcDesktop(this.getFontWeight(), command, 'none')
                }
                if(command === 'typeSize'){
                    this.props.funcDesktop(this.getTypeSize(), command, 'none')
                }
                if(command === 'color'){
                    this.props.funcDesktop(this.getColor(), command, 'none')
                }
            }
            if(this.state.hov){
                if(command === 'fontFamily'){
                    this.props.funcDesktop(this.getFontFamily(), command, 'hover')
                }
                if(command === 'customFontFamily'){
                    this.props.funcDesktop(this.getCustomFontFamily(), command, 'hover')
                }
                if(command === 'size'){
                    this.props.funcDesktop(this.getSize(), command, 'hover')
                }
                if(command === 'fontWeight'){
                    this.props.funcDesktop(this.getFontWeight(), command, 'hover')
                }
                if(command === 'typeSize'){
                    this.props.funcDesktop(this.getTypeSize(), command, 'hover')
                }
                if(command === 'color'){
                    this.props.funcDesktop(this.getColor(), command, 'hover')
                }
            }
            if(this.state.act){
                if(command === 'fontFamily'){
                    this.props.funcDesktop(this.getFontFamily(), command, 'active')
                }
                if(command === 'customFontFamily'){
                    this.props.funcDesktop(this.getCustomFontFamily(), command, 'active')
                }
                if(command === 'size'){
                    this.props.funcDesktop(this.getSize(), command, 'active')
                }
                if(command === 'fontWeight'){
                    this.props.funcDesktop(this.getFontWeight(), command, 'active')
                }
                if(command === 'typeSize'){
                    this.props.funcDesktop(this.getTypeSize(), command, 'active')
                }
                if(command === 'color'){
                    this.props.funcDesktop(this.getColor(), command, 'active')
                }
            }
            if(this.state.foc){
                if(command === 'fontFamily'){
                    this.props.funcDesktop(this.getFontFamily(), command, 'focus')
                }
                if(command === 'customFontFamily'){
                    this.props.funcDesktop(this.getCustomFontFamily(), command, 'focus')
                }
                if(command === 'size'){
                    this.props.funcDesktop(this.getSize(), command, 'focus')
                }
                if(command === 'fontWeight'){
                    this.props.funcDesktop(this.getFontWeight(), command, 'focus')
                }
                if(command === 'typeSize'){
                    this.props.funcDesktop(this.getTypeSize(), command, 'focus')
                }
                if(command === 'color'){
                    this.props.funcDesktop(this.getColor(), command, 'focus')
                }
            }
        }
    }

    getFontFamily = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.fontFamily
            }
            if(this.state.hov){
                return this.state.all.hover.fontFamily
            }
            if(this.state.act){
                return this.state.all.active.fontFamily
            }
            if(this.state.foc){
                return this.state.all.focus.fontFamily
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.fontFamily
            }
            if(this.state.hov){
                return this.state.mobile.hover.fontFamily
            }
            if(this.state.act){
                return this.state.mobile.active.fontFamily
            }
            if(this.state.foc){
                return this.state.mobile.focus.fontFamily
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.fontFamily
            }
            if(this.state.hov){
                return this.state.tablet.hover.fontFamily
            }
            if(this.state.act){
                return this.state.tablet.active.fontFamily
            }
            if(this.state.foc){
                return this.state.tablet.focus.fontFamily
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.fontFamily
            }
            if(this.state.hov){
                return this.state.desktop.hover.fontFamily
            }
            if(this.state.act){
                return this.state.desktop.active.fontFamily
            }
            if(this.state.foc){
                return this.state.desktop.focus.fontFamily
            }
        }
    }
    setFontFamily = (fontFamily: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active: {
                            ...this.state.desktop.active,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            fontFamily: fontFamily
                        }
                    }
                }, ()=>{this.setInfo('fontFamily')})
            }
        }
    }

    getCustomFontFamily = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.customFontFamily
            }
            if(this.state.hov){
                return this.state.all.hover.customFontFamily
            }
            if(this.state.act){
                return this.state.all.active.customFontFamily
            }
            if(this.state.foc){
                return this.state.all.focus.customFontFamily
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.customFontFamily
            }
            if(this.state.hov){
                return this.state.mobile.hover.customFontFamily
            }
            if(this.state.act){
                return this.state.mobile.active.customFontFamily
            }
            if(this.state.foc){
                return this.state.mobile.focus.customFontFamily
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.customFontFamily
            }
            if(this.state.hov){
                return this.state.tablet.hover.customFontFamily
            }
            if(this.state.act){
                return this.state.tablet.active.customFontFamily
            }
            if(this.state.foc){
                return this.state.tablet.focus.customFontFamily
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.customFontFamily
            }
            if(this.state.hov){
                return this.state.desktop.hover.customFontFamily
            }
            if(this.state.act){
                return this.state.desktop.active.customFontFamily
            }
            if(this.state.foc){
                return this.state.desktop.focus.customFontFamily
            }
        }
    }
    setCustomFontFamily = (customFontFamily: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active: {
                            ...this.state.desktop.active,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            customFontFamily: customFontFamily
                        }
                    }
                }, ()=>{this.setInfo('customFontFamily')})
            }
        }
    }

    getSize = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.size
            }
            if(this.state.hov){
                return this.state.all.hover.size
            }
            if(this.state.act){
                return this.state.all.active.size
            }
            if(this.state.foc){
                return this.state.all.focus.size
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.size
            }
            if(this.state.hov){
                return this.state.mobile.hover.size
            }
            if(this.state.act){
                return this.state.mobile.active.size
            }
            if(this.state.foc){
                return this.state.mobile.focus.size
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.size
            }
            if(this.state.hov){
                return this.state.tablet.hover.size
            }
            if(this.state.act){
                return this.state.tablet.active.size
            }
            if(this.state.foc){
                return this.state.tablet.focus.size
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.size
            }
            if(this.state.hov){
                return this.state.desktop.hover.size
            }
            if(this.state.act){
                return this.state.desktop.active.size
            }
            if(this.state.foc){
                return this.state.desktop.focus.size
            }
        }
    }
    setSize = (size: number) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active: {
                            ...this.state.desktop.active,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            size: size
                        }
                    }
                }, ()=>{this.setInfo('size')})
            }
        }
    }

    getFontWeight = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.fontWeight
            }
            if(this.state.hov){
                return this.state.all.hover.fontWeight
            }
            if(this.state.act){
                return this.state.all.active.fontWeight
            }
            if(this.state.foc){
                return this.state.all.focus.fontWeight
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.fontWeight
            }
            if(this.state.hov){
                return this.state.mobile.hover.fontWeight
            }
            if(this.state.act){
                return this.state.mobile.active.fontWeight
            }
            if(this.state.foc){
                return this.state.mobile.focus.fontWeight
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.fontWeight
            }
            if(this.state.hov){
                return this.state.tablet.hover.fontWeight
            }
            if(this.state.act){
                return this.state.tablet.active.fontWeight
            }
            if(this.state.foc){
                return this.state.tablet.focus.fontWeight
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.fontWeight
            }
            if(this.state.hov){
                return this.state.desktop.hover.fontWeight
            }
            if(this.state.act){
                return this.state.desktop.active.fontWeight
            }
            if(this.state.foc){
                return this.state.desktop.focus.fontWeight
            }
        }
    }
    setFontWeight = (fontWeight: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active: {
                            ...this.state.desktop.active,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            fontWeight: fontWeight
                        }
                    }
                }, ()=>{this.setInfo('fontWeight')})
            }
        }
    }

    getTypeSize = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.typeSize
            }
            if(this.state.hov){
                return this.state.all.hover.typeSize
            }
            if(this.state.act){
                return this.state.all.active.typeSize
            }
            if(this.state.foc){
                return this.state.all.focus.typeSize
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.typeSize
            }
            if(this.state.hov){
                return this.state.mobile.hover.typeSize
            }
            if(this.state.act){
                return this.state.mobile.active.typeSize
            }
            if(this.state.foc){
                return this.state.mobile.focus.typeSize
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.typeSize
            }
            if(this.state.hov){
                return this.state.tablet.hover.typeSize
            }
            if(this.state.act){
                return this.state.tablet.active.typeSize
            }
            if(this.state.foc){
                return this.state.tablet.focus.typeSize
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.typeSize
            }
            if(this.state.hov){
                return this.state.desktop.hover.typeSize
            }
            if(this.state.act){
                return this.state.desktop.active.typeSize
            }
            if(this.state.foc){
                return this.state.desktop.focus.typeSize
            }
        }
    }
    setTypeSize = (currentTypeSize: string) => {
        currentTypeSize = currentTypeSize.includes('%')?'px':'%'
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active: {
                            ...this.state.desktop.active,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            typeSize: currentTypeSize
                        }
                    }
                }, ()=>{this.setInfo('typeSize')})
            }
        }
    }

    getColor = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.color
            }
            if(this.state.hov){
                return this.state.all.hover.color
            }
            if(this.state.act){
                return this.state.all.active.color
            }
            if(this.state.foc){
                return this.state.all.focus.color
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.color
            }
            if(this.state.hov){
                return this.state.mobile.hover.color
            }
            if(this.state.act){
                return this.state.mobile.active.color
            }
            if(this.state.foc){
                return this.state.mobile.focus.color
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.color
            }
            if(this.state.hov){
                return this.state.tablet.hover.color
            }
            if(this.state.act){
                return this.state.tablet.active.color
            }
            if(this.state.foc){
                return this.state.tablet.focus.color
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.color
            }
            if(this.state.hov){
                return this.state.desktop.hover.color
            }
            if(this.state.act){
                return this.state.desktop.active.color
            }
            if(this.state.foc){
                return this.state.desktop.focus.color
            }
        }
    }
    setColor = (color: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active: {
                            ...this.state.desktop.active,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            color: color
                        }
                    }
                }, ()=>{this.setInfo('color')})
            }
        }
    }

    setMobFocus = () => {
        if(this.state.mob){
            this.setState({
                mob: false
            })
        } else {
            this.setState({
                mob: true,
                tab: false,
                des: false
            })
        }
    }
    setTabFocus = () => {
        if(this.state.tab){
            this.setState({
                tab: false
            })
        } else {
            this.setState({
                mob: false,
                tab: true,
                des: false
            })
        }
    }
    setDesFocus = () => {
        if(this.state.des){
            this.setState({
                des: false
            })
        } else {
            this.setState({
                mob: false,
                tab: false,
                des: true
            })
        }
    }
    setHovFocus = () => {
        if(this.state.hov){
            this.setState({
                hov: false
            })
        } else {
            this.setState({
                hov: true,
                act: false,
                foc: false
            })
        }
    }
    setActFocus = () => {
        if(this.state.act){
            this.setState({
                act: false
            })
        } else {
            this.setState({
                hov: false,
                act: true,
                foc: false
            })
        }
    }
    setFocFocus = () => {
        if(this.state.foc){
            this.setState({
                foc: false
            })
        } else {
            this.setState({
                hov: false,
                act: false,
                foc: true
            })
        }
    }

    incrementElem = () => {
        this.setSize(this.getSize() + 1)
    }
    decrementElem = () => {
        let size = this.getSize()
        this.setSize(size > 0?size - 1:0)
    }
    updateValue = (text: string) => {
        text = text.replace('px', '').replace('%','')
        let num = parseInt(text)
        if(!num || num < 0){
            this.setSize(0)
        } else {
            this.setSize(num)
        }
    }
    changeTypeSize = () => {
        this.setTypeSize(this.getTypeSize())
    }
    render() {
        return (
            <DivMargin>
                <CardHeader>Font</CardHeader>
                <DivOptionsSelector>
                    <ButtonHeaderCard focus={this.state.mob} onClick={this.setMobFocus}>:mob</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.tab} onClick={this.setTabFocus}>:tab</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.des} onClick={this.setDesFocus}>:des</ButtonHeaderCard>
                    <div/>
                    <ButtonHeaderCard focus={this.state.hov} onClick={this.setHovFocus}>:hov</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.act} onClick={this.setActFocus}>:act</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.foc} onClick={this.setFocFocus}>:foc</ButtonHeaderCard>
                </DivOptionsSelector>
                <DivOptions>
                    <DivName>Font family</DivName>
                    <Select value={this.getFontFamily()}
                            onChange={(e)=>{this.setFontFamily(e.target.value)}}>
                        <option value={'Helvetica'}>Helvetica</option>
                        <option value={'Arial'}>Arial</option>
                        <option value={'Times New Roman'}>Times New Roman</option>
                        <option value={'Times'}>Times</option>
                        <option value={'Courier New'}>Courier New</option>
                        <option value={'Courier'}>Courier</option>
                        <option value={'Verdana'}>Verdana</option>
                        <option value={'Georgia'}>Georgia</option>
                        <option value={'Palatino'}>Palatino</option>
                        <option value={'Garamond'}>Garamond</option>
                        <option value={'Bookman'}>Bookman</option>
                        <option value={'Tahoma'}>Tahoma</option>
                        <option value={'Trebuchet MS'}>Trebuchet MS</option>
                        <option value={'Arial Black'}>Arial Black</option>
                        <option value={'Impact'}>Impact</option>
                        <option value={'Comic Sans MS'}>Comic Sans MS</option>
                    </Select>
                </DivOptions>
                <DivOptions>
                    <DivName>Add custom font-family</DivName>
                    <InputS placeholder={'Enter custom font-family'}
                            value={this.getCustomFontFamily()}
                            onChange={(e)=>{this.setCustomFontFamily(e.target.value)}}/>
                </DivOptions>
                <DivOptions>
                    <DivName>Font size</DivName>
                    <CustomInputBlockAll>
                        <Input placeholder={'All'} type={"text"}
                               value={this.getSize() + this.getTypeSize()}
                               onChange={(e)=>{this.updateValue(e.target.value)}}/>
                        <ButtonsArrows>
                            <ButtonArrowUp onClick={()=>{this.incrementElem()}}>+</ButtonArrowUp>
                            <ButtonArrowDown onClick={()=>{this.decrementElem()}}>-</ButtonArrowDown>
                        </ButtonsArrows>
                    </CustomInputBlockAll>
                </DivOptions>
                <DivOptions>
                    <DivName>Font weight</DivName>
                    <Select value={this.getFontWeight()} onChange={(e)=>{this.setFontWeight(e.target.value)}}>
                        <option value={'100'}>100</option>
                        <option value={'200'}>200</option>
                        <option value={'300'}>300</option>
                        <option value={'400'}>400</option>
                        <option value={'500'}>500</option>
                        <option value={'600'}>600</option>
                        <option value={'700'}>700</option>
                        <option value={'800'}>800</option>
                        <option value={'900'}>900</option>
                    </Select>
                </DivOptions>
                <DivOptions>
                    <DivName>Metric type</DivName>
                    <Select onChange={() => this.changeTypeSize()} value={this.getTypeSize()}>
                        <option value={'px'}>px</option>
                        <option value={'%'}>%</option>
                    </Select>
                </DivOptions>
                <DivOptions>
                    <DivName>Color</DivName>
                    <InputColor
                        initialValue={this.getColor()}
                        onChange={(color)=>{this.setColor(color.hex)}}
                        placement="top"
                    />
                </DivOptions>
            </DivMargin>
        )
    }
}