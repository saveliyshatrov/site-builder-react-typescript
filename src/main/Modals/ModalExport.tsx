import React, {Component} from "react";
import styled from "styled-components";
import './style.css';
import {LabelWithCheckBox, SelectionExport, CheckBox, OptionRow, Menu, FooterBtnSelected, Footer, ButtonSelectExport, Main, Header, Body} from './elementsForModalExport'

class ModalExport extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    state = {
        htmlCss: {
            state: true,
            exportForSmartphone: false,
            exportForTablet: false,
            exportForDesktop: false,
            mergeIntoOneFile: false,
            previewFile: false
        },
        react: false,
        vue: false,
        angular: false,
        flutter: false
    }
    unsetAllStates(){
        this.setState(()=>{this.state.htmlCss.state = false});
        this.setState(()=>{this.state.react = false});
        this.setState(()=>{this.state.vue = false});
        this.setState(()=>{this.state.angular = false});
        this.setState(()=>{this.state.flutter = false});
    }
    setHTMLCSS(){
        this.setState(()=>{this.state.htmlCss.state = true})
    }
    setReact(){
        this.setState(()=>{this.state.react = true})
    }
    setVue(){
        this.setState(()=>{this.state.vue = true})
    }
    setAngular(){
        this.setState(()=>{this.state.angular = true})
    }
    setFlutter(){
        this.setState(()=>{this.state.flutter = true})
    }
    exportForSmartphone(state: boolean){
        this.setState(()=>{this.state.htmlCss.exportForSmartphone = !state})
    }
    exportForTablet(state:boolean){
        this.setState(()=>{this.state.htmlCss.exportForTablet = !state})
    }
    exportForDesktop(state: boolean){
        this.setState(()=>{this.state.htmlCss.exportForDesktop = !state})
    }
    mergeIntoOneFile(state: boolean){
        this.setState(()=>{this.state.htmlCss.mergeIntoOneFile = !state})
    }
    previewFile(state: boolean){
        this.setState(()=>{this.state.htmlCss.previewFile = !state})
    }
    render(){
        return (
            <Body show={this.props.show}>
                <Header>Экспорт страницы</Header>
                <Main>
                    <SelectionExport>
                        <ButtonSelectExport show={this.state.htmlCss.state} onClick={()=>{this.unsetAllStates();this.setHTMLCSS()}}>HTML + CSS</ButtonSelectExport>
                        <ButtonSelectExport className={"unavaileble"} show={this.state.react} onClick={()=>{this.unsetAllStates();this.setReact()}}>React</ButtonSelectExport>
                        <ButtonSelectExport className={"unavaileble"} show={this.state.vue} onClick={()=>{this.unsetAllStates();this.setVue()}}>Vue</ButtonSelectExport>
                        <ButtonSelectExport className={"unavaileble"} show={this.state.angular} onClick={()=>{this.unsetAllStates();this.setAngular()}}>Angular</ButtonSelectExport>
                        <ButtonSelectExport className={"unavaileble"} show={this.state.flutter} onClick={()=>{this.unsetAllStates();this.setFlutter()}}>Flutter</ButtonSelectExport>
                    </SelectionExport>
                    {this.state.htmlCss.state?
                        <Menu>
                            <LabelWithCheckBox func={()=>this.exportForSmartphone(this.state.htmlCss.exportForSmartphone)} show={this.state.htmlCss.exportForSmartphone}>Export for Smartphone</LabelWithCheckBox>
                            <LabelWithCheckBox func={()=>this.exportForTablet(this.state.htmlCss.exportForTablet)} show={this.state.htmlCss.exportForTablet}>Export for Tablet</LabelWithCheckBox>
                            <LabelWithCheckBox func={()=>this.exportForDesktop(this.state.htmlCss.exportForDesktop)} show={this.state.htmlCss.exportForDesktop}>Export for Desktop</LabelWithCheckBox>
                            <LabelWithCheckBox func={()=>this.mergeIntoOneFile(this.state.htmlCss.mergeIntoOneFile)} show={this.state.htmlCss.mergeIntoOneFile}>Merge into one file</LabelWithCheckBox>
                            <LabelWithCheckBox func={()=>this.previewFile(this.state.htmlCss.previewFile)} show={this.state.htmlCss.previewFile}>Preview code</LabelWithCheckBox>
                        </Menu>
                    :''}
                    {this.state.react? <Menu>На данный момент функционал преобразования в React отключен</Menu>:''}
                    {this.state.vue? <Menu>На данный момент функционал преобразования в Vue отключен</Menu>:''}
                    {this.state.angular? <Menu>На данный момент функционал преобразования в Angular отключен</Menu>:''}
                    {this.state.flutter? <Menu>На данный момент функционал преобразования в Flutter отключен</Menu>:''}
                </Main>
                <Footer>
                    <FooterBtnSelected selected={false} onClick={this.props.func}>Отмена</FooterBtnSelected>
                    <FooterBtnSelected selected={true} onClick={this.props.func}>Загрузить</FooterBtnSelected>
                </Footer>
            </Body>
        )
    }
}

export default ModalExport;