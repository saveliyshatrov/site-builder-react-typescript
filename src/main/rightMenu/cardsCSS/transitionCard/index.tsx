import React, {Component} from "react";
import styled from "styled-components";
import {ButtonArrowDown, ButtonArrowUp, ButtonsArrows, CustomInputBlock, Input} from "../elems";


const DivMargin = styled.div`
  width: 266px;
  border-radius: 7px;
  background-color: #1B1B1B;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 7px 7px;
`
const CardHeader = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  font-family: Helvetica,serif;
`


export default class TransitionCard extends Component<any, any>{
    state = {
        ms: 0
    }
    changeText = (str: string) => {
        str = str.replace('ms', '')
        if(parseInt(str)){
            this.setState({
                ms: parseInt(str)
            })
        } else {
            this.setState({
                ms: 0
            })
        }
    }
    incrementElem = () => {
        this.setState({
            ms: this.state.ms + 1
        })
    }
    decrementElem = () => {
        this.setState({
            ms: this.state.ms > 0? this.state.ms - 1: 0
        })
    }
    render(){
        return (
            <DivMargin>
                <CardHeader>Transition</CardHeader>
                <CustomInputBlock>
                    <Input placeholder={''}
                           type={"text"}
                           value={this.state.ms + 'ms'}
                           onChange={(e) => {
                               this.changeText(e.target.value)
                           }}/>
                    <ButtonsArrows>
                        <ButtonArrowUp onClick={() => this.incrementElem()}>+</ButtonArrowUp>
                        <ButtonArrowDown onClick={() => this.decrementElem()}>-</ButtonArrowDown>
                    </ButtonsArrows>
                </CustomInputBlock>
            </DivMargin>
        )
    }
}