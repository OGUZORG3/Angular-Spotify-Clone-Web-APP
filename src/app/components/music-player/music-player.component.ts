import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MusicDataService } from '../../service/music-data.service';
import { music } from '../../service/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css'
})
export class MusicPlayerComponent implements AfterViewInit {
  public nowPlayingMusic:music = {
    id:0,
    picture:'',
    title:'',
    soundPath:'',
    muzikSanatci:''
  }
  public screenOnOff:boolean=false;
  public screenButton:any;
  public musicScreen:any;
  public soundList:Array<any> = []
  public voiceLevel:number=100;
  public musicRange:any;
  public rangeValue:number = 0;
  public musicIndexNow:number = 1;
  public musicPlayer:HTMLAudioElement = document.getElementById("audio") as HTMLAudioElement;
  public playPauseButton:any;
  public autoPlay:boolean=false;

  ngAfterViewInit(): void {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    let range_values = 0;
    this.rangeValue = range_values;
    this.musicRange = document.getElementById("musicRange");
    this.playPauseButton= document.getElementById("playPause")?.classList;
    this.musicPlayer = audio;
    this.musicScreen = document.getElementById('music__player-container');
    this.screenButton = document.getElementById('screenButton');
    audio.addEventListener('timeupdate', () => {
      this.rangeValue = audio.currentTime;
      if(audio.ended && this.autoPlay){
        this.playPause();
      }
      if(audio.ended){
        this.playPauseButton.toggle("fa-play");
      }
    });

  }

  constructor(private musicService : MusicDataService){
    musicService.list.subscribe((data) => {
      let isIn =false;
      for(let item of this.soundList){
        if(item.id == data.id){
          isIn = true;
        }
      }
      if(isIn==false){
        this.soundList.push(data);
      }
      this.musicIndexNow = this.soundList.indexOf(this.soundList.find(music => music.id==data.id));
      this.musicChange(this.musicIndexNow)
    });

  }

  public musicChange(musicİndex:number = 0){
    console.log(this.soundList)
    this.nowPlayingMusic=this.soundList[musicİndex];
    console.log(this.nowPlayingMusic);
    this.playPauseButton.add("fa-play");
    this.musicPlayer.play();
  }

  public playPause(){
    if (this.musicPlayer && this.musicPlayer.paused) {
      this.playPauseButton.remove("fa-play");
      this.musicPlayer.play();
      this.musicRange.max =this.musicPlayer.duration;

    } else if (this.musicPlayer) {
      this.musicPlayer.pause();
      this.playPauseButton.toggle("fa-play");
    }
  }

  public forward(){
    this.playPauseButton.add("fa-play");
    this.musicIndexNow=this.musicIndexNow+1
    console.log(this.musicIndexNow)
    this.musicChange(this.musicIndexNow);
  }

  public backward(){
      this.playPauseButton.add("fa-play");
      this.musicIndexNow = this.musicIndexNow-1;
      console.log(this.musicIndexNow)
      this.musicChange(this.musicIndexNow);
  }

  public setTime(){
    this.musicPlayer.currentTime = this.rangeValue;
  }
  public setVoice(){
    this.musicPlayer.volume = this.voiceLevel/100;
  }
  public calculateTime = (totalSecond:number) => {
    const minute = Math.floor(totalSecond / 60);
    const second = Math.floor(totalSecond % 60);
    const updatedSecond = second < 10 ? `0${second}` : `${second}`;
    const result = `${minute}:${updatedSecond}`;
    return result;
  }
  public musicScreenControll(){
    if(this.screenOnOff == true){
      console.log(this.screenOnOff)
      this.musicScreen.style.top = 100+"vh";
      this.screenButton.style.top = -140+"px";
      this.screenButton.children[0].children[0].classList.remove('fa-arrow-down')
      this.screenButton.children[0].children[0].classList.add('fa-arrow-up')
      this.screenOnOff = false;
    }
    else
    {
      this.screenButton.children[0].children[0].classList.remove('fa-arrow-up')
      this.screenButton.children[0].children[0].classList.add('fa-arrow-down')
      this.screenButton.style.top = 20+"px";
      this.musicScreen.style.top = 0;
      this.screenOnOff=true;
    }

  }
}
