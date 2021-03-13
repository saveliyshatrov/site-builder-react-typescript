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
  min-height: 80px;
  border: 1px solid #545454;
`

type CardProp = {
    elemID: number,
    insertInfo: any,
    info: string | undefined
}

//This is text about elephants - *{text="[wiki]", url="https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5", decoration="N"}
//This is text about dogs - *{text="[wiki]", url="some url", decoration="N"}

// --text-- = <s>text</s>
// __text__ = <u>text</u>
// ***text*** = <b><i>text</i></b>
// **text** = <b>text</b>
// *text* = <i>text</i>
// [text, url, decoration, color] = <a href="url" style="text-decoration: none; color: red;">text</a>

class TextCard extends Component<any, any>{
    constructor(props: CardProp) {
        super(props);
    }
    state = {
        text: this.props.info?this.props.info:''
    }
    executeValueFromAttribute = (attr: string, text: string, reg: RegExp) => {
        let arraySplitText = text.split(',')
        for(let i = 0; i < arraySplitText.length; i++){
            if(arraySplitText[i].includes(attr)){
                return arraySplitText[i].replace('{','')
                                             .replace('}','')
                                             .replace(attr,'')
                                             .replace(/\s*=\s*/,'')
                                             .replaceAll('"','').trim();
            }
        }
        return ''
    }
    convertString = (text: string):string => {
        let arrayYes = ['yes', 'true', '1', 'y']
        let regex: RegExp = /{\s*text\s*=\s*"\s*[\w|\S|\W]+\s*"\s*,\s*url\s*=\s*"\s*[\w|\S|\W]+\s*"\s*,\s*decoration\s*=\s*"\s*[\w|\S|\W]+\s*"\s*}/gm
        let regexForText: RegExp = /\s*text\s*=\s*"\s*[\w|\S|\W]+\s*"\s*,\s*/gm
        let regexForUrl: RegExp = /\s*url\s*=\s*"\s*[\w|\S|\W]+\s*"\s*/gm
        let regexForDecoration: RegExp = /\s*decoration\s*=\s*"\s*[\w|\S|\W]+\s*"/gm
        if(text.match(regex)){
            let arrayOfText = text.split('*');
            if (arrayOfText) {
                for (let i = 0; i < arrayOfText.length; i++) {
                    if(arrayOfText[i].match(regex)){
                        let textExecuted = this.executeValueFromAttribute('text', arrayOfText[i], regexForText);
                        let urlExecuted = this.executeValueFromAttribute('url', arrayOfText[i].replace(textExecuted, ''), regexForUrl);
                        let decorationExecuted = this.executeValueFromAttribute('decoration', arrayOfText[i].replace(urlExecuted, ''), regexForDecoration);
                        // console.log('textExecuted --', textExecuted)
                        // console.log('urlExecuted --', urlExecuted)
                        // console.log('decorationExecuted --', decorationExecuted)
                        if(arrayYes.includes(decorationExecuted.toLowerCase())){
                            text = text.replace('*' + arrayOfText[i], arrayOfText[i].replace(regex, `<a href="${urlExecuted}">${textExecuted}</a>`))
                        } else {
                            text = text.replace('*' + arrayOfText[i], arrayOfText[i].replace(regex, `<a href="${urlExecuted}" style="text-decoration: none">${textExecuted}</a>`))
                        }
                        console.log('text --', text)
                    }
                }
            }
        }
        return text
    }
    changeText = (str: string) => {
        this.setState({
            text: str
        })
    }
    render(){
        return (
            <DivMargin>
                <CardHeader>Text</CardHeader>
                <DivOptions>
                    <TextArea placeholder={"Enter text"}
                              value={this.state.text}
                              onChange={
                                  (e)=>{
                                      this.props.insertInfo(this.props.elemID, 'insertText', this.convertString(e.target.value));
                                      this.changeText(e.target.value)
                                  }
                              }/>
                </DivOptions>
            </DivMargin>
        )
    }
}

export default TextCard;