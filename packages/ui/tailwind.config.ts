import type { Config } from "tailwindcss";

import sharedConfig from "@trepo/tailwind-config/tailwind.config";

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;
