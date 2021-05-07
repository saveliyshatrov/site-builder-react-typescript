import React, {Component} from "react";
import './style.css'
import LeftMenu from "./leftMenu";
import DevicePreview from "./devicePreview";
import RightMenu from "./rightMenu";
import ModalChoice from "./modalChoice";
import HTMLTags from "./HTMLtags";
import {Modal, ModalExport, ModalTemplateName} from './Modals';
import Templates from "./templates";
import styleTemplates from "./styles";
// import template from "./templates"


type treeOfTree = {
    name: string,
    tagName: string
    classList: Array<string>
    children: Array<treeOfTree>
    text: string | undefined
    placeholder: string | undefined
    type: string | undefined
    src: string | undefined
    For: string | undefined
    ID: string | undefined

    hide: boolean,
    key: number,
    id: string,
}

interface template {
    name: string
    tagName: string
    classList: Array<string>
    text: string | undefined
    children: Array<template>
    placeholder: string | undefined
    type: string | undefined
    src: string | undefined
    For: string | undefined
    ID: string | undefined
}

let _id_ = 0;
function createUniqId():string{
    _id_ = _id_ + 1;
    return _id_.toString();
}
function createUniqIdInt():number{
    _id_ = _id_ + 1;
    return _id_;
}

let tree: treeOfTree = {
    name: 'Page',
    tagName: 'body',
    classList: ['margin-0'],
    text: '',
    key: createUniqIdInt(),
    id: createUniqId(),
    hide: false,
    children: [
        {
            classList: [],
            text: 'im Header',
            name: 'Header',
            tagName: 'header',
            key: createUniqIdInt(),
            children: [],
            hide: false,
            id: createUniqId(),
            placeholder: undefined,
            type: undefined,
            src: undefined,
            For: undefined,
            ID: undefined
        },
        {
            classList: [],
            text: 'im Main',
            name: 'Main',
            tagName: 'main',
            key: createUniqIdInt(),
            id: createUniqId(),
            hide: false,
            children: [],
            placeholder: undefined,
            type: undefined,
            src: undefined,
            For: undefined,
            ID: undefined
        },
        {
            classList: [],
            text: 'im Footer',
            name: 'Footer',
            tagName: 'footer',
            children: [],
            hide: false,
            key: createUniqIdInt(),
            id: createUniqId(),
            placeholder: undefined,
            type: undefined,
            src: undefined,
            For: undefined,
            ID: undefined
        }
    ],
    placeholder: undefined,
    type: undefined,
    src: undefined,
    For: undefined,
    ID: undefined
}

const createHTMLPage = () => {
    const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
        input !== null && input.tagName === 'IFRAME';
    let iframe = document.getElementById("iframe");
    if (isIFrame(iframe) && iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(constructPage());
        iframe.contentWindow.document.close()
    }
}

const createTree = (tree: treeOfTree) => {
    return (
        <div className={"Tree"} key={'tree'}>
            {generateTree(tree)}
        </div>
    );
}

const generateHTMLTree = (Tree: treeOfTree):string => {
    if(Tree.children.length === 0){
        if(Tree.tagName === 'input'){
            return `<${Tree.tagName} 
                     ${Tree.classList.length===0?'':`class="${Tree.classList.join(' ')}"`} 
                     ${Tree.ID?`id="${Tree.ID}"`:''}
                     ${Tree.placeholder?`placeholder="${Tree.placeholder}"`:''}
                     ${Tree.type?`type="${Tree.type}"`:''}/>`
        }
        if(Tree.tagName === 'img'){
            return `<${Tree.tagName} 
                     ${Tree.classList.length===0?'':`class="${Tree.classList.join(' ')}"`} 
                     ${Tree.src?`src="${Tree.src}"`:''}/>`
        }
        if(Tree.tagName === 'hr'){
            return `<${Tree.tagName} 
                     ${Tree.classList.length===0?'':`class="${Tree.classList.join(' ')}"`}/>`
        }
        else{
            return `<${Tree.tagName} 
                     ${Tree.classList.length===0?'':`class="${Tree.classList.join(' ')}"`}
                     ${Tree.For?`for="${Tree.For}"`:''}
                     >${Tree.text}</${Tree.tagName}>`
        }
    } else {
        let partTree = `<${Tree.tagName}  
                         ${Tree.classList.length===0?'':`class="${Tree.classList.join(' ')}"`} 
                         ${Tree.For?`for="${Tree.For}"`:''}>`
        for(let child in Tree.children){
            partTree += generateHTMLTree(Tree.children[child])
        }
        partTree += `</${Tree.tagName}>`
        return partTree
    }

}
const generateCSS = (Styles: any) => {
    let allStyles = Object.keys(Styles)
    //console.log(allStyles)
    let StyleStringAll = ''
    for(let i: number = 0; i < allStyles.length; i++){
        StyleStringAll+=styleAll(allStyles[i], Styles)
    }
    //let stringStyles = allStyles.map(elem => convertStyleToString(elem))
    //console.log(allStyles)
    return StyleStringAll
}

