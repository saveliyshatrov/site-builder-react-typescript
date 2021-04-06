import React, {Component} from "react";
import styled from "styled-components";
import {
    CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow, DivOptionsTwo, ButtonHeaderCard, DivOptionsSelector, DivName, DivMargin
} from '../elems'



export default class PaddingCard extends Component<any, any> {
    state = {
        all:{
            top: this.props.obj.all.padding.length === 1?parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')),
            right: this.props.obj.all.padding.length === 1?parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.all.padding[1].replace('px', '').replace('%', '')),
            bottom: this.props.obj.all.padding.length === 1?parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.all.padding[2].replace('px', '').replace('%', '')),
            left: this.props.obj.all.padding.length === 1?parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.all.padding[3].replace('px', '').replace('%', '')),
            typeSize: this.props.obj.all.padding[0].includes('%')?'%':'px',
            all: this.props.obj.all.padding.length === 1
        },
        mobile: {
            top: this.props.obj.mobile.padding.length === 1?parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')),
            right: this.props.obj.mobile.padding.length === 1?parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.mobile.padding[1].replace('px', '').replace('%', '')),
            bottom: this.props.obj.mobile.padding.length === 1?parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.mobile.padding[2].replace('px', '').replace('%', '')),
            left: this.props.obj.mobile.padding.length === 1?parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.mobile.padding[3].replace('px', '').replace('%', '')),
            typeSize: this.props.obj.mobile.padding[0].includes('%')?'%':'px',
            all: this.props.obj.mobile.padding.length === 1
        },
        tablet: {
            top: this.props.obj.tablet.padding.length === 1?parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')),
            right: this.props.obj.tablet.padding.length === 1?parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.tablet.padding[1].replace('px', '').replace('%', '')),
            bottom: this.props.obj.tablet.padding.length === 1?parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.tablet.padding[2].replace('px', '').replace('%', '')),
            left: this.props.obj.tablet.padding.length === 1?parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.tablet.padding[3].replace('px', '').replace('%', '')),
            typeSize: this.props.obj.tablet.padding[0].includes('%')?'%':'px',
            all: this.props.obj.tablet.padding.length === 1
        },
        desktop: {
            top:      this.props.obj.desktop.padding.length === 1?parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')),
            right:    this.props.obj.desktop.padding.length === 1?parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.desktop.padding[1].replace('px', '').replace('%', '')),
            bottom:   this.props.obj.desktop.padding.length === 1?parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.desktop.padding[2].replace('px', '').replace('%', '')),
            left:     this.props.obj.desktop.padding.length === 1?parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.desktop.padding[3].replace('px', '').replace('%', '')),
            typeSize: this.props.obj.desktop.padding[0].includes('%')?'%':'px',
            all:      this.props.obj.desktop.padding.length === 1
        },
        mob: false,
        tab: false,
        des: false,
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps !== this.props && prevState !== this.state){
            this.setState({
                all:{
                    top: this.props.obj.all.padding.length === 1?parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')),
                    right: this.props.obj.all.padding.length === 1?parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.all.padding[1].replace('px', '').replace('%', '')),
                    bottom: this.props.obj.all.padding.length === 1?parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.all.padding[2].replace('px', '').replace('%', '')),
                    left: this.props.obj.all.padding.length === 1?parseInt(this.props.obj.all.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.all.padding[3].replace('px', '').replace('%', '')),
                    typeSize: this.props.obj.all.padding[0].includes('%')?'%':'px',
                    all: this.props.obj.all.padding.length === 1
                },
                mobile: {
                    top: this.props.obj.mobile.padding.length === 1?parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')),
                    right: this.props.obj.mobile.padding.length === 1?parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.mobile.padding[1].replace('px', '').replace('%', '')),
                    bottom: this.props.obj.mobile.padding.length === 1?parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.mobile.padding[2].replace('px', '').replace('%', '')),
                    left: this.props.obj.mobile.padding.length === 1?parseInt(this.props.obj.mobile.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.mobile.padding[3].replace('px', '').replace('%', '')),
                    typeSize: this.props.obj.mobile.padding[0].includes('%')?'%':'px',
                    all: this.props.obj.mobile.padding.length === 1
                },
                tablet: {
                    top: this.props.obj.tablet.padding.length === 1?parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')),
                    right: this.props.obj.tablet.padding.length === 1?parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.tablet.padding[1].replace('px', '').replace('%', '')),
                    bottom: this.props.obj.tablet.padding.length === 1?parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.tablet.padding[2].replace('px', '').replace('%', '')),
                    left: this.props.obj.tablet.padding.length === 1?parseInt(this.props.obj.tablet.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.tablet.padding[3].replace('px', '').replace('%', '')),
                    typeSize: this.props.obj.tablet.padding[0].includes('%')?'%':'px',
                    all: this.props.obj.tablet.padding.length === 1
                },
                desktop: {
                    top: this.props.obj.desktop.padding.length === 1?parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')),
                    right: this.props.obj.desktop.padding.length === 1?parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.desktop.padding[1].replace('px', '').replace('%', '')),
                    bottom: this.props.obj.desktop.padding.length === 1?parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.desktop.padding[2].replace('px', '').replace('%', '')),
                    left: this.props.obj.desktop.padding.length === 1?parseInt(this.props.obj.desktop.padding[0].replace('px', '').replace('%', '')):parseInt(this.props.obj.desktop.padding[3].replace('px', '').replace('%', '')),
                    typeSize: this.props.obj.desktop.padding[0].includes('%')?'%':'px',
                    all: this.props.obj.desktop.padding.length === 1
                },
            })
        }
    }

    setInfo = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(this.state.all.top === this.state.all.right&&this.state.all.top === this.state.all.bottom&&this.state.all.top === this.state.all.left){
                this.props.funcAll([this.state.all.top + this.state.all.typeSize])
            } else {
                this.props.funcAll([this.state.all.top + this.state.all.typeSize,
                    this.state.all.right + this.state.all.typeSize,
                    this.state.all.bottom + this.state.all.typeSize,
                    this.state.all.left + this.state.all.typeSize])
            }
        }
        if(this.state.mob){
            if(this.state.mobile.top === this.state.mobile.right&&this.state.mobile.top === this.state.mobile.bottom&&this.state.mobile.top === this.state.mobile.left){
                this.props.funcMobile([this.state.mobile.top + this.state.mobile.typeSize])
            } else {
                this.props.funcMobile([this.state.mobile.top + this.state.mobile.typeSize,
                    this.state.mobile.right + this.state.mobile.typeSize,
                    this.state.mobile.bottom + this.state.mobile.typeSize,
                    this.state.mobile.left + this.state.mobile.typeSize])
            }
        }
        if(this.state.tab){
            if(this.state.tablet.top === this.state.tablet.right&&this.state.tablet.top === this.state.tablet.bottom&&this.state.tablet.top === this.state.tablet.left){
                this.props.funcTablet([this.state.tablet.top + this.state.tablet.typeSize])
            } else {
                this.props.funcTablet([this.state.tablet.top + this.state.tablet.typeSize,
                    this.state.tablet.right + this.state.tablet.typeSize,
                    this.state.tablet.bottom + this.state.tablet.typeSize,
                    this.state.tablet.left + this.state.tablet.typeSize])
            }
        }
        if(this.state.des){
            if(this.state.desktop.top === this.state.desktop.right&&this.state.desktop.top === this.state.desktop.bottom&&this.state.desktop.top === this.state.desktop.left){
                this.props.funcDesktop([this.state.desktop.top + this.state.desktop.typeSize])
            } else {
                this.props.funcDesktop([this.state.desktop.top + this.state.desktop.typeSize,
                    this.state.desktop.right + this.state.desktop.typeSize,
                    this.state.desktop.bottom + this.state.desktop.typeSize,
                    this.state.desktop.left + this.state.desktop.typeSize])
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
    changeTypeSize = () => {
        let typePercentPX = this.getType();
        let toChange = typePercentPX === 'px'?'%':'px'
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    typeSize: toChange
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    typeSize: toChange
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    typeSize: toChange
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    typeSize: toChange
                }
            }, this.setInfo)
        }
    }
    getInfoSize = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(this.state.all.all){
                return [this.state.all.top]
            } else {
                return [this.state.all.top, this.state.all.right, this.state.all.bottom, this.state.all.left]
            }
        }
        if(this.state.mob){
            if(this.state.mobile.all){
                return [this.state.mobile.top]
            } else {
                return [this.state.mobile.top, this.state.mobile.right, this.state.mobile.bottom, this.state.mobile.left]
            }
        }
        if(this.state.tab){
            if(this.state.tablet.all){
                return [this.state.tablet.top]
            } else {
                return [this.state.tablet.top, this.state.tablet.right, this.state.tablet.bottom, this.state.tablet.left]
            }
        }
        if(this.state.des){
            if(this.state.desktop.all){
                return [this.state.desktop.top]
            } else {
                return [this.state.desktop.top, this.state.desktop.right, this.state.desktop.bottom, this.state.desktop.left]
            }
        }
        return [0,0,0,0]
    }
    getAll = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.all
        }
        if(this.state.mob){
            return this.state.mobile.all
        }
        if(this.state.tab){
            return this.state.tablet.all
        }
        if(this.state.des){
            return this.state.desktop.all
        }
        return false
    }
    getType = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.typeSize
        }
        if(this.state.mob){
            return this.state.mobile.typeSize
        }
        if(this.state.tab){
            return this.state.tablet.typeSize
        }
        if(this.state.des){
            return this.state.desktop.typeSize
        }
        return 'px'
    }

    changeAll(elem: boolean) {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all:{
                    ...this.state.all,
                    all: !elem,
                    right: this.state.all.top,
                    bottom: this.state.all.top,
                    left: this.state.all.top
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile:{
                    ...this.state.mobile,
                    all: !elem,
                    right: this.state.mobile.top,
                    bottom: this.state.mobile.top,
                    left: this.state.mobile.top
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet:{
                    ...this.state.tablet,
                    all: !elem,
                    right: this.state.tablet.top,
                    bottom: this.state.tablet.top,
                    left: this.state.tablet.top
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop:{
                    ...this.state.desktop,
                    all: !elem,
                    right: this.state.desktop.top,
                    bottom: this.state.desktop.top,
                    left: this.state.desktop.top
                }
            }, this.setInfo)
        }
    }

    incrementElem(name: string) {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if (name === 'top') {
                this.setState({
                    all: {
                        ...this.state.all,
                        top: this.state.all.top + 1
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    all: {
                        ...this.state.all,
                        right: this.state.all.right + 1
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    all: {
                        ...this.state.all,
                        bottom: this.state.all.bottom + 1
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    all: {
                        ...this.state.all,
                        left: this.state.all.left + 1
                    }
                }, this.setInfo)
            }
            if (name === 'all') {
                this.setState({
                    all: {
                        ...this.state.all,
                        top: this.state.all.top + 1,
                        right: this.state.all.top + 1,
                        bottom: this.state.all.top + 1,
                        left: this.state.all.top + 1
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if (name === 'top') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        top: this.state.mobile.top + 1
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        right: this.state.mobile.right + 1
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        bottom: this.state.mobile.bottom + 1
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        left: this.state.mobile.left + 1
                    }
                }, this.setInfo)
            }
            if (name === 'all') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        top: this.state.mobile.top + 1,
                        right: this.state.mobile.top + 1,
                        bottom: this.state.mobile.top + 1,
                        left: this.state.mobile.top + 1
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if (name === 'top') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        top: this.state.tablet.top + 1
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        right: this.state.tablet.right + 1
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        bottom: this.state.tablet.bottom + 1
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        left: this.state.tablet.left + 1
                    }
                }, this.setInfo)
            }
            if (name === 'all') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        top: this.state.tablet.top + 1,
                        right: this.state.tablet.top + 1,
                        bottom: this.state.tablet.top + 1,
                        left: this.state.tablet.top + 1
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if (name === 'top') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        top: this.state.desktop.top + 1
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        right: this.state.desktop.right + 1
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        bottom: this.state.desktop.bottom + 1
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        left: this.state.desktop.left + 1
                    }
                }, this.setInfo)
            }
            if (name === 'all') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        top: this.state.desktop.top + 1,
                        right: this.state.desktop.top + 1,
                        bottom: this.state.desktop.top + 1,
                        left: this.state.desktop.top + 1
                    }
                }, this.setInfo)
            }
        }
    }

    decrementElem(name: string) {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if (name === 'top') {
                this.setState({
                    all: {
                        ...this.state.all,
                        top: this.state.all.top > 0? this.state.all.top - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    all: {
                        ...this.state.all,
                        right: this.state.all.right > 0? this.state.all.right - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    all: {
                        ...this.state.all,
                        bottom: this.state.all.bottom > 0? this.state.all.bottom - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    all: {
                        ...this.state.all,
                        left: this.state.all.left > 0? this.state.all.left - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'all'){
                this.setState({
                    all: {
                        ...this.state.all,
                        top: this.state.all.top > 0? this.state.all.top - 1: 0,
                        right: this.state.all.top > 0? this.state.all.top - 1: 0,
                        bottom: this.state.all.top > 0? this.state.all.top - 1: 0,
                        left: this.state.all.top > 0? this.state.all.top - 1: 0,
                    }
                }, this.setInfo)
            }
        }
        if(this.state.mob){
            if (name === 'top') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        top: this.state.mobile.top > 0? this.state.mobile.top - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        right: this.state.mobile.right > 0? this.state.mobile.right - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        bottom: this.state.mobile.bottom > 0? this.state.mobile.bottom - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        left: this.state.mobile.left > 0? this.state.mobile.left - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'all'){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        top: this.state.mobile.top > 0? this.state.mobile.top - 1: 0,
                        right: this.state.mobile.top > 0? this.state.mobile.top - 1: 0,
                        bottom: this.state.mobile.top > 0? this.state.mobile.top - 1: 0,
                        left: this.state.mobile.top > 0? this.state.mobile.top - 1: 0,
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if (name === 'top') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        top: this.state.tablet.top > 0? this.state.tablet.top - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        right: this.state.tablet.right > 0? this.state.tablet.right - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        bottom: this.state.tablet.bottom > 0? this.state.tablet.bottom - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        left: this.state.tablet.left > 0? this.state.tablet.left - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'all'){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        top: this.state.tablet.top > 0? this.state.tablet.top - 1: 0,
                        right: this.state.tablet.top > 0? this.state.tablet.top - 1: 0,
                        bottom: this.state.tablet.top > 0? this.state.tablet.top - 1: 0,
                        left: this.state.tablet.top > 0? this.state.tablet.top - 1: 0,
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if (name === 'top') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        top: this.state.desktop.top > 0? this.state.desktop.top - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        right: this.state.desktop.right > 0? this.state.desktop.right - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        bottom: this.state.desktop.bottom > 0? this.state.desktop.bottom - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        left: this.state.desktop.left > 0? this.state.desktop.left - 1: 0
                    }
                }, this.setInfo)
            }
            if (name === 'all'){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        top: this.state.desktop.top > 0? this.state.desktop.top - 1: 0,
                        right: this.state.desktop.top > 0? this.state.desktop.top - 1: 0,
                        bottom: this.state.desktop.top > 0? this.state.desktop.top - 1: 0,
                        left: this.state.desktop.top > 0? this.state.desktop.top - 1: 0,
                    }
                }, this.setInfo)
            }
        }
    }

    updateValue = (text: string, name: string) => {
        text = text.replace('px', '').replace('%', '')
        let num = parseInt(text)
        num = (!num || num < 0)?0:num
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if (name === 'top') {
                this.setState({
                    all: {
                        ...this.state.all,
                        top: num
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    all: {
                        ...this.state.all,
                        right: num
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    all: {
                        ...this.state.all,
                        bottom: num
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    all: {
                        ...this.state.all,
                        left: num
                    }
                }, this.setInfo)
            }
            if (name === 'all') {
                this.setState({
                    all: {
                        ...this.state.all,
                        top: num,
                        right: num,
                        bottom: num,
                        left: num
                    }
                }, this.setInfo)
            }
        }//, this.setInfo
        if(this.state.mob){
            if (name === 'top') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        top: num
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        right: num
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        bottom: num
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        left: num
                    }
                }, this.setInfo)
            }
            if (name === 'all') {
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        top: num,
                        right: num,
                        bottom: num,
                        left: num
                    }
                }, this.setInfo)
            }
        }
        if(this.state.tab){
            if (name === 'top') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        top: num
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        right: num
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        bottom: num
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        left: num
                    }
                }, this.setInfo)
            }
            if (name === 'all') {
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        top: num,
                        right: num,
                        bottom: num,
                        left: num
                    }
                }, this.setInfo)
            }
        }
        if(this.state.des){
            if (name === 'top') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        top: num
                    }
                }, this.setInfo)
            }
            if (name === 'right') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        right: num
                    }
                }, this.setInfo)
            }
            if (name === 'bottom') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        bottom: num
                    }
                }, this.setInfo)
            }
            if (name === 'left') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        left: num
                    }
                }, this.setInfo)
            }
            if (name === 'all') {
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        top: num,
                        right: num,
                        bottom: num,
                        left: num
                    }
                }, this.setInfo)
            }
        }
    }

    render() {
        return (
            <DivMargin>
                <CardHeader>Padding</CardHeader>
                <DivOptionsSelector>
                    <ButtonHeaderCard focus={this.state.mob} onClick={this.setMobFocus}>:mob</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.tab} onClick={this.setTabFocus}>:tab</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.des} onClick={this.setDesFocus}>:des</ButtonHeaderCard>
                </DivOptionsSelector>
                {this.getAll() ? <DivOptions>
                    <DivName>All</DivName>
                    <CustomInputBlockAll>
                        <Input placeholder={'All'}
                               type={"text"}
                               value={this.getInfoSize()[0] + this.getType()}
                               onChange={(e) => {
                                   this.updateValue(e.target.value, 'all')
                               }}/>
                        <ButtonsArrows>
                            <ButtonArrowUp onClick={() => this.incrementElem('all')}>+</ButtonArrowUp>
                            <ButtonArrowDown onClick={() => this.decrementElem('all')}>-</ButtonArrowDown>
                        </ButtonsArrows>
                    </CustomInputBlockAll>
                </DivOptions> : <DivOptions>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Top</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'top'}
                                       type={"text"}
                                       value={this.getInfoSize()[0] + this.getType()}
                                       onChange={(e) => {
                                           this.updateValue(e.target.value, 'top')
                                       }}/>
                                <ButtonsArrows>
                                    <ButtonArrowUp onClick={() => this.incrementElem('top')}>+</ButtonArrowUp>
                                    <ButtonArrowDown onClick={() => this.decrementElem('top')}>-</ButtonArrowDown>
                                </ButtonsArrows>
                            </CustomInputBlock>
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Left</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'left'}
                                       type={"text"}
                                       value={this.getInfoSize()[3] + this.getType()}
                                       onChange={(e) => {
                                           this.updateValue(e.target.value, 'left')
                                       }}/>
                                <ButtonsArrows>
                                    <ButtonArrowUp onClick={() => this.incrementElem('left')}>+</ButtonArrowUp>
                                    <ButtonArrowDown onClick={() => this.decrementElem('left')}>-</ButtonArrowDown>
                                </ButtonsArrows>
                            </CustomInputBlock>
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Bottom</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'bottom'}
                                       type={"text"}
                                       value={this.getInfoSize()[2] + this.getType()}
                                       onChange={(e) => {
                                           this.updateValue(e.target.value, 'bottom')
                                       }}/>
                                <ButtonsArrows>
                                    <ButtonArrowUp onClick={() => this.incrementElem('bottom')}>+</ButtonArrowUp>
                                    <ButtonArrowDown onClick={() => this.decrementElem('bottom')}>-</ButtonArrowDown>
                                </ButtonsArrows>
                            </CustomInputBlock>
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Right</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'right'}
                                       type={"text"}
                                       value={this.getInfoSize()[1] + this.getType()}
                                       onChange={(e) => {
                                           this.updateValue(e.target.value, 'right')
                                       }}/>
                                <ButtonsArrows>
                                    <ButtonArrowUp onClick={() => this.incrementElem('right')}>+</ButtonArrowUp>
                                    <ButtonArrowDown onClick={() => this.decrementElem('right')}>-</ButtonArrowDown>
                                </ButtonsArrows>
                            </CustomInputBlock>
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                </DivOptions>}
                <OptionRow onClick={() => this.changeAll(this.getAll())}>
                    <CheckBox>
                        {this.getAll() ? <div>&#10004;</div> : ''}
                    </CheckBox>
                    Change all
                </OptionRow>
                <DivOptions>
                    <DivName>Metric type</DivName>
                    <Select onChange={() => this.changeTypeSize()} value={this.getType()}>
                        <option value={'px'}>px</option>
                        <option value={'%'}>%</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}
