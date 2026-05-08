import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import path from "path";
import { readFileSync } from "fs";
import router from "./routes";
import { logger } from "./lib/logger";
import { injectMeta } from "./seo";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const DIST_DIR = path.join(path.dirname(new URL(import.meta.url).pathname), "..", "public");

app.use(express.static(DIST_DIR));

app.get("/{*splat}", (req: Request, res: Response) => {
  try {
    const indexPath = path.join(DIST_DIR, "index.html");
    let html = readFileSync(indexPath, "utf8");
    html = injectMeta(html, req.path);
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch {
    res.status(404).send("Not found");
  }
});

export default app;