const convertStyleObjectToString = (StyleName: string, Styles: any):string => {
    let beginStyle = `.${StyleName}{`;
    let endStyle = '}';
    return ''
}

const styleAll = (StyleName: string, Styles: any):string => {
    let beginStyle = `.${StyleName}{`;
    let body = styleAllNone(StyleName, Styles);
    let endStyle = '}';

    let beginStyleHover = `.${StyleName}:hover{`;
    let bodyHover = styleAllHover(StyleName, Styles);
    let endStyleHover = '}'

    let none = beginStyle + body + endStyle;
    let hover = beginStyleHover + bodyHover + endStyleHover;
    return none + hover;
}
const styleMobile = () => {}
const styleTablet = () => {}
const styleDesktop = () => {}

const styleAllHover = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleAllHoverWidth(StyleName, Styles);
    style+=styleAllHoverHeight(StyleName, Styles);
    style+=styleAllHoverBackground(StyleName, Styles);
    style+=styleAllHoverBoxShadow(StyleName, Styles);
    style+=styleAllHoverFont(StyleName, Styles);
    style+=styleAllHoverBorder(StyleName, Styles);
    style+=styleAllHoverBorderRadius(StyleName, Styles);

    return style;
}

const styleAllHoverWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.width?.hover === undefined?'':`width: ${Styles[StyleName].all.width.hover};`
}
const styleAllHoverHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.height?.hover === undefined?'':`height: ${Styles[StyleName].all.height.hover};`
}
const styleAllHoverBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.backgroundColor?.hover === undefined?'':`background: ${Styles[StyleName].all.backgroundColor.hover.length > 1? `linear-gradient(${Styles[StyleName].all.backgroundColor.hover[0]}deg, ${Styles[StyleName].all.backgroundColor.hover[1]},${Styles[StyleName].all.backgroundColor.hover[2]})`:Styles[StyleName].all.backgroundColor.hover[0]};`
}
const styleAllHoverBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.boxShadow?.hover === undefined?'':`box-shadow: ${Styles[StyleName].all.boxShadow.hover[0]+' '+
    Styles[StyleName].all.boxShadow.hover[1]+' '+
    Styles[StyleName].all.boxShadow.hover[2]+' '+
    Styles[StyleName].all.boxShadow.hover[3]+' '+
    Styles[StyleName].all.boxShadow.hover[4]};`
}
const styleAllHoverFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.font?.hover === undefined?''
        :
        `
        ${Styles[StyleName]?.all?.font?.hover.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.all?.font?.hover.fontFamily};`}
        ${Styles[StyleName]?.all?.font?.hover.size === undefined?'':`font-size:${Styles[StyleName]?.all?.font?.hover.size+Styles[StyleName]?.all?.font?.hover.typeSize};`}
        ${Styles[StyleName]?.all?.font?.hover.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.all?.font?.hover.fontWeight};`}
        ${Styles[StyleName]?.all?.font?.hover.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.all?.font?.hover.fontFamily};`}
        ${Styles[StyleName]?.all?.font?.hover.color === undefined?'':`color:${Styles[StyleName]?.all?.font?.hover.color};`}
        `
}
const styleAllHoverBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.all?.border === undefined || Styles[StyleName]?.all?.borderColor?.hover === undefined){
        return ''
    } else {
        if(Styles[StyleName].all.border.length === 1){
            if(getAllNoneCountOfColoredBorders(StyleName, Styles) === 1){
                return `border: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.hover[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.hover[0]};
                border-right: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.hover[1]};
                border-bottom: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.hover[2]};
                border-left: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.hover[3]};
                `
            }
        } else {
            if(getAllNoneCountOfColoredBorders(StyleName, Styles) === 1){
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.none[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.none[2]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.none[3]};
                `
            }
        }
    }
}
const styleAllHoverBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.borderRadius?.hover === undefined? '': `
        border-radius: ${Styles[StyleName].all.borderRadius.hover.length === 1?`${Styles[StyleName].all.borderRadius.hover[0]}`
        :
        `
        ${Styles[StyleName].all.borderRadius.hover[0]} 
        ${Styles[StyleName].all.borderRadius.hover[3]} 
        ${Styles[StyleName].all.borderRadius.hover[1]} 
        ${Styles[StyleName].all.borderRadius.hover[2]}`};
    `
}

