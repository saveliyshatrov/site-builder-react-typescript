import React from "react";
import styled from "styled-components";
import './style.css'
import Templates from "../templates";

const arrayOfTags: Array<string> = ['input', 'div', 'span', 'img', 'header', 'main', 'footer', 'Заголовок', 'p', 'hr', 'a'];
//У Заголовка должен быть выбор размеров после выбора - h1-h6
//input type
//img src


const HTMLTags = (Templates: any) => {
    let arrayOfElements: Array<JSX.Element> = [];
    const arrayOfTemplateNames:Array<string> = Object.keys(Templates);
    for(let i = 0; i < arrayOfTemplateNames.length; i++){
        arrayOfElements.push(<div className={"choice-elem"}>{Templates[arrayOfTemplateNames[i]].name}</div>)
    }
    return arrayOfElements;
}

export default HTMLTags;