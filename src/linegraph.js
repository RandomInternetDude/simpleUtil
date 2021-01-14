import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


export default class LineGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Commercial', 'Medicaid', 'Medicare', 'DOD', 'Med-D'],
                datasets:[{
                    label:'Population',
                    data:[
                        80,
                        60,
                        100,
                        80,
                        70,
                        0
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(105, 132, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                    ]
                }]
            }
        }
        
    }


    render(){
        return (
                <div className='chart'>
                    <Line
                    data={this.state.chartData}
                    width={100}
                    height={30}
                    options={{
                        title:{
                            display: true,
                            text:'Forecast'
                        },
                        legend:{
                            display: false,
                            position:'right',
                        }
                    }}
                    />
                </div>
        )
    }
}