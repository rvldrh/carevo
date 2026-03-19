import { create } from "zustand";

interface CommentState {
  activeReplyId: string | null;
  setActiveReply: (id: string | null) => void;
}

export const useCommentStore = create<CommentState>((set) => ({
  activeReplyId: null,
  setActiveReply: (id) => set({ activeReplyId: id }),
}));