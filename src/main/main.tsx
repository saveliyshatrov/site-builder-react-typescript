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
    let StyleStringMobile = ''
    let StyleMobileBegin = '@media only screen \n' +
                           '  and (min-width: 320px) \n' +
                           '  and (max-width: 480px){'
    let StyleMobileEnd = '}'
    let StyleStringTablet = ''
    let StyleTabletBegin = '@media only screen \n' +
        '  and (min-width: 768px) \n' +
        '  and (max-width: 1024px){'
    let StyleTabletEnd = '}'
    let StyleStringDesktop = ''
    let StyleDesktopBegin = '@media only screen \n' +
        '  and (min-width: 1200px) \n' +
        '  and (max-width: 1600px){'
    let StyleDesktopEnd = '}'
    for(let i: number = 0; i < allStyles.length; i++){
        StyleStringAll+=styleAll(allStyles[i], Styles)
    }
    for(let i: number = 0; i < allStyles.length; i++){
        StyleStringMobile+=styleMobile(allStyles[i], Styles)
    }
    for(let i: number = 0; i < allStyles.length; i++){
        StyleStringTablet+=styleTablet(allStyles[i], Styles)
    }
    for(let i: number = 0; i < allStyles.length; i++){
        StyleStringDesktop+=styleDesktop(allStyles[i], Styles)
    }
    StyleStringMobile = StyleMobileBegin + StyleStringMobile + StyleMobileEnd
    StyleStringTablet = StyleTabletBegin + StyleStringTablet + StyleTabletEnd
    StyleStringDesktop = StyleDesktopBegin + StyleStringDesktop + StyleDesktopEnd
    return StyleStringAll + StyleStringMobile + StyleStringTablet + StyleStringDesktop
}

const styleAll = (StyleName: string, Styles: any):string => {
    let beginStyle = `.${StyleName}{`;
    let body = styleAllNone(StyleName, Styles);
    let endStyle = '}';

    let beginStyleHover = `.${StyleName}:hover{`;
    let bodyHover = styleAllHover(StyleName, Styles);
    let endStyleHover = '}'

    let beginStyleActive = `.${StyleName}:active{`;
    let bodyActive = styleAllActive(StyleName, Styles);
    let endStyleActive = '}'

    let beginStyleFocus = `.${StyleName}:focus{`;
    let bodyFocus = styleAllFocus(StyleName, Styles);
    let endStyleFocus = '}'

    let none = beginStyle + body + endStyle;
    let hover = beginStyleHover + bodyHover + endStyleHover;
    let active = beginStyleActive + bodyActive + endStyleActive;
    let focus = beginStyleFocus + bodyFocus + endStyleFocus;
    return none + hover + active + focus;
}
const styleMobile = (StyleName: string, Styles: any):string => {
    let beginStyle = `.${StyleName}{`;
    let body = styleMobileNone(StyleName, Styles);
    let endStyle = '}';

    let beginStyleHover = `.${StyleName}:hover{`;
    let bodyHover = styleMobileHover(StyleName, Styles);
    let endStyleHover = '}'

    let beginStyleActive = `.${StyleName}:active{`;
    let bodyActive = styleMobileActive(StyleName, Styles);
    let endStyleActive = '}'

    let beginStyleFocus = `.${StyleName}:focus{`;
    let bodyFocus = styleMobileFocus(StyleName, Styles);
    let endStyleFocus = '}'

    let none = beginStyle + body + endStyle;
    let hover = beginStyleHover + bodyHover + endStyleHover;
    let active = beginStyleActive + bodyActive + endStyleActive;
    let focus = beginStyleFocus + bodyFocus + endStyleFocus;
    return none + hover + active + focus;
}
const styleTablet = (StyleName: string, Styles: any):string => {
    let beginStyle = `.${StyleName}{`;
    let body = styleTabletNone(StyleName, Styles);
    let endStyle = '}';

    let beginStyleHover = `.${StyleName}:hover{`;
    let bodyHover = styleTabletHover(StyleName, Styles);
    let endStyleHover = '}'

    let beginStyleActive = `.${StyleName}:active{`;
    let bodyActive = styleTabletActive(StyleName, Styles);
    let endStyleActive = '}'

    let beginStyleFocus = `.${StyleName}:focus{`;
    let bodyFocus = styleTabletFocus(StyleName, Styles);
    let endStyleFocus = '}'

    let none = beginStyle + body + endStyle;
    let hover = beginStyleHover + bodyHover + endStyleHover;
    let active = beginStyleActive + bodyActive + endStyleActive;
    let focus = beginStyleFocus + bodyFocus + endStyleFocus;
    return none + hover + active + focus;
}
const styleDesktop = (StyleName: string, Styles: any):string => {
    let beginStyle = `.${StyleName}{`;
    let body = styleDesktopNone(StyleName, Styles);
    let endStyle = '}';

    let beginStyleHover = `.${StyleName}:hover{`;
    let bodyHover = styleDesktopHover(StyleName, Styles);
    let endStyleHover = '}'

    let beginStyleActive = `.${StyleName}:active{`;
    let bodyActive = styleDesktopActive(StyleName, Styles);
    let endStyleActive = '}'

    let beginStyleFocus = `.${StyleName}:focus{`;
    let bodyFocus = styleDesktopFocus(StyleName, Styles);
    let endStyleFocus = '}'

    let none = beginStyle + body + endStyle;
    let hover = beginStyleHover + bodyHover + endStyleHover;
    let active = beginStyleActive + bodyActive + endStyleActive;
    let focus = beginStyleFocus + bodyFocus + endStyleFocus;
    return none + hover + active + focus;
}

