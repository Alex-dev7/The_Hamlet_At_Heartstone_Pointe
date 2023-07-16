import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'sd87l8wb',
    dataset: 'production',
    title: 'hamlet-heartstone',
    apiVersion: "2023-15-07",
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config