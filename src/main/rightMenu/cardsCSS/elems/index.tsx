import styled from "styled-components";

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
  padding: 5px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const DivOptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  margin-top: 5px;
`
const DivOptionsRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
`
const CustomInputBlock = styled.div`
  width: 123px;
  height: 27px;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #545454;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const Input = styled.input`
  width: 89px;
  height: 15px;
  border: none;
  background-color: transparent;
  color: white;
  outline: none;
  font-size: 12px;
  box-sizing: border-box;
  padding-left: 7px;
`
const Select = styled.select`
  width: 253px;
  height: 27px !important;
  box-sizing: border-box;
  border: 1px solid #545454;
  background-color: transparent;
  color: white;
  border-radius: 6px;
  margin-top: 5px;
  outline: none;
  padding: 0px 5px;
`
const ButtonsArrows = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 4px;
  background-color: #5A5A5A;
  position: relative;
  margin-right: 1px;
`
const ButtonArrowUp = styled.button`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: transparent;
  border: none;
  color: #C4C4C4;
`
const ButtonArrowDown = styled.button`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: transparent;
  border: none;
  color: #C4C4C4;
`
const CheckBox = styled.div`
  width: 14px;
  height: 14px;
  margin: 0px 5px 0px 0px;
  background-color: #4C4C4C;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`
const OptionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  color: white;
`

export {CardHeader, DivOptions,
        DivOptionsRow, DivOptionsRow2,
        CustomInputBlock, CustomInputBlockAll,
        Input, Select, ButtonsArrows,
        ButtonArrowUp, ButtonArrowDown,
        CheckBox, OptionRow}