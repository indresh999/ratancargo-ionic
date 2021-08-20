import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feedData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }



}