const styleAllNone = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleAllNoneWidth(StyleName, Styles);
    style+=styleAllNoneHeight(StyleName, Styles);
    style+=styleAllNoneBackground(StyleName, Styles);
    style+=styleAllMargin(StyleName, Styles);
    style+=styleAllPadding(StyleName, Styles);
    style+=styleAllNoneBoxShadow(StyleName, Styles);
    style+=styleAllNoneFont(StyleName, Styles);
    style+=styleAllNoneBorder(StyleName, Styles);
    style+=styleAllNoneBorderRadius(StyleName, Styles);
    style+=styleAllFlex(StyleName, Styles);
    style+=styleAllPosition(StyleName, Styles);
    style+=styleAllTransition(StyleName, Styles);
    return style;
}

const styleAllNoneWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.width?.none === undefined?'':`width: ${Styles[StyleName].all.width.none};`
}
const styleAllNoneHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.height?.none === undefined?'':`height: ${Styles[StyleName].all.height.none};`
}
const styleAllNoneBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.backgroundColor?.none === undefined?'':`background: ${Styles[StyleName].all.backgroundColor.none.length > 1? `linear-gradient(${Styles[StyleName].all.backgroundColor.none[0]}deg, ${Styles[StyleName].all.backgroundColor.none[1]},${Styles[StyleName].all.backgroundColor.none[2]})`:Styles[StyleName].all.backgroundColor.none[0]};`
}
const styleAllMargin = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.margin === undefined?'':`margin: ${Styles[StyleName].all.margin.length === 1?Styles[StyleName].all.margin[0]:Styles[StyleName].all.margin[0] + ' ' + 
                                                                                                                                                Styles[StyleName].all.margin[1] + ' ' +
                                                                                                                                                Styles[StyleName].all.margin[2] + ' ' + Styles[StyleName].all.margin[3]};`
}
const styleAllPadding = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.padding === undefined?'':`padding: ${Styles[StyleName].all.padding.length === 1?Styles[StyleName].all.padding[0]:Styles[StyleName].all.padding[0] + ' ' +
        Styles[StyleName].all.padding[1] + ' ' +
        Styles[StyleName].all.padding[2] + ' ' + Styles[StyleName].all.padding[3]};`
}
const styleAllNoneBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.boxShadow?.none === undefined?'':`box-shadow: ${Styles[StyleName].all.boxShadow.none[0]+' '+
                                                                             Styles[StyleName].all.boxShadow.none[1]+' '+
                                                                             Styles[StyleName].all.boxShadow.none[2]+' '+
                                                                             Styles[StyleName].all.boxShadow.none[3]+' '+
                                                                             Styles[StyleName].all.boxShadow.none[4]};`
}
const styleAllNoneFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.font?.none === undefined?''
        :
        `
        ${Styles[StyleName]?.all?.font?.none.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.all?.font?.none.fontFamily};`}
        ${Styles[StyleName]?.all?.font?.none.size === undefined?'':`font-size:${Styles[StyleName]?.all?.font?.none.size+Styles[StyleName]?.all?.font?.none.typeSize};`}
        ${Styles[StyleName]?.all?.font?.none.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.all?.font?.none.fontWeight};`}
        ${Styles[StyleName]?.all?.font?.none.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.all?.font?.none.fontFamily};`}
        ${Styles[StyleName]?.all?.font?.none.color === undefined?'':`color:${Styles[StyleName]?.all?.font?.none.color};`}
        `
}
const styleAllNoneBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.all?.border === undefined){
        return ''
    } else {
        if(Styles[StyleName].all.border.length === 1){
            if(getAllNoneCountOfColoredBorders(StyleName, Styles) === 1){
                return `border: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-right: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[2]};
                border-left: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[3]};
                `
            }
        } else {
            if(getAllNoneCountOfColoredBorders(StyleName, Styles) === 1){
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.none[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.none[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.none[2]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.none[3]};
                `
            }
        }
    }
}
const getAllNoneCountOfColoredBorders = (StyleName: string, Styles: any):number => {
    return Styles[StyleName].all.borderColor.none.length
}
const styleAllNoneBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.borderRadius?.none === undefined? '': `
        border-radius: ${Styles[StyleName].all.borderRadius.none.length === 1?`${Styles[StyleName].all.borderRadius.none[0]}`
        :
        `
        ${Styles[StyleName].all.borderRadius.none[0]} 
        ${Styles[StyleName].all.borderRadius.none[3]} 
        ${Styles[StyleName].all.borderRadius.none[1]} 
        ${Styles[StyleName].all.borderRadius.none[2]}`};
    `
}
const styleAllFlex = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.flex?.enable === undefined || Styles[StyleName]?.all?.flex?.enable === false?''
        :
        `
            display: flex;
            justify-content: ${Styles[StyleName].all.flex.justifyContent};
            flex-direction: ${Styles[StyleName].all.flex.flexDirection};
            align-items: ${Styles[StyleName].all.flex.alignItems};
        `
}
const styleAllPosition = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.position === undefined || Styles[StyleName]?.all?.position === [false, false, false, false]?''
        :
        `
        position: fixed;
        ${Styles[StyleName].all.position[0] === false? '': 'top:0;'}
        ${Styles[StyleName].all.position[1] === false? '': 'right:0;'}
        ${Styles[StyleName].all.position[2] === false? '': 'bottom:0;'}
        ${Styles[StyleName].all.position[3] === false? '': 'left:0;'}
        `
}
const styleAllTransition = (StyleName: string, Styles: any):string => {
    console.log(Styles[StyleName].all.transition, '--- transition')
    return Styles[StyleName]?.all?.transition === undefined?''
        :
        `
        transition: ${Styles[StyleName].all.transition}ms;
        `
}


