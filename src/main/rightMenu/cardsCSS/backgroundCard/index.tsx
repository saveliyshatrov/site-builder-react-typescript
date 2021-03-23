import React, {Component} from "react";
import styled from "styled-components";
import {CardHeader, DivOptions,
    DivOptionsRow, DivOptionsRow2,
    CustomInputBlock, CustomInputBlockAll,
    Input, Select, ButtonsArrows,
    ButtonArrowUp, ButtonArrowDown,
    CheckBox, OptionRow, DivOptionsTwo} from '../elems'
import InputColor from "react-input-color";



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
    typeSize: 'px' | '%',
    all: boolean,
    color: string,
    firstColor: string,
    secondColor: string,
    angle: number
}

export default class BackgroundCard extends Component<any, any> {
    state:TRBLTSA = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        typeSize: 'px',
        all: true,
        color: '#FFFFFF',
        firstColor: '#FFFFFF',
        secondColor: '#FFFFFF',
        angle: 0
    }

    changeAll(elem: boolean) {
        this.setState({
            all: !elem
        })
    }

    setColor = (color:string) => {
        this.setState({
            color: color
        })
    }

    setColorFirst = (color:string) => {
        this.setState({
            firstColor: color
        })
    }

    setColorSecond = (color:string) => {
        this.setState({
            secondColor: color
        })
    }

    incrementElem() {
            this.setState({
                angle: this.state.angle + 1
            })
    }
    decrementElem() {
        if(this.state.angle > 0){
            this.setState({
                angle: this.state.angle - 1
            })
        }
    }

    updateValue = (text: string) => {
        console.log(text)
        text = text.replace('deg', '')
        let num = parseInt(text)
        if (!num || num < 0) {
            this.setState({
                angle: 0
            })
        } else {
            this.setState({
                angle: parseInt(text)
            })
        }
    }

    render() {
        return (
            <DivMargin>
                <CardHeader>Background color</CardHeader>
                {this.state.all ? <DivOptions>
                    <DivName>Color</DivName>
                        <InputColor
                            initialValue={this.state.color}
                            onChange={(color)=>{this.setColor(color.hex)}}
                            placement="top"
                        />
                </DivOptions> : <DivOptions>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>First color</DivName>
                            <InputColor
                                initialValue={this.state.firstColor}
                                onChange={(color)=>{this.setColorFirst(color.hex)}}
                                placement="top"
                            />
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Second color</DivName>
                            <InputColor
                                initialValue={this.state.secondColor}
                                onChange={(color)=>{this.setColorSecond(color.hex)}}
                                placement="top"
                            />
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                    <DivOptions>
                        <DivName>Angle</DivName>
                        <CustomInputBlockAll>
                            <Input placeholder={'All'}
                                   type={"text"}
                                   value={this.state.angle + 'deg'}
                                   onChange={(e) => {
                                       this.updateValue(e.target.value)
                                   }}/>
                            <ButtonsArrows>
                                <ButtonArrowUp onClick={() => {this.incrementElem()}}>+</ButtonArrowUp>
                                <ButtonArrowDown onClick={() => {this.decrementElem()}}>-</ButtonArrowDown>
                            </ButtonsArrows>
                        </CustomInputBlockAll>
                    </DivOptions>
                </DivOptions>
                }
                <OptionRow onClick={() => this.changeAll(this.state.all)}>
                    <CheckBox>
                        {this.state.all ? <div>&#10004;</div> : ''}
                    </CheckBox>
                    Fill
                </OptionRow>
            </DivMargin>
        )
    }
}