const styleDesktopFocus = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleDesktopFocusWidth(StyleName, Styles);
    style+=styleDesktopFocusHeight(StyleName, Styles);
    style+=styleDesktopFocusBackground(StyleName, Styles);
    style+=styleDesktopFocusBoxShadow(StyleName, Styles);
    style+=styleDesktopFocusFont(StyleName, Styles);
    style+=styleDesktopFocusBorder(StyleName, Styles);
    style+=styleDesktopFocusBorderRadius(StyleName, Styles);
    return style;
}
const styleDesktopFocusWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.width?.focus === undefined?'':`width: ${Styles[StyleName].desktop.width.focus};`
}
const styleDesktopFocusHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.height?.focus === undefined?'':`height: ${Styles[StyleName].desktop.height.focus};`
}
const styleDesktopFocusBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.backgroundColor?.focus === undefined?'':`background: ${Styles[StyleName].desktop.backgroundColor.focus.length > 1? `linear-gradient(${Styles[StyleName].desktop.backgroundColor.focus[0]}deg, ${Styles[StyleName].desktop.backgroundColor.focus[1]},${Styles[StyleName].desktop.backgroundColor.focus[2]})`:Styles[StyleName].desktop.backgroundColor.focus[0]};`
}
const styleDesktopFocusBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.boxShadow?.focus === undefined?'':`box-shadow: ${Styles[StyleName].desktop.boxShadow.focus[0]+' '+
    Styles[StyleName].desktop.boxShadow.focus[1]+' '+
    Styles[StyleName].desktop.boxShadow.focus[2]+' '+
    Styles[StyleName].desktop.boxShadow.focus[3]+' '+
    Styles[StyleName].desktop.boxShadow.focus[4]};`
}
const styleDesktopFocusFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.font?.focus === undefined?''
        :
        `
        ${Styles[StyleName]?.desktop?.font?.focus.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.desktop?.font?.focus.fontFamily};`}
        ${Styles[StyleName]?.desktop?.font?.focus.size === undefined?'':`font-size:${Styles[StyleName]?.desktop?.font?.focus.size+Styles[StyleName]?.desktop?.font?.focus.typeSize};`}
        ${Styles[StyleName]?.desktop?.font?.focus.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.desktop?.font?.focus.fontWeight};`}
        ${Styles[StyleName]?.desktop?.font?.focus.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.desktop?.font?.focus.fontFamily};`}
        ${Styles[StyleName]?.desktop?.font?.focus.color === undefined?'':`color:${Styles[StyleName]?.desktop?.font?.focus.color};`}
        `
}
const styleDesktopFocusBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.desktop?.border === undefined || Styles[StyleName]?.desktop?.borderColor?.focus === undefined){
        return ''
    } else {
        if(Styles[StyleName].desktop.border.length === 1){
            if(Styles[StyleName].desktop.borderColor.focus.length === 1){
                return `border: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.focus[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.focus[0]};
                border-right: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.focus[1]};
                border-bottom: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.focus[2]};
                border-left: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.focus[3]};
                `
            }
        } else {
            if(Styles[StyleName].desktop.borderColor.focus.length === 1){
                return `
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.focus[0]};
                border-right: ${Styles[StyleName].desktop.border[1]} solid ${Styles[StyleName].desktop.borderColor.focus[0]};
                border-bottom: ${Styles[StyleName].desktop.border[2]} solid ${Styles[StyleName].desktop.borderColor.focus[0]};
                border-left: ${Styles[StyleName].desktop.border[3]} solid ${Styles[StyleName].desktop.borderColor.focus[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.focus[0]};
                border-right: ${Styles[StyleName].desktop.border[1]} solid ${Styles[StyleName].desktop.borderColor.focus[1]};
                border-bottom: ${Styles[StyleName].desktop.border[2]} solid ${Styles[StyleName].desktop.borderColor.focus[2]};
                border-left: ${Styles[StyleName].desktop.border[3]} solid ${Styles[StyleName].desktop.borderColor.focus[3]};
                `
            }
        }
    }
}
const styleDesktopFocusBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.borderRadius?.focus === undefined? '': `
        border-radius: ${Styles[StyleName].desktop.borderRadius.focus.length === 1?`${Styles[StyleName].desktop.borderRadius.focus[0]}`
        :
        `
        ${Styles[StyleName].desktop.borderRadius.focus[0]} 
        ${Styles[StyleName].desktop.borderRadius.focus[3]} 
        ${Styles[StyleName].desktop.borderRadius.focus[1]} 
        ${Styles[StyleName].desktop.borderRadius.focus[2]}`};
    `
}

const styleDesktopActive = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleDesktopActiveWidth(StyleName, Styles);
    style+=styleDesktopActiveHeight(StyleName, Styles);
    style+=styleDesktopActiveBackground(StyleName, Styles);
    style+=styleDesktopActiveBoxShadow(StyleName, Styles);
    style+=styleDesktopActiveFont(StyleName, Styles);
    style+=styleDesktopActiveBorder(StyleName, Styles);
    style+=styleDesktopActiveBorderRadius(StyleName, Styles);

    return style;
}
const styleDesktopActiveWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.width?.active === undefined?'':`width: ${Styles[StyleName].desktop.width.active};`
}
const styleDesktopActiveHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.height?.active === undefined?'':`height: ${Styles[StyleName].desktop.height.active};`
}
const styleDesktopActiveBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.backgroundColor?.active === undefined?'':`background: ${Styles[StyleName].desktop.backgroundColor.active.length > 1? `linear-gradient(${Styles[StyleName].desktop.backgroundColor.active[0]}deg, ${Styles[StyleName].desktop.backgroundColor.active[1]},${Styles[StyleName].desktop.backgroundColor.active[2]})`:Styles[StyleName].desktop.backgroundColor.active[0]};`
}
const styleDesktopActiveBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.boxShadow?.active === undefined?'':`box-shadow: ${Styles[StyleName].desktop.boxShadow.active[0]+' '+
    Styles[StyleName].desktop.boxShadow.active[1]+' '+
    Styles[StyleName].desktop.boxShadow.active[2]+' '+
    Styles[StyleName].desktop.boxShadow.active[3]+' '+
    Styles[StyleName].desktop.boxShadow.active[4]};`
}
const styleDesktopActiveFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.font?.active === undefined?''
        :
        `
        ${Styles[StyleName]?.desktop?.font?.active.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.desktop?.font?.active.fontFamily};`}
        ${Styles[StyleName]?.desktop?.font?.active.size === undefined?'':`font-size:${Styles[StyleName]?.desktop?.font?.active.size+Styles[StyleName]?.desktop?.font?.active.typeSize};`}
        ${Styles[StyleName]?.desktop?.font?.active.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.desktop?.font?.active.fontWeight};`}
        ${Styles[StyleName]?.desktop?.font?.active.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.desktop?.font?.active.fontFamily};`}
        ${Styles[StyleName]?.desktop?.font?.active.color === undefined?'':`color:${Styles[StyleName]?.desktop?.font?.active.color};`}
        `
}
const styleDesktopActiveBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.desktop?.border === undefined || Styles[StyleName]?.desktop?.borderColor?.active === undefined){
        return ''
    } else {
        if(Styles[StyleName].desktop.border.length === 1){
            if(Styles[StyleName].desktop.borderColor.active.length === 1){
                return `border: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.active[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.active[0]};
                border-right: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.active[1]};
                border-bottom: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.active[2]};
                border-left: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.active[3]};
                `
            }
        } else {
            if(Styles[StyleName].desktop.borderColor.active.length === 1){
                return `
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.active[0]};
                border-right: ${Styles[StyleName].desktop.border[1]} solid ${Styles[StyleName].desktop.borderColor.active[0]};
                border-bottom: ${Styles[StyleName].desktop.border[2]} solid ${Styles[StyleName].desktop.borderColor.active[0]};
                border-left: ${Styles[StyleName].desktop.border[3]} solid ${Styles[StyleName].desktop.borderColor.active[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.active[0]};
                border-right: ${Styles[StyleName].desktop.border[1]} solid ${Styles[StyleName].desktop.borderColor.active[1]};
                border-bottom: ${Styles[StyleName].desktop.border[2]} solid ${Styles[StyleName].desktop.borderColor.active[2]};
                border-left: ${Styles[StyleName].desktop.border[3]} solid ${Styles[StyleName].desktop.borderColor.active[3]};
                `
            }
        }
    }
}
const styleDesktopActiveBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.borderRadius?.active === undefined? '': `
        border-radius: ${Styles[StyleName].desktop.borderRadius.active.length === 1?`${Styles[StyleName].desktop.borderRadius.active[0]}`
        :
        `
        ${Styles[StyleName].desktop.borderRadius.active[0]} 
        ${Styles[StyleName].desktop.borderRadius.active[3]} 
        ${Styles[StyleName].desktop.borderRadius.active[1]} 
        ${Styles[StyleName].desktop.borderRadius.active[2]}`};
    `
}

