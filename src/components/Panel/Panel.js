import React,{Component} from 'react';
import './Panel.css';
class Panel extends Component{
    render(){
        return(
            <div className="search-panel">
                <input type="text" id="target-url"/>
                <button type="button">검색</button>
                <button type="button">다운로드</button>
            </div>
        );
    }
}

 export default Panel;