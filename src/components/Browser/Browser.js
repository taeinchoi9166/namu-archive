import React, {Component, Fragment} from 'react';//
// const {Web} = require('electron');
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
                    <webview id="foo" className="web-view" src="https://www.github.com/" ></webview>
                </section>
            </Fragment>
        );
    }


}

export default Browser;