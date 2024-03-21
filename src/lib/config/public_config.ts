const public_config = {
  TRPC_ENDPOINT: process.env.NEXT_PUBLIC_TRPC_ENDPOINT!,
};

let key: keyof typeof public_config;
for (key in public_config) {
  if (public_config[key] === undefined) {
    throw new Error(`Environment variable ${key} is not set.`);
  }
}

export default public_config;
