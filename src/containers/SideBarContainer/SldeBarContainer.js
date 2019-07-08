import React,{Component} from 'react';
import {SideBar} from "../../components/SideBar";

class SideBarContainer extends Component{
    render(){
        const myList = this.props.myList;
        return(
            <SideBar myList={myList}/>
        );
    }
}

export default SideBarContainer;