// useAdminClient.ts
import { authClient } from "../auth/useAuthClient";

// Better Auth 인스턴스 생성
export const adminUser = authClient.admin;

// admin API 추출
export const {
  createUser,
  listUsers,
} = adminUser
