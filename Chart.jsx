import React from "react";
import {Radar} from "react-chartjs-2";

function Statics(props){
    const state = {
        labels: ['Overall', 'Crossing', 'Finishing',
                 'HeadingAccuracy', 'ShortPassing', 'Volleys'],
        datasets: [
          {
            label: 'Statics',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
            pointBorderColor: 'rgb(255, 99, 132)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
            data: [props.Overall, props.Crossing, props.Finishing, props.HeadingAccuracy, props.ShortPassing, props.Volleys]
          }
        ]
    }
    return (
        <Radar
            data={state}
            width={400}
            height={400}
            options={{
            title:{
              responsive: true,
              display:true,
              fontSize:20
            },
            maintainAspectRatio: false,
            pointBorderWidth: 10,
            legend:{
              display:true,
              position:'right'
            },
            scales: {
            r: {
                max: 100,
                min:0
            }
           },

          }}
            />
    );
}
export default Statics;