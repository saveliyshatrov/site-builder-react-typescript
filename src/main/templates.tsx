import React from "react";

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
// "Page": template,
//     "div": template,
//     "img": template,
//     "input": template,
//     "p": template,
interface temp {
    [key: string]: template
}

const Templates: temp = {
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
                children: []
            },
            {
                name: 'Main',
                tagName: 'main',
                classList: [],
                text: '',
                children: []
            },
            {
                name: 'Footer',
                tagName: 'footer',
                classList: [],
                text: '',
                children: []
            },
        ]
    },
    "block": {
        name: 'block',
        tagName: 'div',
        classList: [],
        text: '',
        children: []
    },
    "picture": {
        name: 'picture',
        tagName: 'img',
        classList: [],
        src: '',
        children: []
    },
    "data input": {
        name: 'data input',
        tagName: 'input',
        classList: [],
        placeholder: '',
        type: '',
        children: []
    },
    "paragraph": {
        name: 'paragraph',
        tagName: 'p',
        classList: [],
        text: '',
        children: []
    },
    "line": {
        name: "line",
        tagName: 'hr',
        classList: [],
        children: []
    }
}

export default Templates;