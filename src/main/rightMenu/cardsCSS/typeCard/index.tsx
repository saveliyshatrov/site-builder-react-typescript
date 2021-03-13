import React, {Component} from "react";
import styled from "styled-components";


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


const Select = styled.select`
  width: 253px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #545454;
  background-color: transparent;
  color: white;
  border-radius: 6px;
  margin-top: 5px;
  outline: none;
  padding: 0px 5px;
`
type CardProp = {
    elemID: number,
    insertInfo: any,
    info: string | undefined
}

class TypeCard extends Component<CardProp, any>{
    constructor(props: CardProp) {
        super(props);
    }
    state = {
        text: this.props.info?this.props.info:''
    }
    changeText = (str: string) => {
        this.setState({
            text: str
        })
    }
    render(){
        return (
            <DivMargin>
                <CardHeader>Type</CardHeader>
                <Select value={this.state.text}
                        onChange={
                            (e)=>{
                                this.props.insertInfo(this.props.elemID, 'insertType', e.target.value);
                                this.changeText(e.target.value)
                            }
                        }>
                    <option value={"text"}>text</option>
                    <option value={"number"}>number</option>
                    <option value={"checkbox"}>checkbox</option>
                    <option value={"date"}>date</option>
                    <option value={"password"}>password</option>
                    <option value={"radio"}>radio</option>
                    <option value={"range"}>range</option>
                    <option value={"time"}>time</option>
                </Select>
            </DivMargin>
        )
    }
}

export default TypeCard;