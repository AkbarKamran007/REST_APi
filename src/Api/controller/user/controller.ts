import { Request, Response, NextFunction } from "express";

import {
  dbError,
  internalServerError,
  successResponse,
} from "../../lib/helpers/response/responseHandler";

export class userController {
  getUser = async (req: Request, res: Response) => {
    try {
      successResponse(200, "All User", [], res);
    } catch (error: any) {
      internalServerError(
        "Server Error",
        [{ valid: false, data: error.message }],
        res
      );
    }
  };
}
