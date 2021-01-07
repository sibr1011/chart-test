import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { FlippedBarChartComponent } from './charts/flipped-bar-chart/flipped-bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './charts/polar-area-chart/polar-area-chart.component';

const routes: Routes = [
  { path: 'flipped-bar-chart', component: FlippedBarChartComponent },
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'polar-area-chart', component: PolarAreaChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