const styleDesktopHover = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleDesktopHoverWidth(StyleName, Styles);
    style+=styleDesktopHoverHeight(StyleName, Styles);
    style+=styleDesktopHoverBackground(StyleName, Styles);
    style+=styleDesktopHoverBoxShadow(StyleName, Styles);
    style+=styleDesktopHoverFont(StyleName, Styles);
    style+=styleDesktopHoverBorder(StyleName, Styles);
    style+=styleDesktopHoverBorderRadius(StyleName, Styles);

    return style;
}
const styleDesktopHoverWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.width?.hover === undefined?'':`width: ${Styles[StyleName].desktop.width.hover};`
}
const styleDesktopHoverHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.height?.hover === undefined?'':`height: ${Styles[StyleName].desktop.height.hover};`
}
const styleDesktopHoverBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.backgroundColor?.hover === undefined?'':`background: ${Styles[StyleName].desktop.backgroundColor.hover.length > 1? `linear-gradient(${Styles[StyleName].desktop.backgroundColor.hover[0]}deg, ${Styles[StyleName].desktop.backgroundColor.hover[1]},${Styles[StyleName].desktop.backgroundColor.hover[2]})`:Styles[StyleName].desktop.backgroundColor.hover[0]};`
}
const styleDesktopHoverBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.boxShadow?.hover === undefined?'':`box-shadow: ${Styles[StyleName].desktop.boxShadow.hover[0]+' '+
    Styles[StyleName].desktop.boxShadow.hover[1]+' '+
    Styles[StyleName].desktop.boxShadow.hover[2]+' '+
    Styles[StyleName].desktop.boxShadow.hover[3]+' '+
    Styles[StyleName].desktop.boxShadow.hover[4]};`
}
const styleDesktopHoverFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.font?.hover === undefined?''
        :
        `
        ${Styles[StyleName]?.desktop?.font?.hover.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.desktop?.font?.hover.fontFamily};`}
        ${Styles[StyleName]?.desktop?.font?.hover.size === undefined?'':`font-size:${Styles[StyleName]?.desktop?.font?.hover.size+Styles[StyleName]?.desktop?.font?.hover.typeSize};`}
        ${Styles[StyleName]?.desktop?.font?.hover.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.desktop?.font?.hover.fontWeight};`}
        ${Styles[StyleName]?.desktop?.font?.hover.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.desktop?.font?.hover.fontFamily};`}
        ${Styles[StyleName]?.desktop?.font?.hover.color === undefined?'':`color:${Styles[StyleName]?.desktop?.font?.hover.color};`}
        `
}
const styleDesktopHoverBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.desktop?.border === undefined || Styles[StyleName]?.desktop?.borderColor?.hover === undefined){
        return ''
    } else {
        if(Styles[StyleName].desktop.border.length === 1){
            if(Styles[StyleName].desktop.borderColor.hover.length === 1){
                return `border: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.hover[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.hover[0]};
                border-right: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.hover[1]};
                border-bottom: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.hover[2]};
                border-left: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.hover[3]};
                `
            }
        } else {
            if(Styles[StyleName].desktop.borderColor.hover.length === 1){
                return `
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.hover[0]};
                border-right: ${Styles[StyleName].desktop.border[1]} solid ${Styles[StyleName].desktop.borderColor.hover[0]};
                border-bottom: ${Styles[StyleName].desktop.border[2]} solid ${Styles[StyleName].desktop.borderColor.hover[0]};
                border-left: ${Styles[StyleName].desktop.border[3]} solid ${Styles[StyleName].desktop.borderColor.hover[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.hover[0]};
                border-right: ${Styles[StyleName].desktop.border[1]} solid ${Styles[StyleName].desktop.borderColor.hover[1]};
                border-bottom: ${Styles[StyleName].desktop.border[2]} solid ${Styles[StyleName].desktop.borderColor.hover[2]};
                border-left: ${Styles[StyleName].desktop.border[3]} solid ${Styles[StyleName].desktop.borderColor.hover[3]};
                `
            }
        }
    }
}
const styleDesktopHoverBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.borderRadius?.hover === undefined? '': `
        border-radius: ${Styles[StyleName].desktop.borderRadius.hover.length === 1?`${Styles[StyleName].desktop.borderRadius.hover[0]}`
        :
        `
        ${Styles[StyleName].desktop.borderRadius.hover[0]} 
        ${Styles[StyleName].desktop.borderRadius.hover[3]} 
        ${Styles[StyleName].desktop.borderRadius.hover[1]} 
        ${Styles[StyleName].desktop.borderRadius.hover[2]}`};
    `
}

const styleDesktopNone = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleDesktopNoneWidth(StyleName, Styles);
    style+=styleDesktopNoneHeight(StyleName, Styles);
    style+=styleDesktopNoneBackground(StyleName, Styles);
    style+=styleDesktopMargin(StyleName, Styles);
    style+=styleDesktopPadding(StyleName, Styles);
    style+=styleDesktopNoneBoxShadow(StyleName, Styles);
    style+=styleDesktopNoneFont(StyleName, Styles);
    style+=styleDesktopNoneBorder(StyleName, Styles);
    style+=styleDesktopNoneBorderRadius(StyleName, Styles);
    style+=styleDesktopFlex(StyleName, Styles);
    style+=styleDesktopPosition(StyleName, Styles);
    style+=styleDesktopTransition(StyleName, Styles);
    return style;
}
const styleDesktopNoneWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.width?.none === undefined?'':`width: ${Styles[StyleName].desktop.width.none};`
}
const styleDesktopNoneHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.height?.none === undefined?'':`height: ${Styles[StyleName].desktop.height.none};`
}
const styleDesktopNoneBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.backgroundColor?.none === undefined?'':`background: ${Styles[StyleName].desktop.backgroundColor.none.length > 1? `linear-gradient(${Styles[StyleName].desktop.backgroundColor.none[0]}deg, ${Styles[StyleName].desktop.backgroundColor.none[1]},${Styles[StyleName].desktop.backgroundColor.none[2]})`:Styles[StyleName].desktop.backgroundColor.none[0]};`
}
const styleDesktopMargin = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.margin === undefined?'':`margin: ${Styles[StyleName].desktop.margin.length === 1?Styles[StyleName].desktop.margin[0]:Styles[StyleName].desktop.margin[0] + ' ' +
        Styles[StyleName].desktop.margin[1] + ' ' +
        Styles[StyleName].desktop.margin[2] + ' ' + Styles[StyleName].desktop.margin[3]};`
}
const styleDesktopPadding = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.padding === undefined?'':`padding: ${Styles[StyleName].desktop.padding.length === 1?Styles[StyleName].desktop.padding[0]:Styles[StyleName].desktop.padding[0] + ' ' +
        Styles[StyleName].desktop.padding[1] + ' ' +
        Styles[StyleName].desktop.padding[2] + ' ' + Styles[StyleName].desktop.padding[3]};`
}
const styleDesktopNoneBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.boxShadow?.none === undefined?'':`box-shadow: ${Styles[StyleName].desktop.boxShadow.none[0]+' '+
    Styles[StyleName].desktop.boxShadow.none[1]+' '+
    Styles[StyleName].desktop.boxShadow.none[2]+' '+
    Styles[StyleName].desktop.boxShadow.none[3]+' '+
    Styles[StyleName].desktop.boxShadow.none[4]};`
}
const styleDesktopNoneFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.font?.none === undefined?''
        :
        `
        ${Styles[StyleName]?.desktop?.font?.none.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.desktop?.font?.none.fontFamily};`}
        ${Styles[StyleName]?.desktop?.font?.none.size === undefined?'':`font-size:${Styles[StyleName]?.desktop?.font?.none.size+Styles[StyleName]?.desktop?.font?.none.typeSize};`}
        ${Styles[StyleName]?.desktop?.font?.none.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.desktop?.font?.none.fontWeight};`}
        ${Styles[StyleName]?.desktop?.font?.none.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.desktop?.font?.none.fontFamily};`}
        ${Styles[StyleName]?.desktop?.font?.none.color === undefined?'':`color:${Styles[StyleName]?.desktop?.font?.none.color};`}
        `
}
const styleDesktopNoneBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.desktop?.border === undefined || Styles[StyleName]?.desktop?.borderColor?.none === undefined){
        return ''
    } else {
        if(Styles[StyleName].desktop.border.length === 1){
            if(Styles[StyleName].desktop.borderColor.none.length === 1){
                return `border: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.none[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.none[0]};
                border-right: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.none[2]};
                border-left: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.none[3]};
                `
            }
        } else {
            if(Styles[StyleName].desktop.borderColor.none.length === 1){
                return `
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.none[0]};
                border-right: ${Styles[StyleName].desktop.border[1]} solid ${Styles[StyleName].desktop.borderColor.none[0]};
                border-bottom: ${Styles[StyleName].desktop.border[2]} solid ${Styles[StyleName].desktop.borderColor.none[0]};
                border-left: ${Styles[StyleName].desktop.border[3]} solid ${Styles[StyleName].desktop.borderColor.none[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].desktop.border[0]} solid ${Styles[StyleName].desktop.borderColor.none[0]};
                border-right: ${Styles[StyleName].desktop.border[1]} solid ${Styles[StyleName].desktop.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].desktop.border[2]} solid ${Styles[StyleName].desktop.borderColor.none[2]};
                border-left: ${Styles[StyleName].desktop.border[3]} solid ${Styles[StyleName].desktop.borderColor.none[3]};
                `
            }
        }
    }
}
const styleDesktopNoneBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.borderRadius?.none === undefined? '': `
        border-radius: ${Styles[StyleName].desktop.borderRadius.none.length === 1?`${Styles[StyleName].desktop.borderRadius.none[0]}`
        :
        `
        ${Styles[StyleName].desktop.borderRadius.none[0]} 
        ${Styles[StyleName].desktop.borderRadius.none[3]} 
        ${Styles[StyleName].desktop.borderRadius.none[1]} 
        ${Styles[StyleName].desktop.borderRadius.none[2]}`};
    `
}
const styleDesktopFlex = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.flex?.enable === undefined || Styles[StyleName]?.desktop?.flex?.enable === false?''
        :
        `
            display: flex;
            justify-content: ${Styles[StyleName].desktop.flex.justifyContent};
            flex-direction: ${Styles[StyleName].desktop.flex.flexDirection};
            align-items: ${Styles[StyleName].desktop.flex.alignItems};
        `
}
const styleDesktopPosition = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.desktop?.position === undefined || Styles[StyleName]?.desktop?.position === [false, false, false, false]?''
        :
        `
        position: fixed;
        ${Styles[StyleName].desktop.position[0] === false? '': 'top:0;'}
        ${Styles[StyleName].desktop.position[1] === false? '': 'right:0;'}
        ${Styles[StyleName].desktop.position[2] === false? '': 'bottom:0;'}
        ${Styles[StyleName].desktop.position[3] === false? '': 'left:0;'}
        `
}
const styleDesktopTransition = (StyleName: string, Styles: any):string => {
    //console.log(Styles[StyleName].desktop.transition, '--- transition')
    return Styles[StyleName]?.desktop?.transition === undefined?''
        :
        `
        transition: ${Styles[StyleName].desktop.transition}ms;
        `
}


//----------------------------------------------------------

