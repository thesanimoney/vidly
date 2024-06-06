import dotenv from "dotenv";
dotenv.config();
export const port = process.env.PORT;
export const jwtSecret = process.env.JWT_SECRET!;
export const dbProd = process.env.DB_PROD!;
export const dbTest = process.env.DB_TEST!;