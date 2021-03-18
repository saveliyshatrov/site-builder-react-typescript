import React, {Component} from "react";
import styled from "styled-components";

const Field = styled.div`
  height: calc(100% - 10px);
  box-sizing: border-box;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`

const FieldWithStyles = styled.div`
  background-color: #1B1B1B;
  border-radius: 10px;
  height: calc(50% - 5px);
  width: 100%;
  box-sizing: border-box;
  padding: 5px 5px 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderForField = styled.div`
  height: 30px;
  width: 100%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 13px;
`

const CustomInput = styled.input`
  margin-left: 5px;
  width: calc(100% - 5px);
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #404040;
  background-color: transparent;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  transition: all 0.2s ease;
  color: lightgray;
  outline: none;
  :hover{
    border: 1px solid #545454;
  }
  :focus{
    border: 1px solid white;
    color: white;
  }
`

const FieldForListOfElements = styled.div`
  width: 100%;
  margin-top: 5px;
  height: calc(100% - 70px);
  overflow-y: scroll;
`

const StyleClass = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  width: fit-content;
  padding: 5px 10px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  border: 1px solid gray;
  border-radius: 3px;
`

const StyleClassName = styled.div`
  color: white;
  font-size: 13px;
`

const CreateStyleClass = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  width: fit-content;
  padding: 5px 10px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  font-size: 13px;
`

const StyleClassGreen = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  width: fit-content;
  padding: 5px 10px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid green;
  color: green;
`

const StyleClassRed = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  width: fit-content;
  padding: 5px 10px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid darkred;
  color: darkred;
`

const StyleClassBtnPlus = styled.div`
  font-size: 13px;
  height: 13px;
  width: 13px;
  padding-bottom: 2.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-sizing: border-box;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 3px;
  margin-left: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover{
    border: 1px solid lightgray;
    color: lightgray;
  }
