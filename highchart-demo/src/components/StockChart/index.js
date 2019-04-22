import React from 'react';
import { render } from 'react-dom';
// import Highcharts, { extend } from 'highcharts';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

// const options = {
// chart: {
//     type: 'spline'
// },
// title: {
//     text: 'My chart'
// },
// series: [
//     {
//     data: [1, 2, 1, 4, 3, 6]
//     }
// ]
// };

const options = {
    title: {
      text: 'My stock chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
      }
    ]
  };
  


class StockChart extends React.Component {
    render() {
        return (
            <div>
                <HighchartsReact 
                highcharts={Highcharts} 
                constructorType={'stockChart'}
                options={options} />
            </div>
        )
    }
}

export default StockChart;

//   const App = () => (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );