import { Component, OnInit, ViewChild } from '@angular/core';
import * as chartJs from 'chart.js';

@Component({
  selector: 'app-flipped-bar-chart',
  templateUrl: './flipped-bar-chart.component.html',
  styleUrls: ['./flipped-bar-chart.component.css']
})
export class FlippedBarChartComponent implements OnInit {
  @ViewChild('barCanvas', { static: true }) barCanvas;
  @ViewChild('mixed', { static: true }) mixed;
  barChart: any;
  mixedChart: any;

  constructor() { }

  ngOnInit() {
    this.barChartMethod();
    this.testChartMethod();
  }

  testChartMethod() {
    this.mixedChart = new chartJs.Chart(this.mixed.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Backorders"],
        datasets: [{
          label: "Backorders D1",
          data: [150],
          borderWidth: 0.5
        }, {
          label: "Backorders D2",
          data: [50],
          borderWidth: 0.5
        }, {
          label: "Backorders D3",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D4",
          data: [100],
          borderWidth: 0.5
        }, {
          label: "Backorders D5",
          data: [70],
          borderWidth: 0.5
        }, {
          label: "Backorders D6",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D7",
          data: [20],
          borderWidth: 0.5
        }, {
          label: "Backorders D8",
          data: [80],
          borderWidth: 0.5
        }, {
          label: "Backorders D9",
          data: [100],
          borderWidth: 0.5
        }, {
          label: "Backorders D10",
          data: [10],
          borderWidth: 0.5
        }, {
          label: "Backorders D11",
          data: [65],
          borderWidth: 0.5
        }, {
          label: "Backorders D12",
          data: [15],
          borderWidth: 0.5
        }, {
          label: "Backorders D13",
          data: [20],
          borderWidth: 0.5
        }, {
          label: "Backorders D14",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D15",
          data: [40],
          borderWidth: 0.5
        }, {
          label: "Backorders D16",
          data: [70],
          borderWidth: 0.5
        }, {
          label: "Backorders D17",
          data: [90],
          borderWidth: 0.5
        }, {
          label: "Backorders D18",
          data: [10],
          borderWidth: 0.5
        }, {
          label: "Backorders D19",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D20",
          data: [50],
          borderWidth: 0.5
        }, {
          label: "Backorders D21",
          data: [75],
          borderWidth: 0.5
        }, {
          label: "Backorders D22",
          data: [35],
          borderWidth: 0.5
        }, {
          label: "Backorders D23",
          data: [90],
          borderWidth: 0.5
        }, {
          label: "Backorders D24",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D25",
          data: [50],
          borderWidth: 0.5
        }, {
          label: "Backorders D26",
          data: [40],
          borderWidth: 0.5
        }, {
          label: "Backorders D27",
          data: [60],
          borderWidth: 0.5
        }, {
          label: "Backorders D28",
          data: [10],
          borderWidth: 0.5
        }, {
          label: "Backorders D29",
          data: [15],
          borderWidth: 0.5
        }, {
          label: "Backorders D30",
          data: [120],
          borderWidth: 0.5
        }]
      },
      options: {
        responsive: true,
        legend: { position: 'right' },
        title: { display: true, text: 'Backorders for Dealers' },
        animation: {
          duration: 500,
          easing: 'easeInOutBounce'
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              autoSkip: false
            }
          }]
        }
      }
    });
  }

  barChartMethod() {
    this.barChart = new chartJs.Chart(this.barCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ["Backorders"],
        datasets: [{
          label: "Backorders D1",
          data: [150],
          borderWidth: 0.5
        }, {
          label: "Backorders D2",
          data: [50],
          borderWidth: 0.5
        }, {
          label: "Backorders D3",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D4",
          data: [100],
          borderWidth: 0.5
        }, {
          label: "Backorders D5",
          data: [70],
          borderWidth: 0.5
        }, {
          label: "Backorders D6",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D7",
          data: [20],
          borderWidth: 0.5
        }, {
          label: "Backorders D8",
          data: [80],
          borderWidth: 0.5
        }, {
          label: "Backorders D9",
          data: [100],
          borderWidth: 0.5
        }, {
          label: "Backorders D10",
          data: [10],
          borderWidth: 0.5
        }, {
          label: "Backorders D11",
          data: [65],
          borderWidth: 0.5
        }, {
          label: "Backorders D12",
          data: [15],
          borderWidth: 0.5
        }, {
          label: "Backorders D13",
          data: [20],
          borderWidth: 0.5
        }, {
          label: "Backorders D14",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D15",
          data: [40],
          borderWidth: 0.5
        }, {
          label: "Backorders D16",
          data: [70],
          borderWidth: 0.5
        }, {
          label: "Backorders D17",
          data: [90],
          borderWidth: 0.5
        }, {
          label: "Backorders D18",
          data: [10],
          borderWidth: 0.5
        }, {
          label: "Backorders D19",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D20",
          data: [50],
          borderWidth: 0.5
        }, {
          label: "Backorders D21",
          data: [75],
          borderWidth: 0.5
        }, {
          label: "Backorders D22",
          data: [35],
          borderWidth: 0.5
        }, {
          label: "Backorders D23",
          data: [90],
          borderWidth: 0.5
        }, {
          label: "Backorders D24",
          data: [30],
          borderWidth: 0.5
        }, {
          label: "Backorders D25",
          data: [50],
          borderWidth: 0.5
        }, {
          label: "Backorders D26",
          data: [40],
          borderWidth: 0.5
        }, {
          label: "Backorders D27",
          data: [60],
          borderWidth: 0.5
        }, {
          label: "Backorders D28",
          data: [10],
          borderWidth: 0.5
        }, {
          label: "Backorders D29",
          data: [15],
          borderWidth: 0.5
        }, {
          label: "Backorders D30",
          data: [120],
          borderWidth: 0.5
        }]
      },
      options: {
        responsive: true,
        legend: { position: 'top' },
        title: { display: true, text: 'Backorders for Dealers' },
        animation: {
          duration: 500,
          easing: 'easeInOutBounce'
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              autoSkip: false
            }
          }],
          yAxes: [{
            ticks: {
              maxRotation: 90,
              minRotation: 90
            }
          }]
        }
      }
    });
  }

}
