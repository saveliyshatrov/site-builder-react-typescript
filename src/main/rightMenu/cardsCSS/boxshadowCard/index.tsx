import React, {Component} from "react";
import {
    ButtonArrowDown,
    ButtonArrowUp,
    ButtonsArrows,
    CardHeader,
    CustomInputBlock,
    DivOptions, DivOptionsRow2, DivOptionsTwo,
    Input, Select, DivMargin, DivName, ButtonHeaderCard, DivOptionsSelector
} from "../elems";
import styled from "styled-components";
import InputColor from 'react-input-color';

type TRBLTSA = {
    x: number,
    sizing: number,
    blur: number,
    y: number,
    typeSize: 'px' | '%',
    color: string,
    mob: false,
    tab: false,
    des: false,
    hov: false,
    act: false,
    foc: false
}

export default class BoxShadowCard extends Component<any, any> {
    state = {
        all:{
            none: {
                x: parseInt(this.props.obj.all.boxShadow.none[0].replace('px', '%')),
                y: parseInt(this.props.obj.all.boxShadow.none[1].replace('px', '%')),
                blur: parseInt(this.props.obj.all.boxShadow.none[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.all.boxShadow.none[3].replace('px', '%')),
                typeSize: this.props.obj.all.boxShadow.none[0].includes('%')?'%':'px',
                color: this.props.obj.all.boxShadow.none[4]
            },
            hover: {
                x: parseInt(this.props.obj.all.boxShadow.hover[0].replace('px', '%')),
                y: parseInt(this.props.obj.all.boxShadow.hover[1].replace('px', '%')),
                blur: parseInt(this.props.obj.all.boxShadow.hover[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.all.boxShadow.hover[3].replace('px', '%')),
                typeSize: this.props.obj.all.boxShadow.hover[0].includes('%')?'%':'px',
                color: this.props.obj.all.boxShadow.hover[4]
            },
            active: {
                x: parseInt(this.props.obj.all.boxShadow.active[0].replace('px', '%')),
                y: parseInt(this.props.obj.all.boxShadow.active[1].replace('px', '%')),
                blur: parseInt(this.props.obj.all.boxShadow.active[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.all.boxShadow.active[3].replace('px', '%')),
                typeSize: this.props.obj.all.boxShadow.active[0].includes('%')?'%':'px',
                color: this.props.obj.all.boxShadow.active[4]
            },
            focus: {
                x: parseInt(this.props.obj.all.boxShadow.focus[0].replace('px', '%')),
                y: parseInt(this.props.obj.all.boxShadow.focus[1].replace('px', '%')),
                blur: parseInt(this.props.obj.all.boxShadow.focus[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.all.boxShadow.focus[3].replace('px', '%')),
                typeSize: this.props.obj.all.boxShadow.focus[0].includes('%')?'%':'px',
                color: this.props.obj.all.boxShadow.focus[4]
            },
        },
        mobile:{
            none: {
                x: parseInt(this.props.obj.mobile.boxShadow.none[0].replace('px', '%')),
                y: parseInt(this.props.obj.mobile.boxShadow.none[1].replace('px', '%')),
                blur: parseInt(this.props.obj.mobile.boxShadow.none[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.mobile.boxShadow.none[3].replace('px', '%')),
                typeSize: this.props.obj.mobile.boxShadow.none[0].includes('%')?'%':'px',
                color: this.props.obj.mobile.boxShadow.none[4]
            },
            hover: {
                x: parseInt(this.props.obj.mobile.boxShadow.hover[0].replace('px', '%')),
                y: parseInt(this.props.obj.mobile.boxShadow.hover[1].replace('px', '%')),
                blur: parseInt(this.props.obj.mobile.boxShadow.hover[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.mobile.boxShadow.hover[3].replace('px', '%')),
                typeSize: this.props.obj.mobile.boxShadow.hover[0].includes('%')?'%':'px',
                color: this.props.obj.mobile.boxShadow.hover[4]
            },
            active: {
                x: parseInt(this.props.obj.mobile.boxShadow.active[0].replace('px', '%')),
                y: parseInt(this.props.obj.mobile.boxShadow.active[1].replace('px', '%')),
                blur: parseInt(this.props.obj.mobile.boxShadow.active[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.mobile.boxShadow.active[3].replace('px', '%')),
                typeSize: this.props.obj.mobile.boxShadow.active[0].includes('%')?'%':'px',
                color: this.props.obj.mobile.boxShadow.active[4]
            },
            focus: {
                x: parseInt(this.props.obj.mobile.boxShadow.focus[0].replace('px', '%')),
                y: parseInt(this.props.obj.mobile.boxShadow.focus[1].replace('px', '%')),
                blur: parseInt(this.props.obj.mobile.boxShadow.focus[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.mobile.boxShadow.focus[3].replace('px', '%')),
                typeSize: this.props.obj.mobile.boxShadow.focus[0].includes('%')?'%':'px',
                color: this.props.obj.mobile.boxShadow.focus[4]
            },
        },
        tablet:{
            none: {
                x: parseInt(this.props.obj.tablet.boxShadow.none[0].replace('px', '%')),
                y: parseInt(this.props.obj.tablet.boxShadow.none[1].replace('px', '%')),
                blur: parseInt(this.props.obj.tablet.boxShadow.none[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.tablet.boxShadow.none[3].replace('px', '%')),
                typeSize: this.props.obj.tablet.boxShadow.none[0].includes('%')?'%':'px',
                color: this.props.obj.tablet.boxShadow.none[4]
            },
            hover: {
                x: parseInt(this.props.obj.tablet.boxShadow.hover[0].replace('px', '%')),
                y: parseInt(this.props.obj.tablet.boxShadow.hover[1].replace('px', '%')),
                blur: parseInt(this.props.obj.tablet.boxShadow.hover[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.tablet.boxShadow.hover[3].replace('px', '%')),
                typeSize: this.props.obj.tablet.boxShadow.hover[0].includes('%')?'%':'px',
                color: this.props.obj.tablet.boxShadow.hover[4]
            },
            active: {
                x: parseInt(this.props.obj.tablet.boxShadow.active[0].replace('px', '%')),
                y: parseInt(this.props.obj.tablet.boxShadow.active[1].replace('px', '%')),
                blur: parseInt(this.props.obj.tablet.boxShadow.active[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.tablet.boxShadow.active[3].replace('px', '%')),
                typeSize: this.props.obj.tablet.boxShadow.active[0].includes('%')?'%':'px',
                color: this.props.obj.tablet.boxShadow.active[4]
            },
            focus: {
                x: parseInt(this.props.obj.tablet.boxShadow.focus[0].replace('px', '%')),
                y: parseInt(this.props.obj.tablet.boxShadow.focus[1].replace('px', '%')),
                blur: parseInt(this.props.obj.tablet.boxShadow.focus[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.tablet.boxShadow.focus[3].replace('px', '%')),
                typeSize: this.props.obj.tablet.boxShadow.focus[0].includes('%')?'%':'px',
                color: this.props.obj.tablet.boxShadow.focus[4]
            },
        },
        desktop:{
            none: {
                x: parseInt(this.props.obj.desktop.boxShadow.none[0].replace('px', '%')),
                y: parseInt(this.props.obj.desktop.boxShadow.none[1].replace('px', '%')),
                blur: parseInt(this.props.obj.desktop.boxShadow.none[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.desktop.boxShadow.none[3].replace('px', '%')),
                typeSize: this.props.obj.desktop.boxShadow.none[0].includes('%')?'%':'px',
                color: this.props.obj.desktop.boxShadow.none[4]
            },
            hover: {
                x: parseInt(this.props.obj.desktop.boxShadow.hover[0].replace('px', '%')),
                y: parseInt(this.props.obj.desktop.boxShadow.hover[1].replace('px', '%')),
                blur: parseInt(this.props.obj.desktop.boxShadow.hover[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.desktop.boxShadow.hover[3].replace('px', '%')),
                typeSize: this.props.obj.desktop.boxShadow.hover[0].includes('%')?'%':'px',
                color: this.props.obj.desktop.boxShadow.hover[4]
            },
            active: {
                x: parseInt(this.props.obj.desktop.boxShadow.active[0].replace('px', '%')),
                y: parseInt(this.props.obj.desktop.boxShadow.active[1].replace('px', '%')),
                blur: parseInt(this.props.obj.desktop.boxShadow.active[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.desktop.boxShadow.active[3].replace('px', '%')),
                typeSize: this.props.obj.desktop.boxShadow.active[0].includes('%')?'%':'px',
                color: this.props.obj.desktop.boxShadow.active[4]
            },
            focus: {
                x: parseInt(this.props.obj.desktop.boxShadow.focus[0].replace('px', '%')),
                y: parseInt(this.props.obj.desktop.boxShadow.focus[1].replace('px', '%')),
                blur: parseInt(this.props.obj.desktop.boxShadow.focus[2].replace('px', '%')),
                sizing: parseInt(this.props.obj.desktop.boxShadow.focus[3].replace('px', '%')),
                typeSize: this.props.obj.desktop.boxShadow.focus[0].includes('%')?'%':'px',
                color: this.props.obj.desktop.boxShadow.focus[4]
            },
        },
        mob: false,
        tab: false,
        des: false,
        hov: false,
        act: false,
        foc: false
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

    setInfo = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcAll([this.getX() + this.getTypeSize(),
                                    this.getY() + this.getTypeSize(),
                                    this.getBlur() + this.getTypeSize(),
                                    this.getSizing() + this.getTypeSize(), this.getColor()], 'none')
            }
            if(this.state.hov){
                this.props.funcAll([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'hover')
            }
            if(this.state.act){
                this.props.funcAll([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'active')
            }
            if(this.state.foc){
                this.props.funcAll([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'focus')
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcMobile([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'none')
            }
            if(this.state.hov){
                this.props.funcMobile([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'hover')
            }
            if(this.state.act){
                this.props.funcMobile([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'active')
            }
            if(this.state.foc){
                this.props.funcMobile([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'focus')
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcTablet([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'none')
            }
            if(this.state.hov){
                this.props.funcTablet([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'hover')
            }
            if(this.state.act){
                this.props.funcTablet([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'active')
            }
            if(this.state.foc){
                this.props.funcTablet([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'focus')
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcDesktop([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'none')
            }
            if(this.state.hov){
                this.props.funcDesktop([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'hover')
            }
            if(this.state.act){
                this.props.funcDesktop([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'active')
            }
            if(this.state.foc){
                this.props.funcDesktop([this.getX() + this.getTypeSize(),
                    this.getY() + this.getTypeSize(),
                    this.getBlur() + this.getTypeSize(),
                    this.getSizing() + this.getTypeSize(), this.getColor()], 'focus')
            }
        }
    }

    getX = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.x
            }
            if(this.state.hov){
                return this.state.all.hover.x
            }
            if(this.state.act){
                return this.state.all.active.x
            }
            if(this.state.foc){
                return this.state.all.focus.x
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.x
            }
            if(this.state.hov){
                return this.state.mobile.hover.x
            }
            if(this.state.act){
                return this.state.mobile.active.x
            }
            if(this.state.foc){
                return this.state.mobile.focus.x
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.x
            }
            if(this.state.hov){
                return this.state.tablet.hover.x
            }
            if(this.state.act){
                return this.state.tablet.active.x
            }
            if(this.state.foc){
                return this.state.tablet.focus.x
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.x
            }
            if(this.state.hov){
                return this.state.desktop.hover.x
            }
            if(this.state.act){
                return this.state.desktop.active.x
            }
            if(this.state.foc){
                return this.state.desktop.focus.x
            }
        }
        return 0
    }
    setX = (num: number) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all: {
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all: {
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all: {
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all: {
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            x: num
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    getY = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.y
            }
            if(this.state.hov){
                return this.state.all.hover.y
            }
            if(this.state.act){
                return this.state.all.active.y
            }
            if(this.state.foc){
                return this.state.all.focus.y
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.y
            }
            if(this.state.hov){
                return this.state.mobile.hover.y
            }
            if(this.state.act){
                return this.state.mobile.active.y
            }
            if(this.state.foc){
                return this.state.mobile.focus.y
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.y
            }
            if(this.state.hov){
                return this.state.tablet.hover.y
            }
            if(this.state.act){
                return this.state.tablet.active.y
            }
            if(this.state.foc){
                return this.state.tablet.focus.y
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.y
            }
            if(this.state.hov){
                return this.state.desktop.hover.y
            }
            if(this.state.act){
                return this.state.desktop.active.y
            }
            if(this.state.foc){
                return this.state.desktop.focus.y
            }
        }
        return 0
    }
    setY = (num: number) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all: {
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all: {
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all: {
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all: {
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            y: num
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    getBlur = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.blur
            }
            if(this.state.hov){
                return this.state.all.hover.blur
            }
            if(this.state.act){
                return this.state.all.active.blur
            }
            if(this.state.foc){
                return this.state.all.focus.blur
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.blur
            }
            if(this.state.hov){
                return this.state.mobile.hover.blur
            }
            if(this.state.act){
                return this.state.mobile.active.blur
            }
            if(this.state.foc){
                return this.state.mobile.focus.blur
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.blur
            }
            if(this.state.hov){
                return this.state.tablet.hover.blur
            }
            if(this.state.act){
                return this.state.tablet.active.blur
            }
            if(this.state.foc){
                return this.state.tablet.focus.blur
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.blur
            }
            if(this.state.hov){
                return this.state.desktop.hover.blur
            }
            if(this.state.act){
                return this.state.desktop.active.blur
            }
            if(this.state.foc){
                return this.state.desktop.focus.blur
            }
        }
        return 0
    }
    setBlur = (num: number) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all: {
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all: {
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all: {
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all: {
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            blur: num
                        }
                    }
                }, this.setInfo)
            }
        }
    }
    getSizing = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.sizing
            }
            if(this.state.hov){
                return this.state.all.hover.sizing
            }
            if(this.state.act){
                return this.state.all.active.sizing
            }
            if(this.state.foc){
                return this.state.all.focus.sizing
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.sizing
            }
            if(this.state.hov){
                return this.state.mobile.hover.sizing
            }
            if(this.state.act){
                return this.state.mobile.active.sizing
            }
            if(this.state.foc){
                return this.state.mobile.focus.sizing
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.sizing
            }
            if(this.state.hov){
                return this.state.tablet.hover.sizing
            }
            if(this.state.act){
                return this.state.tablet.active.sizing
            }
            if(this.state.foc){
                return this.state.tablet.focus.sizing
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.sizing
            }
            if(this.state.hov){
                return this.state.desktop.hover.sizing
            }
            if(this.state.act){
                return this.state.desktop.active.sizing
            }
            if(this.state.foc){
                return this.state.desktop.focus.sizing
            }
        }
        return 0
    }
    setSizing = (num: number) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all: {
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all: {
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all: {
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all: {
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            sizing: num
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            sizing: num
                        }
                    }
                }, this.setInfo)
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
        return 'px'
    }
    setTypeSize = (arg: string) => {
        arg = arg.includes('%')?'px':'%'
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all: {
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all: {
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all: {
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all: {
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            typeSize: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            typeSize: arg
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
    }
    setColor = (arg: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all: {
                        ...this.state.all,
                        none: {
                            ...this.state.all.none,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all: {
                        ...this.state.all,
                        hover: {
                            ...this.state.all.hover,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all: {
                        ...this.state.all,
                        active: {
                            ...this.state.all.active,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all: {
                        ...this.state.all,
                        focus: {
                            ...this.state.all.focus,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        none: {
                            ...this.state.mobile.none,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        hover: {
                            ...this.state.mobile.hover,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        active: {
                            ...this.state.mobile.active,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        focus: {
                            ...this.state.mobile.focus,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        none: {
                            ...this.state.tablet.none,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        hover: {
                            ...this.state.tablet.hover,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        active: {
                            ...this.state.tablet.active,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        focus: {
                            ...this.state.tablet.focus,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        none: {
                            ...this.state.desktop.none,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            ...this.state.desktop.hover,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        focus: {
                            ...this.state.desktop.focus,
                            color: arg
                        }
                    }
                }, this.setInfo)
            }
        }
    }

    changeTypeSize() {
        this.setTypeSize(this.getTypeSize())
    }

    incrementElem(name: string) {
        if (name === 'x') {
            this.setX(this.getX() + 1)
        }
        if (name === 'y') {
            this.setY(this.getY() + 1)
        }
        if (name === 'blur') {
            this.setBlur(this.getBlur() + 1)
        }
        if (name === 'sizing') {
            this.setSizing(this.getSizing() + 1)
        }
    }

    decrementElem(name: string) {
        if (name === 'x') {
            this.setX(this.getX() - 1)
        }
        if (name === 'y') {
            this.setY(this.getY() - 1)
        }
        if (name === 'blur') {
            this.setBlur(this.getBlur() - 1)
        }
        if (name === 'sizing') {
            this.setSizing(this.getSizing() - 1)
        }
    }

    updateValue = (text: string, name: string) => {
        text = text.replace('px', '').replace('%', '')
        let num = parseInt(text)
        if (!num || num < 0) {
            if (name === 'x') {
                this.setX(0)
            }
            if (name === 'y') {
                this.setY(0)
            }
            if (name === 'blur') {
                this.setBlur(0)
            }
            if (name === 'sizing') {
                this.setSizing(0)
            }

        } else {
            if (name === 'x') {
                this.setX(num)
            }
            if (name === 'y') {
                this.setY(num)
            }
            if (name === 'blur') {
                this.setBlur(num)
            }
            if (name === 'sizing') {
                this.setSizing(num)
            }
        }
    }

    render() {
        return (
            <DivMargin>
                <CardHeader>Box-shadow</CardHeader>
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
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>X</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'x'}
                                       type={"text"}
                                       value={this.getX() + this.getTypeSize()}
                                       onChange={(e) => {
                                           this.updateValue(e.target.value, 'x')
                                       }}/>
                                <ButtonsArrows>
                                    <ButtonArrowUp onClick={() => this.incrementElem('x')}>+</ButtonArrowUp>
                                    <ButtonArrowDown onClick={() => this.decrementElem('x')}>-</ButtonArrowDown>
                                </ButtonsArrows>
                            </CustomInputBlock>
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Y</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'y'}
                                       type={"text"}
                                       value={this.getY() + this.getTypeSize()}
                                       onChange={(e) => {
                                           this.updateValue(e.target.value, 'y')
                                       }}/>
                                <ButtonsArrows>
                                    <ButtonArrowUp onClick={() => this.incrementElem('y')}>+</ButtonArrowUp>
                                    <ButtonArrowDown onClick={() => this.decrementElem('y')}>-</ButtonArrowDown>
                                </ButtonsArrows>
                            </CustomInputBlock>
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Blur</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'blur'}
                                       type={"text"}
                                       value={this.getBlur() + this.getTypeSize()}
                                       onChange={(e) => {
                                           this.updateValue(e.target.value, 'blur')
                                       }}/>
                                <ButtonsArrows>
                                    <ButtonArrowUp onClick={() => this.incrementElem('blur')}>+</ButtonArrowUp>
                                    <ButtonArrowDown onClick={() => this.decrementElem('blur')}>-</ButtonArrowDown>
                                </ButtonsArrows>
                            </CustomInputBlock>
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Sizing</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'sizing'}
                                       type={"text"}
                                       value={this.getSizing() + this.getTypeSize()}
                                       onChange={(e) => {
                                           this.updateValue(e.target.value, 'sizing')
                                       }}/>
                                <ButtonsArrows>
                                    <ButtonArrowUp onClick={() => this.incrementElem('sizing')}>+</ButtonArrowUp>
                                    <ButtonArrowDown onClick={() => this.decrementElem('sizing')}>-</ButtonArrowDown>
                                </ButtonsArrows>
                            </CustomInputBlock>
                        </DivOptionsTwo>
                    </DivOptionsRow2>
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