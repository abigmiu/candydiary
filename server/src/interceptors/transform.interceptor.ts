import type { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import type { Request, Response } from 'express';
import type { Observable } from 'rxjs';
import type { IResponse } from '@/types/response/response';

import { HttpStatus, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

import { CustomLoggerService } from '@/logger/logger.service';

function buildLog(request: Request, response: Response, data: IResponse) {
    const { method, url, body, query, params } = request;
    const { statusCode, statusMessage } = response;
    const log = {
        method,
        url,
        body,
        query,
        params,
        statusCode,
        statusMessage,
        responseData: data,
    };
    return log;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    constructor(private readonly logger: CustomLoggerService) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest<Request>();
        const response = context.switchToHttp().getResponse<Response>();
        if (request.method.toUpperCase() === 'POST' && response.statusCode === HttpStatus.CREATED) {
            response.status(HttpStatus.OK);
        }
        if (request.method.toUpperCase() === 'GET' && response.statusCode == HttpStatus.NOT_MODIFIED) {
            response.status(HttpStatus.OK);
        }

        return next.handle().pipe(
            map((data) => {
                const ret: IResponse = {
                    code: HttpStatus.OK,
                    data: data || null,
                    msg: 'ok',
                };

                this.logger.log(buildLog(request, response, ret));

                return ret;
            }),
        );
    }
}
