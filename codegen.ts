import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./src/types/graphql.ts": {
      config: {
        avoidOptionals: true,
        scalars: {
          DateTimeISO: "string",
        },
      },
      plugins: ["typescript"],
    },
  },
  overwrite: true,
  schema: "https://api.paksign.pk/graphql",
};

export default config;