const styleTabletFocus = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleTabletFocusWidth(StyleName, Styles);
    style+=styleTabletFocusHeight(StyleName, Styles);
    style+=styleTabletFocusBackground(StyleName, Styles);
    style+=styleTabletFocusBoxShadow(StyleName, Styles);
    style+=styleTabletFocusFont(StyleName, Styles);
    style+=styleTabletFocusBorder(StyleName, Styles);
    style+=styleTabletFocusBorderRadius(StyleName, Styles);
    return style;
}
const styleTabletFocusWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.width?.focus === undefined?'':`width: ${Styles[StyleName].tablet.width.focus};`
}
const styleTabletFocusHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.height?.focus === undefined?'':`height: ${Styles[StyleName].tablet.height.focus};`
}
const styleTabletFocusBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.backgroundColor?.focus === undefined?'':`background: ${Styles[StyleName].tablet.backgroundColor.focus.length > 1? `linear-gradient(${Styles[StyleName].tablet.backgroundColor.focus[0]}deg, ${Styles[StyleName].tablet.backgroundColor.focus[1]},${Styles[StyleName].tablet.backgroundColor.focus[2]})`:Styles[StyleName].tablet.backgroundColor.focus[0]};`
}
const styleTabletFocusBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.boxShadow?.focus === undefined?'':`box-shadow: ${Styles[StyleName].tablet.boxShadow.focus[0]+' '+
    Styles[StyleName].tablet.boxShadow.focus[1]+' '+
    Styles[StyleName].tablet.boxShadow.focus[2]+' '+
    Styles[StyleName].tablet.boxShadow.focus[3]+' '+
    Styles[StyleName].tablet.boxShadow.focus[4]};`
}
const styleTabletFocusFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.font?.focus === undefined?''
        :
        `
        ${Styles[StyleName]?.tablet?.font?.focus.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.tablet?.font?.focus.fontFamily};`}
        ${Styles[StyleName]?.tablet?.font?.focus.size === undefined?'':`font-size:${Styles[StyleName]?.tablet?.font?.focus.size+Styles[StyleName]?.tablet?.font?.focus.typeSize};`}
        ${Styles[StyleName]?.tablet?.font?.focus.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.tablet?.font?.focus.fontWeight};`}
        ${Styles[StyleName]?.tablet?.font?.focus.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.tablet?.font?.focus.fontFamily};`}
        ${Styles[StyleName]?.tablet?.font?.focus.color === undefined?'':`color:${Styles[StyleName]?.tablet?.font?.focus.color};`}
        `
}
const styleTabletFocusBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.tablet?.border === undefined || Styles[StyleName]?.tablet?.borderColor?.focus === undefined){
        return ''
    } else {
        if(Styles[StyleName].tablet.border.length === 1){
            if(Styles[StyleName].tablet.borderColor.focus.length === 1){
                return `border: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.focus[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.focus[0]};
                border-right: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.focus[1]};
                border-bottom: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.focus[2]};
                border-left: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.focus[3]};
                `
            }
        } else {
            if(Styles[StyleName].tablet.borderColor.focus.length === 1){
                return `
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.focus[0]};
                border-right: ${Styles[StyleName].tablet.border[1]} solid ${Styles[StyleName].tablet.borderColor.focus[0]};
                border-bottom: ${Styles[StyleName].tablet.border[2]} solid ${Styles[StyleName].tablet.borderColor.focus[0]};
                border-left: ${Styles[StyleName].tablet.border[3]} solid ${Styles[StyleName].tablet.borderColor.focus[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.focus[0]};
                border-right: ${Styles[StyleName].tablet.border[1]} solid ${Styles[StyleName].tablet.borderColor.focus[1]};
                border-bottom: ${Styles[StyleName].tablet.border[2]} solid ${Styles[StyleName].tablet.borderColor.focus[2]};
                border-left: ${Styles[StyleName].tablet.border[3]} solid ${Styles[StyleName].tablet.borderColor.focus[3]};
                `
            }
        }
    }
}
const styleTabletFocusBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.borderRadius?.focus === undefined? '': `
        border-radius: ${Styles[StyleName].tablet.borderRadius.focus.length === 1?`${Styles[StyleName].tablet.borderRadius.focus[0]}`
        :
        `
        ${Styles[StyleName].tablet.borderRadius.focus[0]} 
        ${Styles[StyleName].tablet.borderRadius.focus[3]} 
        ${Styles[StyleName].tablet.borderRadius.focus[1]} 
        ${Styles[StyleName].tablet.borderRadius.focus[2]}`};
    `
}

const styleTabletActive = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleTabletActiveWidth(StyleName, Styles);
    style+=styleTabletActiveHeight(StyleName, Styles);
    style+=styleTabletActiveBackground(StyleName, Styles);
    style+=styleTabletActiveBoxShadow(StyleName, Styles);
    style+=styleTabletActiveFont(StyleName, Styles);
    style+=styleTabletActiveBorder(StyleName, Styles);
    style+=styleTabletActiveBorderRadius(StyleName, Styles);

    return style;
}
const styleTabletActiveWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.width?.active === undefined?'':`width: ${Styles[StyleName].tablet.width.active};`
}
const styleTabletActiveHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.height?.active === undefined?'':`height: ${Styles[StyleName].tablet.height.active};`
}
const styleTabletActiveBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.backgroundColor?.active === undefined?'':`background: ${Styles[StyleName].tablet.backgroundColor.active.length > 1? `linear-gradient(${Styles[StyleName].tablet.backgroundColor.active[0]}deg, ${Styles[StyleName].tablet.backgroundColor.active[1]},${Styles[StyleName].tablet.backgroundColor.active[2]})`:Styles[StyleName].tablet.backgroundColor.active[0]};`
}
const styleTabletActiveBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.boxShadow?.active === undefined?'':`box-shadow: ${Styles[StyleName].tablet.boxShadow.active[0]+' '+
    Styles[StyleName].tablet.boxShadow.active[1]+' '+
    Styles[StyleName].tablet.boxShadow.active[2]+' '+
    Styles[StyleName].tablet.boxShadow.active[3]+' '+
    Styles[StyleName].tablet.boxShadow.active[4]};`
}
const styleTabletActiveFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.font?.active === undefined?''
        :
        `
        ${Styles[StyleName]?.tablet?.font?.active.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.tablet?.font?.active.fontFamily};`}
        ${Styles[StyleName]?.tablet?.font?.active.size === undefined?'':`font-size:${Styles[StyleName]?.tablet?.font?.active.size+Styles[StyleName]?.tablet?.font?.active.typeSize};`}
        ${Styles[StyleName]?.tablet?.font?.active.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.tablet?.font?.active.fontWeight};`}
        ${Styles[StyleName]?.tablet?.font?.active.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.tablet?.font?.active.fontFamily};`}
        ${Styles[StyleName]?.tablet?.font?.active.color === undefined?'':`color:${Styles[StyleName]?.tablet?.font?.active.color};`}
        `
}
const styleTabletActiveBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.tablet?.border === undefined || Styles[StyleName]?.tablet?.borderColor?.active === undefined){
        return ''
    } else {
        if(Styles[StyleName].tablet.border.length === 1){
            if(Styles[StyleName].tablet.borderColor.active.length === 1){
                return `border: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.active[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.active[0]};
                border-right: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.active[1]};
                border-bottom: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.active[2]};
                border-left: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.active[3]};
                `
            }
        } else {
            if(Styles[StyleName].tablet.borderColor.active.length === 1){
                return `
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.active[0]};
                border-right: ${Styles[StyleName].tablet.border[1]} solid ${Styles[StyleName].tablet.borderColor.active[0]};
                border-bottom: ${Styles[StyleName].tablet.border[2]} solid ${Styles[StyleName].tablet.borderColor.active[0]};
                border-left: ${Styles[StyleName].tablet.border[3]} solid ${Styles[StyleName].tablet.borderColor.active[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.active[0]};
                border-right: ${Styles[StyleName].tablet.border[1]} solid ${Styles[StyleName].tablet.borderColor.active[1]};
                border-bottom: ${Styles[StyleName].tablet.border[2]} solid ${Styles[StyleName].tablet.borderColor.active[2]};
                border-left: ${Styles[StyleName].tablet.border[3]} solid ${Styles[StyleName].tablet.borderColor.active[3]};
                `
            }
        }
    }
}
const styleTabletActiveBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.borderRadius?.active === undefined? '': `
        border-radius: ${Styles[StyleName].tablet.borderRadius.active.length === 1?`${Styles[StyleName].tablet.borderRadius.active[0]}`
        :
        `
        ${Styles[StyleName].tablet.borderRadius.active[0]} 
        ${Styles[StyleName].tablet.borderRadius.active[3]} 
        ${Styles[StyleName].tablet.borderRadius.active[1]} 
        ${Styles[StyleName].tablet.borderRadius.active[2]}`};
    `
}

