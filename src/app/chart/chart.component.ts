import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Label} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnChanges {

  @Input() data;
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: '#ef6c00',
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontSize: 40
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }]
    }

  };

  barChartLabels: Label[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartColor: '#ef6c00';
  barChartData: any;

  //  barChartData = [
  //   { data: this.data || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Predictions' },
  // ];

  ngOnChanges() {
    this.barChartData = [
      {
        data: this.data || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        label: 'Predictions',
        backgroundColor: '#ef6c00',
      }];
  }

}
