import {lezer} from "@lezer/generator/rollup"

export default {
  input: "./src/json.grammar",
  output: [{
    format: "es",
    file: "./dist/index.js"
  }, {
    format: "cjs",
    file: "./dist/index.cjs"
  }],
  external: ["@lezer/lr", "@lezer/highlight"],
  plugins: [lezer()]
}