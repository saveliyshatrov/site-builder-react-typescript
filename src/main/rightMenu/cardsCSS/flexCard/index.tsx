import React, {Component} from "react";
import {ButtonHeaderCard, CardHeader, DivMargin, DivName, DivOptions, DivOptionsSelector, Select} from "../elems";

export default class FlexCard extends Component<any, any>{
    state = {
        all: {
            enable: this.props.obj.all.flex.enable?'enable':'disable',
            flexDirection: this.props.obj.all.flex.flexDirection?this.props.obj.all.flex.flexDirection:'row',
            justifyContent: this.props.obj.all.flex.justifyContent?this.props.obj.all.flex.justifyContent:'space-around',
            alignItems: this.props.obj.all.flex.alignItems?this.props.obj.all.flex.alignItems:'center'
        },
        mobile: {
            enable: this.props.obj.mobile.flex.enable?'enable':'disable',
            flexDirection: this.props.obj.mobile.flex.flexDirection?this.props.obj.mobile.flex.flexDirection:'row',
            justifyContent: this.props.obj.mobile.flex.justifyContent?this.props.obj.mobile.flex.justifyContent:'space-around',
            alignItems: this.props.obj.mobile.flex.alignItems?this.props.obj.mobile.flex.alignItems:'center'
        },
        tablet: {
            enable: this.props.obj.tablet.flex.enable?'enable':'disable',
            flexDirection: this.props.obj.tablet.flex.flexDirection?this.props.obj.tablet.flex.flexDirection:'row',
            justifyContent: this.props.obj.tablet.flex.justifyContent?this.props.obj.tablet.flex.justifyContent:'space-around',
            alignItems: this.props.obj.tablet.flex.alignItems?this.props.obj.tablet.flex.alignItems:'center'
        },
        desktop: {
            enable: this.props.obj.desktop.flex.enable?'enable':'disable',
            flexDirection: this.props.obj.desktop.flex.flexDirection?this.props.obj.desktop.flex.flexDirection:'row',
            justifyContent: this.props.obj.desktop.flex.justifyContent?this.props.obj.desktop.flex.justifyContent:'space-around',
            alignItems: this.props.obj.desktop.flex.alignItems?this.props.obj.desktop.flex.alignItems:'center'
        },
        mob: false,
        tab: false,
        des: false,
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
    setInfo = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.props.funcAll([this.getEnable() === 'enable', this.getFlexDirection(), this.getJustifyContent(), this.getAlignItems()])
        }
        if(this.state.mob){
            this.props.funcMobile([this.getEnable() === 'enable', this.getFlexDirection(), this.getJustifyContent(), this.getAlignItems()])
        }
        if(this.state.tab){
            this.props.funcTablet([this.getEnable() === 'enable', this.getFlexDirection(), this.getJustifyContent(), this.getAlignItems()])
        }
        if(this.state.des){
            this.props.funcDesktop([this.getEnable() === 'enable', this.getFlexDirection(), this.getJustifyContent(), this.getAlignItems()])
        }
    }

    getEnable = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.enable
        }
        if(this.state.mob){
            return this.state.mobile.enable
        }
        if(this.state.tab){
            return this.state.tablet.enable
        }
        if(this.state.des){
            return this.state.desktop.enable
        }
    }
    getFlexDirection = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.flexDirection
        }
        if(this.state.mob){
            return this.state.mobile.flexDirection
        }
        if(this.state.tab){
            return this.state.tablet.flexDirection
        }
        if(this.state.des){
            return this.state.desktop.flexDirection
        }
    }
    getJustifyContent = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.justifyContent
        }
        if(this.state.mob){
            return this.state.mobile.justifyContent
        }
        if(this.state.tab){
            return this.state.tablet.justifyContent
        }
        if(this.state.des){
            return this.state.desktop.justifyContent
        }
    }
    getAlignItems = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            return this.state.all.alignItems
        }
        if(this.state.mob){
            return this.state.mobile.alignItems
        }
        if(this.state.tab){
            return this.state.tablet.alignItems
        }
        if(this.state.des){
            return this.state.desktop.alignItems
        }
    }

    setEnable = (arg: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    enable: arg
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    enable: arg
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    enable: arg
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    enable: arg
                }
            }, this.setInfo)
        }
    }
    setFlexDirection = (arg: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    flexDirection: arg
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    flexDirection: arg
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    flexDirection: arg
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    flexDirection: arg
                }
            }, this.setInfo)
        }
    }
    setJustifyContent = (arg: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    justifyContent: arg
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    justifyContent: arg
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    justifyContent: arg
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    justifyContent: arg
                }
            }, this.setInfo)
        }
    }
    setAlignItems = (arg: string) => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            this.setState({
                all: {
                    ...this.state.all,
                    alignItems: arg
                }
            }, this.setInfo)
        }
        if(this.state.mob){
            this.setState({
                mobile: {
                    ...this.state.mobile,
                    alignItems: arg
                }
            }, this.setInfo)
        }
        if(this.state.tab){
            this.setState({
                tablet: {
                    ...this.state.tablet,
                    alignItems: arg
                }
            }, this.setInfo)
        }
        if(this.state.des){
            this.setState({
                desktop: {
                    ...this.state.desktop,
                    alignItems: arg
                }
            }, this.setInfo)
        }
    }


    render(){
        return (
            <DivMargin>
                <CardHeader>Flex</CardHeader>
                <DivOptionsSelector>
                    <ButtonHeaderCard focus={this.state.mob} onClick={this.setMobFocus}>:mob</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.tab} onClick={this.setTabFocus}>:tab</ButtonHeaderCard>
                    <ButtonHeaderCard focus={this.state.des} onClick={this.setDesFocus}>:des</ButtonHeaderCard>
                </DivOptionsSelector>
                <DivOptions>
                    <DivName>Enable</DivName>
                    <Select value={this.getEnable()} onChange={(e) => this.setEnable(e.target.value)}>
                        <option value={'enable'}>enable</option>
                        <option value={'disable'}>disable</option>
                    </Select>
                </DivOptions>
                {this.getEnable() === 'enable'?<DivOptions>
                    <DivName>Flex direction</DivName>
                    <Select value={this.getFlexDirection()} onChange={(e) => this.setFlexDirection(e.target.value)}>
                        <option value={'row'}>row</option>
                        <option value={'row-reverse'}>row-reverse</option>
                        <option value={'column'}>column</option>
                        <option value={'column-reverse'}>column-reverse</option>
                    </Select>
                </DivOptions>:''}
                {this.getEnable() === 'enable'?<DivOptions>
                    <DivName>Justify-content</DivName>
                    <Select value={this.getJustifyContent()} onChange={(e) => this.setJustifyContent(e.target.value)}>
                        <option value={'flex-start'}>flex-start</option>
                        <option value={'flex-end'}>flex-end</option>
                        <option value={'center'}>center</option>
                        <option value={'space-between'}>space-between</option>
                        <option value={'space-around'}>space-around</option>
                        <option value={'space-evenly'}>space-evenly</option>
                    </Select>
                </DivOptions>:''}
                {this.getEnable() === 'enable'?<DivOptions>
                    <DivName>Align-items</DivName>
                    <Select value={this.getAlignItems()} onChange={(e) => this.setAlignItems(e.target.value)}>
                        <option value={'flex-start'}>flex-start</option>
                        <option value={'flex-end'}>flex-end</option>
                        <option value={'center'}>center</option>
                        <option value={'baseline'}>baseline</option>
                        <option value={'stretch'}>stretch</option>
                    </Select>
                </DivOptions>:''}
            </DivMargin>
        )
    }
}
