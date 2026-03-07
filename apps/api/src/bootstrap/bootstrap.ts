import { fastify } from "fastify";

export function bootstrap() {
  const app = fastify();

  app.get("/", () => {
    return "carevo";
  });

  app.get("/health", () => {
    return {
      ok: "true",
    };
  });

  app.listen({
    host: "0.0.0.0",
    port: 8080,
  });
}