const styleHover = () => {}
const styleActive = () => {}
const styleFocus = () => {}

const convertStyleToString = (elem: string) => {
    return Object.keys(styleTemplates[elem])
}
interface uiF {
    [key:string]:string
}

const UIF: uiF = {
    "Bootstrap": '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">',
    "Materialize":'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">'
}

let UIFName = ''

const constructPage = ():string => {
    return '<!DOCTYPE html> \n' +
        '<html lang="en"> \n' +
        '     <head> \n' +
        '         <meta charset="UTF-8"> \n' +
        '         <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n' +
        `         ${UIF[UIFName]?UIF[UIFName]:''}` +
        '         <link rel="stylesheet" href="style.css"> \n' +
        '            <title> \n' +
        `                ${tree.name}` + ' \n' +
        '            </title>  \n' +
        '     </head>  \n' +
        '    ' + generateHTMLTree(tree) + '\n' +
        `            <style>
                        *{
                            margin:0;
                            padding:0;
                            box-sizing: border-box;
                            word-wrap: break-word;
                        }
                        .checkElem{
                            animation: boxShadow 0.8s;
                        }
                        @keyframes boxShadow {
                            0%{
                                box-shadow: 0 0 0 2px red; 
                                border-radius: 3px;
                            }
                            100%{
                                box-shadow: 0 0 0 0 red; 
                            }
                        }` + `
                        ${generateCSS(styleTemplates)}
                     </style>` +
        '</html>';
        // '        ' + '<style>' + this.generateCSS(this.CSSArray) + '</style>' +'\n' +
}

const generateTree = (tree: treeOfTree, hide: boolean = false) => {
    if(tree.children.length === 0){
        return (
            <ul className={hide?"d-none": ""} key={createUniqIdInt()}>
                <li key={createUniqIdInt()}>
                    <div className={"tree-elem"}
                         key={tree.key}
                         id={tree.id}
                         onMouseMove={()=>{reCreatePathTree(parseInt(tree.id), 'insertClasses', 'checkElem')}}
                         onMouseOutCapture={()=>{reCreatePathTree(parseInt(tree.id), 'removeClass', 'checkElem')}}>{tree.name}</div>
                </li>
            </ul>
        )
    }
    if(tree.children.length !== 0){
        let array = []
        for (let i = 0; i < tree.children.length; i++){
            if(tree.hide){
                array.push(generateTree(tree.children[i], true));
            } else {
                array.push(generateTree(tree.children[i]));
            }
        }
        return (
            <ul className={hide?"d-none": ""} key={createUniqIdInt()}>
                <li key={createUniqIdInt()}>
                    <div className={tree.hide?"tree-elem-bb-1":"tree-elem"}
                         key={tree.key}
                         id={tree.id}
                         onMouseMove={()=>{reCreatePathTree(parseInt(tree.id), 'insertClasses', 'checkElem')}}
                         onMouseOutCapture={()=>{reCreatePathTree(parseInt(tree.id), 'removeClass', 'checkElem')}}>{tree.name}</div>
                    {array}
                </li>
            </ul>
        )
    }
}

