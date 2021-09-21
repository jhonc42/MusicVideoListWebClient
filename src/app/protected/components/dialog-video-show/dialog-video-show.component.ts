import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-video-show',
  templateUrl: './dialog-video-show.component.html',
  styleUrls: ['./dialog-video-show.component.css']
})
export class DialogVideoShowComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public VideoId: string = '';
  videoUrl: SafeUrl = '';
  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustHtml(`https://www.youtube.com/embed/${this.VideoId}`); 
    }

  ngOnInit(): void {
  }

}
