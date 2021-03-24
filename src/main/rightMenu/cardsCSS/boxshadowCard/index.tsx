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
    state:TRBLTSA = {
        x: 0,
        blur: 0,
        y: 0,
        sizing: 0,
        typeSize: 'px',
        color: '#FFFFFF',
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
        if(this.state.des){
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
    setColor = (color:string) => {
        this.setState({
            color: color
        })
    }

    changeTypeSize() {
        if (this.state.typeSize == 'px') {
            this.setState({
                typeSize: '%'
            })
        }
        if (this.state.typeSize == '%') {
            this.setState({typeSize: 'px'})
        }
    }

    incrementElem(name: string) {
        if (name === 'x') {
            this.setState({
                x: this.state.x + 1
            })
        }
        if (name === 'sizing') {
            this.setState({
                sizing: this.state.sizing + 1
            })
        }
        if (name === 'blur') {
            this.setState({
                blur: this.state.blur + 1
            })
        }
        if (name === 'y') {
            this.setState({
                y: this.state.y + 1
            })
        }
    }

    decrementElem(name: string) {
        if (name === 'x') {
            this.setState({
                x: this.state.x - 1
            })
        }
        if (name === 'sizing') {
            this.setState({
                sizing: this.state.sizing - 1
            })
        }
        if (name === 'blur') {
            this.setState({
                blur: this.state.blur - 1
            })
        }
        if (name === 'y') {
            this.setState({
                y: this.state.y - 1
            })
        }
    }

    updateValue = (text: string, name: string) => {
        text = text.replace('px', '').replace('%', '')
        let num = parseInt(text)
        if (!num || num < 0) {
            if (name === 'x') {
                this.setState({
                    x: 0
                })
            }
            if (name === 'sizing') {
                this.setState({
                    sizing: 0
                })
            }
            if (name === 'blur') {
                this.setState({
                    blur: 0
                })
            }
            if (name === 'y') {
                this.setState({
                    y: 0
                })
            }
        } else {
            if (name === 'x' || name === 'all') {
                this.setState({
                    x: parseInt(text)
                })
            }
            if (name === 'sizing' || name === 'all') {
                this.setState({
                    sizing: parseInt(text)
                })
            }
            if (name === 'blur' || name === 'all') {
                this.setState({
                    blur: parseInt(text)
                })
            }
            if (name === 'y' || name === 'all') {
                this.setState({
                    y: parseInt(text)
                })
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
                                       value={this.state.x + this.state.typeSize}
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
                                       value={this.state.y + this.state.typeSize}
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
                                       value={this.state.blur + this.state.typeSize}
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
                                       value={this.state.sizing + this.state.typeSize}
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
                    <Select onChange={() => this.changeTypeSize()}>
                        <option>px</option>
                        <option>%</option>
                    </Select>
                </DivOptions>
                <DivOptions>
                    <DivName>Color</DivName>
                    <InputColor
                        initialValue={this.state.color}
                        onChange={(color)=>{this.setColor(color.hex)}}
                        placement="top"
                    />
                </DivOptions>
            </DivMargin>
        )
    }
}