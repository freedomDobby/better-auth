import { createAuthClient } from "better-auth/client";
import { twoFactor } from "better-auth/plugins";
import { adminClient } from "better-auth/client/plugins"
import { sendEmail } from "./email";



export const authClient = createAuthClient({
  baseURL: "/api/auth",
  plugins: [
    twoFactor({
      otpOptions: {
        async sendOTP({ user, otp }, request) {
          // 예시: user.email이 있다면 그걸로 보냄
          const email = user.email;
          if (!email) {
            console.error("❌ 사용자 이메일이 없습니다.");
            return;
          }
          console.log('💌 sendOTP ', request)

          try {
            await sendEmail({
              to: email,
              subject: "🔐 2단계 인증 코드",
              html: `<p>당신의 인증 코드는 <strong>${otp}</strong> 입니다.</p>`,
            });

            console.log("📨 OTP 이메일 전송 완료:", email);
          } catch (error) {
            console.error("❌ OTP 이메일 전송 실패:", error);
          }
        },
      },
    }),
    adminClient()
  ],
}) as any;

