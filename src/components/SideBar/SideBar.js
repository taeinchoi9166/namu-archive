import React,{Component} from 'react';
import './SideBar.css';

class SideBar extends Component{
    render(){
        return(
            <div className="side-bar">
                <input type="checkbox" id="side-bar-toggler"/>
                    <div className="side-wrap">
                        <label htmlFor="side-bar-toggler"><i className="fas fa-sign-out-alt"></i></label>
                        <h2><i className="fas fa-sitemap"></i> archive directory</h2>
                        <ul>
                            <li className="folder-name">
                                <span><i className="fas fa-folder"></i>folder1</span>
                                <ul>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                </ul>
                            </li>
                            <li className="folder-name">
                                <span><i className="fas fa-folder"></i>folder1</span>
                                <ul>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                </ul>
                            </li>
                            <li className="folder-name">
                                <span><i className="fas fa-folder"></i>folder1</span>
                                <ul>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                    <li className="pdf-name"><i className="far fa-file-pdf"></i>file1</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default SideBar;