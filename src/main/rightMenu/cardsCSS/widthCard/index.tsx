import React, {Component} from "react";
import {
    ButtonArrowDown,
    ButtonArrowUp,
    ButtonsArrows,
    CardHeader, CardLogo,
    CustomInputBlockAll, DivOptions,
    Input, Select, ButtonHeaderCard, DivOptionsSelector
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

export default class WidthCard extends Component<any, any>{
    state = {
        typeSize: 'px',
        width: 0,
        mob: false,
        tab: false,
        des: false,
        hov: false,
        act: false,
        foc: false
    }
    setInfo(text: number){
        // this.setState({
        //     width: text
        // }, ()=>{
        //     this.props.func(this.state.width + this.state.typeSize)
        // })
        this.setState({
            width: text
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
                    <Select onChange={() => {this.changeTypeSize();}}>
                        <option>px</option>
                        <option>%</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}