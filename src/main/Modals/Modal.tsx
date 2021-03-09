import React, {Component} from "react";
import styled from "styled-components";

type Show = {
    show: boolean
}

const Frame = styled.div<Show>`
  position: absolute;
  width: 304px;
  height: 262px;
  border: none;
  border-radius: 9px;
  left: calc(50% - 152px);
  top: calc(50% - 131px);
  background-color: #1B1B1B;
  color: white;
  display: ${props => props.show?'flex': 'none'};
  flex-direction: column;
  box-sizing: border-box;
  padding: 16px;
  z-index: 9999;
`

const Logo = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  color: white;
`

const Main = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: white;
`

const ButtonRow = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

type MainBtn = {
    mainbtn: any
}

const Button = styled.button<MainBtn>`
  border: none;
  width: 132px;
  height: 28px;
  background-color: ${props => props.mainbtn? '#D82C1B': '#545454'};
  color: #fff;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  outline: none;
`

type Props = {
    header: string
    main: string
    func: any
    show: boolean
}

class Modal extends Component<Props, any> {
    render() {
        return (
            <Frame show={this.props.show}>
                <Logo>Alert</Logo>
                <Header>{this.props.header}</Header>
                <Main>{this.props.main}</Main>
                <ButtonRow>
                    <Button mainbtn={true} onClick={() => this.props.func()}>Cancel</Button>
                    <Button mainbtn={false} onClick={() => this.props.func()}>Okay</Button>
                </ButtonRow>
            </Frame>
        )
    }
}

export default Modal;