const styleTabletHover = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleTabletHoverWidth(StyleName, Styles);
    style+=styleTabletHoverHeight(StyleName, Styles);
    style+=styleTabletHoverBackground(StyleName, Styles);
    style+=styleTabletHoverBoxShadow(StyleName, Styles);
    style+=styleTabletHoverFont(StyleName, Styles);
    style+=styleTabletHoverBorder(StyleName, Styles);
    style+=styleTabletHoverBorderRadius(StyleName, Styles);

    return style;
}
const styleTabletHoverWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.width?.hover === undefined?'':`width: ${Styles[StyleName].tablet.width.hover};`
}
const styleTabletHoverHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.height?.hover === undefined?'':`height: ${Styles[StyleName].tablet.height.hover};`
}
const styleTabletHoverBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.backgroundColor?.hover === undefined?'':`background: ${Styles[StyleName].tablet.backgroundColor.hover.length > 1? `linear-gradient(${Styles[StyleName].tablet.backgroundColor.hover[0]}deg, ${Styles[StyleName].tablet.backgroundColor.hover[1]},${Styles[StyleName].tablet.backgroundColor.hover[2]})`:Styles[StyleName].tablet.backgroundColor.hover[0]};`
}
const styleTabletHoverBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.boxShadow?.hover === undefined?'':`box-shadow: ${Styles[StyleName].tablet.boxShadow.hover[0]+' '+
    Styles[StyleName].tablet.boxShadow.hover[1]+' '+
    Styles[StyleName].tablet.boxShadow.hover[2]+' '+
    Styles[StyleName].tablet.boxShadow.hover[3]+' '+
    Styles[StyleName].tablet.boxShadow.hover[4]};`
}
const styleTabletHoverFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.font?.hover === undefined?''
        :
        `
        ${Styles[StyleName]?.tablet?.font?.hover.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.tablet?.font?.hover.fontFamily};`}
        ${Styles[StyleName]?.tablet?.font?.hover.size === undefined?'':`font-size:${Styles[StyleName]?.tablet?.font?.hover.size+Styles[StyleName]?.tablet?.font?.hover.typeSize};`}
        ${Styles[StyleName]?.tablet?.font?.hover.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.tablet?.font?.hover.fontWeight};`}
        ${Styles[StyleName]?.tablet?.font?.hover.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.tablet?.font?.hover.fontFamily};`}
        ${Styles[StyleName]?.tablet?.font?.hover.color === undefined?'':`color:${Styles[StyleName]?.tablet?.font?.hover.color};`}
        `
}
const styleTabletHoverBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.tablet?.border === undefined || Styles[StyleName]?.tablet?.borderColor?.hover === undefined){
        return ''
    } else {
        if(Styles[StyleName].tablet.border.length === 1){
            if(Styles[StyleName].tablet.borderColor.hover.length === 1){
                return `border: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.hover[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.hover[0]};
                border-right: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.hover[1]};
                border-bottom: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.hover[2]};
                border-left: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.hover[3]};
                `
            }
        } else {
            if(Styles[StyleName].tablet.borderColor.hover.length === 1){
                return `
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.hover[0]};
                border-right: ${Styles[StyleName].tablet.border[1]} solid ${Styles[StyleName].tablet.borderColor.hover[0]};
                border-bottom: ${Styles[StyleName].tablet.border[2]} solid ${Styles[StyleName].tablet.borderColor.hover[0]};
                border-left: ${Styles[StyleName].tablet.border[3]} solid ${Styles[StyleName].tablet.borderColor.hover[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.hover[0]};
                border-right: ${Styles[StyleName].tablet.border[1]} solid ${Styles[StyleName].tablet.borderColor.hover[1]};
                border-bottom: ${Styles[StyleName].tablet.border[2]} solid ${Styles[StyleName].tablet.borderColor.hover[2]};
                border-left: ${Styles[StyleName].tablet.border[3]} solid ${Styles[StyleName].tablet.borderColor.hover[3]};
                `
            }
        }
    }
}
const styleTabletHoverBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.borderRadius?.hover === undefined? '': `
        border-radius: ${Styles[StyleName].tablet.borderRadius.hover.length === 1?`${Styles[StyleName].tablet.borderRadius.hover[0]}`
        :
        `
        ${Styles[StyleName].tablet.borderRadius.hover[0]} 
        ${Styles[StyleName].tablet.borderRadius.hover[3]} 
        ${Styles[StyleName].tablet.borderRadius.hover[1]} 
        ${Styles[StyleName].tablet.borderRadius.hover[2]}`};
    `
}

const styleTabletNone = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleTabletNoneWidth(StyleName, Styles);
    style+=styleTabletNoneHeight(StyleName, Styles);
    style+=styleTabletNoneBackground(StyleName, Styles);
    style+=styleTabletMargin(StyleName, Styles);
    style+=styleTabletPadding(StyleName, Styles);
    style+=styleTabletNoneBoxShadow(StyleName, Styles);
    style+=styleTabletNoneFont(StyleName, Styles);
    style+=styleTabletNoneBorder(StyleName, Styles);
    style+=styleTabletNoneBorderRadius(StyleName, Styles);
    style+=styleTabletFlex(StyleName, Styles);
    style+=styleTabletPosition(StyleName, Styles);
    style+=styleTabletTransition(StyleName, Styles);
    return style;
}
const styleTabletNoneWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.width?.none === undefined?'':`width: ${Styles[StyleName].tablet.width.none};`
}
const styleTabletNoneHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.height?.none === undefined?'':`height: ${Styles[StyleName].tablet.height.none};`
}
const styleTabletNoneBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.backgroundColor?.none === undefined?'':`background: ${Styles[StyleName].tablet.backgroundColor.none.length > 1? `linear-gradient(${Styles[StyleName].tablet.backgroundColor.none[0]}deg, ${Styles[StyleName].tablet.backgroundColor.none[1]},${Styles[StyleName].tablet.backgroundColor.none[2]})`:Styles[StyleName].tablet.backgroundColor.none[0]};`
}
const styleTabletMargin = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.margin === undefined?'':`margin: ${Styles[StyleName].tablet.margin.length === 1?Styles[StyleName].tablet.margin[0]:Styles[StyleName].tablet.margin[0] + ' ' +
        Styles[StyleName].tablet.margin[1] + ' ' +
        Styles[StyleName].tablet.margin[2] + ' ' + Styles[StyleName].tablet.margin[3]};`
}
const styleTabletPadding = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.padding === undefined?'':`padding: ${Styles[StyleName].tablet.padding.length === 1?Styles[StyleName].tablet.padding[0]:Styles[StyleName].tablet.padding[0] + ' ' +
        Styles[StyleName].tablet.padding[1] + ' ' +
        Styles[StyleName].tablet.padding[2] + ' ' + Styles[StyleName].tablet.padding[3]};`
}
const styleTabletNoneBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.boxShadow?.none === undefined?'':`box-shadow: ${Styles[StyleName].tablet.boxShadow.none[0]+' '+
    Styles[StyleName].tablet.boxShadow.none[1]+' '+
    Styles[StyleName].tablet.boxShadow.none[2]+' '+
    Styles[StyleName].tablet.boxShadow.none[3]+' '+
    Styles[StyleName].tablet.boxShadow.none[4]};`
}
const styleTabletNoneFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.font?.none === undefined?''
        :
        `
        ${Styles[StyleName]?.tablet?.font?.none.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.tablet?.font?.none.fontFamily};`}
        ${Styles[StyleName]?.tablet?.font?.none.size === undefined?'':`font-size:${Styles[StyleName]?.tablet?.font?.none.size+Styles[StyleName]?.tablet?.font?.none.typeSize};`}
        ${Styles[StyleName]?.tablet?.font?.none.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.tablet?.font?.none.fontWeight};`}
        ${Styles[StyleName]?.tablet?.font?.none.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.tablet?.font?.none.fontFamily};`}
        ${Styles[StyleName]?.tablet?.font?.none.color === undefined?'':`color:${Styles[StyleName]?.tablet?.font?.none.color};`}
        `
}
const styleTabletNoneBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.tablet?.border === undefined || Styles[StyleName]?.tablet?.borderColor?.none === undefined){
        return ''
    } else {
        if(Styles[StyleName].tablet.border.length === 1){
            if(Styles[StyleName].tablet.borderColor.none.length === 1){
                return `border: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.none[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.none[0]};
                border-right: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.none[2]};
                border-left: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.none[3]};
                `
            }
        } else {
            if(Styles[StyleName].tablet.borderColor.none.length === 1){
                return `
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.none[0]};
                border-right: ${Styles[StyleName].tablet.border[1]} solid ${Styles[StyleName].tablet.borderColor.none[0]};
                border-bottom: ${Styles[StyleName].tablet.border[2]} solid ${Styles[StyleName].tablet.borderColor.none[0]};
                border-left: ${Styles[StyleName].tablet.border[3]} solid ${Styles[StyleName].tablet.borderColor.none[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].tablet.border[0]} solid ${Styles[StyleName].tablet.borderColor.none[0]};
                border-right: ${Styles[StyleName].tablet.border[1]} solid ${Styles[StyleName].tablet.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].tablet.border[2]} solid ${Styles[StyleName].tablet.borderColor.none[2]};
                border-left: ${Styles[StyleName].tablet.border[3]} solid ${Styles[StyleName].tablet.borderColor.none[3]};
                `
            }
        }
    }
}
const styleTabletNoneBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.borderRadius?.none === undefined? '': `
        border-radius: ${Styles[StyleName].tablet.borderRadius.none.length === 1?`${Styles[StyleName].tablet.borderRadius.none[0]}`
        :
        `
        ${Styles[StyleName].tablet.borderRadius.none[0]} 
        ${Styles[StyleName].tablet.borderRadius.none[3]} 
        ${Styles[StyleName].tablet.borderRadius.none[1]} 
        ${Styles[StyleName].tablet.borderRadius.none[2]}`};
    `
}
const styleTabletFlex = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.flex?.enable === undefined || Styles[StyleName]?.tablet?.flex?.enable === false?''
        :
        `
            display: flex;
            justify-content: ${Styles[StyleName].tablet.flex.justifyContent};
            flex-direction: ${Styles[StyleName].tablet.flex.flexDirection};
            align-items: ${Styles[StyleName].tablet.flex.alignItems};
        `
}
const styleTabletPosition = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.tablet?.position === undefined || Styles[StyleName]?.tablet?.position === [false, false, false, false]?''
        :
        `
        position: fixed;
        ${Styles[StyleName].tablet.position[0] === false? '': 'top:0;'}
        ${Styles[StyleName].tablet.position[1] === false? '': 'right:0;'}
        ${Styles[StyleName].tablet.position[2] === false? '': 'bottom:0;'}
        ${Styles[StyleName].tablet.position[3] === false? '': 'left:0;'}
        `
}
const styleTabletTransition = (StyleName: string, Styles: any):string => {
    //console.log(Styles[StyleName].tablet.transition, '--- transition')
    return Styles[StyleName]?.tablet?.transition === undefined?''
        :
        `
        transition: ${Styles[StyleName].tablet.transition}ms;
        `
}


//----------------------------------------------------------

