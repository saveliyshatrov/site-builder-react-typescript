import styled from "styled-components";

const CardHeader = styled.div`
        width: 100%;
        height: 25px;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 12px;
        font-family: Helvetica;
`
const CardLogo = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
`



const DivOptions = styled.div`
  padding: 5px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const DivOptionsSelector = styled.div`
        padding: 0px 0px 5px 0px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
`

const DivOptionsTwo = styled.div`
  padding: 5px 0px;
  width: 48%;
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
`
const DivOptionsRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
`
const CustomInputBlock = styled.div`
  width: 100%;
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
  width: 252px;
  height: 27px !important;
  box-sizing: border-box;
  border: 1px solid #545454;
  background-color: transparent;
  color: white;
  border-radius: 6px;
  outline: none;
  padding: 0px 5px;
        transition: all 0.2s ease;
        cursor: pointer;
        :hover{
                border: 1px solid #404040;
        }
        :focus{
                border: 1px solid lightgray;
        }
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
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;
        :hover {
                background-color: #2f2f2f;
        }
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
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;
        :hover {
                background-color: #2f2f2f;
        }
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
        margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  color: white;
`

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
  cursor: default;
`

type Focus = {
        focus: boolean
}

const ButtonHeaderCard = styled.div<Focus>`
        background-color: transparent;
        transition: all 0.4s ease;
        height: 14px;
        width: 35px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        box-sizing: border-box;
        border-radius: 3px;
        border: ${props => props.focus?'1px solid #4a4a4a':'1px solid transparent'};
        cursor: pointer;
        :hover{
                background-color: #4a4a4a;
        } 
        :active{
                border: 1px solid #4a4a4a;
        }
`

export {CardHeader, CardLogo, DivOptions,
        DivOptionsRow, DivOptionsRow2,
        CustomInputBlock, CustomInputBlockAll,
        Input, Select, ButtonsArrows,
        ButtonArrowUp, ButtonArrowDown,
        CheckBox, OptionRow, DivOptionsTwo, DivMargin, DivName, ButtonHeaderCard, DivOptionsSelector}