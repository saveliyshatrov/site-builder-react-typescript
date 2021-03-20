import React, {Component, FC} from 'react';
import './style.css';
import styled from "styled-components";
import {CategoryIcon, BuyIcon, BootstrapIcon, ShareIcon, ProjectIcon, UserIcon} from "../icons"
import ModalChoice from "../main/modalChoice";
import {ModalExport} from "../main/Modals";

type HeaderProp = {
    text: string;
    mainHeader: boolean
}

const HeaderMain = (props:any) => {
    return <header className="header">
        <div className="Logo">
            {props.text}
            <div className="logo">
                <svg width="50" height="50" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.0858 42C21.029 42.6591 21 43.3262 21 44C21 56.7025 31.2975 67 44 67C44.6738 67 45.3409 66.971 46 66.9142V83C46 85.7614 43.7614 88 41 88H5C2.23858 88 0 85.7614 0 83V47C0 44.2386 2.23858 42 5 42H21.0858ZM21.0858 42C22.0993 30.2339 31.9713 21 44 21C56.7025 21 67 31.2975 67 44C67 56.0287 57.7661 65.9007 46 66.9142V47C46 44.2386 43.7614 42 41 42H21.0858Z"
                          fill="url(#paint0_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="70" y1="27" x2="3" y2="94"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#AB70E6"/>
                            <stop offset="1" stop-color="#20C0D6"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>

    </header>;
}

const HeaderSett = styled.header`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
`

const Logo = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  margin-top: -5px;
`

const ButtonHeader = styled.button`
  padding: 4px 6px;
  background-color: white;
  border-radius: 3px;
  color: black;
  outline: none;
  border: none;
  margin-left: 5px;
  transition: all .2s ease;
  display: flex;
  flex-direction: row;
  :hover {
    background-color: lightgray;
  }
  :active { 
    background-color: black;
    color: white;
  }
`

const FlexMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const FlexCenter = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const Account = styled.div`
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease;
  :hover{
    background-color: lightgray;
  }
`

const FlexSpaceBetween = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

const ProjectName = styled.div`
  margin-left: 11px;
  height: 23px;
  font-family: Helvetica,serif;
  font-weight: bolder;
`

const Icon = styled.div`
  margin-left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

class HeaderSettings extends Component<any, any>{
    state = {
        show: false,
        x: 0,
        y: 0,
        share: false,
        save: false,
        export: false,
        getLaterSavedTemplates: false,
        bootstrap: false,
        exportModal: false,
        user: false
    }
    showModal = (event: any, posX: number, posY: number) => {
        this.setState({
            show: true,
            x: posX,
            y: posY
        });
    }
    componentDidMount() {
        document.addEventListener('click', (event)=>{
            event.preventDefault();
            if((event.target as Element).classList.toString().includes('hdr-btn')) {
                let rect = (event.target as Element).getBoundingClientRect();
                let posX = rect.left;
                let posY = rect.top + (event.target as Element).clientHeight + 5;
                this.showModal(event, posX, posY)
            }
            if((event.target as Element).classList.toString().includes('user')) {
                let rect = (event.target as Element).getBoundingClientRect();
                let posX = rect.left - 205 + (event.target as Element).clientWidth;
                let posY = rect.top + (event.target as Element).clientHeight + 5;
                this.showModal(event, posX, posY)
            }
            if(!(event.target as Element).classList.toString().includes('user') && !(event.target as Element).classList.toString().includes('hdr-btn')) {
                this.setState({show: false})
            }
        })
    }
    allToFalse = () => {
        this.setState({
            share: false,
            save: false,
            export: false,
            getLaterSavedTemplates: false,
            bootstrap: false,
            user: false
        })
    }
    projectModal = () => {
        this.allToFalse()
        this.setState({
            share: true,
            save: true,
            export: true
        })
    }
    templatesModal = () => {
        this.allToFalse()
        this.setState({
            getLaterSavedTemplates: true
        })
    }
    bootstrapModal = () => {
        this.allToFalse();
        this.setState({
            bootstrap: true
        })
    }
    hideExportModal = () => {
        this.setState(()=>({exportModal: false}))
    }
    userModal = () => {
        this.allToFalse()
        this.setState({user: true})
    }
    render(){
        return (
            <HeaderSett>
                <ModalExport show={this.state.exportModal} func={this.hideExportModal}/>
                {this.state.show?<ModalChoice showModal={this.state.show} XPos={this.state.x} YPos={this.state.y}>
                    {this.state.save?<button className={"btn-choice"}>Save</button>:''}
                    {this.state.share?<button className={"btn-choice"}>Share</button>:''}
                    {this.state.export?<button className={"btn-choice"} onClick={()=>this.setState({exportModal: true})}>Export</button>:''}
                    {this.state.save?<div className={'hr'}/>:''}
                    {this.state.save?<button className={"btn-choice"}>Quit</button>:''}
                    {this.state.getLaterSavedTemplates?<button className={"btn-choice"}>Add my templates</button>:''}
                    {this.state.bootstrap?<button className={"btn-choice"}>Use Bootstrap presets</button>:''}

                    {this.state.user?<button className={"btn-choice"}>Go to main</button>:''}
                    {this.state.user?<button className={"btn-choice"}>Settings</button>:''}
                    {this.state.user?<div className={'hr'}/>:''}
                    {this.state.user?<button className={"btn-choice"}>Log out</button>:''}
                </ModalChoice>:''}
                <FlexSpaceBetween>
                    <Flex>
                        <Logo>
                            <div className="logo">
                                <svg width="40" height="40" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M21.0858 42C21.029 42.6591 21 43.3262 21 44C21 56.7025 31.2975 67 44 67C44.6738 67 45.3409 66.971 46 66.9142V83C46 85.7614 43.7614 88 41 88H5C2.23858 88 0 85.7614 0 83V47C0 44.2386 2.23858 42 5 42H21.0858ZM21.0858 42C22.0993 30.2339 31.9713 21 44 21C56.7025 21 67 31.2975 67 44C67 56.0287 57.7661 65.9007 46 66.9142V47C46 44.2386 43.7614 42 41 42H21.0858Z"
                                          fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="70" y1="27" x2="3" y2="94"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#AB70E6"/>
                                            <stop offset="1" stopColor="#20C0D6"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </Logo>
                        <FlexMenu>
                            <ProjectName>Constructor</ProjectName>
                            <FlexRow>
                                <ButtonHeader className={'hdr-btn'} onClick={this.projectModal}>Project</ButtonHeader>
                                {/*<ButtonHeader>Share</ButtonHeader>*/}
                                {/*<ButtonHeader>Store</ButtonHeader>*/}
                                <ButtonHeader className={'hdr-btn'} onClick={this.templatesModal}>Templates</ButtonHeader>
                                <ButtonHeader className={'hdr-btn'} onClick={this.bootstrapModal}>Bootstrap</ButtonHeader>
                            </FlexRow>
                        </FlexMenu>
                    </Flex>
                    <FlexCenter>
                        <Account className={'user'} onClick={this.userModal}>Account</Account>
                    </FlexCenter>
                </FlexSpaceBetween>
            </HeaderSett>
        )
    }
}

const Header = ({text, mainHeader}: HeaderProp)=>{
    return mainHeader?<HeaderMain text={text}/>:<HeaderSettings/>
}

export default Header;