import React,{Component} from 'react';
import {Document} from 'react-pdf/dist/entry.webpack';
 import pdf from './pdf-test.pdf';
const WebView = require('react-electron-web-view');

class Viewer extends Component{
    // constructor(){
    //     super();
    //     // let view = new BrowserView();
    //     // browserView.setBrowserView(view);
    //     // view.setBounds({x:400,y:200, width:500, height:600});
    //     // view.setAutoResize({width:true,height:true})
    //     // view.webContents.loadURL("https://namu.wiki/w/");
    // }
    render(){

        //console.log(pdf);
        return(
            <section className="pdf-viewer">
                <Document file={"./pdf-test.pdf"} height="100" width="200" noData="nope." onLoadSuccess={(e)=>{console.log("d"+e)}}>
                    {/*<Page>*/}
                    {/*    <Text>txt</Text>*/}
                    {/*</Page>*/}
                </Document>
                <WebView src="./pdf-test.pdf"></WebView>
                {/*<embed src="/public/pdf-test.pdf" type="text/html" width="100%" height="100%"></embed>*/}
                {/*<embed src={path.resolve(__dirname,"./../../../pdf-test.pdf")} type="application/pdf" width="100%" height="100%"></embed>*/}
            </section>
        );
    }
}

export default Viewer;