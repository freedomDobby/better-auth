// composables/useAuthClient.ts
import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient();

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  sendVerificationEmail,
} = authClient;
