import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = 'https://api.edamam.com/api/';
  // appId = '298c7eb4';
  // appKey = 'a6006ad7a6fc1798a0094a9bdadab6d2';
  appId = '47379841';
  appKey = 'd28718060b8adfd39783ead254df7f92';

  constructor(public http: HttpClient) { }

  post(url, body) {
    let params = new HttpParams().set("app_id", this.appId).set("app_key", this.appKey);
    return this.http.post(this.apiUrl + url, body, { params: params });
  }
}
