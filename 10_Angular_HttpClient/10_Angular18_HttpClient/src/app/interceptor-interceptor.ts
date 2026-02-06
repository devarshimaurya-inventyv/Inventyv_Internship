import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Loadingservice } from './loadingservice';
import { catchError, finalize, throwError } from 'rxjs';

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
  const loader=inject(Loadingservice);

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