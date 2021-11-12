import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { SharedDataService } from "./shared";

@Injectable() 
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private sharedDataService: SharedDataService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        //do whatever you want with the 
        this.sharedDataService.isLoading.next(true);
        console.log(req)
        return next.handle(req).pipe(
            tap(resp => {
                if (resp instanceof HttpResponse) {
                    // Do whatever you want with the response.
                    this.sharedDataService.isLoading.next(false);
                    // console.log(resp);
                    if(!(req.method == 'GET')) this.sharedDataService.refreshContacts.next(true);
                    
                }
            }),
            catchError(err => {
                if(err instanceof HttpErrorResponse) {
                   alert('some error occured!')
                   this.sharedDataService.isLoading.next(false);
                }
                return of(err);
            }));
    }
}