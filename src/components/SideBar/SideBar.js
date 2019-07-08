import React,{Component} from 'react';

import {DeckInfo} from '../DeckInfo';
import {Graph} from '../Graph';
import './SideBar.css';

class SideBar extends Component{
    render(){
        const myList = this.props.myList;
        return(
            <div className="side-bar">
                <input type="checkbox" id="side-bar-toggler"/>
                <div className="side-bar-bg"></div>
                    <div className="side-wrap">
                        <label htmlFor="side-bar-toggler"><i className="fas fa-sign-out-alt"></i></label>
                        <h2><i className="fas fa-sitemap"></i> archive directory</h2>
                        <ul>

                        </ul>
                        <Graph data={myList}/>
                        <DeckInfo data={myList}/>
                    </div>
            </div>
        );
    }
}

export default SideBar;