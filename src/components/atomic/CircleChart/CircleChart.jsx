import React from 'react';
import PropTypes from 'prop-types';

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

export const CircleChart = ({
    data, colors, labels, className, ...props
}) => {
    const dataSet = {
        labels,
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

CircleChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    className: PropTypes.string,
};
