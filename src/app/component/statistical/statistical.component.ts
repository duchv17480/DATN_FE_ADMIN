import { ThongKeTheoNgay } from './../../_model/Statistical';
import { data } from 'jquery';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { StatisticalService } from './../../_service/Statistical/statistical.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
import { DatePipe } from '@angular/common';
import { Statistical, ThongKeTheoThang } from 'src/app/_model/Statistical';
@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit {

  statisticalDates!: ThongKeTheoNgay[];
  statisticalDatesTable!: ThongKeTheoNgay[];
  listDataDate!: MatTableDataSource<ThongKeTheoNgay>;
  lengthDate!: number;
  columnsDate: string[] = ['index', 'totalOrder', 'totalMoney'];

  statisticalMonths!: ThongKeTheoThang[];
  statisticalMonthsTable!: Statistical[];
  listDataMonth!: MatTableDataSource<Statistical>;
  lengthMonth!: number;
  columnsMonth: string[] = ['index', 'year', 'totalOrder', 'totalMoney'];

  statisticalYearsTable!: Statistical[];
  listDataYear!: any

  doanhthu!: any;
  lengthYears!: number;
  columnsYears: string[] = ['index', 'year', 'totalOrder', 'totalMoney'];
  statisticalYear!: Statistical[];

  @ViewChild('sortMonth') sortMonth!: MatSort;
  @ViewChild('MatPaginatorMonth') paginatorMonth!: MatPaginator;
  @ViewChild('sortDate') sortDate!: MatSort;
  @ViewChild('MatPaginatorDate') paginatorDate!: MatPaginator;
  @ViewChild('sortYear') sortYear!: MatSort;
  @ViewChild('MatPaginatorYear') paginatorYear!: MatPaginator;


  labelsDate: any[] = [];
  dataDate: number[] = [];

  labelsMonth: any[] = [];
  dataMonth: number[] = [];

  labelsYear: any[] = [];
  dataYear: number[] = [];

  myChartLine !: Chart;
  myChartBar !: Chart;
  myCharDoughnut !: Chart;




  constructor(private datepipe: DatePipe, private statisticalService: StatisticalService, private toastr: ToastrService, private sessionService: SessionStorageService) { }

  ngOnInit(): void {

    Chart.register(...registerables);
    // this.getStatisticalAllDate();
     this.getStatisticalMonth();
    this.getStatisticalYear();
    this.getdate();
    this.getStatisticalAllDate();
  }



  getStatisticalAllDate() {
    this.statisticalService.getDate().subscribe(data => {
      console.log('data1', data);
      //chart
      this.statisticalDates = data.data as any;
      this.statisticalDates.forEach(item => {
        this.dataDate.push(item.totalMoney),
          this.labelsDate.push(this.datepipe.transform(new Date, 'dd/MM/yyyy'));
      })
      this.loadChartLineDate();

      //table
      this.statisticalDatesTable = this.statisticalDates;
      // this.statisticalDatesTable.sort((o1,o2) =>  {
      //   if(o1.date<o2.date) {
      //     return 1;
      //   }
      //   if(o1.date>o2.date) {
      //     return -1;
      //   }
      //   return 0;
      // });
      this.listDataDate = new MatTableDataSource(this.statisticalDatesTable);
      this.lengthDate = this.statisticalDatesTable.length;
      this.listDataDate.sort = this.sortDate;
      this.listDataDate.paginator = this.paginatorDate;
    }, error => {
      this.toastr.error('Lỗi! ' + error.status, 'Hệ thống');
    })
  }




  getStatisticalMonth() {
    this.statisticalService.getmonthyear().subscribe(data => {
      console.log('data', data);

      this.statisticalMonths = data.data as any;

      this.statisticalMonths.forEach(item => {
        this.dataMonth.push(item.totalMoney),
        this.labelsMonth.push(item.month+'/'+item.year);
      })
      this.loadChartLineMonth();

      //table
      this.statisticalMonthsTable = this.statisticalMonths;
      this.statisticalMonthsTable.sort((o1,o2) =>  {
        if(o1.year<o2.year) {
          return 1;
        }
        if(o1.year>o2.year) {
          return -1;
        }
        return 0;
      });
      this.listDataMonth = new MatTableDataSource(this.statisticalMonthsTable);
      this.lengthMonth = this.statisticalMonthsTable.length;
      this.listDataMonth.sort = this.sortMonth;
      this.listDataMonth.paginator = this.paginatorMonth;
    })
  };






  getStatisticalYear() {
    this.statisticalService.getall().subscribe(data => {
      console.log('dảa', data);


      this.statisticalYear = data.data;
      this.listDataYear = new MatTableDataSource(this.statisticalYear);
      this.lengthYears = this.statisticalYear.length;
      this.listDataYear.sort = this.sortYear;
      this.listDataYear.paginator = this.paginatorYear;
      this.statisticalYear.forEach(item => {
        this.dataYear.push(item.totalMoney);
        this.labelsYear.push('Năm ' + (item.year));
      })
      this.loadChartDoughnutYear();
    })
  }
  getdate(){
    this.statisticalService.getDate().subscribe(data => {
      this.doanhthu=data.data[0].totalMoney;
      console.log('this.doanhthu', this.doanhthu);

    })
  }


  loadChartLineDate() {
    this.myChartBar = new Chart('chart', {
      type: 'bar',
      data: {
        labels: this.labelsDate,
        datasets: [{
          // label: '# of Votes',
          data: this.dataDate,
          // borderColor: 'rgb(75, 192, 192)',
          // pointBorderColor: 'rgba(54, 162, 235, 0.2)',
          // backgroundColor: 'rgba(255, 99, 132, 0.2)',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(0, 162, 71, 0.2)',
            'rgba(82, 0, 36, 0.2)',
            'rgba(82, 164, 36, 0.2)',
            'rgba(255, 158, 146, 0.2)',
            'rgba(123, 39, 56, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(0, 162, 71, 1)',
            'rgba(82, 0, 36, 1)',
            'rgba(82, 164, 36, 1)',
            'rgba(255, 158, 146, 1)',
            'rgba(123, 39, 56, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  loadChartLineMonth() {
    this.myChartBar = new Chart('chartMonth', {
      type: 'line',
      data: {
        labels: this.labelsMonth,
        datasets: [{
          // label: '# of Votes',
          data: this.dataMonth,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  loadChartDoughnutYear() {
    this.myChartBar = new Chart('chartYear', {
      type: 'pie',
      data: {
        labels: this.labelsYear,
        datasets: [{
          label: 'My First Dataset',
          data: this.dataYear,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(43, 99, 71)',
            'rgb(43, 255, 222)',
            'rgb(43, 113, 222)',
            'rgb(43, 13, 222)'
          ],
          hoverOffset: 1
        }]
      },
    });
  }

}
