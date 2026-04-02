import { getUser } from "@carevo/contracts/api";
import { create } from "zustand";

type AuthState = {
  userId: string | null;
  isLoading: boolean;
  initialize: () => Promise<void>;
  setUserId: (id: string) => void; 
  clear: () => void;
};
type AuthStateUsername = {
  username: string | null;
  isLoading: boolean;
  initialize: () => Promise<void>;
  clear: () => void;
};


export const useAuthStore = create<AuthState>()((set) => ({
  userId: null,
  isLoading: true,

  initialize: async () => {
    const { userId } = await getUser();
    set({ userId, isLoading: false });
  },

  setUserId: (id: string) => set({ userId: id, isLoading: false }),

  clear: () => set({ userId: null, isLoading: true }),
}));

export const useAuthStoreUsername = create<AuthStateUsername>()((set) => ({
  username: null,
  isLoading: true,


  initialize: async () => {
    const { username } = await getUser();
    set({ username, isLoading: false });
},

  clear: () => set({ username: null, isLoading: true }),
}));

