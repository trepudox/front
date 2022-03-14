import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../responses/Genre';
import { GlobalResponse } from '../responses/global/GlobalResponse';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }

  public getGenreById(id: number): Observable<GlobalResponse<Genre>> {
    return this.httpClient.get<GlobalResponse<Genre>>(`http://localhost:8080/genre/id/${id}`);
  }

}
