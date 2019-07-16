import React,{Component} from 'react';

const api = require('../../util/api');
const async = require('async');
class SearchPanel extends Component{
    state = {
        page: 1,
        keyword:'',
        hasNext:true
    }

    constructor(){
        super();

    }


    hasNextPage = () => {
        const keyword = this.state.keyword || "default";
        const nextPage = this.state.page+1;
        api.searchCard(keyword,nextPage).then((result)=>{
            const len = JSON.parse(result.body).length;
            console.log(len);
            if(len > 0 ){
                console.log(keyword);
                this.setState({
                    ...this.state,
                    hasNext:true
                });
            }else{
                this.setState({
                    ...this.state,
                    hasNext:false
                })
            }
        });
    }



    changeKeyword = (e) => {
        //console.log(this.props.formData.keyword);
        //this.props.changeForm({keyword:e.target.value,page:this.state.page});
        this.setState({
            ...this.state,
            keyword:e.target.value
        })
    }

    searchCard = async () => {
        this.setState({
            ...this.state,
            page:1
        });
        await this.props.searchCard(this.state.keyword,1);
        await this.hasNextPage();
        //console.log(this.props.formData.page +" "+this.state.page);
    }

    movePage = async (direction) => {
        //console.log(this.props.formData.page +" "+this.state.page);
        //const keyword = this.props.formData.keyword;
        //const changeForm = this.props.changeForm;


        this.setState({
            ...this.state,
            page:this.state.page+direction
        });
        await this.props.searchCard(this.state.keyword,this.state.page+direction);
        await this.hasNextPage();
        console.log(this.state);
        // const search = (callback) => {
        //     this.props.searchCard(this.state.keyword,this.state.page+direction);
        //     callback(null);
        // };
        //
        // async.waterfall([
        //    search
        // ],(err,data)=>{
        //     console.log(this.state);
        // });

    }

    movePrevPage = () => {
        this.movePage(-1);
    }
    moveNextPage = () => {
        this.movePage(1);
    }

    render(){
        return(
          <div className="panel">
              {this.state.keyword}<br/>
              <input id="search-keyword" type="text" defaultValue="" value={this.state.keyword} onChange={this.changeKeyword}/>
              <button id="search-btn" type="button" onClick={this.searchCard}>검색</button>
              <div>
                  {
                      this.state.page > 1 && (<button type="button" id="search-goPrev" onClick={this.movePrevPage}>이전 페이지</button>)
                  }
                  {this.state.page}
                  {
                      this.state.hasNext && (<button type="button" id="search-goNext" onClick={this.moveNextPage}>다음 페이지</button>)
                  }
              </div>
          </div>
        );
    }
}

export default SearchPanel;