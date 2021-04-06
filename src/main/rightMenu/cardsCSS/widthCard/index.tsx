import React, {Component} from "react";
import {
    ButtonArrowDown,
    ButtonArrowUp,
    ButtonsArrows,
    CardHeader, CardLogo,
    CustomInputBlockAll, DivOptions,
    Input, Select, ButtonHeaderCard, DivOptionsSelector, DivMargin
} from "../elems";
import styled from "styled-components";

const DivName = styled.div`
  color: lightgray;
  font-size: 10px;
  margin-bottom: 3px;
  margin-left: 3px;
`

type WidthCardProps = {
    obj: any,
    funcAll: any,
    funcMobile: any,
    funcTablet: any,
    funcDesktop: any
}

export default class WidthCard extends Component<WidthCardProps, any>{
    state = {
        typeSize: this.props.obj.all.width.none.includes('%')?'%':'px',
        width: this.props.obj.all.width.none.replace('%', '').replace('px', ''),
        mob: false,
        tab: false,
        des: false,
        hov: false,
        act: false,
        foc: false,
        all: {
            width: {
                none: this.props.obj.all.width.none,
                hover: this.props.obj.all.width.hover,
                active: this.props.obj.all.width.active,
                focus: this.props.obj.all.width.focus
            }
        },
        mobile: {
            width: {
                none: this.props.obj.mobile.width.none,
                hover: this.props.obj.mobile.width.hover,
                active: this.props.obj.mobile.width.active,
                focus: this.props.obj.mobile.width.focus
            }
        },
        tablet: {
            width: {
                none: this.props.obj.tablet.width.none,
                hover: this.props.obj.tablet.width.hover,
                active: this.props.obj.tablet.width.active,
                focus: this.props.obj.tablet.width.focus
            }
        },
        desktop: {
            width: {
                none: this.props.obj.desktop.width.none,
                hover: this.props.obj.desktop.width.hover,
                active: this.props.obj.desktop.width.active,
                focus: this.props.obj.desktop.width.focus
            }
        }
    }
    getWidth = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                return this.state.all.width.none
            }
            if(this.state.hov){
                return this.state.all.width.hover
            }
            if(this.state.act){
                return this.state.all.width.active
            }
            if(this.state.foc){
                return this.state.all.width.focus
            }
        }
        if(this.state.mob){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                return this.state.mobile.width.none
            }
            if(this.state.hov){
                return this.state.mobile.width.hover
            }
            if(this.state.act){
                return this.state.mobile.width.active
            }
            if(this.state.foc){
                return this.state.mobile.width.focus
            }
        }
        if(this.state.tab){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                return this.state.tablet.width.none
            }
            if(this.state.hov){
                return this.state.tablet.width.hover
            }
            if(this.state.act){
                return this.state.tablet.width.active
            }
            if(this.state.foc){
                return this.state.tablet.width.focus
            }
        }
        if(this.state.des){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                return this.state.desktop.width.none
            }
            if(this.state.hov){
                return this.state.desktop.width.hover
            }
            if(this.state.act){
                return this.state.desktop.width.active
            }
            if(this.state.foc){
                return this.state.desktop.width.focus
            }
        }
    }
    componentWillMount() {
        this.getInfo()
    }

    getInfo = () => {
        if(!(this.state.mob||this.state.tab||this.state.des)){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                this.setState({
                    width: parseInt(this.state.all.width.none.replace('px', '').replace('%', '')),
                    typeSize: this.state.all.width.none.includes('%')?'%':'px'
                })
            }
            if(this.state.hov){
                this.setState({
                    width: parseInt(this.state.all.width.hover.replace('px', '').replace('%', '')),
                    typeSize: this.state.all.width.hover.includes('%')?'%':'px'
                })
            }
            if(this.state.act){
                this.setState({
                    width: parseInt(this.state.all.width.active.replace('px', '').replace('%', '')),
                    typeSize: this.state.all.width.active.includes('%')?'%':'px'
                })
            }
            if(this.state.foc){
                this.setState({
                    width: parseInt(this.state.all.width.focus.replace('px', '').replace('%', '')),
                    typeSize: this.state.all.width.focus.includes('%')?'%':'px'
                })
            }
        }
        if(this.state.mob){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                this.setState({
                    width: parseInt(this.state.mobile.width.none.replace('px', '').replace('%', '')),
                    typeSize: this.state.mobile.width.none.includes('%')?'%':'px'
                })
            }
            if(this.state.hov){
                this.setState({
                    width: parseInt(this.state.mobile.width.hover.replace('px', '').replace('%', '')),
                    typeSize: this.state.mobile.width.hover.includes('%')?'%':'px'
                })
            }
            if(this.state.act){
                this.setState({
                    width: parseInt(this.state.mobile.width.active.replace('px', '').replace('%', '')),
                    typeSize: this.state.mobile.width.active.includes('%')?'%':'px'
                })
            }
            if(this.state.foc){
                this.setState({
                    width: parseInt(this.state.mobile.width.focus.replace('px', '').replace('%', '')),
                    typeSize: this.state.mobile.width.focus.includes('%')?'%':'px'
                })
            }
        }
        if(this.state.tab){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                this.setState({
                    width: parseInt(this.state.tablet.width.none.replace('px', '').replace('%', '')),
                    typeSize: this.state.tablet.width.none.includes('%')?'%':'px'
                })
            }
            if(this.state.hov){
                this.setState({
                    width: parseInt(this.state.tablet.width.hover.replace('px', '').replace('%', '')),
                    typeSize: this.state.tablet.width.hover.includes('%')?'%':'px'
                })
            }
            if(this.state.act){
                this.setState({
                    width: parseInt(this.state.tablet.width.active.replace('px', '').replace('%', '')),
                    typeSize: this.state.tablet.width.active.includes('%')?'%':'px'
                })
            }
            if(this.state.foc){
                this.setState({
                    width: parseInt(this.state.tablet.width.focus.replace('px', '').replace('%', '')),
                    typeSize: this.state.tablet.width.focus.includes('%')?'%':'px'
                })
            }
        }
        if(this.state.des){
            if(!(this.state.hov&&this.state.act&&this.state.foc)){
                this.setState({
                    width: parseInt(this.state.desktop.width.none.replace('px', '').replace('%', '')),
                    typeSize: this.state.desktop.width.none.includes('%')?'%':'px'
                })
            }
            if(this.state.hov){
                this.setState({
                    width: parseInt(this.state.desktop.width.hover.replace('px', '').replace('%', '')),
                    typeSize: this.state.desktop.width.hover.includes('%')?'%':'px'
                })
            }
            if(this.state.act){
                this.setState({
                    width: parseInt(this.state.desktop.width.active.replace('px', '').replace('%', '')),
                    typeSize: this.state.desktop.width.active.includes('%')?'%':'px'
                })
            }
            if(this.state.foc){
                this.setState({
                    width: parseInt(this.state.desktop.width.focus.replace('px', '').replace('%', '')),
                    typeSize: this.state.desktop.width.focus.includes('%')?'%':'px'
                })
            }
        }
    }
    setInfo(text: number){
        this.setState({
            width: text
        }, ()=>{
            if(!(this.state.mob||this.state.tab||this.state.des)){
                if(!(this.state.hov&&this.state.foc&&this.state.act)){
                    this.props.funcAll(this.state.width + this.state.typeSize, 'set', 'none')
                }
                if(this.state.hov){
                    this.props.funcAll(this.state.width + this.state.typeSize, 'set', 'hover')
                }
                if(this.state.act){
                    this.props.funcAll(this.state.width + this.state.typeSize, 'set', 'active')
                }
                if(this.state.foc){
                    this.props.funcAll(this.state.width + this.state.typeSize, 'set', 'focus')
                }
            }
            if(this.state.mob){
                if(!(this.state.hov&&this.state.foc&&this.state.act)){
                    this.props.funcMobile(this.state.width + this.state.typeSize, 'set', 'none')
                }
                if(this.state.hov){
                    this.props.funcMobile(this.state.width + this.state.typeSize, 'set', 'hover')
                }
                if(this.state.act){
                    this.props.funcMobile(this.state.width + this.state.typeSize, 'set', 'active')
                }
                if(this.state.foc){
                    this.props.funcMobile(this.state.width + this.state.typeSize, 'set', 'focus')
                }
            }
            if(this.state.tab){
                if(!(this.state.hov&&this.state.foc&&this.state.act)){
                    this.props.funcTablet(this.state.width + this.state.typeSize, 'set', 'none')
                }
                if(this.state.hov){
                    this.props.funcTablet(this.state.width + this.state.typeSize, 'set', 'hover')
                }
                if(this.state.act){
                    this.props.funcTablet(this.state.width + this.state.typeSize, 'set', 'active')
                }
                if(this.state.foc){
                    this.props.funcTablet(this.state.width + this.state.typeSize, 'set', 'focus')
                }
            }
            if(this.state.des){
                if(!(this.state.hov&&this.state.foc&&this.state.act)){
                    this.props.funcDesktop(this.state.width + this.state.typeSize, 'set', 'none')
                }
                if(this.state.hov){
                    this.props.funcDesktop(this.state.width + this.state.typeSize, 'set', 'hover')
                }
                if(this.state.act){
                    this.props.funcDesktop(this.state.width + this.state.typeSize, 'set', 'active')
                }
                if(this.state.foc){
                    this.props.funcDesktop(this.state.width + this.state.typeSize, 'set', 'focus')
                }
            }
        })
    }
    changeTypeSize(){
        if(this.state.typeSize == 'px'){
            this.setState({
                typeSize: '%'
            })
        }
        if(this.state.typeSize == '%'){
            this.setState({typeSize: 'px'})
        }
        this.setInfo(this.state.width)
    }
    incrementElem(){
        this.setInfo(this.state.width + 1)
    }
    decrementElem(){
        if(this.state.width > 0){
            this.setInfo(this.state.width - 1)
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
        this.getInfo()
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
            }, this.getInfo)
        }
    }
    componentDidUpdate(prevProps: Readonly<WidthCardProps>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props !== prevProps){
            this.setState({
                all: {
                    width: {
                        none: this.props.obj.all.width.none,
                        hover: this.props.obj.all.width.hover,
                        active: this.props.obj.all.width.active,
                        focus: this.props.obj.all.width.focus
                    }
                },
                mobile: {
                    width: {
                        none: this.props.obj.mobile.width.none,
                        hover: this.props.obj.mobile.width.hover,
                        active: this.props.obj.mobile.width.active,
                        focus: this.props.obj.mobile.width.focus
                    }
                },
                tablet: {
                    width: {
                        none: this.props.obj.tablet.width.none,
                        hover: this.props.obj.tablet.width.hover,
                        active: this.props.obj.tablet.width.active,
                        focus: this.props.obj.tablet.width.focus
                    }
                },
                desktop: {
                    width: {
                        none: this.props.obj.desktop.width.none,
                        hover: this.props.obj.desktop.width.hover,
                        active: this.props.obj.desktop.width.active,
                        focus: this.props.obj.desktop.width.focus
                    }
                }
            })
        }
    }

    render() {
        return (
            <DivMargin>
                <CardHeader>
                    Width
                </CardHeader>
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
                    <Input placeholder={'All'}
                           type={"text"}
                           value={this.state.width + this.state.typeSize}
                           onChange={(e)=>{this.updateValue(e.target.value);}}/>
                    <ButtonsArrows>
                        <ButtonArrowUp onClick={()=>{this.incrementElem();}}>+</ButtonArrowUp>
                        <ButtonArrowDown onClick={()=>{this.decrementElem();}}>-</ButtonArrowDown>
                    </ButtonsArrows>
                </CustomInputBlockAll>
                <DivOptions>
                    <DivName>Metric type</DivName>
                    <Select onChange={() => {this.changeTypeSize();}} value={this.state.typeSize}>
                        <option value={'px'}>px</option>
                        <option value={'%'}>%</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}
