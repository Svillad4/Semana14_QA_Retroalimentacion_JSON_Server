import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const requiredFiles = [
  "README.md",
  "package.json",
  "db.json",
  "index.html",
  "src/js/app.js",
  "src/js/api.js",
  "src/js/validation.js",
  "src/css/styles.css",
  "docs/registro-bugs.md",
  "docs/plan-mejora.md",
  "docs/co-evaluacion-pares.md",
  "docs/comparacion-antes-despues.md",
  "docs/checklist-qa.md",
  "docs/rubrica.md"
];

let score = 0;
let total = 0;
const issues = [];

function check(condition, okMessage, issueMessage) {
  total += 1;
  if (condition) {
    score += 1;
    console.log(`OK  ${okMessage}`);
  } else {
    issues.push(issueMessage);
    console.log(`REV ${issueMessage}`);
  }
}

for (const file of requiredFiles) {
  check(existsSync(resolve(root, file)), `Existe ${file}`, `Falta el archivo ${file}`);
}

const indexPath = resolve(root, "index.html");
const validationPath = resolve(root, "src/js/validation.js");
const appPath = resolve(root, "src/js/app.js");
const cssPath = resolve(root, "src/css/styles.css");

const index = existsSync(indexPath) ? readFileSync(indexPath, "utf8") : "";
const validation = existsSync(validationPath) ? readFileSync(validationPath, "utf8") : "";
const app = existsSync(appPath) ? readFileSync(appPath, "utf8") : "";
const css = existsSync(cssPath) ? readFileSync(cssPath, "utf8") : "";

check(index.includes("alt="), "El HTML usa atributos alt en imagenes", "Revisa las imagenes: deben tener atributo alt descriptivo.");
check(index.includes("<main"), "El HTML contiene etiqueta main", "Agrega o conserva una estructura semantica con main.");
check(index.includes("<section"), "El HTML contiene secciones semanticas", "Usa section para organizar bloques de contenido.");
check(index.includes("for=\"telefono\"") || index.includes("for='telefono'"), "Telefono tiene label asociado", "El campo telefono debe tener label asociado con for=\"telefono\".");
check(/onlyNumbers\.length\s*===\s*10|onlyNumbers\.length\s*!==\s*10|onlyNumbers\.length\s*<\s*10/.test(validation), "La validacion del telefono fue revisada", "Ajusta la validacion del telefono para exigir longitud adecuada.");
check(/comentario.*length|length.*comentario/s.test(validation), "El comentario tiene criterio de longitud", "Agrega una validacion de longitud minima para el comentario.");
check(/await\s+loadVisitors\(\)/.test(app), "La tabla se recarga despues de cambios", "Asegura que la tabla se actualice despues de guardar o eliminar.");
check(/outline\s*:\s*none/.test(css) === false, "El foco de teclado no fue eliminado", "Revisa accesibilidad: no elimines outline sin reemplazarlo por un foco visible.");
check(/@media/.test(css), "El CSS incluye media query responsive", "Agrega media queries para mejorar vista movil.");

console.log("\nResultado de revision local:");
console.log(`${score}/${total} puntos de chequeo cumplidos.`);

if (issues.length) {
  console.log("\nPendientes sugeridos:");
  issues.forEach((issue, index) => console.log(`${index + 1}. ${issue}`));
  console.log("\nEste comando no reemplaza la rubrica. Usalo como ayuda antes de entregar.");
  process.exitCode = 1;
} else {
  console.log("\nExcelente. No se detectaron pendientes automaticos basicos. Revisa tambien tus evidencias y documentos.");
}
