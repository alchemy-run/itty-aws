import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  source: {
    entry: {
      index: process.argv[4],
    },
  },
  output: {
    target: "node",
    externals: [
      "@effect/platform",
      "@effect/platform-node-shared",
      "@effect/platform-bun",
      "effect",
      "@aws-sdk/credential-providers",
    ],
    // externals: {
    //   "@effect/platform": "@effect/platform",
    //   "@effect/platform-node-shared": "@effect/platform-node-shared",
    //   "@effect/platform-bun": "@effect/platform-bun",
    //   effect: "effect",
    //   "@aws-sdk/credential-providers": "@aws-sdk/credential-providers",
    // },
    minify: {
      js: true,
      jsOptions: {
        minimizerOptions: {
          // minify: false,
          // mangle: false,
        },
      },
    },
    distPath: {
      root: "dist",
      js: ".",
    },
    filename: {
      js: "bundle.js",
    },
  },
  tools: {
    htmlPlugin: false,
  },
  performance: {
    // bundleAnalyze: {
    //   generateStatsFile: true,
    // },
    chunkSplit: {
      strategy: "all-in-one",
    },
  },
});