const styleMobileFocus = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleMobileFocusWidth(StyleName, Styles);
    style+=styleMobileFocusHeight(StyleName, Styles);
    style+=styleMobileFocusBackground(StyleName, Styles);
    style+=styleMobileFocusBoxShadow(StyleName, Styles);
    style+=styleMobileFocusFont(StyleName, Styles);
    style+=styleMobileFocusBorder(StyleName, Styles);
    style+=styleMobileFocusBorderRadius(StyleName, Styles);
    return style;
}
const styleMobileFocusWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.width?.focus === undefined?'':`width: ${Styles[StyleName].mobile.width.focus};`
}
const styleMobileFocusHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.height?.focus === undefined?'':`height: ${Styles[StyleName].mobile.height.focus};`
}
const styleMobileFocusBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.backgroundColor?.focus === undefined?'':`background: ${Styles[StyleName].mobile.backgroundColor.focus.length > 1? `linear-gradient(${Styles[StyleName].mobile.backgroundColor.focus[0]}deg, ${Styles[StyleName].mobile.backgroundColor.focus[1]},${Styles[StyleName].mobile.backgroundColor.focus[2]})`:Styles[StyleName].mobile.backgroundColor.focus[0]};`
}
const styleMobileFocusBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.boxShadow?.focus === undefined?'':`box-shadow: ${Styles[StyleName].mobile.boxShadow.focus[0]+' '+
    Styles[StyleName].mobile.boxShadow.focus[1]+' '+
    Styles[StyleName].mobile.boxShadow.focus[2]+' '+
    Styles[StyleName].mobile.boxShadow.focus[3]+' '+
    Styles[StyleName].mobile.boxShadow.focus[4]};`
}
const styleMobileFocusFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.font?.focus === undefined?''
        :
        `
        ${Styles[StyleName]?.mobile?.font?.focus.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.mobile?.font?.focus.fontFamily};`}
        ${Styles[StyleName]?.mobile?.font?.focus.size === undefined?'':`font-size:${Styles[StyleName]?.mobile?.font?.focus.size+Styles[StyleName]?.mobile?.font?.focus.typeSize};`}
        ${Styles[StyleName]?.mobile?.font?.focus.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.mobile?.font?.focus.fontWeight};`}
        ${Styles[StyleName]?.mobile?.font?.focus.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.mobile?.font?.focus.fontFamily};`}
        ${Styles[StyleName]?.mobile?.font?.focus.color === undefined?'':`color:${Styles[StyleName]?.mobile?.font?.focus.color};`}
        `
}
const styleMobileFocusBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.mobile?.border === undefined || Styles[StyleName]?.mobile?.borderColor?.focus === undefined){
        return ''
    } else {
        if(Styles[StyleName].mobile.border.length === 1){
            if(Styles[StyleName].mobile.borderColor.focus.length === 1){
                return `border: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.focus[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.focus[0]};
                border-right: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.focus[1]};
                border-bottom: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.focus[2]};
                border-left: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.focus[3]};
                `
            }
        } else {
            if(Styles[StyleName].mobile.borderColor.focus.length === 1){
                return `
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.focus[0]};
                border-right: ${Styles[StyleName].mobile.border[1]} solid ${Styles[StyleName].mobile.borderColor.focus[0]};
                border-bottom: ${Styles[StyleName].mobile.border[2]} solid ${Styles[StyleName].mobile.borderColor.focus[0]};
                border-left: ${Styles[StyleName].mobile.border[3]} solid ${Styles[StyleName].mobile.borderColor.focus[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.focus[0]};
                border-right: ${Styles[StyleName].mobile.border[1]} solid ${Styles[StyleName].mobile.borderColor.focus[1]};
                border-bottom: ${Styles[StyleName].mobile.border[2]} solid ${Styles[StyleName].mobile.borderColor.focus[2]};
                border-left: ${Styles[StyleName].mobile.border[3]} solid ${Styles[StyleName].mobile.borderColor.focus[3]};
                `
            }
        }
    }
}
const styleMobileFocusBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.borderRadius?.focus === undefined? '': `
        border-radius: ${Styles[StyleName].mobile.borderRadius.focus.length === 1?`${Styles[StyleName].mobile.borderRadius.focus[0]}`
        :
        `
        ${Styles[StyleName].mobile.borderRadius.focus[0]} 
        ${Styles[StyleName].mobile.borderRadius.focus[3]} 
        ${Styles[StyleName].mobile.borderRadius.focus[1]} 
        ${Styles[StyleName].mobile.borderRadius.focus[2]}`};
    `
}

const styleMobileActive = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleMobileActiveWidth(StyleName, Styles);
    style+=styleMobileActiveHeight(StyleName, Styles);
    style+=styleMobileActiveBackground(StyleName, Styles);
    style+=styleMobileActiveBoxShadow(StyleName, Styles);
    style+=styleMobileActiveFont(StyleName, Styles);
    style+=styleMobileActiveBorder(StyleName, Styles);
    style+=styleMobileActiveBorderRadius(StyleName, Styles);

    return style;
}
const styleMobileActiveWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.width?.active === undefined?'':`width: ${Styles[StyleName].mobile.width.active};`
}
const styleMobileActiveHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.height?.active === undefined?'':`height: ${Styles[StyleName].mobile.height.active};`
}
const styleMobileActiveBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.backgroundColor?.active === undefined?'':`background: ${Styles[StyleName].mobile.backgroundColor.active.length > 1? `linear-gradient(${Styles[StyleName].mobile.backgroundColor.active[0]}deg, ${Styles[StyleName].mobile.backgroundColor.active[1]},${Styles[StyleName].mobile.backgroundColor.active[2]})`:Styles[StyleName].mobile.backgroundColor.active[0]};`
}
const styleMobileActiveBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.boxShadow?.active === undefined?'':`box-shadow: ${Styles[StyleName].mobile.boxShadow.active[0]+' '+
    Styles[StyleName].mobile.boxShadow.active[1]+' '+
    Styles[StyleName].mobile.boxShadow.active[2]+' '+
    Styles[StyleName].mobile.boxShadow.active[3]+' '+
    Styles[StyleName].mobile.boxShadow.active[4]};`
}
const styleMobileActiveFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.font?.active === undefined?''
        :
        `
        ${Styles[StyleName]?.mobile?.font?.active.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.mobile?.font?.active.fontFamily};`}
        ${Styles[StyleName]?.mobile?.font?.active.size === undefined?'':`font-size:${Styles[StyleName]?.mobile?.font?.active.size+Styles[StyleName]?.mobile?.font?.active.typeSize};`}
        ${Styles[StyleName]?.mobile?.font?.active.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.mobile?.font?.active.fontWeight};`}
        ${Styles[StyleName]?.mobile?.font?.active.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.mobile?.font?.active.fontFamily};`}
        ${Styles[StyleName]?.mobile?.font?.active.color === undefined?'':`color:${Styles[StyleName]?.mobile?.font?.active.color};`}
        `
}
const styleMobileActiveBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.mobile?.border === undefined || Styles[StyleName]?.mobile?.borderColor?.active === undefined){
        return ''
    } else {
        if(Styles[StyleName].mobile.border.length === 1){
            if(Styles[StyleName].mobile.borderColor.active.length === 1){
                return `border: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.active[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.active[0]};
                border-right: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.active[1]};
                border-bottom: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.active[2]};
                border-left: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.active[3]};
                `
            }
        } else {
            if(Styles[StyleName].mobile.borderColor.active.length === 1){
                return `
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.active[0]};
                border-right: ${Styles[StyleName].mobile.border[1]} solid ${Styles[StyleName].mobile.borderColor.active[0]};
                border-bottom: ${Styles[StyleName].mobile.border[2]} solid ${Styles[StyleName].mobile.borderColor.active[0]};
                border-left: ${Styles[StyleName].mobile.border[3]} solid ${Styles[StyleName].mobile.borderColor.active[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.active[0]};
                border-right: ${Styles[StyleName].mobile.border[1]} solid ${Styles[StyleName].mobile.borderColor.active[1]};
                border-bottom: ${Styles[StyleName].mobile.border[2]} solid ${Styles[StyleName].mobile.borderColor.active[2]};
                border-left: ${Styles[StyleName].mobile.border[3]} solid ${Styles[StyleName].mobile.borderColor.active[3]};
                `
            }
        }
    }
}
const styleMobileActiveBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.borderRadius?.active === undefined? '': `
        border-radius: ${Styles[StyleName].mobile.borderRadius.active.length === 1?`${Styles[StyleName].mobile.borderRadius.active[0]}`
        :
        `
        ${Styles[StyleName].mobile.borderRadius.active[0]} 
        ${Styles[StyleName].mobile.borderRadius.active[3]} 
        ${Styles[StyleName].mobile.borderRadius.active[1]} 
        ${Styles[StyleName].mobile.borderRadius.active[2]}`};
    `
}

