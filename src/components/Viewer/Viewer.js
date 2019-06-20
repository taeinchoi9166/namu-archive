import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import pdfWindow from 'electron-pdf-window';
import {BrowserView} from 'electron';
import pdf from './pdf-test.pdf';
import {Document, Page, Text} from '@react-pdf/renderer/dist/react-pdf.es';

class Viewer extends Component{
    constructor(){
        super();
        let view = new BrowserView();
        browserView.setBrowserView(view);
        view.setBounds({x:400,y:200, width:500, height:600});
        view.setAutoResize({width:true,height:true})
        view.webContents.loadURL("https://namu.wiki/w/");
    }
    render(){
        const path = require('path');
        //console.log(pdf);
        return(
            <section className="pdf-viewer">
                <Document file={pdf} height="100" width="200" noData="nope." onLoadSuccess={(e)=>{console.log("d"+e)}}>
                    {/*<Page>*/}
                    {/*    <Text>txt</Text>*/}
                    {/*</Page>*/}
                </Document>

                {/*<embed src={path.resolve(__dirname,"./../../../pdf-test.pdf")} type="application/pdf" width="100%" height="100%"></embed>*/}
            </section>
        );
    }
}

export default Viewer;