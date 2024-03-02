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
    title:"Where Did U Come From",
    soundPath:"../../../assets/musiz/Where Did U Come From - Jennings Couch (LYRICS).m4a",
    muzikSanatci:"Jennings Couch"
  },
  {
    id:2,
    picture:this.ThumbNail,
    title:"Witness",
    soundPath:"../../../assets/musiz/Witness - Jake Is Lloyd (LYRICS).m4a",
    muzikSanatci:"Lloyd"
  },
  {
    id:3,
    picture:this.ThumbNail,
    title:"Till Tomorrow",
    soundPath:"../../../assets/musiz/Till Tomorrow - Stellar (Official Lyric Video).m4a",
    muzikSanatci:"Stellar"
  },
  {
    id:4,
    picture:this.ThumbNail,
    title:"Wolves",
    soundPath:"../../../assets/musiz/Wolves - Jake Daniels (LYRICS).m4a",
    muzikSanatci:"Jake Daniels"
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
        title:"sound2",
        soundPath:"../../../assets/musiz/Where Did U Come From - Jennings Couch (LYRICS).m4a",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:2,
        picture:this.ThumbNail,
        title:"sound2",
        soundPath:"../../../assets/musiz/Witness - Jake Is Lloyd (LYRICS).m4a",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:3,
        picture:this.ThumbNail,
        title:"sound2",
        soundPath:"../../../assets/musiz/Till Tomorrow - Stellar (Official Lyric Video).m4a",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:4,
        picture:this.ThumbNail,
        title:"sound2",
        soundPath:"../../../assets/musiz/Wolves - Jake Daniels (LYRICS).m4a",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:5,
        picture:this.ThumbNail,
        title:"sound2",
        soundPath:"../../../assets/musiz/Where Did U Come From - Jennings Couch (LYRICS).m4a",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:6,
        picture:this.ThumbNail,
        title:"sound2",
        soundPath:"../../../assets/musiz/Wolves - Jake Daniels (LYRICS).m4a",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:7,
        picture:this.ThumbNail,
        title:"sound2",
        soundPath:"../../../assets/musiz/Where Did U Come From - Jennings Couch (LYRICS).m4a",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:8,
        picture:this.ThumbNail,
        title:"sound2",
        soundPath:"../../../assets/musiz/Witness - Jake Is Lloyd (LYRICS).m4a",
        muzikSanatci:"Sanatci İsmi"
      },
      {
        id:9,
        picture:this.ThumbNail,
        title:"sound2",
        soundPath:"../../../assets/musiz/Where Did U Come From - Jennings Couch (LYRICS).m4a",
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