`

const arrayOfStyles = ['btn', 'btn-lg', 'btn-md', 'btn-xs', 'active', 'disabled',
                       'btn-warning', 'btn-danger', 'btn-info', 'btn-secondary', 'btn-primary', 'btn-link', 'btn-success', 'close',
                       'btn-outline-warning', "btn-outline-danger", "btn-outline-info", "btn-outline-secondary", 'btn-outline-primary', 'btn-outline-success',
                       'bg-warning', 'bg-danger', 'bg-info', 'bg-secondary', 'bg-primary', 'bg-success', 'bg-light', 'bg-dark', 'bg-white','btn-default',
                       'btn-block', 'btn-group', 'btn-group-justified', 'btn-group-vertical',
                       'breadcrumb',
                       'col-md-1', 'col-md-2', 'col-md-3', 'col-md-4', 'col-md-5', 'col-md-6', 'col-md-7', 'col-md-8', 'col-md-9', 'col-md-10', 'col-md-11', 'col-md-12',
                       'container', 'container-fluid',
                       'text-capitalize', 'text-uppercase', 'text-lowercase', 'text-left', 'text-center', 'text-right', 'text-hide', 'text-muted', 'text-nowrap',
                       'text-warning', 'text-danger', 'text-info', 'text-primary', 'text-success', 'text-light', 'text-white', 'text-dark',
                       'thumbnail', 'form-control', 'checkbox',
                       'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5',
                       'mr-1', 'mr-2', 'mr-3', 'mr-4', 'mr-5',
                       'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5',
                       'ml-1', 'ml-2', 'ml-3', 'ml-4', 'ml-5',
                       'pt-1', 'pt-2', 'pt-3', 'pt-4', 'pt-5',
                       'pr-1', 'pr-2', 'pr-3', 'pr-4', 'pr-5',
                       'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5',
                       'pl-1', 'pl-2', 'pl-3', 'pl-4', 'pl-5',
                       'border', 'border-top', 'border-right', 'border-bottom', 'border-left',
                       'border-top-0', 'border-right-0', 'border-bottom-0', 'border-left-0',
                       'border-primary', 'border-secondary', 'border-success', 'border-danger', 'border-warning', 'border-info', 'border-light', 'border-dark', 'border-white',
                       'rounded', 'rounded-top', 'rounded-right', 'rounded-bottom', 'rounded-left', 'rounded-circle', 'rounded-0',
                       'navbar', 'navbar-brand', 'img-fluid',
                       'd-flex', 'justify-content-start', 'justify-content-end', 'justify-content-center', 'justify-content-between', 'justify-content-around',
                       'align-items-start', 'align-items-center', 'align-items-end']


type PropsElemForCSS = {
    elem: string,
    elemID: number,
    objInfo: {
        classList: Array<string>
    }
    insertInfo: any
}

class Styles extends Component<PropsElemForCSS, any>{
    constructor(props: PropsElemForCSS) {
        super(props);
    }
    state = {
        searchInElement: '',
        searchExisted: ''
    }
    setSearchInElement = (text: string) => {
        this.setState({
            searchInElement: text
        })
    }
    setSearchExisted = (text: string) => {
        this.setState({
            searchExisted: text
        })
    }
    sortElements = (array: Array<string>, text: string, command: string, symbol:string) => {
        let arr = []
        if(text === ''){
            for(let i:number= 0; i < array.length; i++){
                arr.push(
                    <StyleClass>
                        <StyleClassName>{array[i]}</StyleClassName>
                        <StyleClassBtnPlus onClick={()=>this.props.insertInfo(this.props.elemID,command,array[i])}>{symbol}</StyleClassBtnPlus>
                    </StyleClass>
                )
            }
        } else {
            let foundedElem = array.filter(elem => elem.toLowerCase().includes(text.toLowerCase()))
            let unfoundedElem = array.filter(elem => !elem.toLowerCase().includes(text.toLowerCase()))
            for(let i:number= 0; i < foundedElem.length; i++){
                arr.push(
                    <StyleClassGreen>
                        <StyleClassName>{foundedElem[i]}</StyleClassName>
                        <StyleClassBtnPlus onClick={()=>this.props.insertInfo(this.props.elemID,command,foundedElem[i])}>{symbol}</StyleClassBtnPlus>
                    </StyleClassGreen>
                )
            }
            for(let i:number= 0; i < unfoundedElem.length; i++){
                arr.push(
                    <StyleClassRed>
                        <StyleClassName>{unfoundedElem[i]}</StyleClassName>
                        <StyleClassBtnPlus onClick={()=>this.props.insertInfo(this.props.elemID,command,unfoundedElem[i])}>{symbol}</StyleClassBtnPlus>
                    </StyleClassRed>
                )
            }
        }
        return arr
    }
    render(){
        return (
            <>
                <Field>
                    <FieldWithStyles>
                        <HeaderForField>Styles in element</HeaderForField>
                        <CustomInput placeholder={"Search"}
                                     value={this.state.searchInElement}
                                     onChange={(e)=>{this.setSearchInElement(e.target.value)}}/>
                        <FieldForListOfElements>
                            {this.sortElements(this.props.objInfo.classList.filter(elem => elem!=='checkElem'), this.state.searchInElement, 'removeClass', '-')}
                        </FieldForListOfElements>
                    </FieldWithStyles>
                    <FieldWithStyles>
                        <HeaderForField>Existing styles</HeaderForField>
                        <CustomInput placeholder={"Search"}
                                     value={this.state.searchExisted}
                                     onChange={(e)=>{this.setSearchExisted(e.target.value)}}/>
                        <FieldForListOfElements>
                            {this.sortElements(arrayOfStyles, this.state.searchExisted, 'insertClasses', '+')}
                        </FieldForListOfElements>
                    </FieldWithStyles>
                </Field>
            </>
        )
    }
}

export default Styles;