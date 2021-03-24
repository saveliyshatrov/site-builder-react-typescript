import React, {Component} from "react";
import styled from "styled-components";
import {
    CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow, DivOptionsTwo, ButtonHeaderCard, DivOptionsSelector
} from '../elems'



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
    all: boolean,
    mob: false,
    tab: false,
    des: false,
    hov: false,
    act: false,
    foc: false
}

export default class BorderRadiusCard extends Component<any, any> {
    state:TRBLTSA = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        typeSize: 'px',
        all: true,
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

    changeTypeSize() {
        if (this.state.typeSize === 'px') {
            this.setState({
                typeSize: '%'
            })
        }
        if (this.state.typeSize === '%') {
            this.setState({typeSize: 'px'})
        }
    }

    incrementElem(name: string) {
        if (name === 'top' || name === 'all') {
            this.setState({
                top: this.state.top + 1
            })
        }
        if (name === 'right' || name === 'all') {
            this.setState({
                right: this.state.right + 1
            })
        }
        if (name === 'bottom' || name === 'all') {
            this.setState({
                bottom: this.state.bottom + 1
            })
        }
        if (name === 'left' || name === 'all') {
            this.setState({
                left: this.state.left + 1
            })
        }
    }

    decrementElem(name: string) {
        if (name === 'top' || name === 'all') {
            this.setState({
                top: this.state.top > 0? this.state.top - 1 : 0
            })
        }
        if (name === 'right' || name === 'all') {
            this.setState({
                right: this.state.right > 0? this.state.right - 1 : 0
            })
        }
        if (name === 'bottom' || name === 'all') {
            this.setState({
                bottom: this.state.bottom > 0? this.state.bottom - 1 : 0
            })
        }
        if (name === 'left' || name === 'all') {
            this.setState({
                left: this.state.left > 0? this.state.left - 1 : 0
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
            if (name === 'top' || this.state.all) {
                this.setState({
                    top: 0
                })
            }
            if (name === 'right' || this.state.all) {
                this.setState({
                    right: 0
                })
            }
            if (name === 'bottom' || this.state.all) {
                this.setState({
                    bottom: 0
                })
            }
            if (name === 'left' || this.state.all) {
                this.setState({
                    left: 0
                })
            }
        } else {
            if (name === 'top' || this.state.all) {
                this.setState({
                    top: parseInt(text)
                })
            }
            if (name === 'right' || this.state.all) {
                this.setState({
                    right: parseInt(text)
                })
            }
            if (name === 'bottom' || this.state.all) {
                this.setState({
                    bottom: parseInt(text)
                })
            }
            if (name === 'left' || this.state.all) {
                this.setState({
                    left: parseInt(text)
                })
            }
        }
    }
    changeAll = () => {
        this.setState({
            top: this.state.top,
            bottom: this.state.top,
            right: this.state.top,
            left: this.state.top,
            all: !this.state.all
        })
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
                {!this.state.all?<DivOptions>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Top Left</DivName>
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
                            <DivName>Top Right</DivName>
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
                            <DivName>Bottom Left</DivName>
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
                            <DivName>Bottom Right</DivName>
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
                </DivOptions> : <DivOptions>
                    <DivName>All</DivName>
                    <CustomInputBlock>
                        <Input placeholder={'all'}
                               type={"text"}
                               value={this.state.right + this.state.typeSize}
                               onChange={(e) => {
                                   this.updateValue(e.target.value, 'top')
                               }}/>
                        <ButtonsArrows>
                            <ButtonArrowUp onClick={() => this.incrementElem('all')}>+</ButtonArrowUp>
                            <ButtonArrowDown onClick={() => this.decrementElem('all')}>-</ButtonArrowDown>
                        </ButtonsArrows>
                    </CustomInputBlock>
                </DivOptions>}
                <OptionRow onClick={() => {this.changeAll()}}>
                    <CheckBox>
                        {this.state.all ? <div>&#10004;</div> : ''}
                    </CheckBox>
                    All
                </OptionRow>
                <DivOptions>
                    <DivName>Metric type</DivName>
                    <Select onChange={() => this.changeTypeSize()}>
                        <option>px</option>
                        <option>%</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}