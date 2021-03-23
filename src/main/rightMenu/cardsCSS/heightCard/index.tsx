import React, {Component} from "react";
import {
    ButtonArrowDown,
    ButtonArrowUp,
    ButtonsArrows,
    CardHeader,
    CustomInputBlockAll, DivOptions,
    Input, Select
} from "../elems";
import styled from "styled-components";

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

export default class HeightCard extends Component<any, any>{
    state = {
        typeSize: 'px',
        height: 0
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
    changeText = (str: string) => {
        this.setState({
            text: str
        })
    }
    incrementElem(){
        this.setState({
            height: this.state.height + 1
        })
    }
    decrementElem(){
        if(this.state.height > 0){
            this.setState({
                height: this.state.height - 1
            })
        }
    }

    updateValue = (text: string) => {
        text = text.replace('px', '').replace('%','')
        let num = parseInt(text)
        if(!num || num < 0){
            this.setState({
                height: 0
            })
        } else {
            this.setState({
                height: parseInt(text)
            })
        }
    }
    render() {
        return (
            <DivMargin>
                <CardHeader>Height</CardHeader>
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
                    <Select onChange={() => this.changeTypeSize()}>
                        <option>px</option>
                        <option>%</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}