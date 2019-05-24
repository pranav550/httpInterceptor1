import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent}   from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {

          // first


        const duplicate = req.clone({ params: req.params.set('filter', 'completed') });

        return next.handle(duplicate);

      }


        // second

        // if (req.body) {
        //     const duplicate = req.clone({ body: req.body.replace(/pizza/gi, '🍕') });
        //     return next.handle(duplicate);
        //   }
        //   return next.handle(req);
        // }


        // third

        // return next.handle(req).do(evt => {
        //     if (evt instanceof HttpResponse) {
        //       console.log('---> status:', evt.status);
        //       console.log('---> filter:', req.params.get('filter'));
        //     }
        //   });
      
        // }   
        
    }








