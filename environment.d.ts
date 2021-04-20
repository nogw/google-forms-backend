declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      MONGO_SECRET_URI: strign;
    }
  }
}

export {}