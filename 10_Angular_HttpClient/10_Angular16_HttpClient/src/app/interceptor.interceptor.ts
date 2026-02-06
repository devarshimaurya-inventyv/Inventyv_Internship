import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, throwError } from 'rxjs';
import { HttpInterceptorFn } from '@angular/common/http';
import {  } from '../../../10_Angular18_HttpClient/src/app/interceptor.interceptor';
import { LoadingserviceService } from './loadingservice.service';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
     const clonedReq =req.clone({
        setHeaders:{
            interceptor : 'value passed'
        }        
    })
    console.log("interceptor called");
    

    return next(clonedReq);
};



export const Loading:HttpInterceptorFn=(req,next)=>{
  const loader=inject(LoadingserviceService);

    loader.show();
    console.log("Loading interceptor called");

    return next(req).pipe(
      finalize(()=>loader.hide())
    )
}

export const error:HttpInterceptorFn=(req,next)=>{
    console.log("error interceptor called");

  return next(req).pipe(
    catchError(err =>{
      console.log("api fetch error",err); 
      alert("Something went wrong!");
      return throwError(()=>err);     
    })
  );
}