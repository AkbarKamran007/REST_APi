import registerRoute from "./register";
import loginRoute from "./login";
import user from "./user";
const router = [registerRoute, loginRoute, user];

const registerRouter = (app: any) => {
  router.map((route) => {
    app.use("/api", route);
  });
};

export default registerRouter;
