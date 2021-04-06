import React, {Component} from "react";
import styled from "styled-components";
import {
    CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow, DivOptionsTwo, ButtonHeaderCard, DivOptionsSelector,
    CustomInputBlockCheckBox, DivMargin, DivName
} from '../elems'


export default class PositionCard extends Component<any, any> {
    state = {
        all: {
            top: this.props.obj.all.position[0]!==undefined?this.props.obj.all.position[0]:false,
            right: this.props.obj.all.position[1]!==undefined?this.props.obj.all.position[1]:false,
            bottom: this.props.obj.all.position[2]!==undefined?this.props.obj.all.position[2]:false,
            left: this.props.obj.all.position[3]!==undefined?this.props.obj.all.position[3]:false,
        },
        mobile: {
            top: this.props.obj.mobile.position[0]!==undefined?this.props.obj.mobile.position[0]:false,
            right: this.props.obj.mobile.position[1]!==undefined?this.props.obj.mobile.position[1]:false,
            bottom: this.props.obj.mobile.position[2]!==undefined?this.props.obj.mobile.position[2]:false,
            left: this.props.obj.mobile.position[3]!==undefined?this.props.obj.mobile.position[3]:false,
        },
        tablet: {
            top: this.props.obj.tablet.position[0]!==undefined?this.props.obj.tablet.position[0]:false,
            right: this.props.obj.tablet.position[1]!==undefined?this.props.obj.tablet.position[1]:false,
            bottom: this.props.obj.tablet.position[2]!==undefined?this.props.obj.tablet.position[2]:false,
            left: this.props.obj.tablet.position[3]!==undefined?this.props.obj.tablet.position[3]:false,
        },
        desktop: {
            top: this.props.obj.desktop.position[0]!==undefined?this.props.obj.desktop.position[0]:false,
            right: this.props.obj.desktop.position[1]!==undefined?this.props.obj.desktop.position[1]:false,
            bottom: this.props.obj.desktop.position[2]!==undefined?this.props.obj.desktop.position[2]:false,
            left: this.props.obj.desktop.position[3]!==undefined?this.props.obj.desktop.position[3]:false,
        },
        mob: false,
        tab: false,
        des: false,
    }

    getTop = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.top
        }
        if(this.state.mob){
            return this.state.mobile.top
        }
        if(this.state.tab){
            return this.state.tablet.top
        }
        if(this.state.des){
            return this.state.desktop.top
        }
        return false
    }
    getRight = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.right
        }
        if(this.state.mob){
            return this.state.mobile.right
        }
        if(this.state.tab){
            return this.state.tablet.right
        }
        if(this.state.des){
            return this.state.desktop.right
        }
        return false
    }
    getBottom = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.bottom
        }
        if(this.state.mob){
            return this.state.mobile.bottom
        }
        if(this.state.tab){
            return this.state.tablet.bottom
        }
        if(this.state.des){
            return this.state.desktop.bottom
        }
        return false
    }
    getLeft = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.left
        }
        if(this.state.mob){
            return this.state.mobile.left
        }
        if(this.state.tab){
            return this.state.tablet.left
        }
        if(this.state.des){
            return this.state.desktop.left
        }
        return false
    }

    setInfo = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.props.funcAll([this.getTop(), this.getRight(), this.getBottom(), this.getLeft()])
        }
        if(this.state.mob){
            this.props.funcMobile([this.getTop(), this.getRight(), this.getBottom(), this.getLeft()])
        }
        if(this.state.tab){
            this.props.funcTablet([this.getTop(), this.getRight(), this.getBottom(), this.getLeft()])
        }
        if(this.state.des){
            this.props.funcDesktop([this.getTop(), this.getRight(), this.getBottom(), this.getLeft()])
        }
    }

    setTop = (arg: boolean) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    top: arg,
                    bottom: false
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    top: arg,
                    bottom: false
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    top: arg,
                    bottom: false
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    top: arg,
                    bottom: false
                }
            }, this.setInfo)
        }
    }
    setRight = (arg: boolean) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    right: arg,
                    left: false
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    right: arg,
                    left: false
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    right: arg,
                    left: false
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    right: arg,
                    left: false
                }
            }, this.setInfo)
        }
    }
    setBottom = (arg: boolean) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    bottom: arg,
                    top: false
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    bottom: arg,
                    top: false
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    bottom: arg,
                    top: false
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    bottom: arg,
                    top: false
                }
            }, this.setInfo)
        }
    }
    setLeft = (arg: boolean) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    left: arg,
                    right: false
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    left: arg,
                    right: false
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    left: arg,
                    right: false
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    left: arg,
                    right: false
                }
            }, this.setInfo)
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

    // makeTop = () => {
    //     if(this.getBottom()){
    //         this.setBottom(false)
    //     }
    //     if(this.getTop()){
    //         this.setTop(false)
    //     } else {
    //         this.setTop(true)
    //     }
    // }
    // makeRight = () => {
    //     if(this.getLeft()){
    //         this.setLeft(false)
    //     }
    //     if(this.getRight()){
    //         this.setRight(false)
    //     } else {
    //         this.setRight(true)
    //     }
    // }
    // makeBottom = () => {
    //     if(this.getTop()){
    //         this.setTop(false)
    //     }
    //     if(this.getBottom()){
    //         this.setBottom(false)
    //     } else {
    //         this.setBottom(true)
    //     }
    // }
    // makeLeft = () => {
    //     if(this.getRight()){
    //         this.setRight(false)
    //     }
    //     if(this.getLeft()){
    //         this.setLeft(false)
    //     } else {
    //         this.setLeft(true)
    //     }
    // }

    render() {
        return (
            <DivMargin>
                <CardHeader>Position</CardHeader>
                <DivOptionsSelector>
                    <ButtonHeaderCard focus={this.state.mob} onClick={this.setMobFocus}>:mob</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.tab} onClick={this.setTabFocus}>:tab</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.des} onClick={this.setDesFocus}>:des</ButtonHeaderCard>
                </DivOptionsSelector>
                <DivOptions>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <CustomInputBlockCheckBox>
                                <OptionRow onClick={()=>this.setTop(!this.getTop())}>
                                    <CheckBox>
                                        {this.getTop() ? <div>&#10004;</div> : ''}
                                    </CheckBox>
                                    Top
                                </OptionRow>
                            </CustomInputBlockCheckBox>
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <CustomInputBlockCheckBox>
                                <OptionRow onClick={()=>this.setLeft(!this.getLeft())}>
                                    <CheckBox>
                                        {this.getLeft() ? <div>&#10004;</div> : ''}
                                    </CheckBox>
                                    Left
                                </OptionRow>
                            </CustomInputBlockCheckBox>
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <CustomInputBlockCheckBox>
                                <OptionRow onClick={()=>this.setBottom(!this.getBottom())}>
                                    <CheckBox>
                                        {this.getBottom() ? <div>&#10004;</div> : ''}
                                    </CheckBox>
                                    Bottom
                                </OptionRow>
                            </CustomInputBlockCheckBox>
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <CustomInputBlockCheckBox>
                                <OptionRow onClick={()=>this.setRight(!this.getRight())}>
                                    <CheckBox>
                                        {this.getRight() ? <div>&#10004;</div> : ''}
                                    </CheckBox>
                                    Right
                                </OptionRow>
                            </CustomInputBlockCheckBox>
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                </DivOptions>
            </DivMargin>
        )
    }
}
