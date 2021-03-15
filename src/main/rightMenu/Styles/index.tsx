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

const arrayOfStyles = ['btn', 'btn-outline', 'btn-outline-filled', 'border', 'btn-warning', 'btn-danger', 'container',
                       'btn-info', 'btn-secondary', 'btn-primary', 'btn-outline-warning', 'btn-outline-danger',
                       'btn-outline-info']

const sortElements = (array: Array<string>, text: string) => {
    let arr = []
    if(text === ''){
        for(let i:number= 0; i < array.length; i++){
            arr.push(
                <StyleClass>
                    <StyleClassName>{array[i]}</StyleClassName>
                    <StyleClassBtnPlus>+</StyleClassBtnPlus>
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
                    <StyleClassBtnPlus>+</StyleClassBtnPlus>
                </StyleClassGreen>
            )
        }
        for(let i:number= 0; i < unfoundedElem.length; i++){
            arr.push(
                <StyleClassRed>
                    <StyleClassName>{unfoundedElem[i]}</StyleClassName>
                    <StyleClassBtnPlus>+</StyleClassBtnPlus>
                </StyleClassRed>
            )
        }
    }
    return arr
}

const createElemList = (array: Array<string>) => {
    return [
        <StyleClass>
            <StyleClassName>btn</StyleClassName>
            <StyleClassBtnPlus>+</StyleClassBtnPlus>
        </StyleClass>,
        <StyleClass>
            <StyleClassName>btn-outline</StyleClassName>
            <StyleClassBtnPlus>+</StyleClassBtnPlus>
        </StyleClass>,
        <StyleClass>
            <StyleClassName>btn-outline-filled</StyleClassName>
            <StyleClassBtnPlus>+</StyleClassBtnPlus>
        </StyleClass>,
        <StyleClass>
            <StyleClassName>border</StyleClassName>
            <StyleClassBtnPlus>+</StyleClassBtnPlus>
        </StyleClass>,
        <StyleClass>
            <StyleClassName>btn-warning</StyleClassName>
            <StyleClassBtnPlus>+</StyleClassBtnPlus>
        </StyleClass>,
        <StyleClass>
            <StyleClassName>btn-danger</StyleClassName>
            <StyleClassBtnPlus>+</StyleClassBtnPlus>
        </StyleClass>,
        ,
        <StyleClass>
            <StyleClassName>btn-danger</StyleClassName>
            <StyleClassBtnPlus>+</StyleClassBtnPlus>
        </StyleClass>
        ,
        <StyleClass>
            <StyleClassName>btn-danger</StyleClassName>
            <StyleClassBtnPlus>+</StyleClassBtnPlus>
        </StyleClass>
        ,
        <CreateStyleClass>Create style</CreateStyleClass>
    ]
}

class Styles extends Component<any, any>{
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
    render(){
        return (
            <>
                <Field>
                    <FieldWithStyles>
                        <HeaderForField>Styles in element</HeaderForField>
                        <CustomInput placeholder={"Search"}
                                     value={this.state.searchInElement}
                                     onChange={(e)=>{this.setSearchInElement(e.target.value)}}/>
                        <FieldForListOfElements/>
                    </FieldWithStyles>
                    <FieldWithStyles>
                        <HeaderForField>Existing styles</HeaderForField>
                        <CustomInput placeholder={"Search"}
                                     value={this.state.searchExisted}
                                     onChange={(e)=>{this.setSearchExisted(e.target.value)}}/>
                        <FieldForListOfElements>
                            {sortElements(arrayOfStyles, this.state.searchExisted)}
                        </FieldForListOfElements>
                    </FieldWithStyles>
                </Field>
            </>
        )
    }
}

export default Styles;