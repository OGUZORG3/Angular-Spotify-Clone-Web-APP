import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SongCardComponent } from '../../components/song-card/song-card.component';
import { MusicListComponent } from '../../components/music-list/music-list.component';
import { SearchBarService } from '../../service/search-bar.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MusicPlayerComponent } from '../../components/music-player/music-player.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent,SongCardComponent,CommonModule,MusicListComponent,RouterLink,RouterOutlet,MusicPlayerComponent,SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public sideBar:any = document.getElementById("responsive-sidebar");
  constructor(){
  }
  ngOnInit(): void {
    this.sideBar = document.getElementById("responsive-sidebar");
  }
  public sideBarControl(sideButton:boolean){
    if(sideButton == true)
    {
      console.log(sideButton)
      this.sideBar.style.transform = "translateX(" + 0 + "px)"
    }
    else if(sideButton == false) {
      this.sideBar.style.transform = "translateX(" + -70 + "Vw)"
    }
  }
}
