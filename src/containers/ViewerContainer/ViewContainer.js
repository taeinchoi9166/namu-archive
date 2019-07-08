import React,{Component} from 'react';
import {Viewer} from '../../components/Viewer';

class ViewContainer extends Component{
    render(){
        const view = this.props.view;
        const addToMyList = this.props.onAddToMyList;
        return(
            <div>
                <Viewer view={view} addToMyList={addToMyList}/>
            </div>
        );
    }
}

export default ViewContainer;