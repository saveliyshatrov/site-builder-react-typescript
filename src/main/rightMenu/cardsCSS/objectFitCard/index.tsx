import React, {Component} from "react";
import {CardHeader, DivMargin, DivName, DivOptions, Select} from "../elems";

export default class ObjectFitCard extends Component<any, any>{
    render(){
        return (
            <DivMargin>
                <CardHeader>Object-fit</CardHeader>
                <DivOptions>
                    <DivName>Type</DivName>
                    <Select>
                        <option>none</option>
                        <option>fill</option>
                        <option>contain</option>
                        <option>cover</option>
                        <option>scale-down</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}
