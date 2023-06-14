import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import type { Response, Request } from 'express';

import { Catch, NotFoundException } from '@nestjs/common';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();
        response.status(404).json({
            code: 404,
            data: null,
            msg: `路径 ${request.method} ${request.url}  不存在`,
        });
    }
}
