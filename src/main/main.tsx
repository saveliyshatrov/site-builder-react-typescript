import React, {Component} from "react";
import './style.css'
import LeftMenu from "./leftMenu";
import DevicePreview from "./devicePreview";
import RightMenu from "./rightMenu";
import ModalChoice from "./modalChoice";
import HTMLTags from "./HTMLtags";
import {Modal, ModalExport, ModalTemplateName} from './Modals';
import Templates from "./templates";

const useBootstrap: boolean = false;

type treeOfTree = {
    name: string,
    tagName: string,
    children: Array<treeOfTree>
    key: number,
    classList: Array<string>,
    text?: string,
    id: string,
    placeholder?:string
    type?: string,
    src?: string,
    hide: boolean
}

type template = {
    name: string
    tagName: string,
    classList: Array<string>,
    text?: string,
    children: Array<template>,
    placeholder?: string,
    type?: string,
    src?: string,
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
        },
        {
            classList: [],
            text: 'im Main',
            name: 'Main',
            tagName: 'main',
            key: createUniqIdInt(),
            id: createUniqId(),
            hide: false,
            children: []
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
        }
    ]
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
            return `<${Tree.tagName} ${Tree.classList.length===0?'':"class=" + Tree.classList.join(' ')} ${Tree.src?Tree.src:''}/>`
        }
        if(Tree.tagName === 'img'){
            return `<${Tree.tagName} ${Tree.classList.length===0?'':"class=" + Tree.classList.join(' ')} ${Tree.placeholder?Tree.placeholder:''} ${Tree.type?Tree.type:''}/>`
        }
        if(Tree.tagName === 'hr'){
            return `<${Tree.tagName} ${Tree.classList.length===0?'':"class=" + Tree.classList.join(' ')}/>`
        }
        else{
            return `<${Tree.tagName} ${Tree.classList.length===0?'':`class="${Tree.classList.join(' ')}"`}>${Tree.text}</${Tree.tagName}>`
        }
    } else {
        let partTree = `<${Tree.tagName} ${Tree.classList.length===0?'':"class=" + Tree.classList.join(' ')}>`
        for(let child in Tree.children){
            partTree += generateHTMLTree(Tree.children[child])
        }
        partTree += `</${Tree.tagName}>`
        return partTree
    }

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
        '     </head>  \n' +
        '    ' + generateHTMLTree(tree) + '\n' +
        '</html>';
        // '        ' + '<style>' + this.generateCSS(this.CSSArray) + '</style>' +'\n' +
}

const generateTree = (tree: treeOfTree, hide: boolean = false) => {
    if(tree.children.length === 0){
        return <ul className={hide?"d-none": ""}><li><div className={"tree-elem"} key={tree.key} id={tree.id}>{tree.name}</div></li></ul>
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
        return <ul className={hide?"d-none": ""}><li><div className={tree.hide?"tree-elem-bb-1":"tree-elem"} key={tree.key} id={tree.id}>{tree.name}</div>{array}</li></ul>
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
        key: createUniqIdInt(),
        id: createUniqId(),
        children: []
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
            let Elem = findElemById(array.children[child], id, command, elemName);
            if(Elem){
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
                        id: createUniqId()
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
                        id: createUniqId()
                    }
                    array.children = insertElemToTree(array.children, obj, child)
                    return undefined;
                }
                if(command === 'down'){
                    let obj = {
                        classList: [],
                        text: '',
                        name: elemName,
                        tagName: Templates[elemName].tagName,
                        children: [],
                        hide: false,
                        key: createUniqIdInt(),
                        id: createUniqId()
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
                            children: array.children[child].children.map(elem => createTemplateChild(elem))
                        }
                    }
                    else{
                        Templates[elemName] = {
                            name: elemName,
                            tagName: array.children[child].tagName,
                            classList: array.children[child].classList,
                            children: []
                        }
                    }
                    console.log(Templates[elemName])
                }
                if(command === 'insertText'){
                    array.children[child].text = elemName
                }      //elemName as Text
                if(command === 'insertSrc'){
                    array.children[child].src = elemName
                }       //elemName as Src
                if(command === 'insertClasses'){
                    array.children[child].classList = elemName.split('.')
                }   //elemName as string - class1.class2.class3
                if(command === 'insertType'){
                    array.children[child].type = elemName
                }      //elemName as Type
            }
        }
    }
    if(array.id === id){
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
            hide: false,
            id: createUniqId(),
            key: createUniqIdInt()
        }
    }
    else return {
        name: obj.name,
        tagName: obj.tagName,
        children: obj.children.map(elem => convertTemplateToTreeOfTree(elem)),
        classList: obj.classList,
        hide: false,
        id: createUniqId(),
        key: createUniqIdInt()
    }
}

