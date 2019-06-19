import React,{Component} from 'react';
//import pdfWindow from 'electron-pdf-window';
class Viewer extends Component{
    render(){
        return(
            <section className="pdf-viewer">
                <embed src="./pdf-test.pdf" type="application/pdf" width="100%" height="100%"></embed>
            </section>
        );
    }
}

export default Viewer;