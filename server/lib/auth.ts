// import { DataSource } from 'typeorm'
import { betterAuth } from "better-auth";
import { Pool } from "pg";
import dotenv from 'dotenv';
import { sendEmail } from "./email";

dotenv.config();


export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: Number(process.env.MAIN_VITE_DB_PORT),
  password: process.env.MAIN_VITE_DB_PASSWORD,
  database: process.env.MAIN_VITE_DB_DATABASE,
});

export const auth = betterAuth({
  database: pool,
  requireEmailVerification: true,
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    autoSignIn: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  }, emailVerification: {
    enabled: true,
    autoSignInAfterVerification: true,
    async sendVerificationEmail({ user, url, token }, req) {
      console.log("📧 sendVerificationEmail 호출됨");
      await sendEmail({
        to: user.email,
        subject: "이메일 인증 요청입니다",
        html: `
         <div style="max-width: 600px; margin: 0 auto; padding: 30px; border: 5px solid #22c55e; border-radius: 12px; font-family: sans-serif; text-align: center;">
  <h1 style="color: #22c55e;">이메일 인증</h1>
  <p style="font-size: 16px; margin-bottom: 24px;">아래 버튼을 클릭하여 이메일 인증을 완료해주세요:</p>
  
  <a href="${url}" 
     style="display: inline-block; padding: 12px 24px; background-color: #22c55e; color: white; text-decoration: none; font-weight: bold; border-radius: 6px; transition: background-color 0.3s;"
     onmouseover="this.style.backgroundColor='#16a34a';"
     onmouseout="this.style.backgroundColor='#22c55e';"
  >
    이메일 인증하기
  </a>
</div>
        `,
      });
    },
  }
});