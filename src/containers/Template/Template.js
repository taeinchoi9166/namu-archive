import React, {Component, Fragment} from 'react';
import {List,Map,fromJS} from 'immutable';

import MyListContainer from '../MyListContainer/MyListContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import ViewerContainer from '../ViewerContainer/ViewContainer';
import SideBarContainer from '../SideBarContainer/SldeBarContainer';
import {Header} from '../../components/Header';
import {Wrapper} from "../../components/common/Wrapper";

const api = require('../../util/api');

class Template extends Component{
    state = {
        myList:List([]),
        search:Map({
            keyword:'',
            page:1,
            result:List([])
        }),
        view:Map({
            id:8421,
            result:Map({})
        })
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     const searchState = this.state.search;
    //     if(nextState.search.get('keyword') !== searchState.get('keyword') || nextState.search.get('page') !== searchState.get('page') || nextState.search.get('result') !== searchState.get('result')){
    //         return true;
    //     }else return false;
    // }

    onSearch = (keyword,page) => {
        api.searchCard(keyword,page).then(result=>{
            const resJson = JSON.parse(result.body);
            console.log(resJson);
            let l = [];
            for(let i of resJson){
                l.push({id:i.id,name:i.title,detail:i.type+" / "+i.detailSpec});
            }
            this.setState({
                ...this.state,
                search:this.state.search.set('result',fromJS([...l]))
            });
        });
    }

    onSearchFormChange = ({keyword,page}) => {
        this.setState({
            ...this.state,
            search:this.state.search.set('keyword',keyword || "").set('page',page || 1)
        });
       // this.onSearch(this.state.search.get('keyword'),this.state.search.get('page'))
    }

    onViewCard = (id) => {
        api.getCardInfo(id).then((result)=>{
            this.setState({
                ...this.state,
                view:this.state.view.set('result',fromJS(JSON.parse(result))).set('id',id)
            });
        });
    }

    onAddToMyList = (data) => {
        this.setState({
            ...this.state,
            myList:this.state.myList.push(fromJS(data))
        });
    }

    render(){
        return(
            <Fragment>
                <SideBarContainer myList={this.state.myList}/>
                <Wrapper>
                    <Header/>
                    <MyListContainer myList={this.state.myList}/>
                    <SearchContainer result={this.state.search.get('result')} onViewCard={this.onViewCard} onSearch={this.onSearch} onSearchFormChanged={this.onSearchFormChange}/>
                    <ViewerContainer view={this.state.view} onAddToMyList={this.onAddToMyList}/>
                </Wrapper>
            </Fragment>
        );
    }
}

export default Template;