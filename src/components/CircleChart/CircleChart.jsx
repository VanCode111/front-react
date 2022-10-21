import React from 'react';

import {
    Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    plugins: {
        legend: {
            display: false,
            labels: {
                pointStyle: 'circle',
            },
        },
    },
};

const CircleChart = ({ data, colors }) => {
    const dataSet = {
        labels: ['Red', 'Blue'],
        datasets: [
            {
                label: '# of Votes',
                data,
                backgroundColor: colors,
                borderWidth: 0,
                borderRadius: 50,

                spacing: 5,
                rotation: -40,
                weight: 0.2,
                cutout: '90%',
            },
        ],
    };

    return <Doughnut data={dataSet} options={options} />;
};

export default CircleChart;
