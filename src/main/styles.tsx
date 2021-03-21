import React from "react";

type Width = {
    width: number
    size: 'px' | '%' | 'em'
}
type Height = {
    width: number
    size: 'px' | '%' | 'em'
}
type Margin = {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number,
    all?: boolean
    size: 'px' | '%' | 'em'
}
type Padding = {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number,
    all?: boolean,
    size: 'px' | '%' | 'em'
}
type BoxShadow = {
    x: number,
    y: number,
    blur?: number,
    sizing?: number,
    size: 'px' | '%' | 'em'
}
type Font = {
    weight?: string
    family?: string
    size?: 'px' | '%' | 'em'
}
type Position = {
    top: number,
    right: number,
    bottom: number,
    left: number,
    size: 'px' | '%' | 'em'
}
type Border = {
    radius?: {
        topLeft: number,
        topRight: number,
        bottomRight: number,
        bottomLeft: number,
        size: 'px' | '%' | 'em'
    }
    top?: number,
    right?: number,
    bottom?: number,
    left?: number
    size: 'px' | '%' | 'em'
}
type styleTemplate = {
    width?: {
        mobile?: Width
        tablet?: Width
        desktop?: Width
        allSame?: boolean
    }
    height?: {
        mobile?: Height
        tablet?: Height
        desktop?: Height
        allSame?: boolean
    }
    margin?: {
        mobile?: Margin
        tablet?: Margin
        desktop?: Margin
        allSame?: boolean
    }
    padding?: {
        mobile?: Padding
        tablet?: Padding
        desktop?: Padding
        allSame?: boolean
    }
    color?: string,
    backgroundColor?: string,
    background?: string,
    boxShadow?: {
        mobile?: BoxShadow
        tablet?: BoxShadow
        desktop?: BoxShadow
        allSame?: boolean
    }
    font?: {
        mobile?: Font
        tablet?: Font
        desktop?: Font
        allSame?: boolean
    }
    display?: {
        flex: {
            enable?: boolean
            direction?: string
            justify_content?: string
            align_items?: string
        }
    }
    position?: {
        pos: 'absolute' | 'relative',
        mobile?: Position
        tablet?: Position
        desktop?: Position
        allSame?: boolean
    }
    border?:{
        mobile?: Border
        tablet?: Border
        desktop?: Border
        allSame?: boolean
    }
    transition?: number
    objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none'
    hover?:{
        width?: {
            mobile?: Width
            tablet?: Width
            desktop?: Width
            allSame?: boolean
        }
        height?: {
            mobile?: Height
            tablet?: Height
            desktop?: Height
            allSame?: boolean
        }
        margin?: {
            mobile?: Margin
            tablet?: Margin
            desktop?: Margin
            allSame?: boolean
        }
        padding?: {
            mobile?: Padding
            tablet?: Padding
            desktop?: Padding
            allSame?: boolean
        }
        color?: string,
        backgroundColor?: string,
        boxShadow?: {
            mobile?: BoxShadow
            tablet?: BoxShadow
            desktop?: BoxShadow
            allSame?: boolean
        }
        font?: {
            mobile?: Font
            tablet?: Font
            desktop?: Font
            allSame?: boolean
        }
        display?: {
            flex: {
                enable?: boolean
                direction?: string
                justify_content?: string
                align_items?: string
            }
        }
        position?: {
            pos: 'absolute' | 'relative',
            mobile?: Position
            tablet?: Position
            desktop?: Position
            allSame?: boolean
        }
        border?:{
            mobile?: Border
            tablet?: Border
            desktop?: Border
            allSame?: boolean
        }
        objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none'
    }
    active?: {
        width?: {
            mobile?: Width
            tablet?: Width
            desktop?: Width
            allSame?: boolean
        }
        height?: {
            mobile?: Height
            tablet?: Height
            desktop?: Height
            allSame?: boolean
        }
        margin?: {
            mobile?: Margin
            tablet?: Margin
            desktop?: Margin
            allSame?: boolean
        }
        padding?: {
            mobile?: Padding
            tablet?: Padding
            desktop?: Padding
            allSame?: boolean
        }
        color?: string,
        backgroundColor?: string,
        boxShadow?: {
            mobile?: BoxShadow
            tablet?: BoxShadow
            desktop?: BoxShadow
            allSame?: boolean
        }
        font?: {
            mobile?: Font
            tablet?: Font
            desktop?: Font
            allSame?: boolean
        }
        display?: {
            flex: {
                enable?: boolean
                direction?: string
                justify_content?: string
                align_items?: string
            }
        }
        position?: {
            pos: 'absolute' | 'relative',
            mobile?: Position
            tablet?: Position
            desktop?: Position
            allSame?: boolean
        }
        border?:{
            mobile?: Border
            tablet?: Border
            desktop?: Border
            allSame?: boolean
        }
        objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none'
    }
    focus?: {
        width?: {
            mobile?: Width
            tablet?: Width
            desktop?: Width
            allSame?: boolean
        }
        height?: {
            mobile?: Height
            tablet?: Height
            desktop?: Height
            allSame?: boolean
        }
        margin?: {
            mobile?: Margin
            tablet?: Margin
            desktop?: Margin
            allSame?: boolean
        }
        padding?: {
            mobile?: Padding
            tablet?: Padding
            desktop?: Padding
            allSame?: boolean
        }
        color?: string,
        backgroundColor?: string,
        boxShadow?: {
            mobile?: BoxShadow
            tablet?: BoxShadow
            desktop?: BoxShadow
            allSame?: boolean
        }
        font?: {
            mobile?: Font
            tablet?: Font
            desktop?: Font
            allSame?: boolean
        }
        display?: {
            flex: {
                enable?: boolean
                direction?: string
                justify_content?: string
                align_items?: string
            }
        }
        position?: {
            pos: 'absolute' | 'relative',
            mobile?: Position
            tablet?: Position
            desktop?: Position
            allSame?: boolean
        }
        border?:{
            mobile?: Border
            tablet?: Border
            desktop?: Border
            allSame?: boolean
        }
        objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none'
    }
}

export interface styleCSS {
    [key:string]: styleTemplate
}

let styleTemplates: styleCSS = {
    "margin-to-0": {
        margin: {
            mobile: {
                top: 0,
                all: true,
                size: 'px'
            },
            allSame: true
        },
        padding: {
            mobile: {
                top: 0,
                all: true,
                size: 'px'
            },
            allSame: true
        }
    }
};

export default styleTemplates;
export type { styleTemplate };

