import loginQuery from "../../dataAccess/SQL/loginQuery";
import { createToken } from "../../middleware/jwt";
import { verifyHash } from "../../lib/dataManipulations/hashing/hash";
export default new (class loginService {
  public login = async (username: string, password: string) => {
    try {
      const adminExist: any = await loginQuery.isAdminExist(username);
      return adminExist.length
        ? this.adminExists(password, username)
        : {
            token: "",
            message: "please enter the valid username!",
          };
    } catch (error) {
      throw error;
    }
  };
  private adminExists = async (password: string, username: string) => {
    try {
      const dbHash: any = await loginQuery.adminPasswordVerification(
        username,
        password
      );
      return this.verifyPassword(password, dbHash, username);
    } catch (error) {
      throw error;
    }
  };
  private verifyPassword = async (
    password: string,
    dbHash: string,
    username: string
  ) => {
    try {
      if (await verifyHash(password, dbHash)) {
        const token = await createToken(username);
        let data = {
          jwt: token,
        };
        return data;
      } else {
        return {
          token: "",
          message: "Invalid Password",
        };
      }
    } catch (error) {
      throw error;
    }
  };
})();
