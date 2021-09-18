import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Item, SearchYTResult } from 'src/app/protected/models/search-yt-result';
import { AuthService } from '../../auth/services/auth.service';
import { DialogVideoShowComponent } from '../components/dialog-video-show/dialog-video-show.component';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  wordSearched: string = '';
  resultSearch!: SearchYTResult;
  dataDailySalesChart:any = {};
  displayedColumns: string[] = ['image', 'title', 'watch'];
  itemList: Item[] = [{
    "kind": "youtube#searchResult",
    "etag": "9EoWCyLZySTSl0NPdFwLJNYFJFw",
    "id": {
        "kind": "youtube#video",
        "videoId": "eguctGjUNLI"
    },
    "snippet": {
        "publishedAt": new Date("2014-03-20"),
        "channelId": "UCfA6kwpdkQenkHnLcgmzz-A",
        "title": "Soda Stereo - Prófugos (Gira Me Verás Volver)",
        "description": "Soda Stereo - \"Prófugos\" (Gira Me Verás Volver) Escuchá el álbum ACÁ ▷ http://smarturl.it/GiraMVV2 Lo mejor de Soda: http://smarturl.it/SodaStereo Mirá ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/eguctGjUNLI/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/eguctGjUNLI/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/eguctGjUNLI/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "SodaStereoVEVO",
        "liveBroadcastContent": "none",
        "publishTime": new Date("2014-03-20")
    }
}];
  dataSource = this.itemList;
  
  get user() {
    return this.authService.user;
  }
  constructor(private router: Router, private authService: AuthService, private searchService: SearchService, public dialog: MatDialog) { }
  logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }

  onSearch = () => {
    this.searchService.searchByWord(this.wordSearched).subscribe(resp => {
      this.resultSearch = resp.data!;
      this.dataSource = this.resultSearch.items;
      console.log(this.resultSearch);
    });
  }
  showVideo = (e: any) => {
    console.log(e);
    const dialogRef = this.dialog.open(DialogVideoShowComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
