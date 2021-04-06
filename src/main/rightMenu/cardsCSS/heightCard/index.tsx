import React, {Component} from "react";
import {
    ButtonArrowDown,
    ButtonArrowUp, ButtonHeaderCard,
    ButtonsArrows,
    CardHeader,
    CustomInputBlockAll, DivOptions, DivOptionsSelector,
    Input, Select, DivMargin, DivName
} from "../elems";
import styled from "styled-components";

type CIProps = {
    Placeholder: string
    Value: number
    NameElem: string
}

type HeightCardProps = {
    obj: any,
    funcAll: any,
    funcMobile: any,
    funcTablet: any,
    funcDesktop: any
}

export default class HeightCard extends Component<HeightCardProps, any>{
    state = {
        typeSize: this.props.obj.all.height.none.includes('%')?'%':'px',
        height: this.props.obj.all.height.none.replace('px', '').replace('%', ''),
        mob: false,
        tab: false,
        des: false,
        hov: false,
        act: false,
        foc: false,
        all: {
            height: {
                none: this.props.obj.all.height.none,
                hover: this.props.obj.all.height.hover,
                active: this.props.obj.all.height.active,
                focus: this.props.obj.all.height.focus
            }
        },
        mobile: {
            height: {
                none: this.props.obj.mobile.height.none,
                hover: this.props.obj.mobile.height.hover,
                active: this.props.obj.mobile.height.active,
                focus: this.props.obj.mobile.height.focus
            }
        },
        tablet: {
            height: {
                none: this.props.obj.tablet.height.none,
                hover: this.props.obj.tablet.height.hover,
                active: this.props.obj.tablet.height.active,
                focus: this.props.obj.tablet.height.focus
            }
        },
        desktop: {
            height: {
                none: this.props.obj.desktop.height.none,
                hover: this.props.obj.desktop.height.hover,
                active: this.props.obj.desktop.height.active,
                focus: this.props.obj.desktop.height.focus
            }
        }
    }
    setInfo(text: number){
        this.setState({
            height: text
        }, ()=>{
            if(!(this.state.mob||this.state.tab||this.state.des)){
                if(!(this.state.hov&&this.state.foc&&this.state.act)){
                    this.props.funcAll(this.state.height + this.state.typeSize, 'set', 'none')
                }
                if(this.state.hov){
                    this.props.funcAll(this.state.height + this.state.typeSize, 'set', 'hover')
                }
                if(this.state.act){
                    this.props.funcAll(this.state.height + this.state.typeSize, 'set', 'active')
                }
                if(this.state.foc){
                    this.props.funcAll(this.state.height + this.state.typeSize, 'set', 'focus')
                }
            }
            if(this.state.mob){
                if(!(this.state.hov&&this.state.foc&&this.state.act)){
                    this.props.funcMobile(this.state.height + this.state.typeSize, 'set', 'none')
                }
                if(this.state.hov){
                    this.props.funcMobile(this.state.height + this.state.typeSize, 'set', 'hover')
                }
                if(this.state.act){
                    this.props.funcMobile(this.state.height + this.state.typeSize, 'set', 'active')
                }
                if(this.state.foc){
                    this.props.funcMobile(this.state.height + this.state.typeSize, 'set', 'focus')
                }
            }
            if(this.state.tab){
                if(!(this.state.hov&&this.state.foc&&this.state.act)){
                    this.props.funcTablet(this.state.height + this.state.typeSize, 'set', 'none')
                }
                if(this.state.hov){
                    this.props.funcTablet(this.state.height + this.state.typeSize, 'set', 'hover')
                }
                if(this.state.act){
                    this.props.funcTablet(this.state.height + this.state.typeSize, 'set', 'active')
                }
                if(this.state.foc){
                    this.props.funcTablet(this.state.height + this.state.typeSize, 'set', 'focus')
                }
            }
            if(this.state.des){
                if(!(this.state.hov&&this.state.foc&&this.state.act)){
                    this.props.funcDesktop(this.state.height + this.state.typeSize, 'set', 'none')
                }
                if(this.state.hov){
                    this.props.funcDesktop(this.state.height + this.state.typeSize, 'set', 'hover')
                }
                if(this.state.act){
                    this.props.funcDesktop(this.state.height + this.state.typeSize, 'set', 'active')
                }
                if(this.state.foc){
                    this.props.funcDesktop(this.state.height + this.state.typeSize, 'set', 'focus')
                }
            }
        })
    }
    getInfo = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                this.setState({
                    height: parseInt(this.state.all.height.none.replace('px', '').replace('%', '')),
                    typeSize: this.state.all.height.none.includes('%')?'%':'px'
                })
            }
            if(this.state.hov){
                this.setState({
                    height: parseInt(this.state.all.height.hover.replace('px', '').replace('%', '')),
                    typeSize: this.state.all.height.hover.includes('%')?'%':'px'
                })
            }
            if(this.state.act){
                this.setState({
                    height: parseInt(this.state.all.height.active.replace('px', '').replace('%', '')),
                    typeSize: this.state.all.height.active.includes('%')?'%':'px'
                })
            }
            if(this.state.foc){
                this.setState({
                    height: parseInt(this.state.all.height.focus.replace('px', '').replace('%', '')),
                    typeSize: this.state.all.height.focus.includes('%')?'%':'px'
                })
            }
        }
        if(this.state.mob){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                this.setState({
                    height: parseInt(this.state.mobile.height.none.replace('px', '').replace('%', '')),
                    typeSize: this.state.mobile.height.none.includes('%')?'%':'px'
                })
            }
            if(this.state.hov){
                this.setState({
                    height: parseInt(this.state.mobile.height.hover.replace('px', '').replace('%', '')),
                    typeSize: this.state.mobile.height.hover.includes('%')?'%':'px'
                })
            }
            if(this.state.act){
                this.setState({
                    height: parseInt(this.state.mobile.height.active.replace('px', '').replace('%', '')),
                    typeSize: this.state.mobile.height.active.includes('%')?'%':'px'
                })
            }
            if(this.state.foc){
                this.setState({
                    height: parseInt(this.state.mobile.height.focus.replace('px', '').replace('%', '')),
                    typeSize: this.state.mobile.height.focus.includes('%')?'%':'px'
                })
            }
        }
        if(this.state.tab){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                this.setState({
                    height: parseInt(this.state.tablet.height.none.replace('px', '').replace('%', '')),
                    typeSize: this.state.tablet.height.none.includes('%')?'%':'px'
                })
            }
            if(this.state.hov){
                this.setState({
                    height: parseInt(this.state.tablet.height.hover.replace('px', '').replace('%', '')),
                    typeSize: this.state.tablet.height.hover.includes('%')?'%':'px'
                })
            }
            if(this.state.act){
                this.setState({
                    height: parseInt(this.state.tablet.height.active.replace('px', '').replace('%', '')),
                    typeSize: this.state.tablet.height.active.includes('%')?'%':'px'
                })
            }
            if(this.state.foc){
                this.setState({
                    height: parseInt(this.state.tablet.height.focus.replace('px', '').replace('%', '')),
                    typeSize: this.state.tablet.height.focus.includes('%')?'%':'px'
                })
            }
        }
        if(this.state.des){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                this.setState({
                    height: parseInt(this.state.desktop.height.none.replace('px', '').replace('%', '')),
                    typeSize: this.state.desktop.height.none.includes('%')?'%':'px'
                })
            }
            if(this.state.hov){
                this.setState({
                    height: parseInt(this.state.desktop.height.hover.replace('px', '').replace('%', '')),
                    typeSize: this.state.desktop.height.hover.includes('%')?'%':'px'
                })
            }
            if(this.state.act){
                this.setState({
                    height: parseInt(this.state.desktop.height.active.replace('px', '').replace('%', '')),
                    typeSize: this.state.desktop.height.active.includes('%')?'%':'px'
                })
            }
            if(this.state.foc){
                this.setState({
                    height: parseInt(this.state.desktop.height.focus.replace('px', '').replace('%', '')),
                    typeSize: this.state.desktop.height.focus.includes('%')?'%':'px'
                })
            }
        }
    }
    changeTypeSize(){
        if(this.state.typeSize === 'px'){
            this.setState({
                typeSize: '%'
            }, ()=>{this.setInfo(this.state.height)})
        }
        if(this.state.typeSize === '%'){
            this.setState({typeSize: 'px'}, ()=>{this.setInfo(this.state.height)})
        }
    }
    incrementElem(){
        this.setInfo(parseInt(this.state.height.toString()) + 1)
    }
    decrementElem(){
        if(this.state.height > 0){
            this.setInfo(parseInt(this.state.height.toString()) - 1)
        }
    }
    setMobFocus = () => {
        if(this.state.mob){
            this.setState({
                mob: false
            },this.getInfo)
        } else {
            this.setState({
                mob: true,
                tab: false,
                des: false
            },this.getInfo)
        }
    }
    setTabFocus = () => {
        if(this.state.tab){
            this.setState({
                tab: false
            },this.getInfo)
        } else {
            this.setState({
                mob: false,
                tab: true,
                des: false
            },this.getInfo)
        }
    }
    setDesFocus = () => {
        if(this.state.des){
            this.setState({
                des: false
            },this.getInfo)
        } else {
            this.setState({
                mob: false,
                tab: false,
                des: true
            },this.getInfo)
        }
    }
    setHovFocus = () => {
        if(this.state.hov){
            this.setState({
                hov: false
            },this.getInfo)
        } else {
            this.setState({
                hov: true,
                act: false,
                foc: false
            },this.getInfo)
        }
    }
    setActFocus = () => {
        if(this.state.act){
            this.setState({
                act: false
            },this.getInfo)
        } else {
            this.setState({
                hov: false,
                act: true,
                foc: false
            },this.getInfo)
        }
    }
    setFocFocus = () => {
        if(this.state.foc){
            this.setState({
                foc: false
            },this.getInfo)
        } else {
            this.setState({
                hov: false,
                act: false,
                foc: true
            },this.getInfo)
        }
    }
    updateValue = (text: string) => {
        text = text.replace('px', '').replace('%','')
        let num = parseInt(text)
        if(!num || num < 0){
            this.setInfo(0)
        } else {
            this.setInfo(parseInt(text))
        }
    }
    componentDidUpdate(prevProps: Readonly<HeightCardProps>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props !== prevProps){
            this.setState({
                all: {
                    height: {
                        none: this.props.obj.all.height.none,
                        hover: this.props.obj.all.height.hover,
                        active: this.props.obj.all.height.active,
                        focus: this.props.obj.all.height.focus
                    }
                },
                mobile: {
                    height: {
                        none: this.props.obj.mobile.height.none,
                        hover: this.props.obj.mobile.height.hover,
                        active: this.props.obj.mobile.height.active,
                        focus: this.props.obj.mobile.height.focus
                    }
                },
                tablet: {
                    height: {
                        none: this.props.obj.tablet.height.none,
                        hover: this.props.obj.tablet.height.hover,
                        active: this.props.obj.tablet.height.active,
                        focus: this.props.obj.tablet.height.focus
                    }
                },
                desktop: {
                    height: {
                        none: this.props.obj.desktop.height.none,
                        hover: this.props.obj.desktop.height.hover,
                        active: this.props.obj.desktop.height.active,
                        focus: this.props.obj.desktop.height.focus
                    }
                }
            })
        }
    }
    render() {
        return (
            <DivMargin>
                <CardHeader>Height</CardHeader>
                <DivOptionsSelector>
                    <ButtonHeaderCard focus={this.state.mob} onClick={this.setMobFocus}>:mob</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.tab} onClick={this.setTabFocus}>:tab</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.des} onClick={this.setDesFocus}>:des</ButtonHeaderCard>
                    <div/>
                    <ButtonHeaderCard focus={this.state.hov} onClick={this.setHovFocus}>:hov</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.act} onClick={this.setActFocus}>:act</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.foc} onClick={this.setFocFocus}>:foc</ButtonHeaderCard>
                </DivOptionsSelector>
                <CustomInputBlockAll>
                    <Input placeholder={'All'} type={"text"}
                           value={this.state.height + this.state.typeSize}
                           onChange={(e)=>{this.updateValue(e.target.value)}}/>
                    <ButtonsArrows>
                        <ButtonArrowUp onClick={()=>this.incrementElem()}>+</ButtonArrowUp>
                        <ButtonArrowDown onClick={()=>this.decrementElem()}>-</ButtonArrowDown>
                    </ButtonsArrows>
                </CustomInputBlockAll>
                <DivOptions>
                    <DivName>Metric type</DivName>
                    <Select onChange={() => this.changeTypeSize()} value={this.state.typeSize}>
                        <option value={'px'}>px</option>
                        <option value={'%'}>%</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}
