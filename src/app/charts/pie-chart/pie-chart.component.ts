import { Component, OnInit, ViewChild } from '@angular/core';
import * as chartJs from 'chart.js';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @ViewChild('pieCanvas', { static: true }) pieCanvas;
  pieChart: any;
  data: Array<any> = [12, 19, 3, 3, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20]

  constructor() { }

  ngOnInit() {
    this.pieChartMethod();
  }

  pieChartMethod() {
    this.pieChart = new chartJs.Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
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
