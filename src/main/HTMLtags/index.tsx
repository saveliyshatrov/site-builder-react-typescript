import React from "react";
import styled from "styled-components";
import './style.css'

const arrayOfTags: Array<string> = ['input', 'div', 'span', 'img', 'header', 'main', 'footer', 'Заголовок', 'p', 'hr', 'a'];
//У Заголовка должен быть выбор размеров после выбора - h1-h6
//input type
//img src

let counter = 0
const geyUniqKey = () => {
    counter += 1
    return `${counter.toString()}choice-elem`
}

const HTMLTags = (Templates: any, searchText: string) => {
    let arrayOfElements: Array<JSX.Element> = [];
    let arrayOfTemplateNames:Array<string> = Object.keys(Templates);
    arrayOfTemplateNames = arrayOfTemplateNames.filter(elem => elem!='Page')
    if(searchText === ''){
        for(let i = 0; i < arrayOfTemplateNames.length; i++){
            arrayOfElements.push(<div key={geyUniqKey()} className={"choice-elem"}>{Templates[arrayOfTemplateNames[i]].name}</div>)
        }
    } else {
        let arrayWithSearchTextInside = arrayOfTemplateNames.filter(elem => elem.toLowerCase().includes(searchText.toLowerCase()))
        let arrayWithNoSearchTextInside = arrayOfTemplateNames.filter(elem => !elem.toLowerCase().includes(searchText.toLowerCase()))
        for(let i = 0; i < arrayWithSearchTextInside.length; i++){
            arrayOfElements.push(<div key={geyUniqKey()} className={"choice-elem-green"}>{Templates[arrayWithSearchTextInside[i]].name}</div>)
        }
        for(let i = 0; i < arrayWithNoSearchTextInside.length; i++){
            arrayOfElements.push(<div key={geyUniqKey()} className={"choice-elem-red"}>{Templates[arrayWithNoSearchTextInside[i]].name}</div>)
        }
    }
    return arrayOfElements;
}

export default HTMLTags;