const styleMobileHover = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleMobileHoverWidth(StyleName, Styles);
    style+=styleMobileHoverHeight(StyleName, Styles);
    style+=styleMobileHoverBackground(StyleName, Styles);
    style+=styleMobileHoverBoxShadow(StyleName, Styles);
    style+=styleMobileHoverFont(StyleName, Styles);
    style+=styleMobileHoverBorder(StyleName, Styles);
    style+=styleMobileHoverBorderRadius(StyleName, Styles);

    return style;
}
const styleMobileHoverWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.width?.hover === undefined?'':`width: ${Styles[StyleName].mobile.width.hover};`
}
const styleMobileHoverHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.height?.hover === undefined?'':`height: ${Styles[StyleName].mobile.height.hover};`
}
const styleMobileHoverBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.backgroundColor?.hover === undefined?'':`background: ${Styles[StyleName].mobile.backgroundColor.hover.length > 1? `linear-gradient(${Styles[StyleName].mobile.backgroundColor.hover[0]}deg, ${Styles[StyleName].mobile.backgroundColor.hover[1]},${Styles[StyleName].mobile.backgroundColor.hover[2]})`:Styles[StyleName].mobile.backgroundColor.hover[0]};`
}
const styleMobileHoverBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.boxShadow?.hover === undefined?'':`box-shadow: ${Styles[StyleName].mobile.boxShadow.hover[0]+' '+
    Styles[StyleName].mobile.boxShadow.hover[1]+' '+
    Styles[StyleName].mobile.boxShadow.hover[2]+' '+
    Styles[StyleName].mobile.boxShadow.hover[3]+' '+
    Styles[StyleName].mobile.boxShadow.hover[4]};`
}
const styleMobileHoverFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.font?.hover === undefined?''
        :
        `
        ${Styles[StyleName]?.mobile?.font?.hover.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.mobile?.font?.hover.fontFamily};`}
        ${Styles[StyleName]?.mobile?.font?.hover.size === undefined?'':`font-size:${Styles[StyleName]?.mobile?.font?.hover.size+Styles[StyleName]?.mobile?.font?.hover.typeSize};`}
        ${Styles[StyleName]?.mobile?.font?.hover.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.mobile?.font?.hover.fontWeight};`}
        ${Styles[StyleName]?.mobile?.font?.hover.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.mobile?.font?.hover.fontFamily};`}
        ${Styles[StyleName]?.mobile?.font?.hover.color === undefined?'':`color:${Styles[StyleName]?.mobile?.font?.hover.color};`}
        `
}
const styleMobileHoverBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.mobile?.border === undefined || Styles[StyleName]?.mobile?.borderColor?.hover === undefined){
        return ''
    } else {
        if(Styles[StyleName].mobile.border.length === 1){
            if(Styles[StyleName].mobile.borderColor.hover.length === 1){
                return `border: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.hover[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.hover[0]};
                border-right: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.hover[1]};
                border-bottom: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.hover[2]};
                border-left: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.hover[3]};
                `
            }
        } else {
            if(Styles[StyleName].mobile.borderColor.hover.length === 1){
                return `
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.hover[0]};
                border-right: ${Styles[StyleName].mobile.border[1]} solid ${Styles[StyleName].mobile.borderColor.hover[0]};
                border-bottom: ${Styles[StyleName].mobile.border[2]} solid ${Styles[StyleName].mobile.borderColor.hover[0]};
                border-left: ${Styles[StyleName].mobile.border[3]} solid ${Styles[StyleName].mobile.borderColor.hover[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.hover[0]};
                border-right: ${Styles[StyleName].mobile.border[1]} solid ${Styles[StyleName].mobile.borderColor.hover[1]};
                border-bottom: ${Styles[StyleName].mobile.border[2]} solid ${Styles[StyleName].mobile.borderColor.hover[2]};
                border-left: ${Styles[StyleName].mobile.border[3]} solid ${Styles[StyleName].mobile.borderColor.hover[3]};
                `
            }
        }
    }
}
const styleMobileHoverBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.borderRadius?.hover === undefined? '': `
        border-radius: ${Styles[StyleName].mobile.borderRadius.hover.length === 1?`${Styles[StyleName].mobile.borderRadius.hover[0]}`
        :
        `
        ${Styles[StyleName].mobile.borderRadius.hover[0]} 
        ${Styles[StyleName].mobile.borderRadius.hover[3]} 
        ${Styles[StyleName].mobile.borderRadius.hover[1]} 
        ${Styles[StyleName].mobile.borderRadius.hover[2]}`};
    `
}

const styleMobileNone = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleMobileNoneWidth(StyleName, Styles);
    style+=styleMobileNoneHeight(StyleName, Styles);
    style+=styleMobileNoneBackground(StyleName, Styles);
    style+=styleMobileMargin(StyleName, Styles);
    style+=styleMobilePadding(StyleName, Styles);
    style+=styleMobileNoneBoxShadow(StyleName, Styles);
    style+=styleMobileNoneFont(StyleName, Styles);
    style+=styleMobileNoneBorder(StyleName, Styles);
    style+=styleMobileNoneBorderRadius(StyleName, Styles);
    style+=styleMobileFlex(StyleName, Styles);
    style+=styleMobilePosition(StyleName, Styles);
    style+=styleMobileTransition(StyleName, Styles);
    return style;
}
const styleMobileNoneWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.width?.none === undefined?'':`width: ${Styles[StyleName].mobile.width.none};`
}
const styleMobileNoneHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.height?.none === undefined?'':`height: ${Styles[StyleName].mobile.height.none};`
}
const styleMobileNoneBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.backgroundColor?.none === undefined?'':`background: ${Styles[StyleName].mobile.backgroundColor.none.length > 1? `linear-gradient(${Styles[StyleName].mobile.backgroundColor.none[0]}deg, ${Styles[StyleName].mobile.backgroundColor.none[1]},${Styles[StyleName].mobile.backgroundColor.none[2]})`:Styles[StyleName].mobile.backgroundColor.none[0]};`
}
const styleMobileMargin = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.margin === undefined?'':`margin: ${Styles[StyleName].mobile.margin.length === 1?Styles[StyleName].mobile.margin[0]:Styles[StyleName].mobile.margin[0] + ' ' +
        Styles[StyleName].mobile.margin[1] + ' ' +
        Styles[StyleName].mobile.margin[2] + ' ' + Styles[StyleName].mobile.margin[3]};`
}
const styleMobilePadding = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.padding === undefined?'':`padding: ${Styles[StyleName].mobile.padding.length === 1?Styles[StyleName].mobile.padding[0]:Styles[StyleName].mobile.padding[0] + ' ' +
        Styles[StyleName].mobile.padding[1] + ' ' +
        Styles[StyleName].mobile.padding[2] + ' ' + Styles[StyleName].mobile.padding[3]};`
}
const styleMobileNoneBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.boxShadow?.none === undefined?'':`box-shadow: ${Styles[StyleName].mobile.boxShadow.none[0]+' '+
    Styles[StyleName].mobile.boxShadow.none[1]+' '+
    Styles[StyleName].mobile.boxShadow.none[2]+' '+
    Styles[StyleName].mobile.boxShadow.none[3]+' '+
    Styles[StyleName].mobile.boxShadow.none[4]};`
}
const styleMobileNoneFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.font?.none === undefined?''
        :
        `
        ${Styles[StyleName]?.mobile?.font?.none.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.mobile?.font?.none.fontFamily};`}
        ${Styles[StyleName]?.mobile?.font?.none.size === undefined?'':`font-size:${Styles[StyleName]?.mobile?.font?.none.size+Styles[StyleName]?.mobile?.font?.none.typeSize};`}
        ${Styles[StyleName]?.mobile?.font?.none.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.mobile?.font?.none.fontWeight};`}
        ${Styles[StyleName]?.mobile?.font?.none.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.mobile?.font?.none.fontFamily};`}
        ${Styles[StyleName]?.mobile?.font?.none.color === undefined?'':`color:${Styles[StyleName]?.mobile?.font?.none.color};`}
        `
}
const styleMobileNoneBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.mobile?.border === undefined || Styles[StyleName]?.mobile?.borderColor?.none === undefined){
        return ''
    } else {
        if(Styles[StyleName].mobile.border.length === 1){
            if(Styles[StyleName].mobile.borderColor.none.length === 1){
                return `border: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.none[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.none[0]};
                border-right: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.none[2]};
                border-left: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.none[3]};
                `
            }
        } else {
            if(Styles[StyleName].mobile.borderColor.none.length === 1){
                return `
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.none[0]};
                border-right: ${Styles[StyleName].mobile.border[1]} solid ${Styles[StyleName].mobile.borderColor.none[0]};
                border-bottom: ${Styles[StyleName].mobile.border[2]} solid ${Styles[StyleName].mobile.borderColor.none[0]};
                border-left: ${Styles[StyleName].mobile.border[3]} solid ${Styles[StyleName].mobile.borderColor.none[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].mobile.border[0]} solid ${Styles[StyleName].mobile.borderColor.none[0]};
                border-right: ${Styles[StyleName].mobile.border[1]} solid ${Styles[StyleName].mobile.borderColor.none[1]};
                border-bottom: ${Styles[StyleName].mobile.border[2]} solid ${Styles[StyleName].mobile.borderColor.none[2]};
                border-left: ${Styles[StyleName].mobile.border[3]} solid ${Styles[StyleName].mobile.borderColor.none[3]};
                `
            }
        }
    }
}
const styleMobileNoneBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.borderRadius?.none === undefined? '': `
        border-radius: ${Styles[StyleName].mobile.borderRadius.none.length === 1?`${Styles[StyleName].mobile.borderRadius.none[0]}`
        :
        `
        ${Styles[StyleName].mobile.borderRadius.none[0]} 
        ${Styles[StyleName].mobile.borderRadius.none[3]} 
        ${Styles[StyleName].mobile.borderRadius.none[1]} 
        ${Styles[StyleName].mobile.borderRadius.none[2]}`};
    `
}
const styleMobileFlex = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.flex?.enable === undefined || Styles[StyleName]?.mobile?.flex?.enable === false?''
        :
        `
            display: flex;
            justify-content: ${Styles[StyleName].mobile.flex.justifyContent};
            flex-direction: ${Styles[StyleName].mobile.flex.flexDirection};
            align-items: ${Styles[StyleName].mobile.flex.alignItems};
        `
}
const styleMobilePosition = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.mobile?.position === undefined || Styles[StyleName]?.mobile?.position === [false, false, false, false]?''
        :
        `
        position: fixed;
        ${Styles[StyleName].mobile.position[0] === false? '': 'top:0;'}
        ${Styles[StyleName].mobile.position[1] === false? '': 'right:0;'}
        ${Styles[StyleName].mobile.position[2] === false? '': 'bottom:0;'}
        ${Styles[StyleName].mobile.position[3] === false? '': 'left:0;'}
        `
}
const styleMobileTransition = (StyleName: string, Styles: any):string => {
    //console.log(Styles[StyleName].mobile.transition, '--- transition')
    return Styles[StyleName]?.mobile?.transition === undefined?''
        :
        `
        transition: ${Styles[StyleName].mobile.transition}ms;
        `
}

