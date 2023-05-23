import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/api-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  public getCharacters(
    currentApiPage: number,
    searchTerm: string
  ): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `https://rickandmortyapi.com/api/character/?page=${currentApiPage}&name=${searchTerm}`
    );
  }
}
