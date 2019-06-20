import React, {Component, Fragment} from 'react';//
const WebView = require('react-electron-web-view');
//const WebView = window.require('electron').web;

class Browser extends Component{
    state = {
        url:'https://namu.wiki/w/',
        browser:null
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            browser:document.querySelector(".embedded-browser")
        });
        console.log(this.state);
        //this.state.browser.open('https://namu.wiki');
    }

    render(){
        return(
            <Fragment>
                <section className="site-viewer">
                    <WebView id="foo" className="web-view" width="100%" height="100%" src="https://www.github.com/" ></WebView>
                </section>
            </Fragment>
        );
    }


}

export default Browser;