import userRoutes from "./users-routes.js";
import authRoutes from "./auth-routes.js";
import moviesRoutes from "./movies-routes.js";
import genderRoutes from "./gender-routes.js";

export const renderRoutes = [
  {
    method: "GET",
    url: "/health",
    handler: (_, res) => {
      res.status(200).send();
    },
  },
  ...Object.values(userRoutes),
  ...Object.values(authRoutes),
  ...Object.values(moviesRoutes),
  ...Object.values(genderRoutes),
];

export default (fastify, _, next) => {
  fastify.decorateRequest("user", null);

  fastify.addHook("onRequest", (req, _, next) => {
    console.log("onRequest");
    req.user = null;
    next();
  });
  for (let route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
