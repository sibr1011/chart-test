import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlippedBarChartComponent } from './charts/flipped-bar-chart/flipped-bar-chart.component';
import { PolarAreaChartComponent } from './charts/polar-area-chart/polar-area-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    FlippedBarChartComponent,
    PolarAreaChartComponent,
    DoughnutChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
