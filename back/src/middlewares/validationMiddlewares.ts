import { invalidDataError } from "@/errors/invalid-data-error";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function validateBody(schema: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        let ErrosSchema: any = [];

        await schema.validate(req.body, {
            abortEarly: false,
        }).catch(({ errors }: any) => {
            ErrosSchema = errors;
        });

        if (!ErrosSchema.length) {
            next();
        } else {
            res.status(httpStatus.BAD_REQUEST).send(invalidDataError(ErrosSchema.map((item: any) => item)));
        }
    }
}


