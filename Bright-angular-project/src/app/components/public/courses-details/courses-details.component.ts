import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {
    @HostListener('click', ['$event']) onClick(event) {
        const ignoreClickOnMeElement = document.getElementById('my-video');
        const isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if(!isClickInsideElement) {
            this.pauseVideo()
        }
    }
    constructor() { }

    ngOnInit(): void {
    }

    pauseVideo() {
        const targetVideo = <HTMLVideoElement>document.getElementById('my-video');

        if (!targetVideo.paused) {
            targetVideo.pause();
            console.log("paused");
        }
    }

    playVideo() {
        const targetVideo = <HTMLVideoElement>document.getElementById('my-video');
        targetVideo.play()
    }

    
}