const removeFromTree = (array: Array<treeOfTree>, index:number):Array<treeOfTree> => {
        if(index === 0){
            return array.slice(1,array.length)
        }
        if(index > 0 && index < array.length){
            return [...array.slice(0, index), ...array.slice(index+1, array.length)]
        }
        if(index === array.length){
            return array.slice(0, array.length-1)
        }
        return [];
}

const changeID = (elem: treeOfTree) => {
    let obj: treeOfTree = {
        name: elem.name,
        tagName: elem.tagName,
        classList: elem.classList,
        text: elem.text,
        hide: elem.hide,
        type: elem.type,
        ID: elem.ID,
        For: elem.For,
        key: createUniqIdInt(),
        id: createUniqId(),
        children: [],
        src: elem.src,
        placeholder: elem.placeholder
    }
    if(elem.children.length !== 0){
        for(let child in elem.children){
            obj.children.push(changeID(elem.children[child]))
        }
    }
    return obj
}

const insertElemToTree = (array: Array<treeOfTree>, elem:treeOfTree, index:number) => {
    return [...array.slice(0, index), elem,...array.slice(index, array.length)]
}

const createDuplicateOfElemInTree = (array: Array<treeOfTree>, index:number) =>{
    return [...array.slice(0, index), changeID(array[index]),...array.slice(index, array.length)]
}

const findElemById = (array: treeOfTree, id: string, command:string, elemName:string) => {
    if(array.id !== id){
        for(let child = 0; child < array.children.length; child++){
            let Elem:any = findElemById(array.children[child], id, command, elemName);
            if(Elem){
                if(command === 'getInfo'){
                    return Elem
                }
                if(command === 'remove'){
                    array.children = removeFromTree(array.children, child);
                }
                if(command === 'inside'){
                    array.children[child].children.push({
                        classList: Templates[elemName].classList,
                        text: Templates[elemName].text,
                        name: elemName,
                        tagName: Templates[elemName].tagName,
                        hide: false,
                        children: Templates[elemName].children.map(elem => convertTemplateToTreeOfTree(elem)),
                        key: createUniqIdInt(),
                        id: createUniqId(),
                        type: Templates[elemName].type,
                        ID: Templates[elemName].ID,
                        For: Templates[elemName].For,
                        placeholder: Templates[elemName].placeholder,
                        src: Templates[elemName].src
                    })
                }
                if(command === 'up'){
                    let obj = {
                        classList: Templates[elemName].classList,
                        text: Templates[elemName].text,
                        name: elemName,
                        tagName: Templates[elemName].tagName,
                        hide: false,
                        children: Templates[elemName].children.map(elem => convertTemplateToTreeOfTree(elem)),
                        key: createUniqIdInt(),
                        id: createUniqId(),
                        type: Templates[elemName].type,
                        ID: Templates[elemName].ID,
                        For: Templates[elemName].For,
                        placeholder: Templates[elemName].placeholder,
                        src: Templates[elemName].src
                    }
                    array.children = insertElemToTree(array.children, obj, child)
                    return undefined;
                }
                if(command === 'down'){
                    let obj = {
                        classList: Templates[elemName].classList,
                        text: Templates[elemName].text,
                        name: elemName,
                        tagName: Templates[elemName].tagName,
                        hide: false,
                        children: Templates[elemName].children.map(elem => convertTemplateToTreeOfTree(elem)),
                        key: createUniqIdInt(),
                        id: createUniqId(),
                        type: Templates[elemName].type,
                        ID: Templates[elemName].ID,
                        For: Templates[elemName].For,
                        placeholder: Templates[elemName].placeholder,
                        src: Templates[elemName].src
                    }
                    array.children = insertElemToTree(array.children, obj, child+1)
                    return undefined;
                }
                if(command === 'duplicate'){
                    array.children = createDuplicateOfElemInTree(array.children, child);
                    return undefined
                }
                if(command === 'hide'){
                    array.children[child].hide = !array.children[child].hide;
                }
                if(command === 'saveTemplate'){
                    if(array.children[child].children.length !== 0){
                        Templates[elemName] = {
                            name: elemName,
                            tagName: array.children[child].tagName,
                            classList: array.children[child].classList,
                            children: array.children[child].children.map(elem => createTemplateChild(elem)),
                            text: array.children[child].text,
                            src: array.children[child].src,
                            placeholder: array.children[child].placeholder,
                            ID: array.children[child].ID,
                            type: array.children[child].type,
                            For: array.children[child].For
                        }
                    }
                    else{
                        Templates[elemName] = {
                            name: elemName,
                            tagName: array.children[child].tagName,
                            classList: array.children[child].classList,
                            children: [],
                            type: array.children[child].type,
                            ID: array.children[child].ID,
                            placeholder: array.children[child].placeholder,
                            For: array.children[child].For,
                            text: array.children[child].text,
                            src: array.children[child].src
                        }
                    }
                }

            }
        }
    }
    if(array.id === id){
        if(command === 'insertText'){
            array.text = elemName
            createHTMLPage();
        }      //elemName as Text
        if(command === 'insertSrc'){
            array.src = elemName
            createHTMLPage();
        }       //elemName as Src
        if(command === 'getInfo'){
            return array
        }
        if(command === 'insertClasses'){
            array.classList = [...array.classList, ...(elemName.split('.').filter(elem => !array.classList.includes(elem)))]
            createHTMLPage();
        }   //elemName as string - class1.class2.class3
        if(command === 'removeClass'){
            array.classList = array.classList.filter(elem => elem!==elemName)
        } // elemName as Class to Replace
        if(command === 'insertType'){
            array.type = elemName
            createHTMLPage();
        }      //elemName as Type
        if(command === 'insertPlaceholder'){
            array.placeholder = elemName;
            createHTMLPage();
        }
        if(command === 'insertFor'){
            array.For = elemName;
            createHTMLPage();
        }
        if(command === 'insertID'){
            array.ID = elemName;
        }
        if(array.tagName.toLowerCase() === 'body'){
            if(command === 'inside'){
                array.children.push({
                    classList: Templates[elemName].classList,
                    text: Templates[elemName].text,
                    name: elemName,
                    tagName: Templates[elemName].tagName,
                    hide: false,
                    children: Templates[elemName].children.map(elem => convertTemplateToTreeOfTree(elem)),
                    key: createUniqIdInt(),
                    id: createUniqId(),
                    type: Templates[elemName].type,
                    ID: Templates[elemName].ID,
                    For: Templates[elemName].For,
                    placeholder: Templates[elemName].placeholder,
                    src: Templates[elemName].src
                })
            }
        }
        return true
    }
}

