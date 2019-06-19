import React,{Component} from 'react';
import EmbedBrowser from 'react-embedded-browser';

class Browser extends Component{
    state = {
        url:'https://namu.wiki/w/',
        browser:null
    }

    constructor(){
        super();
        this.state.setState({
            browser:document.querySelector(".embedded-browser"),
            ...this.state
        });
        this.state.browser.open('https://namu.wiki');
    }

    render(){
        return(
            <section className="site-viewer">
                <EmbedBrowser/>
            </section>
        );
    }
}

export default Browser;