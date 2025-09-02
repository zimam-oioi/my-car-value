import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export class SelerializeInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        // run something before req is handled
        // by the req handler 
        console.log("I'm running before handler",context);

        return handler.handle().pipe(
            map((data: any) =>{
                //run something before res is sent out
                console.log('run before send res out', data);
            })
        )
    }
}