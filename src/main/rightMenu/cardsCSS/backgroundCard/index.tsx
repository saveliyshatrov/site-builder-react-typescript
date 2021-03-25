import React, {Component} from "react";
import styled from "styled-components";
import {
    CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow, DivOptionsTwo, ButtonHeaderCard, DivOptionsSelector
} from '../elems'
import InputColor from "react-input-color";



type CIProps = {
    Placeholder: string
    Value: number
    NameElem: string
}

const DivMargin = styled.div`
  width: 266px;
  border-radius: 7px;
  background-color: #1B1B1B;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 7px 8px;
`
const DivName = styled.div`
  color: lightgray;
  font-size: 10px;
  margin-bottom: 3px;
  margin-left: 3px;
`

type TRBLTSA = {
    fill: boolean,
    color: string,
    firstColor: string,
    secondColor: string,
    angle: number
}

export default class BackgroundCard extends Component<any, any> {
    state = {
        all: {
            none:{
                fill: this.props.obj.all.backgroundColor.none.length === 1,
                color: this.props.obj.all.backgroundColor.none.length === 1?this.props.obj.all.backgroundColor.none[0]:'#FFF',
                firstColor: this.props.obj.all.backgroundColor.none.length === 1?'#FFF':this.props.obj.all.backgroundColor.none[1],
                secondColor: this.props.obj.all.backgroundColor.none.length === 1?'#FFF':this.props.obj.all.backgroundColor.none[2],
                angle: this.props.obj.all.backgroundColor.none.length === 1?0:this.props.obj.all.backgroundColor.none[0],
            },
            hover:{
                fill: this.props.obj.all.backgroundColor.hover.length === 1,
                color: this.props.obj.all.backgroundColor.hover.length === 1?this.props.obj.all.backgroundColor.hover[0]:'#FFF',
                firstColor: this.props.obj.all.backgroundColor.hover.length === 1?'#FFF':this.props.obj.all.backgroundColor.hover[1],
                secondColor: this.props.obj.all.backgroundColor.hover.length === 1?'#FFF':this.props.obj.all.backgroundColor.hover[2],
                angle: this.props.obj.all.backgroundColor.hover.length === 1?0:this.props.obj.all.backgroundColor.hover[0],
            },
            active:{
                fill: this.props.obj.all.backgroundColor.active.length === 1,
                color: this.props.obj.all.backgroundColor.active.length === 1?this.props.obj.all.backgroundColor.active[0]:'#FFF',
                firstColor: this.props.obj.all.backgroundColor.active.length === 1?'#FFF':this.props.obj.all.backgroundColor.active[1],
                secondColor: this.props.obj.all.backgroundColor.active.length === 1?'#FFF':this.props.obj.all.backgroundColor.active[2],
                angle: this.props.obj.all.backgroundColor.active.length === 1?0:this.props.obj.all.backgroundColor.active[0],
            },
            focus: {
                fill: this.props.obj.all.backgroundColor.focus.length === 1,
                color: this.props.obj.all.backgroundColor.focus.length === 1?this.props.obj.all.backgroundColor.focus[0]:'#FFF',
                firstColor: this.props.obj.all.backgroundColor.focus.length === 1?'#FFF':this.props.obj.all.backgroundColor.focus[1],
                secondColor: this.props.obj.all.backgroundColor.focus.length === 1?'#FFF':this.props.obj.all.backgroundColor.focus[2],
                angle: this.props.obj.all.backgroundColor.focus.length === 1?0:this.props.obj.all.backgroundColor.focus[0],
            }
        },
        mobile: {
            none:{
                fill: this.props.obj.mobile.backgroundColor.none.length === 1,
                color: this.props.obj.mobile.backgroundColor.none.length === 1?this.props.obj.mobile.backgroundColor.none[0]:'#FFF',
                firstColor: this.props.obj.mobile.backgroundColor.none.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.none[1],
                secondColor: this.props.obj.mobile.backgroundColor.none.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.none[2],
                angle: this.props.obj.mobile.backgroundColor.none.length === 1?0:this.props.obj.mobile.backgroundColor.none[0],
            },
            hover:{
                fill: this.props.obj.mobile.backgroundColor.hover.length === 1,
                color: this.props.obj.mobile.backgroundColor.hover.length === 1?this.props.obj.mobile.backgroundColor.hover[0]:'#FFF',
                firstColor: this.props.obj.mobile.backgroundColor.hover.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.hover[1],
                secondColor: this.props.obj.mobile.backgroundColor.hover.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.hover[2],
                angle: this.props.obj.mobile.backgroundColor.hover.length === 1?0:this.props.obj.mobile.backgroundColor.hover[0],
            },
            active:{
                fill: this.props.obj.mobile.backgroundColor.active.length === 1,
                color: this.props.obj.mobile.backgroundColor.active.length === 1?this.props.obj.mobile.backgroundColor.active[0]:'#FFF',
                firstColor: this.props.obj.mobile.backgroundColor.active.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.active[1],
                secondColor: this.props.obj.mobile.backgroundColor.active.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.active[2],
                angle: this.props.obj.mobile.backgroundColor.active.length === 1?0:this.props.obj.mobile.backgroundColor.active[0],
            },
            focus: {
                fill: this.props.obj.mobile.backgroundColor.focus.length === 1,
                color: this.props.obj.mobile.backgroundColor.focus.length === 1?this.props.obj.mobile.backgroundColor.focus[0]:'#FFF',
                firstColor: this.props.obj.mobile.backgroundColor.focus.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.focus[1],
                secondColor: this.props.obj.mobile.backgroundColor.focus.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.focus[2],
                angle: this.props.obj.mobile.backgroundColor.focus.length === 1?0:this.props.obj.mobile.backgroundColor.focus[0],
            }
        },
        tablet: {
            none:{
                fill: this.props.obj.tablet.backgroundColor.none.length === 1,
                color: this.props.obj.tablet.backgroundColor.none.length === 1?this.props.obj.tablet.backgroundColor.none[0]:'#FFF',
                firstColor: this.props.obj.tablet.backgroundColor.none.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.none[1],
                secondColor: this.props.obj.tablet.backgroundColor.none.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.none[2],
                angle: this.props.obj.tablet.backgroundColor.none.length === 1?0:this.props.obj.tablet.backgroundColor.none[0],
            },
            hover:{
                fill: this.props.obj.tablet.backgroundColor.hover.length === 1,
                color: this.props.obj.tablet.backgroundColor.hover.length === 1?this.props.obj.tablet.backgroundColor.hover[0]:'#FFF',
                firstColor: this.props.obj.tablet.backgroundColor.hover.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.hover[1],
                secondColor: this.props.obj.tablet.backgroundColor.hover.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.hover[2],
                angle: this.props.obj.tablet.backgroundColor.hover.length === 1?0:this.props.obj.tablet.backgroundColor.hover[0],
            },
            active:{
                fill: this.props.obj.tablet.backgroundColor.active.length === 1,
                color: this.props.obj.tablet.backgroundColor.active.length === 1?this.props.obj.tablet.backgroundColor.active[0]:'#FFF',
                firstColor: this.props.obj.tablet.backgroundColor.active.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.active[1],
                secondColor: this.props.obj.tablet.backgroundColor.active.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.active[2],
                angle: this.props.obj.tablet.backgroundColor.active.length === 1?0:this.props.obj.tablet.backgroundColor.active[0],
            },
            focus: {
                fill: this.props.obj.tablet.backgroundColor.focus.length === 1,
                color: this.props.obj.tablet.backgroundColor.focus.length === 1?this.props.obj.tablet.backgroundColor.focus[0]:'#FFF',
                firstColor: this.props.obj.tablet.backgroundColor.focus.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.focus[1],
                secondColor: this.props.obj.tablet.backgroundColor.focus.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.focus[2],
                angle: this.props.obj.tablet.backgroundColor.focus.length === 1?0:this.props.obj.tablet.backgroundColor.focus[0],
            }
        },
        desktop: {
            none:{
                fill: this.props.obj.desktop.backgroundColor.none.length === 1,
                color: this.props.obj.desktop.backgroundColor.none.length === 1?this.props.obj.desktop.backgroundColor.none[0]:'#FFF',
                firstColor: this.props.obj.desktop.backgroundColor.none.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.none[1],
                secondColor: this.props.obj.desktop.backgroundColor.none.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.none[2],
                angle: this.props.obj.desktop.backgroundColor.none.length === 1?0:this.props.obj.desktop.backgroundColor.none[0],
            },
            hover:{
                fill: this.props.obj.desktop.backgroundColor.hover.length === 1,
                color: this.props.obj.desktop.backgroundColor.hover.length === 1?this.props.obj.desktop.backgroundColor.hover[0]:'#FFF',
                firstColor: this.props.obj.desktop.backgroundColor.hover.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.hover[1],
                secondColor: this.props.obj.desktop.backgroundColor.hover.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.hover[2],
                angle: this.props.obj.desktop.backgroundColor.hover.length === 1?0:this.props.obj.desktop.backgroundColor.hover[0],
            },
            active:{
                fill: this.props.obj.desktop.backgroundColor.active.length === 1,
                color: this.props.obj.desktop.backgroundColor.active.length === 1?this.props.obj.desktop.backgroundColor.active[0]:'#FFF',
                firstColor: this.props.obj.desktop.backgroundColor.active.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.active[1],
                secondColor: this.props.obj.desktop.backgroundColor.active.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.active[2],
                angle: this.props.obj.desktop.backgroundColor.active.length === 1?0:this.props.obj.desktop.backgroundColor.active[0],
            },
            focus: {
                fill: this.props.obj.desktop.backgroundColor.focus.length === 1,
                color: this.props.obj.desktop.backgroundColor.focus.length === 1?this.props.obj.desktop.backgroundColor.focus[0]:'#FFF',
                firstColor: this.props.obj.desktop.backgroundColor.focus.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.focus[1],
                secondColor: this.props.obj.desktop.backgroundColor.focus.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.focus[2],
                angle: this.props.obj.desktop.backgroundColor.focus.length === 1?0:this.props.obj.desktop.backgroundColor.focus[0],
            }
        },
        mob: false,
        tab: false,
        des: false,
        hov: false,
        act: false,
        foc: false,
    }
    // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    //     if(prevProps !== this.props){
    //         this.setState({
    //             all: {
    //                 none:{
    //                     fill: this.props.obj.all.backgroundColor.none.length === 1,
    //                     color: this.props.obj.all.backgroundColor.none.length === 1?this.props.obj.all.backgroundColor.none[0]:'#FFF',
    //                     firstColor: this.props.obj.all.backgroundColor.none.length === 1?'#FFF':this.props.obj.all.backgroundColor.none[1],
    //                     secondColor: this.props.obj.all.backgroundColor.none.length === 1?'#FFF':this.props.obj.all.backgroundColor.none[2],
    //                     angle: this.props.obj.all.backgroundColor.none.length === 1?0:this.props.obj.all.backgroundColor.none[0],
    //                 },
    //                 hover:{
    //                     fill: this.props.obj.all.backgroundColor.hover.length === 1,
    //                     color: this.props.obj.all.backgroundColor.hover.length === 1?this.props.obj.all.backgroundColor.hover[0]:'#FFF',
    //                     firstColor: this.props.obj.all.backgroundColor.hover.length === 1?'#FFF':this.props.obj.all.backgroundColor.hover[1],
    //                     secondColor: this.props.obj.all.backgroundColor.hover.length === 1?'#FFF':this.props.obj.all.backgroundColor.hover[2],
    //                     angle: this.props.obj.all.backgroundColor.hover.length === 1?0:this.props.obj.all.backgroundColor.hover[0],
    //                 },
    //                 active:{
    //                     fill: this.props.obj.all.backgroundColor.active.length === 1,
    //                     color: this.props.obj.all.backgroundColor.active.length === 1?this.props.obj.all.backgroundColor.active[0]:'#FFF',
    //                     firstColor: this.props.obj.all.backgroundColor.active.length === 1?'#FFF':this.props.obj.all.backgroundColor.active[1],
    //                     secondColor: this.props.obj.all.backgroundColor.active.length === 1?'#FFF':this.props.obj.all.backgroundColor.active[2],
    //                     angle: this.props.obj.all.backgroundColor.active.length === 1?0:this.props.obj.all.backgroundColor.active[0],
    //                 },
    //                 focus: {
    //                     fill: this.props.obj.all.backgroundColor.focus.length === 1,
    //                     color: this.props.obj.all.backgroundColor.focus.length === 1?this.props.obj.all.backgroundColor.focus[0]:'#FFF',
    //                     firstColor: this.props.obj.all.backgroundColor.focus.length === 1?'#FFF':this.props.obj.all.backgroundColor.focus[1],
    //                     secondColor: this.props.obj.all.backgroundColor.focus.length === 1?'#FFF':this.props.obj.all.backgroundColor.focus[2],
    //                     angle: this.props.obj.all.backgroundColor.focus.length === 1?0:this.props.obj.all.backgroundColor.focus[0],
    //                 }
    //             },
    //             mobile: {
    //                 none:{
    //                     fill: this.props.obj.mobile.backgroundColor.none.length === 1,
    //                     color: this.props.obj.mobile.backgroundColor.none.length === 1?this.props.obj.mobile.backgroundColor.none[0]:'#FFF',
    //                     firstColor: this.props.obj.mobile.backgroundColor.none.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.none[1],
    //                     secondColor: this.props.obj.mobile.backgroundColor.none.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.none[2],
    //                     angle: this.props.obj.mobile.backgroundColor.none.length === 1?0:this.props.obj.mobile.backgroundColor.none[0],
    //                 },
    //                 hover:{
    //                     fill: this.props.obj.mobile.backgroundColor.hover.length === 1,
    //                     color: this.props.obj.mobile.backgroundColor.hover.length === 1?this.props.obj.mobile.backgroundColor.hover[0]:'#FFF',
    //                     firstColor: this.props.obj.mobile.backgroundColor.hover.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.hover[1],
    //                     secondColor: this.props.obj.mobile.backgroundColor.hover.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.hover[2],
    //                     angle: this.props.obj.mobile.backgroundColor.hover.length === 1?0:this.props.obj.mobile.backgroundColor.hover[0],
    //                 },
    //                 active:{
    //                     fill: this.props.obj.mobile.backgroundColor.active.length === 1,
    //                     color: this.props.obj.mobile.backgroundColor.active.length === 1?this.props.obj.mobile.backgroundColor.active[0]:'#FFF',
    //                     firstColor: this.props.obj.mobile.backgroundColor.active.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.active[1],
    //                     secondColor: this.props.obj.mobile.backgroundColor.active.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.active[2],
    //                     angle: this.props.obj.mobile.backgroundColor.active.length === 1?0:this.props.obj.mobile.backgroundColor.active[0],
    //                 },
    //                 focus: {
    //                     fill: this.props.obj.mobile.backgroundColor.focus.length === 1,
    //                     color: this.props.obj.mobile.backgroundColor.focus.length === 1?this.props.obj.mobile.backgroundColor.focus[0]:'#FFF',
    //                     firstColor: this.props.obj.mobile.backgroundColor.focus.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.focus[1],
    //                     secondColor: this.props.obj.mobile.backgroundColor.focus.length === 1?'#FFF':this.props.obj.mobile.backgroundColor.focus[2],
    //                     angle: this.props.obj.mobile.backgroundColor.focus.length === 1?0:this.props.obj.mobile.backgroundColor.focus[0],
    //                 }
    //             },
    //             tablet: {
    //                 none:{
    //                     fill: this.props.obj.tablet.backgroundColor.none.length === 1,
    //                     color: this.props.obj.tablet.backgroundColor.none.length === 1?this.props.obj.tablet.backgroundColor.none[0]:'#FFF',
    //                     firstColor: this.props.obj.tablet.backgroundColor.none.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.none[1],
    //                     secondColor: this.props.obj.tablet.backgroundColor.none.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.none[2],
    //                     angle: this.props.obj.tablet.backgroundColor.none.length === 1?0:this.props.obj.tablet.backgroundColor.none[0],
    //                 },
    //                 hover:{
    //                     fill: this.props.obj.tablet.backgroundColor.hover.length === 1,
    //                     color: this.props.obj.tablet.backgroundColor.hover.length === 1?this.props.obj.tablet.backgroundColor.hover[0]:'#FFF',
    //                     firstColor: this.props.obj.tablet.backgroundColor.hover.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.hover[1],
    //                     secondColor: this.props.obj.tablet.backgroundColor.hover.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.hover[2],
    //                     angle: this.props.obj.tablet.backgroundColor.hover.length === 1?0:this.props.obj.tablet.backgroundColor.hover[0],
    //                 },
    //                 active:{
    //                     fill: this.props.obj.tablet.backgroundColor.active.length === 1,
    //                     color: this.props.obj.tablet.backgroundColor.active.length === 1?this.props.obj.tablet.backgroundColor.active[0]:'#FFF',
    //                     firstColor: this.props.obj.tablet.backgroundColor.active.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.active[1],
    //                     secondColor: this.props.obj.tablet.backgroundColor.active.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.active[2],
    //                     angle: this.props.obj.tablet.backgroundColor.active.length === 1?0:this.props.obj.tablet.backgroundColor.active[0],
    //                 },
    //                 focus: {
    //                     fill: this.props.obj.tablet.backgroundColor.focus.length === 1,
    //                     color: this.props.obj.tablet.backgroundColor.focus.length === 1?this.props.obj.tablet.backgroundColor.focus[0]:'#FFF',
    //                     firstColor: this.props.obj.tablet.backgroundColor.focus.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.focus[1],
    //                     secondColor: this.props.obj.tablet.backgroundColor.focus.length === 1?'#FFF':this.props.obj.tablet.backgroundColor.focus[2],
    //                     angle: this.props.obj.tablet.backgroundColor.focus.length === 1?0:this.props.obj.tablet.backgroundColor.focus[0],
    //                 }
    //             },
    //             desktop: {
    //                 none:{
    //                     fill: this.props.obj.desktop.backgroundColor.none.length === 1,
    //                     color: this.props.obj.desktop.backgroundColor.none.length === 1?this.props.obj.desktop.backgroundColor.none[0]:'#FFF',
    //                     firstColor: this.props.obj.desktop.backgroundColor.none.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.none[1],
    //                     secondColor: this.props.obj.desktop.backgroundColor.none.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.none[2],
    //                     angle: this.props.obj.desktop.backgroundColor.none.length === 1?0:this.props.obj.desktop.backgroundColor.none[0],
    //                 },
    //                 hover:{
    //                     fill: this.props.obj.desktop.backgroundColor.hover.length === 1,
    //                     color: this.props.obj.desktop.backgroundColor.hover.length === 1?this.props.obj.desktop.backgroundColor.hover[0]:'#FFF',
    //                     firstColor: this.props.obj.desktop.backgroundColor.hover.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.hover[1],
    //                     secondColor: this.props.obj.desktop.backgroundColor.hover.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.hover[2],
    //                     angle: this.props.obj.desktop.backgroundColor.hover.length === 1?0:this.props.obj.desktop.backgroundColor.hover[0],
    //                 },
    //                 active:{
    //                     fill: this.props.obj.desktop.backgroundColor.active.length === 1,
    //                     color: this.props.obj.desktop.backgroundColor.active.length === 1?this.props.obj.desktop.backgroundColor.active[0]:'#FFF',
    //                     firstColor: this.props.obj.desktop.backgroundColor.active.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.active[1],
    //                     secondColor: this.props.obj.desktop.backgroundColor.active.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.active[2],
    //                     angle: this.props.obj.desktop.backgroundColor.active.length === 1?0:this.props.obj.desktop.backgroundColor.active[0],
    //                 },
    //                 focus: {
    //                     fill: this.props.obj.desktop.backgroundColor.focus.length === 1,
    //                     color: this.props.obj.desktop.backgroundColor.focus.length === 1?this.props.obj.desktop.backgroundColor.focus[0]:'#FFF',
    //                     firstColor: this.props.obj.desktop.backgroundColor.focus.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.focus[1],
    //                     secondColor: this.props.obj.desktop.backgroundColor.focus.length === 1?'#FFF':this.props.obj.desktop.backgroundColor.focus[2],
    //                     angle: this.props.obj.desktop.backgroundColor.focus.length === 1?0:this.props.obj.desktop.backgroundColor.focus[0],
    //                 }
    //             },
    //         })
    //     }
    // }

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