const styleAllFocus = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleAllFocusWidth(StyleName, Styles);
    style+=styleAllFocusHeight(StyleName, Styles);
    style+=styleAllFocusBackground(StyleName, Styles);
    style+=styleAllFocusBoxShadow(StyleName, Styles);
    style+=styleAllFocusFont(StyleName, Styles);
    style+=styleAllFocusBorder(StyleName, Styles);
    style+=styleAllFocusBorderRadius(StyleName, Styles);
    return style;
}
const styleAllFocusWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.width?.focus === undefined?'':`width: ${Styles[StyleName].all.width.focus};`
}
const styleAllFocusHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.height?.focus === undefined?'':`height: ${Styles[StyleName].all.height.focus};`
}
const styleAllFocusBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.backgroundColor?.focus === undefined?'':`background: ${Styles[StyleName].all.backgroundColor.focus.length > 1? `linear-gradient(${Styles[StyleName].all.backgroundColor.focus[0]}deg, ${Styles[StyleName].all.backgroundColor.focus[1]},${Styles[StyleName].all.backgroundColor.focus[2]})`:Styles[StyleName].all.backgroundColor.focus[0]};`
}
const styleAllFocusBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.boxShadow?.focus === undefined?'':`box-shadow: ${Styles[StyleName].all.boxShadow.focus[0]+' '+
    Styles[StyleName].all.boxShadow.focus[1]+' '+
    Styles[StyleName].all.boxShadow.focus[2]+' '+
    Styles[StyleName].all.boxShadow.focus[3]+' '+
    Styles[StyleName].all.boxShadow.focus[4]};`
}
const styleAllFocusFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.font?.focus === undefined?''
        :
        `
        ${Styles[StyleName]?.all?.font?.focus.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.all?.font?.focus.fontFamily};`}
        ${Styles[StyleName]?.all?.font?.focus.size === undefined?'':`font-size:${Styles[StyleName]?.all?.font?.focus.size+Styles[StyleName]?.all?.font?.focus.typeSize};`}
        ${Styles[StyleName]?.all?.font?.focus.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.all?.font?.focus.fontWeight};`}
        ${Styles[StyleName]?.all?.font?.focus.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.all?.font?.focus.fontFamily};`}
        ${Styles[StyleName]?.all?.font?.focus.color === undefined?'':`color:${Styles[StyleName]?.all?.font?.focus.color};`}
        `
}
const styleAllFocusBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.all?.border === undefined || Styles[StyleName]?.all?.borderColor?.focus === undefined){
        return ''
    } else {
        if(Styles[StyleName].all.border.length === 1){
            if(Styles[StyleName].all.borderColor.focus.length === 1){
                return `border: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.focus[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.focus[0]};
                border-right: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.focus[1]};
                border-bottom: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.focus[2]};
                border-left: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.focus[3]};
                `
            }
        } else {
            if(Styles[StyleName].all.borderColor.focus.length === 1){
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.focus[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.focus[0]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.focus[0]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.focus[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.focus[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.focus[1]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.focus[2]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.focus[3]};
                `
            }
        }
    }
}
const styleAllFocusBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.borderRadius?.focus === undefined? '': `
        border-radius: ${Styles[StyleName].all.borderRadius.focus.length === 1?`${Styles[StyleName].all.borderRadius.focus[0]}`
        :
        `
        ${Styles[StyleName].all.borderRadius.focus[0]} 
        ${Styles[StyleName].all.borderRadius.focus[3]} 
        ${Styles[StyleName].all.borderRadius.focus[1]} 
        ${Styles[StyleName].all.borderRadius.focus[2]}`};
    `
}

const styleAllActive = (StyleName: string, Styles: any):string => {
    let style = '';
    style+=styleAllActiveWidth(StyleName, Styles);
    style+=styleAllActiveHeight(StyleName, Styles);
    style+=styleAllActiveBackground(StyleName, Styles);
    style+=styleAllActiveBoxShadow(StyleName, Styles);
    style+=styleAllActiveFont(StyleName, Styles);
    style+=styleAllActiveBorder(StyleName, Styles);
    style+=styleAllActiveBorderRadius(StyleName, Styles);

    return style;
}
const styleAllActiveWidth = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.width?.active === undefined?'':`width: ${Styles[StyleName].all.width.active};`
}
const styleAllActiveHeight = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.height?.active === undefined?'':`height: ${Styles[StyleName].all.height.active};`
}
const styleAllActiveBackground = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.backgroundColor?.active === undefined?'':`background: ${Styles[StyleName].all.backgroundColor.active.length > 1? `linear-gradient(${Styles[StyleName].all.backgroundColor.active[0]}deg, ${Styles[StyleName].all.backgroundColor.active[1]},${Styles[StyleName].all.backgroundColor.active[2]})`:Styles[StyleName].all.backgroundColor.active[0]};`
}
const styleAllActiveBoxShadow = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.boxShadow?.active === undefined?'':`box-shadow: ${Styles[StyleName].all.boxShadow.active[0]+' '+
    Styles[StyleName].all.boxShadow.active[1]+' '+
    Styles[StyleName].all.boxShadow.active[2]+' '+
    Styles[StyleName].all.boxShadow.active[3]+' '+
    Styles[StyleName].all.boxShadow.active[4]};`
}
const styleAllActiveFont = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.font?.active === undefined?''
        :
        `
        ${Styles[StyleName]?.all?.font?.active.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.all?.font?.active.fontFamily};`}
        ${Styles[StyleName]?.all?.font?.active.size === undefined?'':`font-size:${Styles[StyleName]?.all?.font?.active.size+Styles[StyleName]?.all?.font?.active.typeSize};`}
        ${Styles[StyleName]?.all?.font?.active.fontWeight === undefined?'':`font-weight:${Styles[StyleName]?.all?.font?.active.fontWeight};`}
        ${Styles[StyleName]?.all?.font?.active.fontFamily === undefined?'':`font-family:${Styles[StyleName]?.all?.font?.active.fontFamily};`}
        ${Styles[StyleName]?.all?.font?.active.color === undefined?'':`color:${Styles[StyleName]?.all?.font?.active.color};`}
        `
}
const styleAllActiveBorder = (StyleName: string, Styles: any):string => {
    if(Styles[StyleName]?.all?.border === undefined || Styles[StyleName]?.all?.borderColor?.active === undefined){
        return ''
    } else {
        if(Styles[StyleName].all.border.length === 1){
            if(Styles[StyleName].all.borderColor.active.length === 1){
                return `border: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.active[0]};`
            } else {
                return`
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.active[0]};
                border-right: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.active[1]};
                border-bottom: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.active[2]};
                border-left: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.active[3]};
                `
            }
        } else {
            if(Styles[StyleName].all.borderColor.active.length === 1){
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.active[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.active[0]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.active[0]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.active[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.active[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.active[1]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.active[2]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.active[3]};
                `
            }
        }
    }
}
const styleAllActiveBorderRadius = (StyleName: string, Styles: any):string => {
    return Styles[StyleName]?.all?.borderRadius?.active === undefined? '': `
        border-radius: ${Styles[StyleName].all.borderRadius.active.length === 1?`${Styles[StyleName].all.borderRadius.active[0]}`
        :
        `
        ${Styles[StyleName].all.borderRadius.active[0]} 
        ${Styles[StyleName].all.borderRadius.active[3]} 
        ${Styles[StyleName].all.borderRadius.active[1]} 
        ${Styles[StyleName].all.borderRadius.active[2]}`};
    `
}

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
            if(Styles[StyleName].all.borderColor.hover.length === 1){
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
            if(Styles[StyleName].all.borderColor.hover.length === 1){
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.hover[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.hover[0]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.hover[0]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.hover[0]};
                `
            } else {
                return `
                border-top: ${Styles[StyleName].all.border[0]} solid ${Styles[StyleName].all.borderColor.hover[0]};
                border-right: ${Styles[StyleName].all.border[1]} solid ${Styles[StyleName].all.borderColor.hover[1]};
                border-bottom: ${Styles[StyleName].all.border[2]} solid ${Styles[StyleName].all.borderColor.hover[2]};
                border-left: ${Styles[StyleName].all.border[3]} solid ${Styles[StyleName].all.borderColor.hover[3]};
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
    if(Styles[StyleName]?.all?.border === undefined || Styles[StyleName]?.all?.borderColor?.none === undefined){
        return ''
    } else {
        if(Styles[StyleName].all.border.length === 1){
            if(Styles[StyleName].all.borderColor.none.length === 1){
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
            if(Styles[StyleName].all.borderColor.none.length === 1){
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
                        *::before,
                        *::after {
                          box-sizing: border-box;
                        }
                        *{
                            margin:0;
                            padding:0;
                            box-sizing: border-box;
                            word-wrap: break-word;
                            outline: none;
                            background: none;
                            vertical-align: baseline;
                            font-weight: inherit;
                            font-family: inherit;
                            font-style: inherit;
                            font-size: 100%;
                            border: 0 none;
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
