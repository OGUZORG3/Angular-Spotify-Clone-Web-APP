import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { music } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {
  public ThumbNail:string = 'https://placehold.co/400x400';
  public allSoundList:Array<any> = [{
    id:1,
    picture:this.ThumbNail,
    title:"calm-chill-beautiful",
    soundPath:"../../../assets/musiz/calm-chill-beautiful-141317.mp3",
    muzikSanatci:"Artist"
  },
  {
    id:2,
    picture:this.ThumbNail,
    title:"happy-day-background-vlog-music",
    soundPath:"../../../assets/musiz/happy-day-background-vlog-music-148320.mp3",
    muzikSanatci:"Artist"
  },
  {
    id:3,
    picture:this.ThumbNail,
    title:"tvari-tokyo-cafe",
    soundPath:"../../../assets/musiz/tvari-tokyo-cafe-159065.mp3",
    muzikSanatci:"Artist"
  },
]
  public sendMusicList:Subject<any> = new Subject();
  public list:Subject<music> = new Subject();
  public playListData:Array<any> = [{
    playListName:'string',
    playListContent:[
        {
        id:1,
        picture:this.ThumbNail,
        title:"tvari-tokyo-cafe",
        soundPath:"../../../assets/musiz/tvari-tokyo-cafe-159065.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:2,
        picture:this.ThumbNail,
        title:"calm-chill-beautiful",
        soundPath:"../../../assets/musiz/calm-chill-beautiful-141317.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:3,
        picture:this.ThumbNail,
        title:"happy-day-background-vlog-music",
        soundPath:"../../../assets/musiz/happy-day-background-vlog-music-148320.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:4,
        picture:this.ThumbNail,
        title:"tvari-tokyo-cafe",
        soundPath:"../../../assets/musiz/tvari-tokyo-cafe-159065.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:5,
        picture:this.ThumbNail,
        title:"calm-chill-beautiful",
        soundPath:"../../../assets/musiz/calm-chill-beautiful-141317.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:6,
        picture:this.ThumbNail,
        title:"calm-chill-beautiful",
        soundPath:"../../../assets/musiz/calm-chill-beautiful-141317.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:7,
        picture:this.ThumbNail,
        title:"tvari-tokyo-cafe",
        soundPath:"../../../assets/musiz/tvari-tokyo-cafe-159065.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:8,
        picture:this.ThumbNail,
        title:"happy-day-background-vlog-music",
        soundPath:"../../../assets/musiz/happy-day-background-vlog-music-148320.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:9,
        picture:this.ThumbNail,
        title:"tvari-tokyo-cafe",
        soundPath:"../../../assets/musiz/tvari-tokyo-cafe-159065.mp3",
        muzikSanatci:"Sanatci İsmi"
      },
    ],
  },
  {
    playListName:'string',
    playListContent:[
      this.allSoundList[0],
    ],
  }]
  constructor() { }
  public musicInput(music:any){

  }
  public getAllMusic():Observable<any[]>{
   return of(this.allSoundList);
  }
  public musicPlayerSender(music:any){
    this.list.next(music);
  }
}
