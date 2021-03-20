import React, {Component} from 'react';
import './App.css';
import Header from "./header";
import DeviceSelection from "./deviceSelection";
import {Mobile, MobileRotated, Tablet, TabletRotated, Laptop} from './device';
import Main from "./main";

type devices = {
  mobile: boolean
  tablet: boolean
  laptop: boolean
  rotated: boolean
  wasRotated: boolean
}

class App extends Component<any, any>{
  Name:string = "Constructor";
  state:devices = {
    mobile: true,
    tablet: false,
    laptop: false,
    rotated: false,
    wasRotated: false
  }
  setMobile = () => {
    this.setState(()=>({mobile: true, tablet: false, laptop: false, rotated: false}));
  }
  setMobileRotated = () => {
    this.setState(()=>({mobile: true, tablet: false, laptop: false, rotated: true, wasRotated: true}));
  }
  setTablet = () => {
    this.setState(()=>({mobile: false, tablet: true, laptop: false, rotated: false}));
  }
  setTabletRotated = () => {
    this.setState(()=>({mobile: false, tablet: true, laptop: false, rotated: true}));
  }
  setLaptop(){
    this.setState(()=>({mobile: false, tablet: false, laptop: true, rotated: false}));
  }
  setPrevUnRotated = () => {
    this.setState(()=>({
      wasRotated: false
    }))
  }
  render(){
    console.log('prevRotated =',this.state.wasRotated)
    return <div>
      <Header text={this.Name} mainHeader={false}/>
      <DeviceSelection
          ClickHandler={()=>window.alert(123)}
          MobileClick={()=>this.setMobile()}
          MobileRotatedClick={()=>this.setMobileRotated()}
          TabletClick={()=>this.setTablet()}
          TabletRotatedClick={()=>this.setTabletRotated()}
          LaptopClick={()=>this.setLaptop()}
          Rotated={this.state.rotated}
      />
      <Main>
        {this.state.mobile?(this.state.rotated?<MobileRotated/>:<Mobile/>):""}
        {this.state.tablet?(this.state.rotated?<TabletRotated/>:<Tablet/>):""}
        {this.state.laptop?<Laptop/>:""}
      </Main>
    </div>
  }
}

export default App;
