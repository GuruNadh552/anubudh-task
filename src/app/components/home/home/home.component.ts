import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Highcharts from 'highcharts';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  coptions: any = {
    colors : ['#006633'],
    chart: {
      type: 'area',
    },
    title: {
      text: 'Warnings',
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return 2021; // clean, unformatted number for year
        },
      },
      accessibility: {
        rangeDescription: 'Range: 1940 to 2018.',
      },
    },
    plotOptions: {
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: 'Russia',
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          5,
          25,
          50,
          120,
          150,
          200,
          426,
          660,
          869,
          1060,
          1605,
          2471,
          3322,
          4238,
          5221,
          6129,
          7089,
          8339,
          9399,
          10538,
          11643,
          13092,
          14478,
          15915,
          17385,
          19055,
          21205,
          23044,
          25393,
          27935,
          30062,
          32049,
          33952,
          35804,
          37431,
          39197,
          45000,
          43000,
          41000,
          39000,
          37000,
          35000,
          33000,
          31000,
          29000,
          27000,
          25000,
          24000,
          23000,
          22000,
          21000,
          20000,
          19000,
          18000,
          18000,
          17000,
          16000,
          15537,
          14162,
          12787,
          12600,
          11400,
          5500,
          4512,
          4502,
          4502,
          4500,
          4500,
          4100,
        ],
      },
    ],
  };
  chartOptions: any = [
    {
      colors : ['#006633','#CC0000'],
      series: [
        {
          data: [1, 2],
          type: 'pie',
        },
      ],
      title: {
        text: 'Site Visitors',
      },
      plotOptions: {
        pie: {
          size: '100%',
          innerSize: '70%',
          allowPointSelect: true,
          cursor: 'pointer',
              dataLabels: {
                  enabled: false,
              }
        },
      },
    },
    this.coptions,
    {
      colors:['#006633','#CCCCCC'],
      title: {
        text: 'Memory Load',
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%',
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Browser share',
          innerSize: '50%',
          data: [
            ['Chrome', 42],
            ['Firefox', 58],
          ],
        },
      ],
    },
  ];

  doubleChart : any = {
    colors : ['#006633','#CC0000'],
    series: [
      {
        data: [1, 2],
        type: 'pie',
      },
    ],
    title: {
      text: '',
    },
    plotOptions: {
      pie: {
        size: '100%',
        innerSize: '70%',
        allowPointSelect: true,
        cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
      },
    },
  };


  myControl = new FormControl();
  options: string[] = ['India', 'China', 'Zimbambave'];
  filteredOptions!: Observable<string[]>;



  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value:any) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

}
