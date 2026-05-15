import dotenv from "dotenv";
dotenv.config()
 
export const ENV ={
    port : process.env.PORT,
    db_url: process.env.DB_URL,
    node_env: process.env.NODE_ENV,
    FRONTEND_URL:process.env.FRONTEND_URL,
    CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY,
    CLERK_PUBLISHABLE_KEY:process.env.CLERK_PUBLISHABLE_KEY
}