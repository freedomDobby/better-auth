import { auth } from "../../lib/auth";
import { defineEventHandler, toWebRequest } from 'h3';


const pool = auth.options.database; // better-auth 내부의 Pool 인스턴스

export default defineEventHandler(async (event) => {
  console.log("💫 Incoming auth request");
  // console.log("🛸 Pool", pool)

  try {
    const result = await pool.query('SELECT current_database();');
    console.log('🗃 Connected to DB:', result.rows[0].current_database);
  } catch (err) {
    console.error('❌ DB 연결 확인 중 오류 발생:', err);
  }

  return auth.handler(toWebRequest(event));
});