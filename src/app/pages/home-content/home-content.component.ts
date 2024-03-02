import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MusicDataService } from '../../service/music-data.service';
import { SongCardComponent } from '../../components/song-card/song-card.component';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule,SongCardComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent {
  public musicList1:Array<any> = [];
  constructor(private musicService:MusicDataService){
    this.musicList1 = musicService.allSoundList;
  }
}
