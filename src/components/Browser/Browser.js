import React, {Component, Fragment} from 'react';//
const WebView = require('react-electron-web-view');
//const WebView = window.require('electron').web;

class Browser extends Component{
    state = {
        url:'https://namu.wiki/w/',
        browser:null
    }

    init = () => {
        const wv = document.getElementsByClassName("web-view")[0];

        const renderView = (e)=>{
            console.log(wv);
            wv.loadURL(this.state.url);
            wv.removeEventListener('dom-ready',renderView);
        };

        wv.addEventListener("dom-ready",renderView);
        this.setState({
            ...this.state,
            browser: wv
        });


        // if(this.refs.webview.ready === false){
        //     this.refs.webview.loadURL(this.state.url);
        // }
    }

    render(){
        return(
                <section className="site-viewer" onClick={this.init}>
                    {/*<iframe width="300" height="400"  src="https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4:%EB%8C%80%EB%AC%B8"></iframe>*/}
                    <WebView ref='webview' Id="foo" className="web-view" width="500" height="500"  >

                    </WebView>

                </section>
        );
    }


}

export default Browser;