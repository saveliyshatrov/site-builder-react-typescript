import React, {Component} from "react";
import styled from "styled-components";

type hidden = {
    hidden: boolean
}

const BodyModal = styled.div<hidden>`
  height: 150px;
  width: 636px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1B1B1B;
  border-radius: 6px;
  box-sizing: border-box;
  display: ${props => props.hidden?"flex":"none"};
  flex-direction: column;
  box-shadow: 30px 60px 60px rgba(99,99,99, 0.5);
  z-index: 9999;
`

const HeaderModal = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const ElemModal = styled.div`
  height: 50px;
  width: 100%;
  padding: 0px 9px 10px 9px;
  box-sizing: border-box;
`

const ElemModal2 = styled.div`
  height: 50px;
  width: 100%;
  padding: 0px 9px 10px 9px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Input = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #545454;
  background-color: transparent;
  outline: none;
  box-sizing: border-box;
  padding-left: 9px;
  color: white;
`

const Button = styled.button`
  height: 100%;
  width: calc(50% - 4.5px);
  border-radius: 6px;
  border: none;
  background-color: #545454;
  outline: none;
  color: white;
`

type PropsModal = {
    hidden: boolean,
    funcClose: any,
    funcSave: any,
    paramLastClickedIdElem: any,
    command: string,
    template: any
}

type ModalTemplateNameState = {
    text: string,
    headerText: string,
    start: boolean
}

class ModalTemplateName extends Component<PropsModal, any> {
    constructor(props:PropsModal) {
        super(props);
    }
    state: ModalTemplateNameState = {
        text: '',
        headerText: 'Template name',
        start: false
    }
    checkNameTemplate = () => {
        if(this.props.template[this.state.text] !== undefined){
            this.changeHeaderText('Wrong name of Template')
            this.setState({start: false})
        } else {
            this.changeHeaderText('Template name')
            this.setState({start: true})
        }
    }
    changeHeaderText = (text: string) => {
        this.setState({headerText: text})
    }
    changeText(e:any){
        this.state.text = e.target.value;
    }
    render(){
        return (
            <BodyModal hidden={this.props.hidden}>
                <HeaderModal>{this.state.headerText}</HeaderModal>
                <ElemModal>
                    <Input placeholder={"Enter template name"} onChange={(e)=>{this.state.text = e.target.value; this.checkNameTemplate()}}/>
                </ElemModal>
                <ElemModal2>
                    <Button onClick={this.props.funcClose}>Cancel</Button>
                    <Button onClick={()=>{
                        if(this.state.start){
                            this.props.funcSave(this.props.paramLastClickedIdElem, this.props.command, this.state.text); this.props.funcClose()
                        }
                    }}>Save template</Button>
                </ElemModal2>
            </BodyModal>
        )
    }
}

export default ModalTemplateName;