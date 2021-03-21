import React, {Component} from 'react';
import './App.css';
import Header from "./header";
import DeviceSelection from "./deviceSelection";
import {Mobile, MobileRotated, Tablet, TabletRotated, Laptop} from './device';
import Main from "./main";

class App extends Component<any, any>{
  Name:string = "Constructor";
  state = {
    mobile: true,
    tablet: false,
    laptop: false,
    rotated: false,
    wasRotated: false,
    UIFramework: ''
  }
  setMobile = () => {
    this.setState(()=>({mobile: true, tablet: false, laptop: false, rotated: false}));
  }
  setUIFramework = (frameworkName: string) => {
    console.log(frameworkName)
    this.setState(()=>({
      UIFramework: frameworkName
    }))
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
  // componentDidMount = () => {
  //   console.log(this.state)
  // }
  // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
  //   if(prevState !== this.state){
  //     console.log(this.state.UIFramework, prevState.UIFramework)
  //   }
  // }

  render(){
    return <div>
      <Header text={this.Name} mainHeader={false} func={this.setUIFramework}/>
      <DeviceSelection
          ClickHandler={()=>window.alert(123)}
          MobileClick={()=>this.setMobile()}
          MobileRotatedClick={()=>this.setMobileRotated()}
          TabletClick={()=>this.setTablet()}
          TabletRotatedClick={()=>this.setTabletRotated()}
          LaptopClick={()=>this.setLaptop()}
          Rotated={this.state.rotated}
      />
      <Main uiFramework={this.state.UIFramework}>
        {this.state.mobile?(this.state.rotated?<MobileRotated/>:<Mobile/>):""}
        {this.state.tablet?(this.state.rotated?<TabletRotated/>:<Tablet/>):""}
        {this.state.laptop?<Laptop/>:""}
      </Main>
    </div>
  }
}

export default App;
