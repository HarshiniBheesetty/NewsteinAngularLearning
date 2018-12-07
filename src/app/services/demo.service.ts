

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DemoService {

    //properties
    public name: string

    //methods
    public constructor(private http: HttpClient) {

    }

    public demoGetRequest(): Observable<any> {
        let header: HttpHeaders = new HttpHeaders(
            {
                "Content-type":" ",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCAyIiwiZW1haWxJZCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNWI0ZDA3NTI3MTJlYTYwY2Y2MTAxOWY3IiwicGVybWlzc2lvbnMiOlsiMTAxIiwiMTAyIiwiMjAxIiwiMjAyIiwiMzAwIiwiNDAwIiwiNTAwIiwiNjAxIiwiNjAyIiwiNjAzIl0sImlhdCI6MTUzNjMxODkwNSwiZXhwIjoxNTY3ODU0OTA1fQ.pWja_OtH5g5oXVug597Cxg5aIuW7zRZPZGI7JF184Oc"
            });

        let url: string;

        url = "http://api.stg.msupply.in/api/dashboard";

        return this.http.get<any>(url, { headers: header });
    }
}
