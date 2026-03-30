import {} from "@carevo/contracts/api"

export interface AuthState {
  userId: string | null;
}

export interface AuthActions {
  setUserId: (userId: string | null) => void;
  clearUser: () => void;
}

export type AuthStore = AuthState & AuthActions;