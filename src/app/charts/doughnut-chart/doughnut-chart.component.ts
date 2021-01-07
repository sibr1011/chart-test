import { Component, OnInit, ViewChild } from '@angular/core';
import * as chartJs from 'chart.js';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  @ViewChild('doughnutCanvas', { static: true }) doughnutCanvas;
  doughnutChart: any;
  data: Array<any> = [12, 19, 3, 3, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20, 12, 19, 3, 5, 15, 20]

  constructor() { }

  ngOnInit() {
    this.doughnutChartMethod();
    chartJs.Chart.pluginService.register({
      beforeDraw: () => {
        let width = this.doughnutChart.chart.width;
        let height = this.doughnutChart.chart.height;
        let ctx = this.doughnutChart.chart.ctx;
    
        ctx.restore();
        let fontSize = (height / 130).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
    
        let text = `${this.data.reduce((a, b) => a + b, 0)} BO`;
        let textX = Math.round((width - ctx.measureText(text).width) / 2);
        let textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new chartJs.Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
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
          borderWidth: 5,
          hoverBorderWidth: 2
        }]
      },
      options: {
        cutoutPercentage: 60,
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