    getColorInfo = ():Array<string>|[number, string, string] => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                if (this.state.all.none.fill) {
                    console.log('getColorInfo - ', this.state.all.none.color)
                    return [this.state.all.none.color]
                } else {
                    return [this.state.all.none.angle, this.state.all.none.firstColor, this.state.all.none.secondColor]
                }
            }
            if(this.state.hov){
                if (this.state.all.hover.fill) {
                    return [this.state.all.hover.color]
                } else {
                    return [this.state.all.hover.angle, this.state.all.hover.firstColor, this.state.all.hover.secondColor]
                }
            }
            if(this.state.act){
                if (this.state.all.active.fill) {
                    return [this.state.all.active.color]
                } else {
                    return [this.state.all.active.angle, this.state.all.active.firstColor, this.state.all.active.secondColor]
                }
            }
            if(this.state.foc){
                if (this.state.all.focus.fill) {
                    return [this.state.all.focus.color]
                } else {
                    return [this.state.all.focus.angle, this.state.all.focus.firstColor, this.state.all.focus.secondColor]
                }
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                if (this.state.all.none.fill) {
                    return [this.state.mobile.none.color]
                } else {
                    return [this.state.mobile.none.angle, this.state.mobile.none.firstColor, this.state.mobile.none.secondColor]
                }
            }
            if(this.state.hov){
                if (this.state.mobile.hover.fill) {
                    return [this.state.mobile.hover.color]
                } else {
                    return [this.state.mobile.hover.angle, this.state.mobile.hover.firstColor, this.state.mobile.hover.secondColor]
                }
            }
            if(this.state.act){
                if (this.state.mobile.active.fill) {
                    return [this.state.mobile.active.color]
                } else {
                    return [this.state.mobile.active.angle, this.state.mobile.active.firstColor, this.state.mobile.active.secondColor]
                }
            }
            if(this.state.foc){
                if (this.state.mobile.focus.fill) {
                    return [this.state.mobile.focus.color]
                } else {
                    return [this.state.mobile.focus.angle, this.state.mobile.focus.firstColor, this.state.mobile.focus.secondColor]
                }
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                if (this.state.tablet.none.fill) {
                    return [this.state.tablet.none.color]
                } else {
                    return [this.state.tablet.none.angle, this.state.tablet.none.firstColor, this.state.tablet.none.secondColor]
                }
            }
            if(this.state.hov){
                if (this.state.tablet.hover.fill) {
                    return [this.state.tablet.hover.color]
                } else {
                    return [this.state.tablet.hover.angle, this.state.tablet.hover.firstColor, this.state.tablet.hover.secondColor]
                }
            }
            if(this.state.act){
                if (this.state.tablet.active.fill) {
                    return [this.state.tablet.active.color]
                } else {
                    return [this.state.tablet.active.angle, this.state.tablet.active.firstColor, this.state.tablet.active.secondColor]
                }
            }
            if(this.state.foc){
                if (this.state.tablet.focus.fill) {
                    return [this.state.tablet.focus.color]
                } else {
                    return [this.state.tablet.focus.angle, this.state.tablet.focus.firstColor, this.state.tablet.focus.secondColor]
                }
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                if (this.state.desktop.none.fill) {
                    return [this.state.desktop.none.color]
                } else {
                    return [this.state.desktop.none.angle, this.state.desktop.none.firstColor, this.state.desktop.none.secondColor]
                }
            }
            if(this.state.hov){
                if (this.state.desktop.hover.fill) {
                    return [this.state.desktop.hover.color]
                } else {
                    return [this.state.desktop.hover.angle, this.state.desktop.hover.firstColor, this.state.desktop.hover.secondColor]
                }
            }
            if(this.state.act){
                if (this.state.desktop.active.fill) {
                    return [this.state.desktop.active.color]
                } else {
                    return [this.state.desktop.active.angle, this.state.desktop.active.firstColor, this.state.desktop.active.secondColor]
                }
            }
            if(this.state.foc){
                if (this.state.desktop.focus.fill) {
                    return [this.state.desktop.focus.color]
                } else {
                    return [this.state.desktop.focus.angle, this.state.desktop.focus.firstColor, this.state.desktop.focus.secondColor]
                }
            }
        }
        return ['#FFFFFF']
    }

    setInfo = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcAll(this.getColorInfo(), 'none')
            }
            if(this.state.hov){
                this.props.funcAll(this.getColorInfo(), 'hover')
            }
            if(this.state.act){
                this.props.funcAll(this.getColorInfo(), 'active')
            }
            if(this.state.foc){
                this.props.funcAll(this.getColorInfo(), 'focus')
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcMobile(this.getColorInfo(), 'none')
            }
            if(this.state.hov){
                this.props.funcMobile(this.getColorInfo(), 'hover')
            }
            if(this.state.act){
                this.props.funcMobile(this.getColorInfo(), 'active')
            }
            if(this.state.foc){
                this.props.funcMobile(this.getColorInfo(), 'focus')
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcTablet(this.getColorInfo(), 'none')
            }
            if(this.state.hov){
                this.props.funcTablet(this.getColorInfo(), 'hover')
            }
            if(this.state.act){
                this.props.funcTablet(this.getColorInfo(), 'active')
            }
            if(this.state.foc){
                this.props.funcTablet(this.getColorInfo(), 'focus')
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcDesktop(this.getColorInfo(), 'none')
            }
            if(this.state.hov){
                this.props.funcDesktop(this.getColorInfo(), 'hover')
            }
            if(this.state.act){
                this.props.funcDesktop(this.getColorInfo(), 'active')
            }
            if(this.state.foc){
                this.props.funcDesktop(this.getColorInfo(), 'focus')
            }
        }
    }

    setFill = (elem: boolean) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active: {
                            ...this.state.desktop.active,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            fill: !elem
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    getFill = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.fill
            }
            if(this.state.hov){
                return this.state.all.hover.fill
            }
            if(this.state.act){
                return this.state.all.active.fill
            }
            if(this.state.foc){
                return this.state.all.focus.fill
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.fill
            }
            if(this.state.hov){
                return this.state.mobile.hover.fill
            }
            if(this.state.act){
                return this.state.mobile.active.fill
            }
            if(this.state.foc){
                return this.state.mobile.focus.fill
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.fill
            }
            if(this.state.hov){
                return this.state.tablet.hover.fill
            }
            if(this.state.act){
                return this.state.tablet.active.fill
            }
            if(this.state.foc){
                return this.state.tablet.focus.fill
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.fill
            }
            if(this.state.hov){
                return this.state.desktop.hover.fill
            }
            if(this.state.act){
                return this.state.desktop.active.fill
            }
            if(this.state.foc){
                return this.state.desktop.focus.fill
            }
        }
        return true
    }

    setColor = (color:string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none:{
                            ...this.state.all.none,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover:{
                            ...this.state.all.hover,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active:{
                            ...this.state.all.active,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus:{
                            ...this.state.all.focus,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none:{
                            ...this.state.mobile.none,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover:{
                            ...this.state.mobile.hover,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active:{
                            ...this.state.mobile.active,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus:{
                            ...this.state.mobile.focus,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none:{
                            ...this.state.tablet.none,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover:{
                            ...this.state.tablet.hover,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active:{
                            ...this.state.tablet.active,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus:{
                            ...this.state.tablet.focus,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none:{
                            ...this.state.desktop.none,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover:{
                            ...this.state.desktop.hover,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active:{
                            ...this.state.desktop.active,
                            color: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus:{
                            ...this.state.desktop.focus,
                            color: color
                        }
                    }
                }, this.setInfo)
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
        return '#FFF'
    }
    setColorFirst = (color:string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none:{
                            ...this.state.all.none,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover:{
                            ...this.state.all.hover,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active:{
                            ...this.state.all.active,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus:{
                            ...this.state.all.focus,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none:{
                            ...this.state.mobile.none,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover:{
                            ...this.state.mobile.hover,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active:{
                            ...this.state.mobile.active,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus:{
                            ...this.state.mobile.focus,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none:{
                            ...this.state.tablet.none,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover:{
                            ...this.state.tablet.hover,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active:{
                            ...this.state.tablet.active,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus:{
                            ...this.state.tablet.focus,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none:{
                            ...this.state.desktop.none,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover:{
                            ...this.state.desktop.hover,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active:{
                            ...this.state.desktop.active,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus:{
                            ...this.state.desktop.focus,
                            firstColor: color
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    getColorFirst = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.firstColor
            }
            if(this.state.hov){
                return this.state.all.hover.firstColor
            }
            if(this.state.act){
                return this.state.all.active.firstColor
            }
            if(this.state.foc){
                return this.state.all.focus.firstColor
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.firstColor
            }
            if(this.state.hov){
                return this.state.mobile.hover.firstColor
            }
            if(this.state.act){
                return this.state.mobile.active.firstColor
            }
            if(this.state.foc){
                return this.state.mobile.focus.firstColor
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.firstColor
            }
            if(this.state.hov){
                return this.state.tablet.hover.firstColor
            }
            if(this.state.act){
                return this.state.tablet.active.firstColor
            }
            if(this.state.foc){
                return this.state.tablet.focus.firstColor
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.firstColor
            }
            if(this.state.hov){
                return this.state.desktop.hover.firstColor
            }
            if(this.state.act){
                return this.state.desktop.active.firstColor
            }
            if(this.state.foc){
                return this.state.desktop.focus.firstColor
            }
        }
        return '#FFF'
    }
    setColorSecond = (color:string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none:{
                            ...this.state.all.none,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover:{
                            ...this.state.all.hover,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active:{
                            ...this.state.all.active,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus:{
                            ...this.state.all.focus,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none:{
                            ...this.state.mobile.none,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover:{
                            ...this.state.mobile.hover,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active:{
                            ...this.state.mobile.active,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus:{
                            ...this.state.mobile.focus,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none:{
                            ...this.state.tablet.none,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover:{
                            ...this.state.tablet.hover,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active:{
                            ...this.state.tablet.active,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus:{
                            ...this.state.tablet.focus,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none:{
                            ...this.state.desktop.none,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover:{
                            ...this.state.desktop.hover,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active:{
                            ...this.state.desktop.active,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus:{
                            ...this.state.desktop.focus,
                            secondColor: color
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    getColorSecond = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.secondColor
            }
            if(this.state.hov){
                return this.state.all.hover.secondColor
            }
            if(this.state.act){
                return this.state.all.active.secondColor
            }
            if(this.state.foc){
                return this.state.all.focus.secondColor
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.secondColor
            }
            if(this.state.hov){
                return this.state.mobile.hover.secondColor
            }
            if(this.state.act){
                return this.state.mobile.active.secondColor
            }
            if(this.state.foc){
                return this.state.mobile.focus.secondColor
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.secondColor
            }
            if(this.state.hov){
                return this.state.tablet.hover.secondColor
            }
            if(this.state.act){
                return this.state.tablet.active.secondColor
            }
            if(this.state.foc){
                return this.state.tablet.focus.secondColor
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.secondColor
            }
            if(this.state.hov){
                return this.state.desktop.hover.secondColor
            }
            if(this.state.act){
                return this.state.desktop.active.secondColor
            }
            if(this.state.foc){
                return this.state.desktop.focus.secondColor
            }
        }
        return '#FFF'
    }

    incrementElem() {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            angle: this.state.all.none.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover:{
                            ...this.state.all.hover,
                            angle: this.state.all.hover.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active:{
                            ...this.state.all.active,
                            angle: this.state.all.active.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus:{
                            ...this.state.all.focus,
                            angle: this.state.all.focus.angle + 1
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            angle: this.state.mobile.none.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover:{
                            ...this.state.mobile.hover,
                            angle: this.state.mobile.hover.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active:{
                            ...this.state.mobile.active,
                            angle: this.state.mobile.active.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus:{
                            ...this.state.mobile.focus,
                            angle: this.state.mobile.focus.angle + 1
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            angle: this.state.tablet.none.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover:{
                            ...this.state.tablet.hover,
                            angle: this.state.tablet.hover.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active:{
                            ...this.state.tablet.active,
                            angle: this.state.tablet.active.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus:{
                            ...this.state.tablet.focus,
                            angle: this.state.tablet.focus.angle + 1
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            angle: this.state.desktop.none.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover:{
                            ...this.state.desktop.hover,
                            angle: this.state.desktop.hover.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active:{
                            ...this.state.desktop.active,
                            angle: this.state.desktop.active.angle + 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus:{
                            ...this.state.desktop.focus,
                            angle: this.state.desktop.focus.angle + 1
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    decrementElem() {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            angle: this.state.all.none.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover:{
                            ...this.state.all.hover,
                            angle: this.state.all.hover.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active:{
                            ...this.state.all.active,
                            angle: this.state.all.active.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus:{
                            ...this.state.all.focus,
                            angle: this.state.all.focus.angle - 1
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            angle: this.state.mobile.none.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover:{
                            ...this.state.mobile.hover,
                            angle: this.state.mobile.hover.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active:{
                            ...this.state.mobile.active,
                            angle: this.state.mobile.active.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus:{
                            ...this.state.mobile.focus,
                            angle: this.state.mobile.focus.angle - 1
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            angle: this.state.tablet.none.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover:{
                            ...this.state.tablet.hover,
                            angle: this.state.tablet.hover.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active:{
                            ...this.state.tablet.active,
                            angle: this.state.tablet.active.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus:{
                            ...this.state.tablet.focus,
                            angle: this.state.tablet.focus.angle - 1
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            angle: this.state.desktop.none.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover:{
                            ...this.state.desktop.hover,
                            angle: this.state.desktop.hover.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active:{
                            ...this.state.desktop.active,
                            angle: this.state.desktop.active.angle - 1
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus:{
                            ...this.state.desktop.focus,
                            angle: this.state.desktop.focus.angle - 1
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    updateValue = (text: string) => {
        text = text.replace('deg', '')
        let num = parseInt(text)
        num = (!num)?0:num
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all:{
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all:{
                        ...this.state.all,
                        hover:{
                            ...this.state.all.hover,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all:{
                        ...this.state.all,
                        active:{
                            ...this.state.all.active,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all:{
                        ...this.state.all,
                        focus:{
                            ...this.state.all.focus,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        hover:{
                            ...this.state.mobile.hover,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        active:{
                            ...this.state.mobile.active,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile:{
                        ...this.state.mobile,
                        focus:{
                            ...this.state.mobile.focus,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        hover:{
                            ...this.state.tablet.hover,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        active:{
                            ...this.state.tablet.active,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet:{
                        ...this.state.tablet,
                        focus:{
                            ...this.state.tablet.focus,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        hover:{
                            ...this.state.desktop.hover,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        active:{
                            ...this.state.desktop.active,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop:{
                        ...this.state.desktop,
                        focus:{
                            ...this.state.desktop.focus,
                            angle: num
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    getAngle = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.angle
            }
            if(this.state.hov){
                return this.state.all.hover.angle
            }
            if(this.state.act){
                return this.state.all.active.angle
            }
            if(this.state.foc){
                return this.state.all.focus.angle
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.angle
            }
            if(this.state.hov){
                return this.state.mobile.hover.angle
            }
            if(this.state.act){
                return this.state.mobile.active.angle
            }
            if(this.state.foc){
                return this.state.mobile.focus.angle
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.angle
            }
            if(this.state.hov){
                return this.state.tablet.hover.angle
            }
            if(this.state.act){
                return this.state.tablet.active.angle
            }
            if(this.state.foc){
                return this.state.tablet.focus.angle
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.angle
            }
            if(this.state.hov){
                return this.state.desktop.hover.angle
            }
            if(this.state.act){
                return this.state.desktop.active.angle
            }
            if(this.state.foc){
                return this.state.desktop.focus.angle
            }
        }
        return '#FFF'
    }

    render() {
        return (
            <DivMargin>
                <CardHeader>Background color</CardHeader>
                <DivOptionsSelector>
                    <ButtonHeaderCard focus={this.state.mob} onClick={this.setMobFocus}>:mob</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.tab} onClick={this.setTabFocus}>:tab</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.des} onClick={this.setDesFocus}>:des</ButtonHeaderCard>
                    <div/>
                    <ButtonHeaderCard focus={this.state.hov} onClick={this.setHovFocus}>:hov</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.act} onClick={this.setActFocus}>:act</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.foc} onClick={this.setFocFocus}>:foc</ButtonHeaderCard>
                </DivOptionsSelector>
                {this.getFill() ? <DivOptions>
                    <DivName>Color</DivName>
                    <InputColor
                        initialValue={this.getColor()}
                        onChange={(color)=>{this.setColor(color.hex)}}
                        placement="top"
                    />
                </DivOptions> : <DivOptions>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>First color</DivName>
                            <InputColor
                                initialValue={this.getColorFirst()}
                                onChange={(color)=>{this.setColorFirst(color.hex)}}
                                placement="top"
                            />
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Second color</DivName>
                            <InputColor
                                initialValue={this.getColorSecond()}
                                onChange={(color)=>{this.setColorSecond(color.hex)}}
                                placement="top"
                            />
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                    <DivOptions>
                        <DivName>Angle</DivName>
                        <CustomInputBlockAll>
                            <Input placeholder={'All'}
                                   type={"text"}
                                   value={this.getAngle() + 'deg'}
                                   onChange={(e) => {
                                       this.updateValue(e.target.value)
                                   }}/>
                            <ButtonsArrows>
                                <ButtonArrowUp onClick={() => {this.incrementElem()}}>+</ButtonArrowUp>
                                <ButtonArrowDown onClick={() => {this.decrementElem()}}>-</ButtonArrowDown>
                            </ButtonsArrows>
                        </CustomInputBlockAll>
                    </DivOptions>
                </DivOptions>
                }
                <OptionRow onClick={() => this.setFill(this.getFill())}>
                    <CheckBox>
                        {this.getFill() ? <div>&#10004;</div> : ''}
                    </CheckBox>
                    Fill
                </OptionRow>
            </DivMargin>
        )
    }
}