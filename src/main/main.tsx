import React, {Component} from "react";
import './style.css'
import LeftMenu from "./leftMenu";
import DevicePreview from "./devicePreview";
import RightMenu from "./rightMenu";
import ModalChoice from "./modalChoice";
import HTMLTags from "./HTMLtags";
import {Modal, ModalExport, ModalTemplateName} from './Modals';
import Templates from "./templates";
import styleTemplates, {styleTemplate} from "./styles";
// import template from "./templates"


const useBootstrap: boolean = false;

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
const generateCSS = (Style: styleTemplate) => {
    let allStyles = Object.keys(Style)
    //let stringStyles = allStyles.map(elem => convertStyleToString(elem))
    console.log(allStyles)
}

const convertStyleToString = (elem: string) => {
    return Object.keys(styleTemplates[elem])
}

const constructPage = ():string => {
    return '<!DOCTYPE html> \n' +
        '<html lang="en"> \n' +
        '     <head> \n' +
        '         <meta charset="UTF-8"> \n' +
        '         <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n' +
        `         ${useBootstrap?'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">':''}` +
        '         <link rel="stylesheet" href="style.css"> \n' +
        '            <title> \n' +
        `                ${tree.name}` + ' \n' +
        '            </title>  \n' +
        `            <style>
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
        '     </head>  \n' +
        '    ' + generateHTMLTree(tree) + '\n' +
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
            array.classList = elemName.split('.')
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
        styles: false
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
    componentDidMount() {
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
                        addToLayerDown: true
                    })
                    //console.log('event.target -- ', (event.target as Element).getAttribute('id'))
                } else {
                    if(['Page'].includes((event.target as Element).innerHTML)){
                        self.setState({
                            showDeleteBtn: false,
                            showDuplicate: false,
                            hide: false,
                            addToLayerUp: false,
                            addToLayerDown: false
                        })
                    } else {
                        self.setState({
                            showDeleteBtn: false,
                            showDuplicate: false,
                            hide: true
                        })
                    }
                }
                self.setState({showModal: true,
                                     x: clickX,
                                     y: clickY,
                                     lastClickedElement: (event.target as Element).innerHTML,
                                     lastClickedElementId: (event.target as Element).getAttribute('id')});
                console.log('last clicked element ---', self.state.lastClickedElement)
                console.log('last clicked element id ---', self.state.lastClickedElementId)
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
                    showCss: false
                })
                self.setState({
                    showCss: true,
                    lastClickedElement: (event.target as Element).innerHTML,
                    lastClickedElementId: (event.target as Element).getAttribute('id')
                });
            }
            if((event.target as Element).className === 'btnDownload'){
                self.setState({
                    showCss: false,
                    styles: false
                });
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
                <ModalChoice showModal={this.state.showModal} XPos={this.state.x} YPos={this.state.y}>
                    {this.state.addToLayerUp?<button className={"btn-choice"} onClick={() => this.setChosenOption('up')}>Add layer up</button>:''}
                    <button className={"btn-choice"} onClick={()=>this.setChosenOption('inside')}>Add inside</button>
                    {this.state.addToLayerDown?<button className={"btn-choice"} onClick={() => this.setChosenOption('down')}>Add layer down</button>:''}
                    <div className="hr"/>
                    <button className={"btn-choice"} onClick={()=>{this.showStyles()}}>Styles</button>
                    {this.state.showDeleteBtn?<button className={"btn-choice"} onClick={this.showModalTemplateName}>Save Template</button>:''}
                    {this.state.hide?<div className="hr"/>:''}
                    {this.state.hide?<button className={"btn-choice"} onClick={()=>{reCreatePathTree(this.state.lastClickedElementId, 'hide', '')}}>Hide/Show children</button>:''}
                    {this.state.showDeleteBtn?<button className={"btn-choice"} onClick={()=>{reCreatePathTree(this.state.lastClickedElementId, 'duplicate', '')}}>Duplicate</button>:''}
                    {this.state.showDeleteBtn?<div className="hr"/>:''}
                    {this.state.showDeleteBtn?<button className={"btn-choice"} onClick={()=>{reCreatePathTree(this.state.lastClickedElementId, 'remove',''); this.state.showCss=false}}>Delete</button>:''}
                </ModalChoice>
                <LeftMenu tree={createTree(tree)}/>
                <DevicePreview>
                    {this.props.children}
                </DevicePreview>
                <RightMenu exportModal={this.showExport}
                           css={this.state.showCss}
                           elem={this.state.lastClickedElement}
                           elemID={this.state.lastClickedElementId}
                           insertInfo={reCreatePathTree}
                           searchString={this.state.searchString}
                           changeSearchString={this.changeSearchString}
                           template={Templates}
                           objInfo={reCreatePathTree(this.state.lastClickedElementId, 'getInfo', '')}
                           styles={this.state.styles}>
                    {HTMLTags(Templates, this.state.searchString)}
                </RightMenu>
            </div>
        )
    }
}

export default Main;