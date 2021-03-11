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

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0px 9px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #545454;
  color: white;
  outline: none;
`
type CardProp = {
    elemID: number,
    insertInfo: any
}

class ForCard extends Component<CardProp, any>{
    constructor(props:CardProp) {
        super(props);
    }
    render(){
        return (
            <DivMargin>
                <CardHeader>For</CardHeader>
                <Input type={"text"}
                       placeholder={"Enter FOR"}
                       onChange={(e)=>{
                           this.props.insertInfo(this.props.elemID, 'insertFor', e.target.value)
                       }}/>
            </DivMargin>
        )
    }
}

export default ForCard;