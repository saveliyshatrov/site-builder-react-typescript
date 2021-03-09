import React, {Component} from "react";
import styled from "styled-components";
import {CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow} from '../elems'



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

class MarginCard extends Component<any, any>{
    state = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        typeSize: 'px',
        all: false,
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
    }
    changeAll(elem:boolean){
        this.state.all = !elem
    }
    incrementElem(name: string){
        if(name == 'top'){
            this.state.top++
        }
        if(name == 'right'){
            this.state.right++;
        }
        if(name == 'bottom'){
            this.state.bottom++;
        }
        if(name == 'left'){
            this.state.left++;
        }
        if(name == 'all'){
            this.state.top++;
            this.setState({
                left: this.state.top,
                bottom: this.state.top,
                right: this.state.top
            })
        }
    }
    decrementElem(name: string){
        if(name == 'top'){
            if(this.state.top > 0){
                this.state.top--;
            }
        }
        if(name == 'right'){
            if(this.state.right > -1){
                this.state.right--;
            }
        }
        if(name == 'bottom'){
            if(this.state.bottom > -1){
                this.state.bottom--;
            }
        }
        if(name == 'left'){
            if(this.state.left > -1){
                this.state.left--;
            }
        }
        if(name == 'all'){
            if(this.state.top > 0){
                this.state.top--;
                this.setState({
                    left: this.state.top,
                    bottom: this.state.top,
                    right: this.state.top
                })
            }
        }
    }
    CustomInput({Placeholder, Value, NameElem}:CIProps){
        return (
            <CustomInputBlock>
                <Input placeholder={Placeholder} type={"text"} value={Value}/>
                <ButtonsArrows>
                    <ButtonArrowUp onClick={()=>this.incrementElem(NameElem)}>+</ButtonArrowUp>
                    <ButtonArrowDown onClick={()=>this.decrementElem(NameElem)}>-</ButtonArrowDown>
                </ButtonsArrows>
            </CustomInputBlock>
        )
    }
    render(){
        return (
            <DivMargin>
                <CardHeader>Margin</CardHeader>
                {this.state.all?<DivOptions>
                    <CustomInputBlockAll>
                        <Input placeholder={'All'} type={"text"} value={this.state.top == 0?'':this.state.top + this.state.typeSize}/>
                        <ButtonsArrows>
                            <ButtonArrowUp onClick={()=>this.incrementElem('all')}>+</ButtonArrowUp>
                            <ButtonArrowDown onClick={()=>this.decrementElem('all')}>-</ButtonArrowDown>
                        </ButtonsArrows>
                    </CustomInputBlockAll>
                </DivOptions>:<DivOptions>
                    <DivOptionsRow2>
                        <CustomInputBlock>
                            <Input placeholder={'top'} type={"text"} value={this.state.top == 0?'':this.state.top + this.state.typeSize}/>
                            <ButtonsArrows>
                                <ButtonArrowUp onClick={()=>this.incrementElem('top')}>+</ButtonArrowUp>
                                <ButtonArrowDown onClick={()=>this.decrementElem('top')}>-</ButtonArrowDown>
                            </ButtonsArrows>
                        </CustomInputBlock>
                        <CustomInputBlock>
                            <Input placeholder={'left'} type={"text"} value={this.state.left == 0?'':this.state.left + this.state.typeSize}/>
                            <ButtonsArrows>
                                <ButtonArrowUp onClick={()=>this.incrementElem('left')}>+</ButtonArrowUp>
                                <ButtonArrowDown onClick={()=>this.decrementElem('left')}>-</ButtonArrowDown>
                            </ButtonsArrows>
                        </CustomInputBlock>
                    </DivOptionsRow2>
                    <DivOptionsRow>
                        <CustomInputBlock>
                            <Input placeholder={'bottom'} type={"text"} value={this.state.bottom == 0?'':this.state.bottom + this.state.typeSize}/>
                            <ButtonsArrows>
                                <ButtonArrowUp onClick={()=>this.incrementElem('bottom')}>+</ButtonArrowUp>
                                <ButtonArrowDown onClick={()=>this.decrementElem('bottom')}>-</ButtonArrowDown>
                            </ButtonsArrows>
                        </CustomInputBlock>
                        <CustomInputBlock>
                            <Input placeholder={'right'} type={"text"} value={this.state.right == 0?'':this.state.right + this.state.typeSize}/>
                            <ButtonsArrows>
                                <ButtonArrowUp onClick={()=>this.incrementElem('right')}>+</ButtonArrowUp>
                                <ButtonArrowDown onClick={()=>this.decrementElem('right')}>-</ButtonArrowDown>
                            </ButtonsArrows>
                        </CustomInputBlock>
                    </DivOptionsRow>
                </DivOptions>}
                <OptionRow onClick={()=>this.changeAll(this.state.all)}>
                    <CheckBox>
                        {this.state.all?<div>&#10004;</div>:''}
                    </CheckBox>
                    {this.state.all?"Make every custom":"Change all"}
                </OptionRow>
                <Select onChange={()=>this.changeTypeSize()}>
                    <option>px</option>
                    <option>%</option>
                </Select>
            </DivMargin>
        )
    }
}

export default MarginCard;