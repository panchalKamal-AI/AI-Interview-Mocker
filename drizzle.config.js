/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_D6EBSNmMr5Hs@ep-red-sound-a8jyq1om-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
  };
