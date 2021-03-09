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
  font-family: Helvetica;
`

const DivOptions = styled.div`
  padding: 5px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`


const CustomInputBlockAll = styled.div`
  width: 100%;
  height: 27px;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #545454;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  color: white;
  font-family: Helvetica;
  outline: none;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 6px;
  resize: vertical;
  min-height: 30px;
  border: 1px solid #545454;
`


class PlaceholderCard extends Component<any, any>{
    render(){
        return (
            <DivMargin>
                <CardHeader>Placeholder</CardHeader>
                <DivOptions>
                    <TextArea placeholder={"Enter text"}/>
                </DivOptions>
            </DivMargin>
        )
    }
}

export default PlaceholderCard;