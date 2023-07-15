import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"

const config = defineConfig({
    projectId: 'sd87l8wb',
    dataset: 'production',
    title: 'hamlet-heartstone',
    apiVersion: "2023-15-07",
    basePath: '/admin',
    plugins: [deskTool()]
})

export default config