import React, {Component} from "react";
import styled from 'styled-components';
import './style.css'

type Show = {
    showModal: boolean
    XPos: number
    YPos: number
}

const DivModal = styled.div<Show>`
  position: absolute;
  padding: 5px;
  background-color: #606060;
  box-sizing: border-box;
  border-radius: 5px;
  top: ${props => props.YPos}px;
  left: ${props => props.XPos}px;
  display: ${props => props.showModal ? 'flex' : 'none'};
  flex-direction: column;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  transition: all 0.2s ease;
`

class ModalChoice extends Component<Show, any>{
    constructor(props: Show) {
        super(props);
    }
    render(){
        return (
            <DivModal showModal={this.props.showModal} XPos={this.props.XPos} YPos={this.props.YPos}>
                {this.props.children}
            </DivModal>
        )
    }
}

export default ModalChoice;