import React, {Component} from "react";
import styled from "styled-components";
import {
    CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow, DivOptionsTwo, ButtonHeaderCard, DivOptionsSelector, DivMargin,DivName
} from '../elems'

export default class BorderRadiusCard extends Component<any, any> {
    state = {
        all: {
            none: {
                top: this.props.obj.all.borderRadius.none.length === 1?parseInt(this.props.obj.all.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.none[0].replace('%','').replace('px', '')),
                right: this.props.obj.all.borderRadius.none.length === 1?parseInt(this.props.obj.all.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.none[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.all.borderRadius.none.length === 1?parseInt(this.props.obj.all.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.none[2].replace('%','').replace('px', '')),
                left: this.props.obj.all.borderRadius.none.length === 1?parseInt(this.props.obj.all.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.none[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.all.borderRadius.none[0].includes('%')?'%':'px',
                all: this.props.obj.all.borderRadius.none.length === 1
            },
            hover:{
                top: this.props.obj.all.borderRadius.hover.length === 1?parseInt(this.props.obj.all.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.hover[0].replace('%','').replace('px', '')),
                right: this.props.obj.all.borderRadius.hover.length === 1?parseInt(this.props.obj.all.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.hover[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.all.borderRadius.hover.length === 1?parseInt(this.props.obj.all.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.hover[2].replace('%','').replace('px', '')),
                left: this.props.obj.all.borderRadius.hover.length === 1?parseInt(this.props.obj.all.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.hover[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.all.borderRadius.hover[0].includes('%')?'%':'px',
                all: this.props.obj.all.borderRadius.hover.length === 1
            },
            active:{
                top: this.props.obj.all.borderRadius.active.length === 1?parseInt(this.props.obj.all.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.active[0].replace('%','').replace('px', '')),
                right: this.props.obj.all.borderRadius.active.length === 1?parseInt(this.props.obj.all.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.active[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.all.borderRadius.active.length === 1?parseInt(this.props.obj.all.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.active[2].replace('%','').replace('px', '')),
                left: this.props.obj.all.borderRadius.active.length === 1?parseInt(this.props.obj.all.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.active[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.all.borderRadius.active[0].includes('%')?'%':'px',
                all: this.props.obj.all.borderRadius.active.length === 1
            },
            focus: {
                top: this.props.obj.all.borderRadius.focus.length === 1?parseInt(this.props.obj.all.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.focus[0].replace('%','').replace('px', '')),
                right: this.props.obj.all.borderRadius.focus.length === 1?parseInt(this.props.obj.all.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.focus[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.all.borderRadius.focus.length === 1?parseInt(this.props.obj.all.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.focus[2].replace('%','').replace('px', '')),
                left: this.props.obj.all.borderRadius.focus.length === 1?parseInt(this.props.obj.all.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.all.borderRadius.focus[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.all.borderRadius.focus[0].includes('%')?'%':'px',
                all: this.props.obj.all.borderRadius.focus.length === 1
            }
        },
        mobile: {
            none: {
                top: this.props.obj.mobile.borderRadius.none.length === 1?parseInt(this.props.obj.mobile.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.none[0].replace('%','').replace('px', '')),
                right: this.props.obj.mobile.borderRadius.none.length === 1?parseInt(this.props.obj.mobile.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.none[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.mobile.borderRadius.none.length === 1?parseInt(this.props.obj.mobile.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.none[2].replace('%','').replace('px', '')),
                left: this.props.obj.mobile.borderRadius.none.length === 1?parseInt(this.props.obj.mobile.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.none[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.mobile.borderRadius.none[0].includes('%')?'%':'px',
                all: this.props.obj.mobile.borderRadius.none.length === 1
            },
            hover:{
                top: this.props.obj.mobile.borderRadius.hover.length === 1?parseInt(this.props.obj.mobile.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.hover[0].replace('%','').replace('px', '')),
                right: this.props.obj.mobile.borderRadius.hover.length === 1?parseInt(this.props.obj.mobile.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.hover[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.mobile.borderRadius.hover.length === 1?parseInt(this.props.obj.mobile.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.hover[2].replace('%','').replace('px', '')),
                left: this.props.obj.mobile.borderRadius.hover.length === 1?parseInt(this.props.obj.mobile.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.hover[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.mobile.borderRadius.hover[0].includes('%')?'%':'px',
                all: this.props.obj.mobile.borderRadius.hover.length === 1
            },
            active:{
                top: this.props.obj.mobile.borderRadius.active.length === 1?parseInt(this.props.obj.mobile.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.active[0].replace('%','').replace('px', '')),
                right: this.props.obj.mobile.borderRadius.active.length === 1?parseInt(this.props.obj.mobile.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.active[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.mobile.borderRadius.active.length === 1?parseInt(this.props.obj.mobile.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.active[2].replace('%','').replace('px', '')),
                left: this.props.obj.mobile.borderRadius.active.length === 1?parseInt(this.props.obj.mobile.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.active[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.mobile.borderRadius.active[0].includes('%')?'%':'px',
                all: this.props.obj.mobile.borderRadius.active.length === 1
            },
            focus: {
                top: this.props.obj.mobile.borderRadius.focus.length === 1?parseInt(this.props.obj.mobile.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.focus[0].replace('%','').replace('px', '')),
                right: this.props.obj.mobile.borderRadius.focus.length === 1?parseInt(this.props.obj.mobile.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.focus[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.mobile.borderRadius.focus.length === 1?parseInt(this.props.obj.mobile.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.focus[2].replace('%','').replace('px', '')),
                left: this.props.obj.mobile.borderRadius.focus.length === 1?parseInt(this.props.obj.mobile.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.mobile.borderRadius.focus[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.mobile.borderRadius.focus[0].includes('%')?'%':'px',
                all: this.props.obj.mobile.borderRadius.focus.length === 1
            }
        },
        tablet: {
            none: {
                top: this.props.obj.tablet.borderRadius.none.length === 1?parseInt(this.props.obj.tablet.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.none[0].replace('%','').replace('px', '')),
                right: this.props.obj.tablet.borderRadius.none.length === 1?parseInt(this.props.obj.tablet.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.none[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.tablet.borderRadius.none.length === 1?parseInt(this.props.obj.tablet.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.none[2].replace('%','').replace('px', '')),
                left: this.props.obj.tablet.borderRadius.none.length === 1?parseInt(this.props.obj.tablet.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.none[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.tablet.borderRadius.none[0].includes('%')?'%':'px',
                all: this.props.obj.tablet.borderRadius.none.length === 1
            },
            hover:{
                top: this.props.obj.tablet.borderRadius.hover.length === 1?parseInt(this.props.obj.tablet.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.hover[0].replace('%','').replace('px', '')),
                right: this.props.obj.tablet.borderRadius.hover.length === 1?parseInt(this.props.obj.tablet.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.hover[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.tablet.borderRadius.hover.length === 1?parseInt(this.props.obj.tablet.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.hover[2].replace('%','').replace('px', '')),
                left: this.props.obj.tablet.borderRadius.hover.length === 1?parseInt(this.props.obj.tablet.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.hover[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.tablet.borderRadius.hover[0].includes('%')?'%':'px',
                all: this.props.obj.tablet.borderRadius.hover.length === 1
            },
            active:{
                top: this.props.obj.tablet.borderRadius.active.length === 1?parseInt(this.props.obj.tablet.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.active[0].replace('%','').replace('px', '')),
                right: this.props.obj.tablet.borderRadius.active.length === 1?parseInt(this.props.obj.tablet.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.active[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.tablet.borderRadius.active.length === 1?parseInt(this.props.obj.tablet.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.active[2].replace('%','').replace('px', '')),
                left: this.props.obj.tablet.borderRadius.active.length === 1?parseInt(this.props.obj.tablet.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.active[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.tablet.borderRadius.active[0].includes('%')?'%':'px',
                all: this.props.obj.tablet.borderRadius.active.length === 1
            },
            focus: {
                top: this.props.obj.tablet.borderRadius.focus.length === 1?parseInt(this.props.obj.tablet.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.focus[0].replace('%','').replace('px', '')),
                right: this.props.obj.tablet.borderRadius.focus.length === 1?parseInt(this.props.obj.tablet.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.focus[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.tablet.borderRadius.focus.length === 1?parseInt(this.props.obj.tablet.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.focus[2].replace('%','').replace('px', '')),
                left: this.props.obj.tablet.borderRadius.focus.length === 1?parseInt(this.props.obj.tablet.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.tablet.borderRadius.focus[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.tablet.borderRadius.focus[0].includes('%')?'%':'px',
                all: this.props.obj.tablet.borderRadius.focus.length === 1
            }
        },
        desktop: {
            none: {
                top: this.props.obj.desktop.borderRadius.none.length === 1?parseInt(this.props.obj.desktop.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.none[0].replace('%','').replace('px', '')),
                right: this.props.obj.desktop.borderRadius.none.length === 1?parseInt(this.props.obj.desktop.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.none[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.desktop.borderRadius.none.length === 1?parseInt(this.props.obj.desktop.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.none[2].replace('%','').replace('px', '')),
                left: this.props.obj.desktop.borderRadius.none.length === 1?parseInt(this.props.obj.desktop.borderRadius.none[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.none[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.desktop.borderRadius.none[0].includes('%')?'%':'px',
                all: this.props.obj.desktop.borderRadius.none.length === 1
            },
            hover:{
                top: this.props.obj.desktop.borderRadius.hover.length === 1?parseInt(this.props.obj.desktop.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.hover[0].replace('%','').replace('px', '')),
                right: this.props.obj.desktop.borderRadius.hover.length === 1?parseInt(this.props.obj.desktop.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.hover[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.desktop.borderRadius.hover.length === 1?parseInt(this.props.obj.desktop.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.hover[2].replace('%','').replace('px', '')),
                left: this.props.obj.desktop.borderRadius.hover.length === 1?parseInt(this.props.obj.desktop.borderRadius.hover[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.hover[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.desktop.borderRadius.hover[0].includes('%')?'%':'px',
                all: this.props.obj.desktop.borderRadius.hover.length === 1
            },
            active:{
                top: this.props.obj.desktop.borderRadius.active.length === 1?parseInt(this.props.obj.desktop.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.active[0].replace('%','').replace('px', '')),
                right: this.props.obj.desktop.borderRadius.active.length === 1?parseInt(this.props.obj.desktop.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.active[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.desktop.borderRadius.active.length === 1?parseInt(this.props.obj.desktop.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.active[2].replace('%','').replace('px', '')),
                left: this.props.obj.desktop.borderRadius.active.length === 1?parseInt(this.props.obj.desktop.borderRadius.active[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.active[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.desktop.borderRadius.active[0].includes('%')?'%':'px',
                all: this.props.obj.desktop.borderRadius.active.length === 1
            },
            focus: {
                top: this.props.obj.desktop.borderRadius.focus.length === 1?parseInt(this.props.obj.desktop.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.focus[0].replace('%','').replace('px', '')),
                right: this.props.obj.desktop.borderRadius.focus.length === 1?parseInt(this.props.obj.desktop.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.focus[1].replace('%','').replace('px', '')),
                bottom: this.props.obj.desktop.borderRadius.focus.length === 1?parseInt(this.props.obj.desktop.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.focus[2].replace('%','').replace('px', '')),
                left: this.props.obj.desktop.borderRadius.focus.length === 1?parseInt(this.props.obj.desktop.borderRadius.focus[0].replace('%','').replace('px', '')):parseInt(this.props.obj.desktop.borderRadius.focus[3].replace('%','').replace('px', '')),
                typeSize: this.props.obj.desktop.borderRadius.focus[0].includes('%')?'%':'px',
                all: this.props.obj.desktop.borderRadius.focus.length === 1
            }
        },
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        typeSize: 'px',
        alls: true,
        mob: false,
        tab: false,
        des: false,
        hov: false,
        act: false,
        foc: false
    }
    getTop = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.top
            }
            if(this.state.hov){
                return this.state.all.hover.top
            }
            if(this.state.act){
                return this.state.all.active.top
            }
            if(this.state.foc){
                return this.state.all.focus.top
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.top
            }
            if(this.state.hov){
                return this.state.mobile.hover.top
            }
            if(this.state.act){
                return this.state.mobile.active.top
            }
            if(this.state.foc){
                return this.state.mobile.focus.top
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.top
            }
            if(this.state.hov){
                return this.state.tablet.hover.top
            }
            if(this.state.act){
                return this.state.tablet.active.top
            }
            if(this.state.foc){
                return this.state.tablet.focus.top
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.top
            }
            if(this.state.hov){
                return this.state.desktop.hover.top
            }
            if(this.state.act){
                return this.state.desktop.active.top
            }
            if(this.state.foc){
                return this.state.desktop.focus.top
            }
        }
        return 0
    }
    getRight = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.right
            }
            if(this.state.hov){
                return this.state.all.hover.right
            }
            if(this.state.act){
                return this.state.all.active.right
            }
            if(this.state.foc){
                return this.state.all.focus.right
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.right
            }
            if(this.state.hov){
                return this.state.mobile.hover.right
            }
            if(this.state.act){
                return this.state.mobile.active.right
            }
            if(this.state.foc){
                return this.state.mobile.focus.right
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.right
            }
            if(this.state.hov){
                return this.state.tablet.hover.right
            }
            if(this.state.act){
                return this.state.tablet.active.right
            }
            if(this.state.foc){
                return this.state.tablet.focus.right
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.right
            }
            if(this.state.hov){
                return this.state.desktop.hover.right
            }
            if(this.state.act){
                return this.state.desktop.active.right
            }
            if(this.state.foc){
                return this.state.desktop.focus.right
            }
        }
        return 0
    }
    getBottom = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.bottom
            }
            if(this.state.hov){
                return this.state.all.hover.bottom
            }
            if(this.state.act){
                return this.state.all.active.bottom
            }
            if(this.state.foc){
                return this.state.all.focus.bottom
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.bottom
            }
            if(this.state.hov){
                return this.state.mobile.hover.bottom
            }
            if(this.state.act){
                return this.state.mobile.active.bottom
            }
            if(this.state.foc){
                return this.state.mobile.focus.bottom
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.bottom
            }
            if(this.state.hov){
                return this.state.tablet.hover.bottom
            }
            if(this.state.act){
                return this.state.tablet.active.bottom
            }
            if(this.state.foc){
                return this.state.tablet.focus.bottom
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.bottom
            }
            if(this.state.hov){
                return this.state.desktop.hover.bottom
            }
            if(this.state.act){
                return this.state.desktop.active.bottom
            }
            if(this.state.foc){
                return this.state.desktop.focus.bottom
            }
        }
        return 0
    }
    getLeft = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.left
            }
            if(this.state.hov){
                return this.state.all.hover.left
            }
            if(this.state.act){
                return this.state.all.active.left
            }
            if(this.state.foc){
                return this.state.all.focus.left
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.left
            }
            if(this.state.hov){
                return this.state.mobile.hover.left
            }
            if(this.state.act){
                return this.state.mobile.active.left
            }
            if(this.state.foc){
                return this.state.mobile.focus.left
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.left
            }
            if(this.state.hov){
                return this.state.tablet.hover.left
            }
            if(this.state.act){
                return this.state.tablet.active.left
            }
            if(this.state.foc){
                return this.state.tablet.focus.left
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.left
            }
            if(this.state.hov){
                return this.state.desktop.hover.left
            }
            if(this.state.act){
                return this.state.desktop.active.left
            }
            if(this.state.foc){
                return this.state.desktop.focus.left
            }
        }
        return 0
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
    getAll = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.all.none.all
            }
            if(this.state.hov){
                return this.state.all.hover.all
            }
            if(this.state.act){
                return this.state.all.active.all
            }
            if(this.state.foc){
                return this.state.all.focus.all
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.mobile.none.all
            }
            if(this.state.hov){
                return this.state.mobile.hover.all
            }
            if(this.state.act){
                return this.state.mobile.active.all
            }
            if(this.state.foc){
                return this.state.mobile.focus.all
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.tablet.none.all
            }
            if(this.state.hov){
                return this.state.tablet.hover.all
            }
            if(this.state.act){
                return this.state.tablet.active.all
            }
            if(this.state.foc){
                return this.state.tablet.focus.all
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                return this.state.desktop.none.all
            }
            if(this.state.hov){
                return this.state.desktop.hover.all
            }
            if(this.state.act){
                return this.state.desktop.active.all
            }
            if(this.state.foc){
                return this.state.desktop.focus.all
            }
        }
        return false
    }

    setInfo = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcAll([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'none')
            }
            if(this.state.hov){
                this.props.funcAll([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'hover')
            }
            if(this.state.act){
                this.props.funcAll([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'active')
            }
            if(this.state.foc){
                this.props.funcAll([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'focus')
            }
        }
        if(this.state.mob){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcMobile([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'none')
            }
            if(this.state.hov){
                this.props.funcMobile([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'hover')
            }
            if(this.state.act){
                this.props.funcMobile([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'active')
            }
            if(this.state.foc){
                this.props.funcMobile([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'focus')
            }
        }
        if(this.state.tab){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcTablet([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'none')
            }
            if(this.state.hov){
                this.props.funcTablet([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'hover')
            }
            if(this.state.act){
                this.props.funcTablet([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'active')
            }
            if(this.state.foc){
                this.props.funcTablet([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'focus')
            }
        }
        if(this.state.des){
            if(!(this.state.hov||this.state.act||this.state.foc)){
                this.props.funcDesktop([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'none')
            }
            if(this.state.hov){
                this.props.funcDesktop([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'hover')
            }
            if(this.state.act){
                this.props.funcDesktop([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'active')
            }
            if(this.state.foc){
                this.props.funcDesktop([
                    this.getTop() + this.getTypeSize(),
                    this.getRight() + this.getTypeSize(),
                    this.getBottom() + this.getTypeSize(),
                    this.getLeft() + this.getTypeSize()], 'focus')
            }
        }
    }

    setParams = ({
                     top = this.getTop(),
                     right = this.getRight(),
                     bottom = this.getBottom(),
                     left = this.getLeft(),
                     typeSize = this.getTypeSize(),
                     all = this.getAll()}) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov||this.state.act||this.state.foc)){
               this.setState({
                   all: {
                       ...this.state.all,
                       none: {
                           top: top,
                           right: right,
                           bottom: bottom,
                           left: left,
                           typeSize: typeSize,
                           all: all
                       }
                   }
               }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    all: {
                        ...this.state.all,
                        hover: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    all: {
                        ...this.state.all,
                        active: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    all: {
                        ...this.state.all,
                        focus: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
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
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        hover: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        active: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    mobile: {
                        ...this.state.mobile,
                        focus: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
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
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        hover: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        active: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    tablet: {
                        ...this.state.tablet,
                        focus: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
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
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.hov){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        hover: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.act){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        active: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
            }
            if(this.state.foc){
                this.setState({
                    desktop: {
                        ...this.state.desktop,
                        focus: {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left,
                            typeSize: typeSize,
                            all: all
                        }
                    }
                }, this.setInfo)
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

    changeTypeSize() {
        this.setParams({typeSize: this.getTypeSize().includes('%')?'px':'%'})
    }

    incrementElem(name: string) {
        if (name === 'top') {
            this.setParams({top: this.getTop() + 1})
        }
        if (name === 'right') {
            this.setParams({right: this.getRight() + 1})
        }
        if (name === 'bottom') {
            this.setParams({bottom: this.getBottom() + 1})
        }
        if (name === 'left') {
            this.setParams({left: this.getLeft() + 1})
        }
        if (name === 'all'){
            this.setParams({top: this.getTop() + 1, right: this.getTop() + 1, bottom: this.getTop() + 1, left: this.getTop() + 1})
        }
    }

    decrementElem(name: string) {
        if (name === 'top') {
            this.setParams({top: this.getTop() > 0?this.getTop() - 1: 0})
        }
        if (name === 'right') {
            this.setParams({right: this.getRight() > 0?this.getRight() - 1: 0})
        }
        if (name === 'bottom') {
            this.setParams({bottom: this.getBottom() > 0?this.getBottom() - 1: 0})
        }
        if (name === 'left') {
            this.setParams({left: this.getLeft() > 0? this.getLeft() - 1: 0})
        }
        if (name === 'all'){
            this.setParams({
                top: this.getTop() > 0?this.getTop() - 1: 0,
                right: this.getRight() > 0?this.getRight() - 1: 0,
                bottom: this.getBottom() > 0?this.getBottom() - 1: 0,
                left: this.getLeft() > 0? this.getLeft() - 1: 0
            })
        }
    }

    updateValue = (text: string, name: string) => {
        text = text.replace('px', '').replace('%', '')
        let num = parseInt(text)
        if (!num || num < 0) {
            if (name === 'top') {
                this.setParams({top:0})
            }
            if (name === 'right') {
                this.setParams({right:0})
            }
            if (name === 'bottom') {
                this.setParams({bottom:0})
            }
            if (name === 'left') {
                this.setParams({left:0})
            }
            if (name === 'all') {
                this.setParams({top: 0, right: 0, bottom: 0, left: 0})
            }
        }
        else {
            if (name === 'top') {
                this.setParams({top:num})
            }
            if (name === 'right') {
                this.setParams({right:num})
            }
            if (name === 'bottom') {
                this.setParams({bottom:num})
            }
            if (name === 'left') {
                this.setParams({left:num})
            }
            if (name === 'all') {
                this.setParams({top: num, right: num, bottom: num, left: num})
            }
        }
    }
    changeAll = () => {
        this.setParams({
            top: this.getTop(),
            right: this.getTop(),
            bottom: this.getTop(),
            left: this.getTop(),
            all: !this.getAll()})
    }

    render() {
        return (
            <DivMargin>
                <CardHeader>Border radius</CardHeader>
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
                            <DivName>Top Left</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'top'}
                                       type={"text"}
                                       value={this.getTop() + this.getTypeSize()}
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
                            <DivName>Top Right</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'left'}
                                       type={"text"}
                                       value={this.getLeft() + this.getTypeSize()}
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
                            <DivName>Bottom Left</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'bottom'}
                                       type={"text"}
                                       value={this.getBottom() + this.getTypeSize()}
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
                            <DivName>Bottom Right</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'right'}
                                       type={"text"}
                                       value={this.getRight() + this.getTypeSize()}
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
                </DivOptions> : <DivOptions>
                    <DivName>All</DivName>
                    <CustomInputBlock>
                        <Input placeholder={'all'}
                               type={"text"}
                               value={this.getTop() + this.getTypeSize()}
                               onChange={(e) => {
                                   this.updateValue(e.target.value, 'all')
                               }}/>
                        <ButtonsArrows>
                            <ButtonArrowUp onClick={() => this.incrementElem('all')}>+</ButtonArrowUp>
                            <ButtonArrowDown onClick={() => this.decrementElem('all')}>-</ButtonArrowDown>
                        </ButtonsArrows>
                    </CustomInputBlock>
                </DivOptions>}
                <OptionRow onClick={() => {this.changeAll()}}>
                    <CheckBox>
                        {this.getAll() ? <div>&#10004;</div> : ''}
                    </CheckBox>
                    All
                </OptionRow>
                <DivOptions>
                    <DivName>Metric type</DivName>
                    <Select onChange={() => {this.changeTypeSize()}} value={this.getTypeSize()}>
                        <option value={'px'}>px</option>
                        <option value={'%'}>%</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}
