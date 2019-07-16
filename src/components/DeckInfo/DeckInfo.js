import React,{Component} from 'react';
import html2canvas from 'html2canvas/dist/html2canvas.min';
import jsPDF from 'jspdf/dist/jspdf.min';
import {getCardType} from '../../util/common-util';

class DeckInfo extends Component{
    captureDOM = async () => {
        await html2canvas(document.getElementById("capture-target"),{useCORS:true}).then((canvas) => {
            const data = canvas.toDataURL('image/png');
           console.log(data);
            let docu = new jsPDF('p','mm','a4');
            docu.addImage(data,'PNG',0,0);
            docu.save();

        });
    }
    
    render(){
        const data = this.props.data;
        let [amazonTotal, tcgTotal, ebayTotal, cheapistTotal] = [0,0,0,0];
        let [mainCount, extraCount] =  [0,0];

        if(data){
            for(let i = 0; i < data.size; i++){
                const item = data.get(i);
                const amazonPrice = item.getIn(["price","amazon"]);
                const tcgPrice = item.getIn(["price","tcgplayer"]);
                const ebayPrice = item.getIn(["price","ebay"]);

                amazonTotal += amazonPrice;
                tcgTotal += tcgPrice;
                ebayTotal += ebayPrice;
                cheapistTotal += amazonPrice < tcgPrice ? (amazonPrice < ebayPrice ? amazonPrice : ebayPrice) : (tcgPrice < amazonPrice ? tcgPrice : amazonPrice);

            }

            for(let i = 0; i < data.size; i++){
                const item = data.get(i);
                const cardType = getCardType(item.get('attr'),item.get('kind'));
                if(cardType < 3 || cardType === 4 || cardType === 7) mainCount++;
                else extraCount++;
            }
        }

        return(
          <div className="deck-info">
              <table className="info-table">
                  <tr>
                      <td>메인덱 매수</td>
                      <td>{mainCount}</td>
                  </tr>
                  <tr>
                      <td>엑스트라덱 매수</td>
                      <td>{extraCount}</td>
                  </tr>
                  <tr>
                      <td>OCG</td>
                      <td>사용 가능</td>
                  </tr>
                  <tr>
                      <td>TCG</td>
                      <td>사용 불가</td>
                  </tr>
                  <tr>
                      <td>최소 가격</td>
                      <td>{cheapistTotal}</td>
                  </tr>
                  <tr>
                      <td>EBay 총 가격</td>
                      <td>{ebayTotal}</td>
                  </tr>
                  <tr>
                      <td>Amazon 총 가격</td>
                      <td>{amazonTotal}</td>
                  </tr>
                  <tr>
                      <td>TCG Player 총 가격</td>
                      <td>{tcgTotal}</td>
                  </tr>
              </table>
              <div className="panel">
                  <button type="button" onClick={this.captureDOM}>PDF로 리스트 다운</button>
              </div>
              <div id="capture-area" style={{"display":"block","position":"absolute","z-index":-1,"left":"-100vh","width":"100vh","height":"100vh"}}>
                  <div id="capture-target">
                      hello!
                      <img src="https://www.sproutseed.ga/images/newspot_logo.png" alt=".." style={{"width":"100%","height":"100%"}}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default DeckInfo;