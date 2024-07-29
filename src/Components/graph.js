import React from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './graph.css'

class LineChart extends React.Component {
    render() {
        const { ageHours, sbrMeasurement, gestationAge } = this.props;
    
        // Function to calculate y-values for PT_threshold equation
        const calculatePTThreshold = (hour) => {
            if (gestationAge === '28') {
                if (hour <= 72) {
                    return (hour * 1.94444) + 40;
                } else {
                    return 180;
                }
            } else if (gestationAge === '29') {
                if (hour <= 72) {
                    return (hour * 2.08333) + 40;
                } else {
                    return 190;
                }
            } else if (gestationAge === '30') {
                if (hour <= 72) {
                    return (hour * 2.22222) + 40;
                } else {
                    return 200;
                }
            } else if (gestationAge === '31') {
                if (hour <= 72) {
                    return (hour * 2.36111) + 40;
                } else {
                    return 210;
                }
            } else if (gestationAge === '32') {
                if (hour <= 72) {
                    return (hour * 2.50000) + 40;
                } else {
                    return 220;
                }
            } else if (gestationAge === '33') {
                if (hour <= 72) {
                    return (hour * 2.63889) + 40;
                } else {
                    return 230;
                }
            } else if (gestationAge === '34') {
                if (hour <= 72) {
                    return (hour * 2.77778) + 40;
                } else {
                    return 240;
                }
            } else if (gestationAge === '35') {
                if (hour <= 72) {
                    return (hour * 2.91667) + 40;
                } else {
                    return 250;
                }
            } else if (gestationAge === '36') {
                if (hour <= 72) {
                    return (hour * 3.05556) + 40;
                } else {
                    return 260;
                }
            } else if (gestationAge === '37') {
                if (hour <= 72) {
                    return (hour * 3.19444) + 40;
                } else {
                    return 270;
                }
            } else if (gestationAge >= '38') {
                if (hour < 24) { 
                    return (hour*4.16667) + 100 
                } else if (hour >= 24 && hour <= 96) { 
                    return (hour*2.08333) + 150
                } else if (hour > 96) { 
                    return 350 
                } 
            } 
        };
  
        // Function to calculate y-values for S_threshold equation
        const calculateSThreshold = (hour) => {
            if (gestationAge === '28') {
                if (hour <= 72) {
                    return (hour * 2.63889) + 40;
                } else {
                    return 230;
                }
            } else if (gestationAge === '29') {
                if (hour <= 72) {
                    return (hour * 2.77778) + 40; 
                } else {
                    return 240;
                }
            } else if (gestationAge === '30') {
                if (hour <= 72) {
                    return (hour * 2.91667) + 40;
                } else {
                    return 250;
                }
            } else if (gestationAge === '31') {
                if (hour <= 72) {
                    return (hour * 3.05556) + 40;
                } else {
                    return 260;
                }
            } else if (gestationAge === '32') {
                if (hour <= 72) {
                    return (hour * 3.19444) + 40; 
                } else {
                    return 270;
                }
            } else if (gestationAge === '33') {
                if (hour <= 72) {
                    return (hour * 3.33333) + 40; 
                } else {
                    return 280;
                }
            } else if (gestationAge === '34') {
                if (hour <= 72) {
                    return (hour * 3.47222) + 40; 
                } else {
                    return 290;
                }
            } else if (gestationAge === '35') {
                if (hour <= 72) {
                    return (hour * 3.61111) + 40; 
                } else {
                    return 300;
                }
            } else if (gestationAge === '36') {
                if (hour <= 72) {
                    return (hour * 3.75000) + 40; 
                } else {
                    return 310;
                }
            } else if (gestationAge === '37') {
                if (hour <= 72) {
                    return (hour * 3.88889) + 40; 
                } else {
                    return 320;
                }
            } else if (gestationAge >= '38') {
                if (hour <= 48) {
                    return (hour*6.25) + 100
                } else {
                    return 400
                }
            } 
        };
  
        // Generate x-values (hour) from 0 to 336
        const hour = Array.from({ length: 361 }, (_, i) => i);
    
        // Calculate y-values for each equation
        const ptThresholdData = hour.map(calculatePTThreshold);
        const sThresholdData = hour.map(calculateSThreshold);
    
        // Plot singular patient data based on input
        const singularPointIndex = parseInt(this.props.ageHours);
        const singularPointData = Array(hour.length).fill(null);
        singularPointData[singularPointIndex] = parseFloat(this.props.sbrMeasurement);
    
        const data = {
            labels: hour,
            datasets: [
            {
                label: 'Phototherapy Line',
                data: ptThresholdData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
            {
                label: 'Severity Line',
                data: sThresholdData,
                fill: false,
                borderColor: 'rgb(192, 75, 192)',
                backgroundColor: 'rgb(192, 75, 192)',
                tension: 0.1,
            },
            {
                label: 'Neonate',
                data: singularPointData,
                fill: true,
                pointRadius: 5,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
            },
            ],
        };
  
      // Options object for chart configuration
        const options = {
            scales: {
                x: { 
                    title: {
                        display: true, 
                        text: 'Age (hours)',
                        color: 'black',
                    },
                    grid: {
                        color: 'black',
                    },
                    ticks: {
                        color: 'black',
                        stepSize: 12,
                        max: 360,
                    },
                },
                y: {
                    title : { 
                        display: true, 
                        text: 'Bilirubin Level (microg/dL)',
                        color: 'black',
                    },
                    beginAtZero: true,
                    grid: { 
                        color: 'black',
                    },
                    ticks: {
                        color: 'black',
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: { 
                        color: 'black',
                    },
                    
                },
                title: {
                    display: true,
                    text: 'Bilirubin Threshold',
                    color: 'Black',
                    font: { 
                        size: 18, 
                        weight: 'bold',
                    },
                },
            },
        };
  
        return (
            <div className='chart-container'>
            <Line data={data} options={options} />
            </div>
        );
    }
  }
  
  export default LineChart;
  