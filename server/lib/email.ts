import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// 환경 변수 로드
dotenv.config();

export const sendEmail = async ({ to, subject, text }: { to: string; subject: string; text: string }) => {
  try {
    // 이메일 전송을 위한 Nodemailer transporter 설정
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // SMTP 서버 주소
      port: Number(process.env.EMAIL_PORT), // SMTP 포트
      secure: process.env.EMAIL_SECURE === 'true', // 보안 설정 (true/false)
      auth: {
        user: process.env.EMAIL_USER, // 발신 이메일 주소
        pass: process.env.EMAIL_PASS, // 발신 이메일 비밀번호
      },
    });

    // 이메일 전송
    const mailOptions = {
      from: process.env.EMAIL_USER, // 발신 이메일
      to: 'gyeong270@gmail.com',
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log('📧 이메일 전송 완료');
  } catch (error) {
    console.error('이메일 전송 중 오류 발생:', error);
  }
};
