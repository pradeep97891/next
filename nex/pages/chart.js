import Layout from '../components/layout';
import Plot from 'react-plotly.js';
import React, { Component } from 'react';
class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    x: ["Frank", "Jerry", "Jill", "Regis", "Tracy"],
                    y: [87, 20, 72, 44, 0],
                    type: 'Scatter',
                },
                {

                    type: 'histogram', x: [], y: [2, 5, 3]
                },
                //     {
                //         x: "Jill",

                //         y: 72,
                //         type: "histogram"
                //     },
                //     {
                //         x: "Regis",

                //         y: 44,
                //         type: "histogram"
                //     },
                //     {
                //         x: "Tracy",

                //         y: 0,
                //         type: "histogram"
                //     }
            ],
        };
    }

    render() {
        return (
            <div>
                <Layout>
                    <Plot
                        data={[
                            this.state.data
                        ]}

                        layout={{ width: 450, height: 450, title: 'Name vs WPM' }}
                    />
                </Layout>
            </div>
        );
    }
}



export default Chart;