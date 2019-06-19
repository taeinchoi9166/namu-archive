import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header>
                <label htmlFor="side-bar-toggler"><i className="fas fa-folder-minus"></i></label>
                <span>파일을 선택하세요.</span>
            </header>
        );
    }
}

export default Header;