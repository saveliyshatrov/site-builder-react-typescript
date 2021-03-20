import React from "react";

export interface template {
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

interface temp {
    [key: string]: template
}

let Templates: temp = {
    "Page": {
        name: 'Page',
        tagName: 'body',
        classList: ['margin-0'],
        text: '',
        children: [
            {
                name: 'Header',
                tagName: 'header',
                classList: [],
                text: '',
                children: [],
                placeholder: undefined,
                type: undefined,
                src: undefined,
                For: undefined,
                ID: undefined,
            },
            {
                name: 'Main',
                tagName: 'main',
                classList: [],
                text: '',
                children: [],
                placeholder: undefined,
                type: undefined,
                src: undefined,
                For: undefined,
                ID: undefined,
            },
            {
                name: 'Footer',
                tagName: 'footer',
                classList: [],
                text: '',
                children: [],
                placeholder: undefined,
                type: undefined,
                src: undefined,
                For: undefined,
                ID: undefined,
            },
        ],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    'Header':{
        name: 'Header',
        tagName: 'header',
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    'Nav':{
        name: 'Nav',
        tagName: 'nav',
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    'Main':{
        name: 'Main',
        tagName: 'main',
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    'Footer':{
        name: 'Footer',
        tagName: 'footer',
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "block": {
        name: 'block',
        tagName: 'div',
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "picture": {
        name: 'picture',
        tagName: 'img',
        classList: [],
        children: [],
        text: undefined,
        placeholder: undefined,
        type: undefined,
        src: '',
        For: undefined,
        ID: undefined,
    },
    "data input": {
        name: 'data input',
        tagName: 'input',
        classList: [],
        placeholder: '',
        type: '',
        children: [],
        text: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "paragraph": {
        name: 'paragraph',
        tagName: 'p',
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "line": {
        name: "line",
        tagName: 'hr',
        classList: [],
        children: [],
        text: undefined,
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "button": {
        name: "button",
        tagName: 'button',
        classList: [],
        text: 'button',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "form": {
        name: "form",
        tagName: 'form',
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "label": {
        name: "label",
        tagName: 'label',
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "list":{
        name: "list",
        tagName: "ul",
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "list item":{
        name: "list item",
        tagName: "li",
        classList: [],
        text: 'item of list',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    },
    "h5":{
        name: "h5",
        tagName: "h5",
        classList: [],
        text: '',
        children: [],
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
    }
}
let bootstrap: boolean = true
if(bootstrap){
    Templates['CARD'] = {
        name: "CARD",
        tagName: "div",
        classList: ['card', 'col-12'],
        text: '',
        placeholder: undefined,
        type: undefined,
        src: undefined,
        For: undefined,
        ID: undefined,
        children: [
            {
                name: "Block",
                tagName: "div",
                classList: ['card-body'],
                text: '',
                placeholder: undefined,
                type: undefined,
                src: undefined,
                For: undefined,
                ID: undefined,
                children: [
                    {
                        name: "h5",
                        tagName: "h5",
                        classList: ['card-title'],
                        text: 'Title',
                        children: [],
                        placeholder: undefined,
                        type: undefined,
                        src: undefined,
                        For: undefined,
                        ID: undefined,
                    },
                    {
                        name: 'paragraph',
                        tagName: 'p',
                        classList: ['card-text'],
                        text: 'text',
                        children: [],
                        placeholder: undefined,
                        type: undefined,
                        src: undefined,
                        For: undefined,
                        ID: undefined,
                    },
                    {
                        name: "button",
                        tagName: 'button',
                        classList: ['btn', 'btn-primary'],
                        text: 'Button',
                        children: [],
                        placeholder: undefined,
                        type: undefined,
                        src: undefined,
                        For: undefined,
                        ID: undefined,
                    }
                ]
            }
        ],
    }
}

// const addElementsBootstrap = (templates: temp):temp => {
//     templates["container fluid"] = {
//         name: "container fluid",
//         tagName: 'div',
//         classList: ['container-fluid'],
//         children: []
//     }
//     templates["buttons group"] = {
//         name: "buttons group",
//         tagName: 'div',
//         classList: ['btn-group'],
//         children: [],
//         text: ''
//     }
//     templates["buttons group vertical"] = {
//         name: "buttons group vertical",
//         tagName: 'div',
//         classList: ['btn-group-vertical'],
//         children: [],
//         text: ''
//     }
//     templates["col-1"] = {
//         name: "col-1",
//         tagName: 'div',
//         classList: ['col-1'],
//         children: [],
//         text: ''
//     }
//     templates["col-2"] = {
//         name: "col-2",
//         tagName: 'div',
//         classList: ['col-2'],
//         children: [],
//         text: ''
//     }
//     templates["col-3"] = {
//         name: "col-3",
//         tagName: 'div',
//         classList: ['col-3'],
//         children: [],
//         text: ''
//     }
//     templates["col-4"] = {
//         name: "col-4",
//         tagName: 'div',
//         classList: ['col-4'],
//         children: [],
//         text: ''
//     }
//     templates["col-5"] = {
//         name: "col-5",
//         tagName: 'div',
//         classList: ['col-5'],
//         children: [],
//         text: ''
//     }
//     templates["col-6"] = {
//         name: "col-6",
//         tagName: 'div',
//         classList: ['col-6'],
//         children: [],
//         text: ''
//     }
//     templates["col-7"] = {
//         name: "col-7",
//         tagName: 'div',
//         classList: ['col-7'],
//         children: [],
//         text: ''
//     }
//     templates["col-8"] = {
//         name: "col-8",
//         tagName: 'div',
//         classList: ['col-8'],
//         children: [],
//         text: ''
//     }
//     templates["col-9"] = {
//         name: "col-9",
//         tagName: 'div',
//         classList: ['col-9'],
//         children: [],
//         text: ''
//     }
//     templates["col-10"] = {
//         name: "col-10",
//         tagName: 'div',
//         classList: ['col-10'],
//         children: [],
//         text: ''
//     }
//     //row
//     templates["card"] = {
//         name: "card",
//         tagName: 'div',
//         classList: ['card'],
//         children: [],
//         text: ''
//     }
//     templates["card header"] = {
//         name: "card header",
//         tagName: 'div',
//         classList: ['card-header'],
//         children: [],
//         text: 'card-header'
//     }
//     templates["card body"] = {
//         name: "card body",
//         tagName: 'div',
//         classList: ['card-body'],
//         children: [],
//         text: ''
//     }
//     templates["card title"] = {
//         name: "card title",
//         tagName: 'h5',
//         classList: ['card-title'],
//         children: [],
//         text: 'card-title'
//     }
//     templates["card text"] = {
//         name: "card text",
//         tagName: 'p',
//         classList: ['card-text'],
//         children: [],
//         text: 'card-text'
//     }
//     templates["card footer"] = {
//         name: "card footer",
//         tagName: 'div',
//         classList: ['card-footer'],
//         children: [],
//         text: 'card-footer'
//     }
//
//     templates["button primary"] = {
//         name: "button primary",
//         tagName: 'button',
//         classList: ['btn', 'btn-primary'],
//         children: [],
//         text: 'button primary'
//     }
//     templates["button success"] = {
//         name: "button success",
//         tagName: 'button',
//         classList: ['btn', 'btn-success'],
//         children: [],
//         text: 'button success'
//     }
//     templates["button secondary"] = {
//         name: "button secondary",
//         tagName: 'button',
//         classList: ['btn', 'btn-secondary'],
//         children: [],
//         text: 'button secondary'
//     }
//     templates["button danger"] = {
//         name: "button danger",
//         tagName: 'button',
//         classList: ['btn', 'btn-danger'],
//         children: [],
//         text: 'button danger'
//     }
//     templates["button warning"] = {
//         name: "button warning",
//         tagName: 'button',
//         classList: ['btn', 'btn-warning'],
//         children: [],
//         text: 'button warning'
//     }
//     templates["button info"] = {
//         name: "button info",
//         tagName: 'button',
//         classList: ['btn', 'btn-info'],
//         children: [],
//         text: 'button info'
//     }
//     templates["button light"] = {
//         name: "button light",
//         tagName: 'button',
//         classList: ['btn', 'btn-light'],
//         children: [],
//         text: 'button light'
//     }
//     templates["button dark"] = {
//         name: "button dark",
//         tagName: 'button',
//         classList: ['btn', 'btn-dark'],
//         children: [],
//         text: 'button dark'
//     }
//     templates["button link"] = {
//         name: "button link",
//         tagName: 'button',
//         classList: ['btn', 'btn-link'],
//         children: [],
//         text: 'button link'
//     }
//
//     templates["button primary outline"] = {
//         name: "button primary outline",
//         tagName: 'button',
//         classList: ['btn', 'btn-outline-primary'],
//         children: [],
//         text: 'button primary'
//     }
//     templates["button success outline"] = {
//         name: "button success outline",
//         tagName: 'button',
//         classList: ['btn', 'btn-outline-success'],
//         children: [],
//         text: 'button success'
//     }
//     templates["button secondary outline"] = {
//         name: "button secondary outline",
//         tagName: 'button',
//         classList: ['btn', 'btn-outline-secondary'],
//         children: [],
//         text: 'button secondary'
//     }
//     templates["button danger outline"] = {
//         name: "button danger outline",
//         tagName: 'button',
//         classList: ['btn', 'btn-outline-danger'],
//         children: [],
//         text: 'button danger'
//     }
//     templates["button warning outline"] = {
//         name: "button warning outline",
//         tagName: 'button',
//         classList: ['btn', 'btn-outline-warning'],
//         children: [],
//         text: 'button warning'
//     }
//     templates["button info outline"] = {
//         name: "button info outline",
//         tagName: 'button',
//         classList: ['btn', 'btn-outline-info'],
//         children: [],
//         text: 'button info'
//     }
//     templates["button light outline"] = {
//         name: "button light outline",
//         tagName: 'button',
//         classList: ['btn', 'btn-outline-light'],
//         children: [],
//         text: 'button light'
//     }
//     templates["button dark outline"] = {
//         name: "button dark outline",
//         tagName: 'button',
//         classList: ['btn', 'btn-outline-dark'],
//         children: [],
//         text: 'button dark'
//     }
//
//     return templates
// }
//
// const useBootstrap: boolean = false;
// if(useBootstrap){
//     Templates = addElementsBootstrap(Templates)
// }

export default Templates;
