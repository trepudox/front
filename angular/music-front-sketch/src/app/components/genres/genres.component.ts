import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    
    this.genreService.getGenreById(410).subscribe({
      next: g => console.log(g),
      error: (e) => {
        let error: HttpErrorResponse = e as HttpErrorResponse;
        console.log(error.error);
      }
    });

  }
  
}
