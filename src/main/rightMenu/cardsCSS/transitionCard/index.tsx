import React, {Component} from "react";
import styled from "styled-components";
import {ButtonArrowDown, ButtonArrowUp, ButtonsArrows, CustomInputBlock, Input, DivMargin} from "../elems";

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
        ms: this.props.obj!==undefined?this.props.obj:0
    }
    changeText = (str: string) => {
        str = str.replace('ms', '')
        if(parseInt(str)){
            this.setState({
                ms: parseInt(str)
            }, this.setInfo)
        } else {
            this.setState({
                ms: 0
            }, this.setInfo)
        }
    }
    setInfo = () => {
        this.props.funcAll(this.state.ms)
    }
    incrementElem = () => {
        this.setState({
            ms: this.state.ms + 1
        }, this.setInfo)
    }
    decrementElem = () => {
        this.setState({
            ms: this.state.ms > 0? this.state.ms - 1: 0
        }, this.setInfo)
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
