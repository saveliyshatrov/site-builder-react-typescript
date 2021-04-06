import React, {Component} from "react";
import styled from "styled-components";
import {
    CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow, DivOptionsTwo, ButtonHeaderCard, DivOptionsSelector, DivMargin, DivName
} from '../elems'
import InputColor from "react-input-color";



export default class BorderColorCard extends Component<any, any> {
    state = {
        all: {
            none: {
                top: this.props.obj.all.borderColor.none.length === 1?this.props.obj.all.borderColor.none[0]:this.props.obj.all.borderColor.none[0],
                right: this.props.obj.all.borderColor.none.length === 1?this.props.obj.all.borderColor.none[0]:this.props.obj.all.borderColor.none[1],
                bottom: this.props.obj.all.borderColor.none.length === 1?this.props.obj.all.borderColor.none[0]:this.props.obj.all.borderColor.none[2],
                left: this.props.obj.all.borderColor.none.length === 1?this.props.obj.all.borderColor.none[0]:this.props.obj.all.borderColor.none[3],
                all: this.props.obj.all.borderColor.none.length === 1
            },
            hover: {
                top: this.props.obj.all.borderColor.hover.length === 1?this.props.obj.all.borderColor.hover[0]:this.props.obj.all.borderColor.hover[0],
                right: this.props.obj.all.borderColor.hover.length === 1?this.props.obj.all.borderColor.hover[0]:this.props.obj.all.borderColor.hover[1],
                bottom: this.props.obj.all.borderColor.hover.length === 1?this.props.obj.all.borderColor.hover[0]:this.props.obj.all.borderColor.hover[2],
                left: this.props.obj.all.borderColor.hover.length === 1?this.props.obj.all.borderColor.hover[0]:this.props.obj.all.borderColor.hover[3],
                all: this.props.obj.all.borderColor.hover.length === 1
            },
            active: {
                top: this.props.obj.all.borderColor.active.length === 1?this.props.obj.all.borderColor.active[0]:this.props.obj.all.borderColor.active[0],
                right: this.props.obj.all.borderColor.active.length === 1?this.props.obj.all.borderColor.active[0]:this.props.obj.all.borderColor.active[1],
                bottom: this.props.obj.all.borderColor.active.length === 1?this.props.obj.all.borderColor.active[0]:this.props.obj.all.borderColor.active[2],
                left: this.props.obj.all.borderColor.active.length === 1?this.props.obj.all.borderColor.active[0]:this.props.obj.all.borderColor.active[3],
                all: this.props.obj.all.borderColor.active.length === 1
            },
            focus: {
                top: this.props.obj.all.borderColor.focus.length === 1?this.props.obj.all.borderColor.focus[0]:this.props.obj.all.borderColor.focus[0],
                right: this.props.obj.all.borderColor.focus.length === 1?this.props.obj.all.borderColor.focus[0]:this.props.obj.all.borderColor.focus[1],
                bottom: this.props.obj.all.borderColor.focus.length === 1?this.props.obj.all.borderColor.focus[0]:this.props.obj.all.borderColor.focus[2],
                left: this.props.obj.all.borderColor.focus.length === 1?this.props.obj.all.borderColor.focus[0]:this.props.obj.all.borderColor.focus[3],
                all: this.props.obj.all.borderColor.focus.length === 1
            },
        },
        mobile: {
            none: {
                top: this.props.obj.mobile.borderColor.none.length === 1?this.props.obj.mobile.borderColor.none[0]:this.props.obj.mobile.borderColor.none[0],
                right: this.props.obj.mobile.borderColor.none.length === 1?this.props.obj.mobile.borderColor.none[0]:this.props.obj.mobile.borderColor.none[1],
                bottom: this.props.obj.mobile.borderColor.none.length === 1?this.props.obj.mobile.borderColor.none[0]:this.props.obj.mobile.borderColor.none[2],
                left: this.props.obj.mobile.borderColor.none.length === 1?this.props.obj.mobile.borderColor.none[0]:this.props.obj.mobile.borderColor.none[3],
                all: this.props.obj.mobile.borderColor.none.length === 1
            },
            hover: {
                top: this.props.obj.mobile.borderColor.hover.length === 1?this.props.obj.mobile.borderColor.hover[0]:this.props.obj.mobile.borderColor.hover[0],
                right: this.props.obj.mobile.borderColor.hover.length === 1?this.props.obj.mobile.borderColor.hover[0]:this.props.obj.mobile.borderColor.hover[1],
                bottom: this.props.obj.mobile.borderColor.hover.length === 1?this.props.obj.mobile.borderColor.hover[0]:this.props.obj.mobile.borderColor.hover[2],
                left: this.props.obj.mobile.borderColor.hover.length === 1?this.props.obj.mobile.borderColor.hover[0]:this.props.obj.mobile.borderColor.hover[3],
                all: this.props.obj.mobile.borderColor.hover.length === 1
            },
            active: {
                top: this.props.obj.mobile.borderColor.active.length === 1?this.props.obj.mobile.borderColor.active[0]:this.props.obj.mobile.borderColor.active[0],
                right: this.props.obj.mobile.borderColor.active.length === 1?this.props.obj.mobile.borderColor.active[0]:this.props.obj.mobile.borderColor.active[1],
                bottom: this.props.obj.mobile.borderColor.active.length === 1?this.props.obj.mobile.borderColor.active[0]:this.props.obj.mobile.borderColor.active[2],
                left: this.props.obj.mobile.borderColor.active.length === 1?this.props.obj.mobile.borderColor.active[0]:this.props.obj.mobile.borderColor.active[3],
                all: this.props.obj.mobile.borderColor.active.length === 1
            },
            focus: {
                top: this.props.obj.mobile.borderColor.focus.length === 1?this.props.obj.mobile.borderColor.focus[0]:this.props.obj.mobile.borderColor.focus[0],
                right: this.props.obj.mobile.borderColor.focus.length === 1?this.props.obj.mobile.borderColor.focus[0]:this.props.obj.mobile.borderColor.focus[1],
                bottom: this.props.obj.mobile.borderColor.focus.length === 1?this.props.obj.mobile.borderColor.focus[0]:this.props.obj.mobile.borderColor.focus[2],
                left: this.props.obj.mobile.borderColor.focus.length === 1?this.props.obj.mobile.borderColor.focus[0]:this.props.obj.mobile.borderColor.focus[3],
                all: this.props.obj.mobile.borderColor.focus.length === 1
            },
        },
        tablet: {
            none: {
                top: this.props.obj.tablet.borderColor.none.length === 1?this.props.obj.tablet.borderColor.none[0]:this.props.obj.tablet.borderColor.none[0],
                right: this.props.obj.tablet.borderColor.none.length === 1?this.props.obj.tablet.borderColor.none[0]:this.props.obj.tablet.borderColor.none[1],
                bottom: this.props.obj.tablet.borderColor.none.length === 1?this.props.obj.tablet.borderColor.none[0]:this.props.obj.tablet.borderColor.none[2],
                left: this.props.obj.tablet.borderColor.none.length === 1?this.props.obj.tablet.borderColor.none[0]:this.props.obj.tablet.borderColor.none[3],
                all: this.props.obj.tablet.borderColor.none.length === 1
            },
            hover: {
                top: this.props.obj.tablet.borderColor.hover.length === 1?this.props.obj.tablet.borderColor.hover[0]:this.props.obj.tablet.borderColor.hover[0],
                right: this.props.obj.tablet.borderColor.hover.length === 1?this.props.obj.tablet.borderColor.hover[0]:this.props.obj.tablet.borderColor.hover[1],
                bottom: this.props.obj.tablet.borderColor.hover.length === 1?this.props.obj.tablet.borderColor.hover[0]:this.props.obj.tablet.borderColor.hover[2],
                left: this.props.obj.tablet.borderColor.hover.length === 1?this.props.obj.tablet.borderColor.hover[0]:this.props.obj.tablet.borderColor.hover[3],
                all: this.props.obj.tablet.borderColor.hover.length === 1
            },
            active: {
                top: this.props.obj.tablet.borderColor.active.length === 1?this.props.obj.tablet.borderColor.active[0]:this.props.obj.tablet.borderColor.active[0],
                right: this.props.obj.tablet.borderColor.active.length === 1?this.props.obj.tablet.borderColor.active[0]:this.props.obj.tablet.borderColor.active[1],
                bottom: this.props.obj.tablet.borderColor.active.length === 1?this.props.obj.tablet.borderColor.active[0]:this.props.obj.tablet.borderColor.active[2],
                left: this.props.obj.tablet.borderColor.active.length === 1?this.props.obj.tablet.borderColor.active[0]:this.props.obj.tablet.borderColor.active[3],
                all: this.props.obj.tablet.borderColor.active.length === 1
            },
            focus: {
                top: this.props.obj.tablet.borderColor.focus.length === 1?this.props.obj.tablet.borderColor.focus[0]:this.props.obj.tablet.borderColor.focus[0],
                right: this.props.obj.tablet.borderColor.focus.length === 1?this.props.obj.tablet.borderColor.focus[0]:this.props.obj.tablet.borderColor.focus[1],
                bottom: this.props.obj.tablet.borderColor.focus.length === 1?this.props.obj.tablet.borderColor.focus[0]:this.props.obj.tablet.borderColor.focus[2],
                left: this.props.obj.tablet.borderColor.focus.length === 1?this.props.obj.tablet.borderColor.focus[0]:this.props.obj.tablet.borderColor.focus[3],
                all: this.props.obj.tablet.borderColor.focus.length === 1
            },
        },
        desktop: {
            none: {
                top: this.props.obj.desktop.borderColor.none.length === 1?this.props.obj.desktop.borderColor.none[0]:this.props.obj.desktop.borderColor.none[0],
                right: this.props.obj.desktop.borderColor.none.length === 1?this.props.obj.desktop.borderColor.none[0]:this.props.obj.desktop.borderColor.none[1],
                bottom: this.props.obj.desktop.borderColor.none.length === 1?this.props.obj.desktop.borderColor.none[0]:this.props.obj.desktop.borderColor.none[2],
                left: this.props.obj.desktop.borderColor.none.length === 1?this.props.obj.desktop.borderColor.none[0]:this.props.obj.desktop.borderColor.none[3],
                all: this.props.obj.desktop.borderColor.none.length === 1
            },
            hover: {
                top: this.props.obj.desktop.borderColor.hover.length === 1?this.props.obj.desktop.borderColor.hover[0]:this.props.obj.desktop.borderColor.hover[0],
                right: this.props.obj.desktop.borderColor.hover.length === 1?this.props.obj.desktop.borderColor.hover[0]:this.props.obj.desktop.borderColor.hover[1],
                bottom: this.props.obj.desktop.borderColor.hover.length === 1?this.props.obj.desktop.borderColor.hover[0]:this.props.obj.desktop.borderColor.hover[2],
                left: this.props.obj.desktop.borderColor.hover.length === 1?this.props.obj.desktop.borderColor.hover[0]:this.props.obj.desktop.borderColor.hover[3],
                all: this.props.obj.desktop.borderColor.hover.length === 1
            },
            active: {
                top: this.props.obj.desktop.borderColor.active.length === 1?this.props.obj.desktop.borderColor.active[0]:this.props.obj.desktop.borderColor.active[0],
                right: this.props.obj.desktop.borderColor.active.length === 1?this.props.obj.desktop.borderColor.active[0]:this.props.obj.desktop.borderColor.active[1],
                bottom: this.props.obj.desktop.borderColor.active.length === 1?this.props.obj.desktop.borderColor.active[0]:this.props.obj.desktop.borderColor.active[2],
                left: this.props.obj.desktop.borderColor.active.length === 1?this.props.obj.desktop.borderColor.active[0]:this.props.obj.desktop.borderColor.active[3],
                all: this.props.obj.desktop.borderColor.active.length === 1
            },
            focus: {
                top: this.props.obj.desktop.borderColor.focus.length === 1?this.props.obj.desktop.borderColor.focus[0]:this.props.obj.desktop.borderColor.focus[0],
                right: this.props.obj.desktop.borderColor.focus.length === 1?this.props.obj.desktop.borderColor.focus[0]:this.props.obj.desktop.borderColor.focus[1],
                bottom: this.props.obj.desktop.borderColor.focus.length === 1?this.props.obj.desktop.borderColor.focus[0]:this.props.obj.desktop.borderColor.focus[2],
                left: this.props.obj.desktop.borderColor.focus.length === 1?this.props.obj.desktop.borderColor.focus[0]:this.props.obj.desktop.borderColor.focus[3],
                all: this.props.obj.desktop.borderColor.focus.length === 1
            },
        },
        mob: false,
        tab: false,
        des: false,
        hov: false,
        act: false,
        foc: false,
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
            if(this.state.hov){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcAll([top], 'hover')
                } else {
                    this.props.funcAll([top, right, bottom, left], 'hover')
                }
            }
            if(this.state.act){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcAll([top], 'active')
                } else {
                    this.props.funcAll([top, right, bottom, left], 'active')
                }
            }
            if(this.state.foc){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcAll([top], 'focus')
                } else {
                    this.props.funcAll([top, right, bottom, left], 'focus')
                }
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcAll([top], 'none')
                } else {
                    this.props.funcAll([top, right, bottom, left], 'none')
                }
            }
        }
        if(this.state.mob){
            if(this.state.hov){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcMobile([top], 'hover')
                } else {
                    this.props.funcMobile([top, right, bottom, left], 'hover')
                }
            }
            if(this.state.act){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcMobile([top], 'active')
                } else {
                    this.props.funcMobile([top, right, bottom, left], 'active')
                }
            }
            if(this.state.foc){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcMobile([top], 'focus')
                } else {
                    this.props.funcMobile([top, right, bottom, left], 'focus')
                }
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcMobile([top], 'none')
                } else {
                    this.props.funcMobile([top, right, bottom, left], 'none')
                }
            }
        }
        if(this.state.tab){
            if(this.state.hov){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcTablet([top], 'hover')
                } else {
                    this.props.funcTablet([top, right, bottom, left], 'hover')
                }
            }
            if(this.state.act){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcTablet([top], 'active')
                } else {
                    this.props.funcTablet([top, right, bottom, left], 'active')
                }
            }
            if(this.state.foc){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcTablet([top], 'focus')
                } else {
                    this.props.funcTablet([top, right, bottom, left], 'focus')
                }
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcTablet([top], 'none')
                } else {
                    this.props.funcTablet([top, right, bottom, left], 'none')
                }
            }
        }
        if(this.state.des){
            if(this.state.hov){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcDesktop([top], 'hover')
                } else {
                    this.props.funcDesktop([top, right, bottom, left], 'hover')
                }
            }
            if(this.state.act){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcDesktop([top], 'active')
                } else {
                    this.props.funcDesktop([top, right, bottom, left], 'active')
                }
            }
            if(this.state.foc){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcDesktop([top], 'focus')
                } else {
                    this.props.funcDesktop([top, right, bottom, left], 'focus')
                }
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                let [top, right, bottom, left] = [this.getTopColor(), this.getRightColor(), this.getBottomColor(), this.getLeftColor()]
                if(top === right&&top === bottom&&top===left){
                    this.props.funcDesktop([top], 'none')
                } else {
                    this.props.funcDesktop([top, right, bottom, left], 'none')
                }
            }
        }
    }

    getTopColor = ():string => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(this.state.hov){
                return this.state.all.hover.top
            }
            if(this.state.act){
                return this.state.all.active.top
            }
            if(this.state.foc){
                return this.state.all.focus.top
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.all.none.top
            }
        }
        if(this.state.mob){
            if(this.state.hov){
                return this.state.mobile.hover.top
            }
            if(this.state.act){
                return this.state.mobile.active.top
            }
            if(this.state.foc){
                return this.state.mobile.focus.top
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.mobile.none.top
            }
        }
        if(this.state.tab){
            if(this.state.hov){
                return this.state.tablet.hover.top
            }
            if(this.state.act){
                return this.state.tablet.active.top
            }
            if(this.state.foc){
                return this.state.tablet.focus.top
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.tablet.none.top
            }
        }
        if(this.state.des){
            if(this.state.hov){
                return this.state.desktop.hover.top
            }
            if(this.state.act){
                return this.state.desktop.active.top
            }
            if(this.state.foc){
                return this.state.desktop.focus.top
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.desktop.none.top
            }
        }
        return '#FFFFFF'
    }
    getRightColor = ():string => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(this.state.hov){
                return this.state.all.hover.right
            }
            if(this.state.act){
                return this.state.all.active.right
            }
            if(this.state.foc){
                return this.state.all.focus.right
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.all.none.right
            }
        }
        if(this.state.mob){
            if(this.state.hov){
                return this.state.mobile.hover.right
            }
            if(this.state.act){
                return this.state.mobile.active.right
            }
            if(this.state.foc){
                return this.state.mobile.focus.right
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.mobile.none.right
            }
        }
        if(this.state.tab){
            if(this.state.hov){
                return this.state.tablet.hover.right
            }
            if(this.state.act){
                return this.state.tablet.active.right
            }
            if(this.state.foc){
                return this.state.tablet.focus.right
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.tablet.none.right
            }
        }
        if(this.state.des){
            if(this.state.hov){
                return this.state.desktop.hover.right
            }
            if(this.state.act){
                return this.state.desktop.active.right
            }
            if(this.state.foc){
                return this.state.desktop.focus.right
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.desktop.none.right
            }
        }
        return '#FFFFFF'
    }
    getBottomColor = ():string => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(this.state.hov){
                return this.state.all.hover.bottom
            }
            if(this.state.act){
                return this.state.all.active.bottom
            }
            if(this.state.foc){
                return this.state.all.focus.bottom
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.all.none.bottom
            }
        }
        if(this.state.mob){
            if(this.state.hov){
                return this.state.mobile.hover.bottom
            }
            if(this.state.act){
                return this.state.mobile.active.bottom
            }
            if(this.state.foc){
                return this.state.mobile.focus.bottom
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.mobile.none.bottom
            }
        }
        if(this.state.tab){
            if(this.state.hov){
                return this.state.tablet.hover.bottom
            }
            if(this.state.act){
                return this.state.tablet.active.bottom
            }
            if(this.state.foc){
                return this.state.tablet.focus.bottom
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.tablet.none.bottom
            }
        }
        if(this.state.des){
            if(this.state.hov){
                return this.state.desktop.hover.bottom
            }
            if(this.state.act){
                return this.state.desktop.active.bottom
            }
            if(this.state.foc){
                return this.state.desktop.focus.bottom
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.desktop.none.bottom
            }
        }
        return '#FFFFFF'
    }
    getLeftColor = ():string => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(this.state.hov){
                return this.state.all.hover.left
            }
            if(this.state.act){
                return this.state.all.active.left
            }
            if(this.state.foc){
                return this.state.all.focus.left
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.all.none.left
            }
        }
        if(this.state.mob){
            if(this.state.hov){
                return this.state.mobile.hover.left
            }
            if(this.state.act){
                return this.state.mobile.active.left
            }
            if(this.state.foc){
                return this.state.mobile.focus.left
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.mobile.none.left
            }
        }
        if(this.state.tab){
            if(this.state.hov){
                return this.state.tablet.hover.left
            }
            if(this.state.act){
                return this.state.tablet.active.left
            }
            if(this.state.foc){
                return this.state.tablet.focus.left
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.tablet.none.left
            }
        }
        if(this.state.des){
            if(this.state.hov){
                return this.state.desktop.hover.left
            }
            if(this.state.act){
                return this.state.desktop.active.left
            }
            if(this.state.foc){
                return this.state.desktop.focus.left
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.desktop.none.left
            }
        }
        return '#FFFFFF'
    }
    getAll = ():boolean => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(this.state.hov){
                return this.state.all.hover.all
            }
            if(this.state.act){
                return this.state.all.active.all
            }
            if(this.state.foc){
                return this.state.all.focus.all
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.all.none.all
            }
        }
        if(this.state.mob){
            if(this.state.hov){
                return this.state.mobile.hover.all
            }
            if(this.state.act){
                return this.state.mobile.active.all
            }
            if(this.state.foc){
                return this.state.mobile.focus.all
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.mobile.none.all
            }
        }
        if(this.state.tab){
            if(this.state.hov){
                return this.state.tablet.hover.all
            }
            if(this.state.act){
                return this.state.tablet.active.all
            }
            if(this.state.foc){
                return this.state.tablet.focus.all
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.tablet.none.all
            }
        }
        if(this.state.des){
            if(this.state.hov){
                return this.state.desktop.hover.all
            }
            if(this.state.act){
                return this.state.desktop.active.all
            }
            if(this.state.foc){
                return this.state.desktop.focus.all
            }
            if(!(this.state.hov||this.state.act||this.state.act)){
                return this.state.desktop.none.all
            }
        }
        return false
    }

    setParams = ({
                     topColor = this.getTopColor(),
                     rightColor = this.getRightColor(),
                     bottomColor = this.getBottomColor(),
                     leftColor = this.getLeftColor(),
                     all = this.getAll()}) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(this.state.hov){
                this.setState({
                    all: {
                        ...this.state.all,
                        hover: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(this.state.act){
                this.setState({
                    all: {
                        ...this.state.all,
                        active: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(this.state.foc){
                this.setState({
                    all: {
                        ...this.state.all,
                        focus: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    all: {
                        ...this.state.all,
                        none: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
        }
        if(this.state.mob){
            if(this.state.hov){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        hover: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(this.state.act){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        active: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(this.state.foc){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        focus: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        none: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
        }
        if(this.state.tab){
            if(this.state.hov){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        hover: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(this.state.act){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        active: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(this.state.foc){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        focus: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        none: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
        }
        if(this.state.des){
            if(this.state.hov){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(this.state.act){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        active: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(this.state.foc){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        focus: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        none: {
                            top: topColor,
                            right: rightColor,
                            bottom: bottomColor,
                            left: leftColor,
                            all: all
                        }
                    }
                }, this.setInfo )
            }
        }
    }

    setTopColor = (color: string) => {
        if(this.getAll()){
            this.setParams({
                topColor: color,
                rightColor: color,
                bottomColor: color,
                leftColor: color
            })
        } else {
            this.setParams({
                topColor: color
            })
        }
    }
    setBottomColor = (color: string) => {
        this.setParams({
            bottomColor: color
        })
    }
    setLeftColor = (color: string) => {
        this.setParams({
            leftColor: color
        })
    }
    setRightColor = (color: string) => {
        this.setParams({
            rightColor: color
        })
    }
    changeAll = () => {
        this.setParams({
            topColor: this.getTopColor(),
            rightColor: this.getTopColor(),
            bottomColor: this.getTopColor(),
            leftColor: this.getTopColor(),
            all: !this.getAll()
        })
    }
    render() {
        return (
            <DivMargin>
                <CardHeader>Border color</CardHeader>
                <DivOptionsSelector>
                    <ButtonHeaderCard focus={this.state.mob} onClick={this.setMobFocus}>:mob</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.tab} onClick={this.setTabFocus}>:tab</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.des} onClick={this.setDesFocus}>:des</ButtonHeaderCard>
                    <div/>
                    <ButtonHeaderCard focus={this.state.hov} onClick={this.setHovFocus}>:hov</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.act} onClick={this.setActFocus}>:act</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.foc} onClick={this.setFocFocus}>:foc</ButtonHeaderCard>
                </DivOptionsSelector>
                {!this.getAll()?<DivOptions>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Top</DivName>
                            <InputColor
                                initialValue={this.getTopColor()}
                                onChange={(color) => {
                                    this.setTopColor(color.hex)
                                }}
                                placement="top"
                            />
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Left</DivName>
                            <InputColor
                                initialValue={this.getLeftColor()}
                                onChange={(color) => {
                                    this.setLeftColor(color.hex)
                                }}
                                placement="top"
                            />
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Bottom</DivName>
                            <InputColor
                                initialValue={this.getBottomColor()}
                                onChange={(color) => {
                                    this.setBottomColor(color.hex)
                                }}
                                placement="top"
                            />
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Right</DivName>
                            <InputColor
                                initialValue={this.getRightColor()}
                                onChange={(color) => {
                                    this.setRightColor(color.hex)
                                }}
                                placement="top"
                            />
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                </DivOptions>:<DivOptions>
                    <DivName>All</DivName>
                    <InputColor
                        initialValue={this.getTopColor()}
                        onChange={(color) => {
                            this.setTopColor(color.hex)
                        }}
                        placement="top"
                    />
                </DivOptions>}
                <OptionRow onClick={() => this.changeAll()}>
                    <CheckBox>
                        {this.getAll() ? <div>&#10004;</div> : ''}
                    </CheckBox>
                    All
                </OptionRow>
            </DivMargin>
        )
    }
}
