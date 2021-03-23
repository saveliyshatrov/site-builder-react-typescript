import React, {Component} from "react";
import {
    ButtonArrowDown,
    ButtonArrowUp,
    ButtonsArrows,
    CardHeader,
    CustomInputBlock,
    DivOptions, DivOptionsRow2, DivOptionsTwo,
    Select, DivMargin, DivName, CustomInputBlockAll,
    Input
} from "../elems";
import styled from "styled-components";
import InputColor from "react-input-color";

type TRBLTSA = {
    typeSize: 'px' | '%',
    color: string,
    size: number
}

const InputS = styled.input`
  width: 100%;
  height: 27px;
  padding: 0px 9px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #545454;
  color: white;
  outline: none;
  font-size: 11px;
  transition: all 0.2s ease;
  cursor: pointer;
  :hover{
    border: 1px solid #404040;
  }
  :focus{
    border: 1px solid lightgray;
  }
`

export default class FontCard extends Component<any, any> {
    state:TRBLTSA = {
        typeSize: 'px',
        color: '#FFFFFF',
        size: 10
    }
    setColor = (color:string) => {
        this.setState({
            color: color
        })
    }
    incrementElem(){
        this.setState({
            size: this.state.size + 1
        })
    }
    decrementElem(){
        if(this.state.size > 0){
            this.setState({
                size: this.state.size - 1
            })
        }
    }
    updateValue = (text: string) => {
        text = text.replace('px', '').replace('%','')
        let num = parseInt(text)
        if(!num || num < 0){
            this.setState({
                size: 10
            })
        } else {
            this.setState({
                size: parseInt(text)
            })
        }
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
    render() {
        return (
            <DivMargin>
                <CardHeader>Font</CardHeader>
                <DivOptions>
                    <DivName>Font family</DivName>
                    <Select>
                        <option>Helvetica</option>
                        <option>Another 1</option>
                        <option>Another 2</option>
                        <option>Another 3</option>
                    </Select>
                </DivOptions>
                <DivOptions>
                    <DivName>Add custom font-family</DivName>
                    <InputS placeholder={'Enter font-family'}/>
                </DivOptions>
                <DivOptions>
                    <DivName>Font size</DivName>
                    <CustomInputBlockAll>
                        <Input placeholder={'All'} type={"text"}
                               value={this.state.size + this.state.typeSize}
                               onChange={(e)=>{this.updateValue(e.target.value)}}/>
                        <ButtonsArrows>
                            <ButtonArrowUp onClick={()=>{this.incrementElem()}}>+</ButtonArrowUp>
                            <ButtonArrowDown onClick={()=>{this.decrementElem()}}>-</ButtonArrowDown>
                        </ButtonsArrows>
                    </CustomInputBlockAll>
                </DivOptions>
                <DivOptions>
                    <DivName>Font weight</DivName>
                    <Select>
                        <option>100</option>
                        <option>200</option>
                        <option>300</option>
                        <option>400</option>
                        <option>500</option>
                        <option>600</option>
                        <option>700</option>
                        <option>800</option>
                        <option>900</option>
                    </Select>
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