const convertTemplateToTreeOfTree = (obj: template): treeOfTree => {
    if(obj.children.length === 0){
        return {
            name: obj.name,
            tagName: obj.tagName,
            children: [],
            classList: obj.classList,
            text: obj.text,
            hide: false,
            For: obj.For,
            ID: obj.ID,
            type: obj.type,
            id: createUniqId(),
            key: createUniqIdInt(),
            placeholder: obj.placeholder,
            src: obj.src
        }
    }
    else return {
        name: obj.name,
        tagName: obj.tagName,
        children: obj.children.map(elem => convertTemplateToTreeOfTree(elem)),
        classList: obj.classList,
        text: obj.text,
        hide: false,
        For: obj.For,
        ID: obj.ID,
        id: createUniqId(),
        key: createUniqIdInt(),
        placeholder: obj.placeholder,
        src: obj.src,
        type: obj.type
    }
}

const createTemplateChild = (obj: treeOfTree):template => {
    return {
        name: obj.name,
        tagName: obj.tagName,
        classList: obj.classList,
        text: obj.text,
        children: obj.children.map(elem => createTemplateChild(elem)),
        placeholder: obj.placeholder,
        type: obj.type,
        src: obj.src,
        For: obj.For,
        ID: obj.ID
    };
}

const reCreatePathTree = (id: number, command:string, elemName:string) =>{
    if(command === 'getInfo'){
        return findElemById(tree, id.toString(), command, elemName);
    } else {
        findElemById(tree, id.toString(), command, elemName);
    }
}

