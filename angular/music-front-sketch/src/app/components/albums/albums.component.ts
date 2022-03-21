import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/responses/Genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

	public albumsFound: number = 0;
  public allGenres: Genre[];

  constructor(genreService: GenreService) {
		genreService.getAllGenres().subscribe({
			next: gs => {
				this.allGenres = gs.content;
				console.log(gs);
			},
			error: e => {
				console.log(e);
				this.allGenres = [];
			}
		});

	 }

  ngOnInit(): void {
  }


}
