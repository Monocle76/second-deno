import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const router = new Router();

app.addEventListener("listen", () => console.log("Listening on port 3000"));

router
  .get("/", (c) => {
    c.response.body = { message: "Hello, World!" }
  })
  .get("/greet/:name", (c) => {
    c.response.body = { message: `Hello, ${c.params.name}` }
  });

app
  .use(router.routes(), router.allowedMethods())
  .listen({ port: 80 });
