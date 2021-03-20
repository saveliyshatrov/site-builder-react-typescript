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
  transition: all 0.3s ease;
`

class ModalChoice extends Component<Show, any>{
    constructor(props: Show) {
        super(props);
    }
    state = {
        YPos: this.props.YPos,
        XPos: this.props.XPos,
        nYPos: this.props.YPos
    }
    componentDidMount = () => {
        let elemH = document.getElementById('modalChoice')?.clientHeight
        elemH = elemH?elemH:0
        let wH = window.innerHeight;
        let YPos = this.props.YPos;
        if(YPos + elemH > wH){
            YPos -= (YPos+elemH-wH)
        }
        this.setState({
            nYPos: YPos
        })
    }
    componentDidUpdate(prevProps: Readonly<Show>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps !== this.props){
            this.componentDidMount()
        }
    }

    render(){
        return (
            <DivModal showModal={this.props.showModal} XPos={this.props.XPos} YPos={this.state.nYPos} id={"modalChoice"}>
                {this.props.children}
            </DivModal>
        )
    }
}

export default ModalChoice;