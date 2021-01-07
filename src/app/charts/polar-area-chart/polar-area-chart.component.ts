import { Component, OnInit, ViewChild } from '@angular/core';
import * as chartJs from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit {
  @ViewChild('polarAreaCanvas', { static: true }) polarAreaCanvas;
  polarAreaChart: any;
  data: Array<any> = [12, 19, 3, 3, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20]

  constructor() { }

  ngOnInit() {
    this.polarAreaChartMethod();
  }

  polarAreaChartMethod() {
    this.polarAreaChart = new chartJs.Chart(this.polarAreaCanvas.nativeElement, {
      type: 'polarArea',
      data: {
        labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20', 'D21', 'D22', 'D23', 'D24', 'D25', 'D26', 'D27', 'D28', 'D29', 'D30'],
        datasets: [{
          label: 'Number of Backorders',
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 99, 132, 0.5)'
          ],
          borderDashOffset: 10,
          borderWidth: 2,
          hoverBorderWidth: 2,
          hoverBackgroundColor: '#FFAA'
        }]
      },
      options: { 
        responsive: true,
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Backorders for Dealers'
        }
      }
    });

  }

}
