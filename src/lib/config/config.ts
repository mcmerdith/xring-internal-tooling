const config = {
  COREFORCE_API_KEY: process.env.COREFORCE_API_KEY!,
  COREFORCE_API_ENDPOINT: process.env.COREFORCE_API_ENDPOINT!,
  SB_API_ENDPOINT: process.env.SB_API_ENDPOINT!,
  SB_API_KEY: process.env.SB_API_KEY!,
  SB_DATABASE_URL: process.env.SB_DATABASE_URL!,
};

let key: keyof typeof config;
for (key in config) {
  if (config[key] === undefined) {
    throw new Error(`Environment variable ${key} is not set.`);
  }
}

export default config;
