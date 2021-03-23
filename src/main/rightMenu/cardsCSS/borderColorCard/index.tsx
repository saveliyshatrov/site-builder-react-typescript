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
    topColor: string,
    rightColor: string,
    bottomColor: string,
    leftColor: string,
    all: boolean
}

export default class BorderColorCard extends Component<any, any> {
    state:TRBLTSA = {
        topColor: '#000000',
        bottomColor: '#000000',
        leftColor: '#000000',
        rightColor: '#000000',
        all: true
    }

    setTopColor = (color: string) => {
        if(this.state.all){
            this.setState({
                topColor: color,
                bottomColor: color,
                rightColor: color,
                leftColor: color,
            })
        } else {
            this.setState({
                topColor: color
            })
        }
    }
    setBottomColor = (color: string) => {
        this.setState({
            bottomColor: color
        })
    }
    setLeftColor = (color: string) => {
        this.setState({
            leftColor: color
        })
    }
    setRightColor = (color: string) => {
        this.setState({
            rightColor: color
        })
    }
    changeAll = (color:string) => {
        this.setState({
            topColor: color,
            bottomColor: color,
            rightColor: color,
            leftColor: color,
            all: !this.state.all
        })
    }
    render() {
        return (
            <DivMargin>
                <CardHeader>Border color</CardHeader>
                {!this.state.all?<DivOptions>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Top</DivName>
                            <InputColor
                                initialValue={this.state.topColor}
                                onChange={(color) => {
                                    this.setTopColor(color.hex)
                                }}
                                placement="top"
                            />
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Left</DivName>
                            <InputColor
                                initialValue={this.state.leftColor}
                                onChange={(color) => {
                                    this.setLeftColor(color.hex)
                                }}
                                placement="top"
                            />
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                    <DivOptionsRow2>
                        <DivOptionsTwo>
                            <DivName>Bottom</DivName>
                            <InputColor
                                initialValue={this.state.bottomColor}
                                onChange={(color) => {
                                    this.setBottomColor(color.hex)
                                }}
                                placement="top"
                            />
                        </DivOptionsTwo>
                        <DivOptionsTwo>
                            <DivName>Right</DivName>
                            <InputColor
                                initialValue={this.state.rightColor}
                                onChange={(color) => {
                                    this.setRightColor(color.hex)
                                }}
                                placement="top"
                            />
                        </DivOptionsTwo>
                    </DivOptionsRow2>
                </DivOptions>:<DivOptions>
                    <DivName>All</DivName>
                    <InputColor
                        initialValue={this.state.topColor}
                        onChange={(color) => {
                            this.setTopColor(color.hex)
                        }}
                        placement="top"
                    />
                </DivOptions>}
                <OptionRow onClick={() => this.changeAll(this.state.topColor)}>
                    <CheckBox>
                        {this.state.all ? <div>&#10004;</div> : ''}
                    </CheckBox>
                    All
                </OptionRow>
            </DivMargin>
        )
    }
}