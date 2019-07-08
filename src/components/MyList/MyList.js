import React,{Component} from 'react';
import {Map,List,fromJS} from 'immutable';
import {getCardType,cardColors} from '../../util/common-util';


class MyList extends Component{
    render(){
        let items = [];
        let jsxItems = [];
        const myList = this.props.myList;
        console.log(myList);
        for(let i = 0; i < myList.size; i++){
            const item = myList.get(i);
            let dupIdx = -1;
            for(let j = 0; j < items.length; j++){
                if(item.get('name') === items[j].name){
                    dupIdx = j;
                    break;
                }
            }
            console.log(dupIdx);
            if(dupIdx >= 0){
                if(items[dupIdx].count < 3) items[dupIdx].count++;
            }else{
                items.push({count:1,name:item.get('name'),type:getCardType(item.get('attr'),item.get('kind'))});
                console.log(items);
            }
        }
        console.log(items.length);
        for(let i = 0; i < items.length; i++){
            const item = items[i];
            jsxItems.push((<li><span style={{'background-color':cardColors[item.type],'padding':'1vh'}}>{item.name}</span><b>{item.count}</b></li>));
        }
        console.log(jsxItems);
        return(

            <div className="mylist">
                <h1>My Saved List</h1>
                <ul className="mylist-items">
                    {jsxItems}
                </ul>
            </div>
        );

    }
}

export default MyList;