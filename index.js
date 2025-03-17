import { parser } from "./dist/index.js"
import fs from "node:fs";

fs.readFile('./src/example.json', 'utf8', (err, data) => {
    const json = data;
    const tree = parser.parse(json);
    console.log("Arbol sintactico JSON")
    console.log(tree.toString())
});