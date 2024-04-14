import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    DATABASE_AUTH_TOKEN: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.TURSO_CONNECTION_URL,
    DATABASE_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
  },
  skipValidation: true,
});
