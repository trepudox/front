import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/responses/Genre';
import { GlobalResponse } from 'src/app/responses/global/GlobalResponse';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    let genre: Observable<GlobalResponse<Genre>> =  this.genreService.getGenreById(41);
    genre.subscribe(g => {
      console.log(g);
      console.log(g.content.id);
    });
  }

}