const createTemplateChild = (obj: treeOfTree):template => {
    if(obj.tagName === 'div'){
        return {
            name: obj.name,
            tagName: obj.tagName,
            classList: obj.classList,
            text: obj.text,
            children: obj.children.map(elem => createTemplateChild(elem))
        };
    }
    if(obj.tagName === 'hr'){
        return {
            name: obj.name,
            tagName: obj.tagName,
            classList: obj.classList,
            children: []
        };
    }
    if(obj.tagName === 'input'){
        return {
            name: obj.name,
            tagName: obj.tagName,
            classList: obj.classList,
            type: obj.type,
            placeholder: obj.placeholder,
            children: []
        };
    }
    if(obj.tagName === 'img'){
        return {
            name: obj.name,
            tagName: obj.tagName,
            classList: obj.classList,
            src: obj.src,
            children: []
        };
    }
    if(obj.tagName === 'p'){
        return {
            name: obj.name,
            tagName: obj.tagName,
            classList: obj.classList,
            text: obj.text,
            children: []
        };
    } else {
        return {
            name: obj.name,
            tagName: obj.tagName,
            classList: obj.classList,
            children: []
        }
    }
}

const reCreatePathTree = (id: number, command:string, elemName:string) =>{
    findElemById(tree, id.toString(), command, elemName);
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
        searchString: ''
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
    componentDidMount() {
        const self = this;
        document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            const clickX = event.clientX;
            const clickY = event.clientY;
            if((event.target as Element).className === 'tree-elem' || (event.target as Element).className === 'tree-elem-bb-1'){
                if(!['Header', 'Main', 'Footer', 'Page'].includes((event.target as Element).innerHTML)){
                    self.setState({
                        showDeleteBtn: true,
                        showDuplicate: true,
                        hide: true
                    })
                    //console.log('event.target -- ', (event.target as Element).getAttribute('id'))
                } else {
                    if(['Page'].includes((event.target as Element).innerHTML)){
                        self.setState({
                            showDeleteBtn: false,
                            showDuplicate: false,
                            hide: false
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
            if((event.target as Element).className === 'choice-elem'){
                self.setState({
                    elementToAdd: (event.target as Element).innerHTML
                });
            }
            if((event.target as Element).className === 'choice-elem' && self.state.chosenOption !== '') {
                console.log(self.state.chosenOption, '---', self.state.elementToAdd);
                reCreatePathTree(self.state.lastClickedElementId, self.state.chosenOption, self.state.elementToAdd)//ДОРАБОТАТЬ!!!
                self.setState({chosenOption:''})
                self.setState({elementToAdd:''})
            }
            if((event.target as Element).className === 'tree-elem' || (event.target as Element).className === 'tree-elem-bb-1'){
                self.setState({
                    showCss: true,
                    lastClickedElement: (event.target as Element).innerHTML,
                });
            }
            if((event.target as Element).className === 'btnDownload'){
                self.setState({
                    showCss: false
                });
            }
            //ЛОГИКА РАБОТЫ ВПИХИВАНИЯ САЙТА В IFRAME -- НЕ ТРОГАТЬ
            const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
                input !== null && input.tagName === 'IFRAME';
            let iframe = document.getElementById("iframe");
            if (isIFrame(iframe) && iframe.contentWindow) {
                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write(constructPage());
                iframe.contentWindow.document.close()
            }
        });
    }
    render(){
        return (
            <div className={"main"}>
                <ModalTemplateName hidden={this.state.modalTemplateName} funcClose={this.closeModalTemplateName} funcSave={reCreatePathTree} paramLastClickedIdElem={this.state.lastClickedElementId} command={'saveTemplate'}/>
                <Modal header={"Alert user"} main={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} func={this.hideAlert} show={this.state.alert}></Modal>
                <ModalExport show={this.state.export} func={this.hideExport}></ModalExport>
                <ModalChoice showModal={this.state.showModal} XPos={this.state.x} YPos={this.state.y}>
                    <button className={"btn-choice"} onClick={()=>this.setChosenOption('up')}>Add layer up</button>
                    <button className={"btn-choice"} onClick={()=>this.setChosenOption('inside')}>Add inside</button>
                    <button className={"btn-choice"} onClick={()=>this.setChosenOption('down')}>Add layer down</button>
                    {this.state.addStyle?<div className="hr"></div>:''}
                    {this.state.addStyle?<button className={"btn-choice"} onClick={()=>{reCreatePathTree(this.state.lastClickedElementId, 'style', '')}}>Styles</button>:''}
                    {this.state.showDeleteBtn?<button className={"btn-choice"} onClick={this.showModalTemplateName}>Save Template</button>:''}
                    {this.state.hide?<div className="hr"></div>:''}
                    {this.state.hide?<button className={"btn-choice"} onClick={()=>{reCreatePathTree(this.state.lastClickedElementId, 'hide', '')}}>Hide/Show children</button>:''}
                    {this.state.showDeleteBtn?<button className={"btn-choice"} onClick={()=>{reCreatePathTree(this.state.lastClickedElementId, 'duplicate', '')}}>Duplicate</button>:''}
                    {this.state.showDeleteBtn?<div className="hr"/>:''}
                    {this.state.showDeleteBtn?<button className={"btn-choice"} onClick={()=>{reCreatePathTree(this.state.lastClickedElementId, 'remove','')}}>Delete</button>:''}
                </ModalChoice>
                <LeftMenu tree={createTree(tree)}/>
                <DevicePreview>
                    {this.props.children}
                </DevicePreview>
                <RightMenu exportModal={this.showExport} css={this.state.showCss} elem={this.state.lastClickedElement} searchString={this.state.searchString} changeSearchString={this.changeSearchString}>
                    {HTMLTags(Templates, this.state.searchString)}
                </RightMenu>
            </div>
        )
    }
}

export default Main;