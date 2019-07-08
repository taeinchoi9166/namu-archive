import React,{Component} from 'react';

import Chart from 'chart.js/dist/Chart';
import {getCardType} from '../../util/common-util';

class Graph extends Component{
    state = {
        typeGraph:null,
        cardTypes:[
            '몬스터',
            '마법',
            '함정',
            '융합',
            '의식',
            '싱크로',
            '엑시즈',
            '펜듈럼',
            '링크'
        ]
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.data != this.props.data){
            this.changeData();
            return true;
        }
    }

    changeData = async () => {
        if(this.state.typeGraph === null) await this.initGraph();
        const data = this.props.data;
        const graph = this.state.typeGraph;
        console.log(graph);
        let typesCount = new Array(this.state.cardTypes.length);
        typesCount.fill(0);
        console.log(typesCount);
        for(let idx = 0; idx < data.size; idx++){
            let type = getCardType(data.getIn([idx,'attr']),data.getIn([idx,'kind']));
            typesCount[type] = typesCount[type] + 1;
        }
        graph.data.datasets[0].data = typesCount;
        graph.update();
    }

    initGraph = () => {
        let ctx  = document.getElementById("canv").getContext("2d");
        let gradient = ctx.createLinearGradient(0,0,600,500);
        gradient.addColorStop(0,'#d18834');
        for(let i = 0.0; i < 1.0; i += 0.25){
            gradient.addColorStop(i,'#d18834');
            gradient.addColorStop(i+0.125,'#2a917d');
        }

        let typeGraph = new Chart(ctx,{
            type:'pie',
            options:{
                title:{
                    display:true,
                    fontSize:20,
                    fontStyle:'bold',
                    text:'덱 분포'
                },
            },
            data:{
                datasets:[{
                    data: [0,0,0,0,0,0,0,0,0],
                    backgroundColor:[
                        '#d18834',
                        '#2a917d',
                        '#ba569c',
                        '#820d94',
                        '#1793e6',
                        '#dddddd',
                        '#222222',
                        gradient,
                        '#165ac7'
                    ]
                }],
                labels:[
                    '몬스터',
                    '마법',
                    '함정',
                    '융합',
                    '의식',
                    '싱크로',
                    '엑시즈',
                    '펜듈럼',
                    '링크'
                ]
            }

        });
        this.setState({
            ...this.state,
            typeGraph:typeGraph
        });
    }

    render(){
        return(
            <div className="graph">
                <canvas id="canv" width="50%" height="40%" ref="canv">

                </canvas>
            </div>
        );
    }
}

export default Graph;