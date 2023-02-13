import { join } from "https://deno.land/std@0.152.0/path/mod.ts";
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
  })
  .get("/htmlpage", (c) => {
    const htmlData = Deno.readTextFileSync(join(Deno.cwd(), "views", "index.html"));
    c.response.body = htmlData
  })

app
  .use(router.routes(), router.allowedMethods())
  .listen({ port: 3000 });
