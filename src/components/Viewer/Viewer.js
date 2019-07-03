import React,{Component} from 'react';
import {getCardInfo} from '../../util/api';

class Viewer extends Component{
    state = {
        data:null
    }

    setData = ()=>{
        Promise.all([getCardInfo(8421)]).then((body)=>{
          console.log(body[0]);
          this.setState({data:JSON.parse(body[0])})
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.data !== this.state.data){
            return true;
        }
    }

    render(){
        return(
            <section className="pdf-viewer" onClick={this.setData}>
                {JSON.stringify(this.state.data)}
                <img src={this.state.data && this.state.data.imageURL}/>
            </section>
        );
    }
}

export default Viewer;