import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PlayList } from 'src/app/auth/models/play-list';
import { PlayListItemService } from '../services/play-list-item.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styles: [
  ]
})
export class PlayListComponent implements OnInit {
  
  playList: PlayList = new PlayList();
  constructor(private playListItemService: PlayListItemService) { }

  ngOnInit(): void {
    this.getPlayListItem();
  }

  getPlayListItem = () => 
  {
    this.playListItemService.getPlayList("test").subscribe(resp => {
      this.playList = resp.data!;
    });
  }

}
