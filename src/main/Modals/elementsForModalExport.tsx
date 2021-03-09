import React, {Component} from "react";
import styled from "styled-components";

type Props = {
    show: boolean
}

const Body = styled.div<Props>`
  position: absolute;
  width: 636px;
  height: 432px;
  top: calc(50% - 216px);
  left: calc(50% - 318px);
  border: none;
  border-radius: 9px;
  background-color: #1B1B1B;
  display: ${props => props.show?'flex':'none'};
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  box-shadow: 30px 60px 60px rgba(99,99,99, 0.5);
`

const Header = styled.div`
  width: 80%;
  height: 50px;
  font-size: 14px;
  background-color: #1B1B1B;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  height: 332px;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  background-color: #1B1B1B;
  color: white;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #313131;
`

const SelectionExport = styled.div`
  width: 597px;
  height: 22px;
  background-color: #272727;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 1px;
  border-radius: 6px;
`
type Selected = {
    show: boolean
}
const ButtonSelectExport = styled.button<Selected>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  background-color: ${props => props.show?'#848484':'transparent'};
  font-size: 9.5px;
  color: white;
  border: none;
  border-radius: 6px;
  outline: none;
`

const Footer = styled.div`
  width: calc(100% - 40px);
  height: 50px;
  font-size: 14px;
  background-color: #1B1B1B;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
type footerBtnSelected = {
    selected: boolean
}

const FooterBtnSelected = styled.button<footerBtnSelected>`
  padding: 0px 15px;
  height: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props=>props.selected?'#848484': 'transparent'};
  margin-right: ${props=>props.selected?'0': '9px'};
  color: white;
  outline: none;
`

const Menu = styled.div`
  box-sizing: border-box;
  height: calc(100% - 52px);
  width: 100%;
  padding: 26px 55px;
`
const OptionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 9px;
  font-size: 14px;
  cursor: pointer;
`

const CheckBox = styled.div`
  width: 14px;
  height: 14px;
  margin: 0px 5px;
  background-color: #4C4C4C;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`

type Prop = {
    func: any
    show: boolean
}

class LabelWithCheckBox extends Component<Prop, any>{
    render() {
        return <OptionRow  onClick={this.props.func}>
            <CheckBox>
                {this.props.show?<div>&#10004;</div>:''}
            </CheckBox>
            {this.props.children}
        </OptionRow>
    }
}

export {LabelWithCheckBox, CheckBox, OptionRow, Menu, FooterBtnSelected, Footer, ButtonSelectExport, Main, Header, Body, SelectionExport}