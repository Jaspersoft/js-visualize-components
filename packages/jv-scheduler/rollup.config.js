import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        external: Object.keys(packageJson.dependencies || {}),
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            postcss({
                extensions: ['.css'],
            }),
            typescript({
                tsconfig: "./tsconfig.json" ,
                include: ['**/*.ts+(|x)', '**/*.mts']
            }),
            json()
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];