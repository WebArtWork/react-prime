(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95684,t=>{"use strict";var e=t.i(91398),a=t.i(5180),o=t.i(28137);function r(){let t={basic:`
<Chart type="line" data={data} pt={canvas: {'role': 'img', 'aria-label': 'Data'}}} />

<Chart type="line" data={data}>
    <DataTable />
</Chart>
        `};return(0,e.jsxs)(o.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,e.jsx)("h3",{children:"Screen Reader"}),(0,e.jsxs)("p",{children:["Chart components internally use ",(0,e.jsx)("i",{children:"canvas"})," element, refer to the"," ",(0,e.jsx)("a",{className:"text-primary hover:underline font-medium",href:"https://www.chartjs.org/docs/latest/general/accessibility.html",children:"Chart.js accessibility"})," ","guide for more information. The canvas element can be customized with ",(0,e.jsx)("i",{children:"pt"})," property to define aria roles and properties, in addition any content inside the component is directly passed as a child of the canvas to be able to provide fallback content like a table."]}),(0,e.jsx)(a.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var l=t.i(42639),s=t.i(91788);function c(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{c({labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"Sales",data:[540,325,702,620],backgroundColor:["rgba(255, 159, 64, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgb(255, 159, 64)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],borderWidth:1}]}),d({scales:{y:{beginAtZero:!0}}})},[]);let i={basic:`
<Chart type="bar" data={chartData} options={chartOptions} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BasicDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BasicDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsxs)("p",{children:["A chart is configured with 3 properties; ",(0,e.jsx)("i",{children:"type"}),", ",(0,e.jsx)("i",{children:"data"})," and ",(0,e.jsx)("i",{children:"options"}),". Chart type is defined using the ",(0,e.jsx)("i",{children:"type"})," property that accepts ",(0,e.jsx)("i",{children:"pie"}),", ",(0,e.jsx)("i",{children:"doughtnut"}),", ",(0,e.jsx)("i",{children:"line"}),", ",(0,e.jsx)("i",{children:"bar"}),", ",(0,e.jsx)("i",{children:"radar"})," and"," ",(0,e.jsx)("i",{children:"polarArea"})," as a value. The ",(0,e.jsx)("i",{children:"data"})," defines datasets represented with the chart and the ",(0,e.jsx)("i",{children:"options"})," provide numerous customization options to customize the presentation."]})}),(0,e.jsx)("div",{className:"card",children:(0,e.jsx)(l.Chart,{type:"bar",data:r,options:n})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function n(t){let r={basic:`
npm install chart.js
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsxs)("p",{children:["Chart component uses ",(0,e.jsx)("a",{href:"https://chartjs.org/",children:"Chart.JS"})," underneath so it needs to be installed as a dependency."]})}),(0,e.jsx)(a.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function d(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),o=t.getPropertyValue("--surface-border");c({labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"Dataset 1",borderColor:t.getPropertyValue("--blue-500"),borderWidth:2,fill:!1,tension:.4,data:[50,25,12,48,56,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:t.getPropertyValue("--green-500"),data:[21,84,24,75,37,65,34],borderColor:"white",borderWidth:2},{type:"bar",label:"Dataset 3",backgroundColor:t.getPropertyValue("--orange-500"),data:[41,52,24,74,23,21,32]}]}),d({maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:e}}},scales:{x:{ticks:{color:a},grid:{color:o}},y:{ticks:{color:a},grid:{color:o}}}})},[]);let i={basic:`
<Chart type="line" data={chartData} options={chartOptions} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function ComboDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    
    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function ComboDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsxs)("p",{children:["Different chart types can be combined in the same graph using the ",(0,e.jsx)("i",{children:"type"})," option of a dataset."]})}),(0,e.jsx)("div",{className:"card",children:(0,e.jsx)(l.Chart,{type:"bar",data:r,options:n})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function i(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement);c({labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:[t.getPropertyValue("--blue-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--green-500")],hoverBackgroundColor:[t.getPropertyValue("--blue-400"),t.getPropertyValue("--yellow-400"),t.getPropertyValue("--green-400")]}]}),d({cutout:"60%"})},[]);let i={basic:`
<Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsx)("p",{children:"A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included."})}),(0,e.jsx)("div",{className:"card flex justify-content-center",children:(0,e.jsx)(l.Chart,{type:"doughnut",data:r,options:n,className:"w-full md:w-30rem"})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function u(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),o=t.getPropertyValue("--surface-border");c({labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:t.getPropertyValue("--blue-500"),borderColor:t.getPropertyValue("--blue-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:t.getPropertyValue("--pink-500"),borderColor:t.getPropertyValue("--pink-500"),data:[28,48,40,19,86,27,90]}]}),d({indexAxis:"y",maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{fontColor:e}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:a},grid:{color:o,drawBorder:!1}}}})},[]);let i={basic:`
<Chart type="bar" data={chartData} options={chartOptions} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function HorizontalBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data)
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function HorizontalBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data)
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsxs)("p",{children:["A bar chart is rendered horizontally when ",(0,e.jsx)("i",{children:"indexAxis"})," option is set as ",(0,e.jsx)("i",{children:"y"}),"."]})}),(0,e.jsx)("div",{className:"card",children:(0,e.jsx)(l.Chart,{type:"bar",data:r,options:n})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function p(t){let r={basic:`
import { Chart } from 'primereact/chart';
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t}),(0,e.jsx)(a.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function y(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),o=t.getPropertyValue("--surface-border");c({labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:t.getPropertyValue("--blue-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderColor:t.getPropertyValue("--pink-500"),tension:.4}]}),d({maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:e}}},scales:{x:{ticks:{color:a},grid:{color:o}},y:{ticks:{color:a},grid:{color:o}}}})},[]);let i={basic:`
<Chart type="line" data={chartData} options={chartOptions} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsx)("p",{children:"A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments."})}),(0,e.jsx)("div",{className:"card",children:(0,e.jsx)(l.Chart,{type:"line",data:r,options:n})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function m(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),o=t.getPropertyValue("--surface-border");c({labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.4,borderColor:t.getPropertyValue("--blue-500")},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderDash:[5,5],tension:.4,borderColor:t.getPropertyValue("--teal-500")},{label:"Third Dataset",data:[12,51,62,33,21,62,45],fill:!0,borderColor:t.getPropertyValue("--orange-500"),tension:.4,backgroundColor:"rgba(255,167,38,0.2)"}]}),d({maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:e}}},scales:{x:{ticks:{color:a},grid:{color:o}},y:{ticks:{color:a},grid:{color:o}}}})},[]);let i={basic:`
<Chart type="line" data={chartData} options={chartOptions} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineStylesDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--blue-500')
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--teal-500')
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineStylesDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--blue-500')
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--teal-500')
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    
    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsx)("p",{children:"Various styles of a line series can be customized to display customizations like an area chart."})}),(0,e.jsx)("div",{className:"card",children:(0,e.jsx)(l.Chart,{type:"line",data:r,options:n})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function h(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),o=t.getPropertyValue("--surface-border");c({labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",fill:!1,borderColor:t.getPropertyValue("--blue-500"),yAxisID:"y",tension:.4,data:[65,59,80,81,56,55,10]},{label:"Dataset 2",fill:!1,borderColor:t.getPropertyValue("--green-500"),yAxisID:"y1",tension:.4,data:[28,48,40,19,86,27,90]}]}),d({stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:e}}},scales:{x:{ticks:{color:a},grid:{color:o}},y:{type:"linear",display:!0,position:"left",ticks:{color:a},grid:{color:o}},y1:{type:"linear",display:!0,position:"right",ticks:{color:a},grid:{drawOnChartArea:!1,color:o}}}})},[]);let i={basic:`
<Chart type="line" data={chartData} options={chartOptions} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function MultiAxisDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [65, 59, 80, 81, 56, 55, 10]
                },
                {
                    label: 'Dataset 2',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    yAxisID: 'y1',
                    tension: 0.4,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function MultiAxisDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [65, 59, 80, 81, 56, 55, 10]
                },
                {
                    label: 'Dataset 2',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    yAxisID: 'y1',
                    tension: 0.4,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsxs)("p",{children:["Multiple axes can be added using the ",(0,e.jsx)("i",{children:"scales"})," option."]})}),(0,e.jsx)("div",{className:"card",children:(0,e.jsx)(l.Chart,{type:"line",data:r,options:n})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function g(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement);c({labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[t.getPropertyValue("--blue-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--green-500")],hoverBackgroundColor:[t.getPropertyValue("--blue-400"),t.getPropertyValue("--yellow-400"),t.getPropertyValue("--green-400")]}]}),d({plugins:{legend:{labels:{usePointStyle:!0}}}})},[]);let i={basic:`
<Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PieChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PieChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsx)("p",{children:"A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion."})}),(0,e.jsx)("div",{className:"card flex justify-content-center",children:(0,e.jsx)(l.Chart,{type:"pie",data:r,options:n,className:"w-full md:w-30rem"})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function b(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--surface-border");c({datasets:[{data:[11,16,7,3,14],backgroundColor:[t.getPropertyValue("--red-500"),t.getPropertyValue("--green-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--bluegray-500"),t.getPropertyValue("--blue-500")],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]}),d({plugins:{legend:{labels:{color:e}}},scales:{r:{grid:{color:a}}}})},[]);let i={basic:`
<Chart type="polarArea" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PolarAreaDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'My dataset'
                }
            ],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="polarArea" data={chartData} options={chartOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PolarAreaDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'My dataset'
                }
            ],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="polarArea" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsx)("p",{children:"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."})}),(0,e.jsx)("div",{className:"card flex justify-content-center",children:(0,e.jsx)(l.Chart,{type:"polarArea",data:r,options:n,className:"w-full md:w-30rem"})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}let C=t=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t}),(0,e.jsx)("div",{children:(0,e.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"chart"})})]});function f(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary");c({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:t.getPropertyValue("--bluegray-400"),pointBackgroundColor:t.getPropertyValue("--bluegray-400"),pointBorderColor:t.getPropertyValue("--bluegray-400"),pointHoverBackgroundColor:e,pointHoverBorderColor:t.getPropertyValue("--bluegray-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:t.getPropertyValue("--pink-400"),pointBackgroundColor:t.getPropertyValue("--pink-400"),pointBorderColor:t.getPropertyValue("--pink-400"),pointHoverBackgroundColor:e,pointHoverBorderColor:t.getPropertyValue("--pink-400"),data:[28,48,40,19,96,27,100]}]}),d({plugins:{legend:{labels:{color:e}}},scales:{r:{grid:{color:a}}}})},[]);let i={basic:`
<Chart type="radar" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function RadarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: textColorSecondary
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="radar" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function RadarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: textColorSecondary
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    
    return (
        <div className="card flex justify-content-center">
            <Chart type="radar" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsx)("p",{children:"A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point."})}),(0,e.jsx)("div",{className:"card flex justify-content-center",children:(0,e.jsx)(l.Chart,{type:"radar",data:r,options:n,className:"w-full md:w-30rem"})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function S(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),o=t.getPropertyValue("--surface-border");c({labels:["January","February","March","April","May","June","July"],datasets:[{type:"bar",label:"Dataset 1",backgroundColor:t.getPropertyValue("--blue-500"),data:[50,25,12,48,90,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:t.getPropertyValue("--green-500"),data:[21,84,24,75,37,65,34]},{type:"bar",label:"Dataset 3",backgroundColor:t.getPropertyValue("--yellow-500"),data:[41,52,24,74,23,21,32]}]}),d({maintainAspectRatio:!1,aspectRatio:.8,plugins:{tooltips:{mode:"index",intersect:!1},legend:{labels:{color:e}}},scales:{x:{stacked:!0,ticks:{color:a},grid:{color:o}},y:{stacked:!0,ticks:{color:a},grid:{color:o}}}})},[]);let i={basic:`
<Chart type="bar" data={chartData} options={chartOptions} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function StackedBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function StackedBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsxs)("p",{children:["Bars can be stacked on top of each other when ",(0,e.jsx)("i",{children:"stacked"})," option of a scale is enabled."]})}),(0,e.jsx)("div",{className:"card ",children:(0,e.jsx)(l.Chart,{type:"bar",data:r,options:n})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}function x(t){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,e.jsx)("div",{className:"doc-tablewrapper",children:(0,e.jsxs)("table",{className:"doc-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Name"}),(0,e.jsx)("th",{children:"Element"})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"p-chart"}),(0,e.jsx)("td",{children:"Container element."})]})})]})})]})}var D=t.i(41158);function P(t){let r={basic:`
const Tailwind = {
    chart: {
        root: 'relative'
    }
}
        `},l={javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function UnstyledDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
    `};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(o.DocSectionText,{...t,children:[(0,e.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,e.jsx)(D.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,e.jsx)(a.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,e.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,e.jsx)(a.DocSectionCode,{code:l,dependencies:{"chart.js":"3.9.1"},embedded:!0})]})})}function V(t){let[r,c]=(0,s.useState)({}),[n,d]=(0,s.useState)({});(0,s.useEffect)(()=>{let t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),o=t.getPropertyValue("--surface-border");c({labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:t.getPropertyValue("--blue-500"),borderColor:t.getPropertyValue("--blue-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:t.getPropertyValue("--pink-500"),borderColor:t.getPropertyValue("--pink-500"),data:[28,48,40,19,86,27,90]}]}),d({maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{fontColor:e}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:a},grid:{color:o,drawBorder:!1}}}})},[]);let i={basic:`
<Chart type="bar" data={chartData} options={chartOptions} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function VerticalBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function VerticalBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    
    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        `};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.DocSectionText,{...t,children:(0,e.jsx)("p",{children:"A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent."})}),(0,e.jsx)("div",{className:"card",children:(0,e.jsx)(l.Chart,{type:"bar",data:r,options:n})}),(0,e.jsx)(a.DocSectionCode,{code:i,dependencies:{"chart.js":"3.9.1"}})]})}var j=t.i(88850),k=t.i(82948);t.s(["default",0,()=>{let t=[{id:"pt.wireframe",label:"Wireframe",component:C},{id:"pt.chart.options",label:"Chart PT Options",component:j.default}];return(0,e.jsx)(k.DocComponent,{title:"React Chart Component",header:"Chart",description:"Chart components are based on Chart.js, an open source HTML5 based charting library.",componentDocs:[{id:"import",label:"Import",component:p},{id:"chartjs",label:"Chart.js",component:n},{id:"basic",label:"Basic",component:c},{id:"pie",label:"Pie",component:g},{id:"doughnut",label:"Doughnut",component:i},{id:"vertical",label:"Vertical Bar",component:V},{id:"horizontal",label:"Horizontal Bar",component:u},{id:"stacked",label:"Stacked Bar",component:S},{id:"line",label:"Line",component:y},{id:"multiaxis",label:"Multi Axis",component:h},{id:"linestyles",label:"Line Styles",component:m},{id:"polararea",label:"Polar Area",component:b},{id:"radar",label:"Radar",component:f},{id:"combo",label:"Combo",component:d},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Chart"],ptDocs:t,themingDocs:[{id:"styled",label:"Styled",component:x},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:P}]}]})}],95684)},29855,(t,e,a)=>{let o="/chart";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>t.r(95684)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([o])})}]);