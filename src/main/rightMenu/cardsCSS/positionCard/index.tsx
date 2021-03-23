import React, {Component} from "react";
import styled from "styled-components";
import {CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow, DivOptionsTwo} from '../elems'



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
    top: number,
    right: number,
    bottom: number,
    left: number,
    typeSize: 'px' | '%'
}

export default class PositionCard extends Component<any, any> {
    state:TRBLTSA = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        typeSize: 'px'
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
        if (name === 'top') {
            this.setState({
                top: this.state.top + 1
            })
        }
        if (name === 'right') {
            this.setState({
                right: this.state.right + 1
            })
        }
        if (name === 'bottom') {
            this.setState({
                bottom: this.state.bottom + 1
            })
        }
        if (name === 'left') {
            this.setState({
                left: this.state.left + 1
            })
        }
        if (name === 'all') {
            this.setState({
                top: this.state.top + 1,
                left: this.state.top + 1,
                bottom: this.state.top + 1,
                right: this.state.top + 1
            })
        }
    }

    decrementElem(name: string) {
        if (name === 'top') {
            this.setState({
                top: this.state.top - 1
            })
        }
        if (name === 'right') {
            this.setState({
                right: this.state.right - 1
            })
        }
        if (name === 'bottom') {
            this.setState({
                bottom: this.state.bottom - 1
            })
        }
        if (name === 'left') {
            this.setState({
                left: this.state.left - 1
            })
        }
        if (name === 'all') {
            this.setState({
                top: this.state.top - 1,
                left: this.state.top - 1,
                bottom: this.state.top - 1,
                right: this.state.top - 1
            })
        }
    }

    CustomInput({Placeholder, Value, NameElem}: CIProps) {
        return (
            <CustomInputBlock>
                <Input placeholder={Placeholder} type={"text"} value={Value}/>
                <ButtonsArrows>
                    <ButtonArrowUp onClick={() => this.incrementElem(NameElem)}>+</ButtonArrowUp>
                    <ButtonArrowDown onClick={() => this.decrementElem(NameElem)}>-</ButtonArrowDown>
                </ButtonsArrows>
            </CustomInputBlock>
        )
    }

    updateValue = (text: string, name: string) => {
        text = text.replace('px', '').replace('%', '')
        let num = parseInt(text)
        if (!num || num < 0) {
            if (name === 'top' || name === 'all') {
                this.setState({
                    top: 0
                })
            }
            if (name === 'right' || name === 'all') {
                this.setState({
                    right: 0
                })
            }
            if (name === 'bottom' || name === 'all') {
                this.setState({
                    bottom: 0
                })
            }
            if (name === 'left' || name === 'all') {
                this.setState({
                    left: 0
                })
            }
        } else {
            if (name === 'top' || name === 'all') {
                this.setState({
                    top: parseInt(text)
                })
            }
            if (name === 'right' || name === 'all') {
                this.setState({
                    right: parseInt(text)
                })
            }
            if (name === 'bottom' || name === 'all') {
                this.setState({
                    bottom: parseInt(text)
                })
            }
            if (name === 'left' || name === 'all') {
                this.setState({
                    left: parseInt(text)
                })
            }
        }
    }

    render() {
        return (
            <DivMargin>
                <CardHeader>Position</CardHeader>
                <DivOptions>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Top</DivName>
                            <CustomInputBlock>
                                <Input placeholder={'top'}
                                       type={"text"}
                                       value={this.state.top + this.state.typeSize}
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
                                       value={this.state.left + this.state.typeSize}
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
                                       value={this.state.bottom + this.state.typeSize}
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
                                       value={this.state.right + this.state.typeSize}
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
                </DivOptions>
            </DivMargin>
        )
    }
}