import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    
  ]
})
export class DashboardComponent {

  dataDailySalesChart:any = {};
  get user() {
    return this.authService.user;
  }
  constructor(private router: Router, private authService: AuthService) { }
  logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }

  // initDocumentationCharts() {
  //   if ($('#dailySalesChart').length != 0 && $('#websiteViewsChart').length != 0) {
  //     /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

  //     this.dataDailySalesChart = {
  //       labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  //       series: [
  //         [12, 17, 7, 17, 23, 18, 38]
  //       ]
  //     };

  //     optionsDailySalesChart = {
  //       lineSmooth: Chartist.Interpolation.cardinal({
  //         tension: 0
  //       }),
  //       low: 0,
  //       high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
  //       chartPadding: {
  //         top: 0,
  //         right: 0,
  //         bottom: 0,
  //         left: 0
  //       },
  //     }

  //     var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  //     var animationHeaderChart = new Chartist.Line('#websiteViewsChart', dataDailySalesChart, optionsDailySalesChart);
  //   }
  // }

}
// `
//     * {
//       margin: 15px
//     }
//     `