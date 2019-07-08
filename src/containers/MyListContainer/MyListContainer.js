import React,{Component} from 'react';
import {MyList} from '../../components/MyList';

class MyListContainer extends Component{
    render(){
        const myList = this.props.myList;
        return(
            <div className="mylist">
                <MyList myList={myList}/>
            </div>
        );
    }
}

export default MyListContainer;