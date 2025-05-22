// composables/useAuthClient.ts
import { createAuthClient } from "better-auth/vue";
import { adminClient } from "better-auth/client/plugins";


export const authClient = createAuthClient({
  plugins: [adminClient()],
}) as any;


export const {
  signIn,
  signUp,
  signOut,
  useSession,
  sendVerificationEmail,
  admin
} = authClient;