class Main extends Component<any, any>{
    state = {
        showModal: false,
        x: 0,
        y: 0,
        lastClickedElement: '',
        lastClickedElementId: -1,
        showDeleteBtn: false,
        alert: false,
        danger: false,
        export: false,
        elementToAdd: '',
        chosenOption: '',
        showCss: false,
        duplicate: false,
        hide: true,
        addStyle: true,
        modalTemplateName: false,
        searchString: '',
        addToLayerUp: true,
        addToLayerDown: true,
        styles: false,
        tagChanges: false
    }
    changeSearchString = (text: string) => {
        this.setState({searchString: text});
    }
    setChosenOption = (text: string) => {
        this.setState({
            chosenOption: text
        })
    }
    showExport = () => {
        this.setState(()=>({export: true}))
    }
    hideExport = () => {
        this.setState(()=>({export: false}))
    }
    showAlert = () => {
        this.setState(()=>({alert: true}))
    }
    showCSS = () => {
        this.setState({
            showCss: true
        })
    }
    hideCSS = () => {
        this.setState({
            showCss: false
        })
    }
    hideStyles = () => {
        this.setState({
            styles: false
        })
    }
    hideTagChanges = () => {
        this.setState({
            tagChanges: false
        })
    }
    hideAlert = () => {
        this.setState(()=>({alert: false}))
    }
    setDanger(bool:boolean){
        this.setState({danger: bool})
    }
    showModalTemplateName = () => {
        this.setState({modalTemplateName: true})
    }
    closeModalTemplateName = () => {
        this.setState({modalTemplateName: false})
    }
    showStyles = () => {
        this.setState({
            styles: true
        })
    }
    // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    //     if(this.props !== prevProps){
    //         this.componentDidMount()
    //     }
    // }

