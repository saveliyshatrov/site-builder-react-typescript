import React, {Component} from "react";
import styled from "styled-components";


const DivMargin = styled.div`
  width: 100%;
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

const Input = styled.input`
  width: 100%;
  height: 27px;
  padding: 0px 9px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #545454;
  color: white;
  outline: none;
  font-size: 12px;
  transition: all 0.2s ease;
  :hover{
    border: 1px solid #404040;
  }
  :focus{
    border: 1px solid lightgray;
  }
`

export default class NameCard extends Component<any, any>{
    state = {
        text: ''
    }
    checkForPoint = (text: string) => {
        return text.replace('.', '')
    }
    changeText = (str: string) => {
        this.setState({
            text: this.checkForPoint(str)
        })
    }
    render(){
        return (
            <DivMargin>
                <CardHeader>Style name</CardHeader>
                <Input type={"text"}
                       placeholder={"Enter name"}
                       value={this.state.text}
                       onChange={(e)=>{
                           this.changeText(e.target.value)
                       }}/>
            </DivMargin>
        )
    }
}
