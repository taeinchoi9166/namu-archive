import React,{Component} from 'react';

import {List} from 'immutable';

class SearchList extends Component{

    onView = (e) => {
        const id = e.target.dataset.cardId;
        this.props.viewCard(id);
    }

    render(){
        let items = [];
        const result = this.props.result;
        for(let item = 0; item < result.size; item++){
            const id = result.getIn([item,"id"]);
            items.push((<li key={id} data-card-id={id} onClick={this.onView}>{result.getIn([item,"name"])}</li>));
        }
        return(
            <div className="search-list">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default SearchList;