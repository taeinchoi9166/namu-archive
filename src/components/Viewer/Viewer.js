import React,{Component} from 'react';
//import pdfWindow from 'electron-pdf-window';
import pdf from './pdf-test.pdf';
import {Document, Page} from 'react-pdf';

class Viewer extends Component{
    render(){
        const path = require('path');
        //console.log(pdf);
        return(
            <section className="pdf-viewer">
                <Document file={pdf} height="100%" noData="nope." onLoadSuccess={console.log("ok")}>
                    <Page pageNumber={1}/>
                </Document>
                {/*<embed src={path.resolve(__dirname,"./../../../pdf-test.pdf")} type="application/pdf" width="100%" height="100%"></embed>*/}
            </section>
        );
    }
}

export default Viewer;