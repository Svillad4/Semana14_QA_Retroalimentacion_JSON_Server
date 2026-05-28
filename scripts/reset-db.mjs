import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
copyFileSync(resolve(root, "db.base.json"), resolve(root, "db.json"));
console.log("Base de datos restaurada: db.json volvio a su estado inicial.");
