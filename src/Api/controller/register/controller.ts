import { Request, Response, NextFunction } from "express";
import registerValidation from "./validation";
import registerService from "../../services/register/service";
import {
  dbError,
  internalServerError,
  successResponse,
} from "../../lib/helpers/response/responseHandler";

export class registerController {
  registerAdmin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const validCheck = await registerValidation.validRegisterAdmin(
        email,
        password
      );
      if (validCheck)
        successResponse(400, "Invalid Parameter", [{ valid: false }], res);
      else {
        try {
          let data = await registerService.serviceRegisterAdmin(
            email,
            password
          );
          successResponse(200, "success", [data], res);
        } catch (error: any) {
          dbError([{ valid: false, data: error.message }], res);
        }
      }
    } catch (error: any) {
      internalServerError(
        "Server Error",
        [{ valid: false, data: error.message }],
        res
      );
    }
  };
}
