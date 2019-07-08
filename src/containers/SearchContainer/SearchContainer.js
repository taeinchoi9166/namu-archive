import React,{Component} from 'react';
import {SearchPanel} from "../../components/SearchPanel";
import {SearchList} from "../../components/SearchList";

class SearchContainer extends Component{
    render(){
        const searchCard = this.props.onSearch;
        const changeForm = this.props.onSearchFormChanged;
        const viewCard = this.props.onViewCard;
        const result = this.props.result;
        const formData = this.props.formData;
        return(
            <div className="search">
                <SearchPanel formData={formData} searchCard={searchCard} changeForm={changeForm}/>
                <SearchList result={result} viewCard={viewCard}/>
            </div>
        );
    }
}

export default SearchContainer;