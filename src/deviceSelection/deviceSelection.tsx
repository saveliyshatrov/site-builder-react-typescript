import React, {Component, FC, FunctionComponent, useState} from "react";
import './style.css';

interface ToggleProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    MobileClick: () => void
    TabletClick: () => void
    LaptopClick: () => void
    MobileRotatedClick: () => void
    TabletRotatedClick: () => void
    Rotated: boolean
}

const DeviceSelection: FunctionComponent<ToggleProps> = ({MobileClick, TabletClick, LaptopClick, MobileRotatedClick, TabletRotatedClick, Rotated, ClickHandler}:ToggleProps) => {
    let [Mobile, setMobile] = useState(true);
    let [Tablet, setTablet] = useState(false);
    let [Desktop, setDesktop] = useState(false);
    let [rotated, setRotated] = useState(false);
    rotated = Rotated;



    return <div className="Choice">
        <div className="devices">
            <button className={"button " + (Mobile? 'active': '')}
                    id='selected-mobile'
                    onClick={()=>{setMobile(true); setTablet(false); setDesktop(false); rotated?MobileRotatedClick():MobileClick()}}>
                <i className="fa fa-mobile size-huge"></i><div className={"space"}></div>Mobile
            </button>
            <button className={"button " + (Tablet? 'active': '')}
                    id='selected-tablet'
                    onClick={()=>{setMobile(false); setTablet(true); setDesktop(false); rotated?TabletRotatedClick():TabletClick()}}>
                <i className="fa fa-tablet size-huge"></i><div className={"space"}></div>Tablet
            </button>
            <button className={"button " + (Desktop? 'active': '')}
                    id='selected-desktop'
                    onClick={()=>{setMobile(false); setTablet(false); setDesktop(true); LaptopClick();}}>
                <i className="fa fa-laptop size-huge"></i><div className={"space"}></div>Desktop
            </button>
        </div>
        <div className="rotation">
            <button className={!Desktop?(!rotated?"button active":"button"):"d-none"} id='selected-tablet' onClick={()=>{setRotated(false); (Mobile?MobileClick():TabletClick())}}>
                <i className={Mobile?"fa fa-mobile size-huge":"fa fa-tablet size-huge"}></i><div className={"space"}></div>Portrait
            </button>
            <button className={!Desktop?(rotated?"button active":"button"):"d-none"} id='selected-desktop' onClick={()=>{setRotated(true); (Mobile?MobileRotatedClick():TabletRotatedClick())}}>
                <i className={Mobile?"fa fa-mobile size-huge rotated":"fa fa-tablet size-huge rotated"}></i><div className={"space"}></div>Landscape
            </button>
        </div>
    </div>
}

export default DeviceSelection;