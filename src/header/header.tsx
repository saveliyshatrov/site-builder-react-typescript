import React, {FC} from 'react';
import './style.css';
import styled from "styled-components";
import {CategoryIcon, BuyIcon, BootstrapIcon, ShareIcon, ProjectIcon} from "../icons"

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

const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

const ProjectName = styled.div`
  margin-left: 11px;
  height: 23px;
  font-family: Helvetica;
  font-weight: bolder;
`

const Icon = styled.div`
  margin-left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const HeaderSettings = () => {
    return (
        <HeaderSett>
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
            <Flex>
                <ProjectName>Constructor</ProjectName>
                <FlexRow>
                    <ButtonHeader>Project</ButtonHeader>
                    <ButtonHeader>Share</ButtonHeader>
                    <ButtonHeader>Store</ButtonHeader>
                    <ButtonHeader>Templates</ButtonHeader>
                    <ButtonHeader>Bootstrap<Icon><BootstrapIcon/></Icon></ButtonHeader>
                </FlexRow>
            </Flex>
        </HeaderSett>
    )
}

const Header = ({text, mainHeader}: HeaderProp)=>{
    return mainHeader?<HeaderMain text={text}/>:<HeaderSettings/>
}

export default Header;