    componentDidMount() {
        UIFName = this.props.uiFramework;
        const self = this;
        window.addEventListener('resize', function (){
            let elemR = document.getElementById('rightModalMenu')//.style.height = 1;//`${window.innerHeight - 120) * 0.9}px`
            if(elemR !== null) elemR.style.height = `${(window.innerHeight - 120) * 0.9}px`
            //leftModalMenu
            let elemL = document.getElementById('leftModalMenu')//.style.height = 1;//`${window.innerHeight - 120) * 0.9}px`
            if(elemL !== null) elemL.style.height = `${(window.innerHeight - 120) * 0.9}px`
        });
        document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            const clickX = event.clientX;
            const clickY = event.clientY;
            if((event.target as Element).className === 'tree-elem' || (event.target as Element).className === 'tree-elem-bb-1'){
                if(!['Page'].includes((event.target as Element).innerHTML)){
                    self.setState({
                        showDeleteBtn: true,
                        showDuplicate: true,
                        hide: true,
                        addToLayerUp: true,
                        addToLayerDown: true,
                        styles: false,
                        tagChanges: false,
                        showCss: false
                    })
                    //console.log('event.target -- ', (event.target as Element).getAttribute('id'))
                } else {
                    if(['Page'].includes((event.target as Element).innerHTML)){
                        self.setState({
                            showDeleteBtn: false,
                            showDuplicate: false,
                            hide: false,
                            addToLayerUp: false,
                            addToLayerDown: false,
                            styles: false,
                            tagChanges: false
                        })
                    } else {
                        self.setState({
                            showDeleteBtn: false,
                            showDuplicate: false,
                            hide: true,
                            styles: false,
                            tagChanges: false
                        })
                    }
                }
                self.setState({showModal: true,
                                     x: clickX,
                                     y: clickY,
                                     lastClickedElement: (event.target as Element).innerHTML,
                                     lastClickedElementId: (event.target as Element).getAttribute('id')});
                //console.log('last clicked element ---', self.state.lastClickedElement)
                //console.log('last clicked element id ---', self.state.lastClickedElementId)
                // console.log('event.target --', self.state.lastClickedElement)
                // console.log('id event.target --', self.state.lastClickedElementId)
                // console.log(clickX, clickY);
                // console.log(self.state.lastClickedElement)
            }
        });
        document.addEventListener('click', function (event) {
            event.preventDefault();
            self.setState({showModal: false, x: 0, y: 0});
            if((event.target as Element).classList.toString().includes('choice-elem')){
                self.setState({
                    elementToAdd: (event.target as Element).innerHTML
                });
            }
            if((event.target as Element).classList.toString().includes('choice-elem') && self.state.chosenOption !== '') {
                console.log(self.state.chosenOption, '---', self.state.elementToAdd);
                reCreatePathTree(self.state.lastClickedElementId, self.state.chosenOption, self.state.elementToAdd)
                self.setState({chosenOption:''})
                self.setState({elementToAdd:''})
            }
            if((event.target as Element).className === 'tree-elem' || (event.target as Element).className === 'tree-elem-bb-1'){
                self.setState({
                    showCss: false,
                    styles: false
                })
                self.setState({
                    tagChanges: true,
                    lastClickedElement: (event.target as Element).innerHTML,
                    lastClickedElementId: (event.target as Element).getAttribute('id')
                });
            }
            if((event.target as Element).className === 'btnDownload'){
                if(self.state.showCss){
                    self.setState({
                        showCss: false,
                        styles: true,
                        tagChanges: false
                    });
                } else {
                    self.setState({
                        showCss: false,
                        styles: false,
                        tagChanges: false
                    });
                }
            }
            //создание страницы;
            createHTMLPage();
            // //ЛОГИКА РАБОТЫ ВПИХИВАНИЯ САЙТА В IFRAME -- НЕ ТРОГАТЬ
            // const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
            //     input !== null && input.tagName === 'IFRAME';
            // let iframe = document.getElementById("iframe");
            // if (isIFrame(iframe) && iframe.contentWindow) {
            //     iframe.contentWindow.document.open();
            //     iframe.contentWindow.document.write(constructPage());
            //     iframe.contentWindow.document.close()
            // }
        });
    }
    render(){
        return (
            <div className={"main"}>
                <ModalTemplateName hidden={this.state.modalTemplateName}
                                   funcClose={this.closeModalTemplateName}
                                   funcSave={reCreatePathTree}
                                   paramLastClickedIdElem={this.state.lastClickedElementId}
                                   command={'saveTemplate'}
                                   template={Templates}/>
                <Modal header={"Alert user"} main={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} func={this.hideAlert} show={this.state.alert}/>
                <ModalExport show={this.state.export} func={this.hideExport}/>
                {this.state.showModal?<ModalChoice showModal={this.state.showModal} XPos={this.state.x} YPos={this.state.y}>
                    {this.state.addToLayerUp ?
                        <button className={"btn-choice"} onClick={() => this.setChosenOption('up')}>Add layer
                            up</button> : ''}
                    <button className={"btn-choice"} onClick={() => this.setChosenOption('inside')}>Add inside</button>
                    {this.state.addToLayerDown ?
                        <button className={"btn-choice"} onClick={() => this.setChosenOption('down')}>Add layer
                            down</button> : ''}
                    <div className="hr"/>
                    <button className={"btn-choice"} onClick={() => {
                        this.showStyles()
                    }}>Styles
                    </button>
                    {this.state.showDeleteBtn ?
                        <button className={"btn-choice"} onClick={this.showModalTemplateName}>Save
                            Template</button> : ''}
                    {this.state.hide ? <div className="hr"/> : ''}
                    {this.state.hide ? <button className={"btn-choice"} onClick={() => {
                        reCreatePathTree(this.state.lastClickedElementId, 'hide', '')
                    }}>Hide/Show children</button> : ''}
                    {this.state.showDeleteBtn ? <button className={"btn-choice"} onClick={() => {
                        reCreatePathTree(this.state.lastClickedElementId, 'duplicate', '')
                    }}>Duplicate</button> : ''}
                    {this.state.showDeleteBtn ? <div className="hr"/> : ''}
                    {this.state.showDeleteBtn ? <button className={"btn-choice"} onClick={() => {
                        reCreatePathTree(this.state.lastClickedElementId, 'remove', '');
                        this.state.showCss = false
                    }}>Delete</button> : ''}
                </ModalChoice>:''}
                <LeftMenu tree={createTree(tree)}/>
                <DevicePreview>
                    {this.props.children}
                </DevicePreview>
                <RightMenu exportModal={this.showExport}
                           css={this.state.showCss}
                           showCssFunc={this.showCSS}
                           styles={this.state.styles}
                           hideStylesFunc={this.hideStyles}
                           tagChanges={this.state.tagChanges}
                           hideTagChanges={this.hideTagChanges}
                           elem={this.state.lastClickedElement}
                           elemID={this.state.lastClickedElementId}
                           insertInfo={reCreatePathTree}
                           searchString={this.state.searchString}
                           changeSearchString={this.changeSearchString}
                           template={Templates}
                           styleTemplates={styleTemplates}
                           objInfo={reCreatePathTree(this.state.lastClickedElementId, 'getInfo', '')}
                           uiFramework={this.props.uiFramework}
                           constructPage={constructPage}>
                    {HTMLTags(Templates, this.state.searchString)}
                </RightMenu>
            </div>
        )
    }
}

export default Main;
