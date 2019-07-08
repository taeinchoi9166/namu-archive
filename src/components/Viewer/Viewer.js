import React,{Component} from 'react';
import errImage from '../../asset/image/error_card.jpg';

class Viewer extends Component{
    state = {
        data:null
    }

    setData = ()=>{
        // Promise.all([getCardInfo(8421)]).then((body)=>{
        //   console.log(body[0]);
        //   this.setState({data:JSON.parse(body[0])})
        // });
    }

    addItemToList = () => {
        const item = this.props.view.get('result');
        if(item.size > 0) this.props.addToMyList(item);
    }

    render(){
        const viewId = this.props.view.get('id');
        const cardInfo = this.props.view.get('result');
        return(
            <section className="pdf-viewer" onClick={this.setData}>
                <img src={cardInfo.get('imageURL') || errImage} width="35vh" height="60vh" />
                <button type="button" onClick={this.addItemToList}>리스트에 추가</button>
            </section>
        );
    }
}

export default Viewer;