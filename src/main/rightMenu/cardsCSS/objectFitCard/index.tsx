import React, {Component} from "react";
import {CardHeader, DivMargin, DivName, DivOptions, Select} from "../elems";

export default class ObjectFitCard extends Component<any, any>{
    state = {
        objectFit: this.props.obj!==undefined?this.props.obj:'none'
    }
    setInfo = () => {
        this.props.funcAll(this.state.objectFit)
    }

    changeSelect = (arg:string) => {
        this.setState({
            objectFit: arg
        }, this.setInfo)
    }

    render(){
        return (
            <DivMargin>
                <CardHeader>Object-fit</CardHeader>
                <DivOptions>
                    <DivName>Type</DivName>
                    <Select value={this.state.objectFit} onChange={(e) => this.changeSelect(e.target.value)}>
                        <option value={'none'}>none</option>
                        <option value={'fill'}>fill</option>
                        <option value={'contain'}>contain</option>
                        <option value={'cover'}>cover</option>
                        <option value={'scale-down'}>scale-down</option>
                    </Select>
                </DivOptions>
            </DivMargin>
        )
    }
}
