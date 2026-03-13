import {
  listCommunities,
  joinCommunity,
  leaveCommunity,
  getCommunitiesFeed
} from "@carevo/contracts/api"

export const communityService = {

  list: (params?: { page?: number; limit?: number }) =>
    listCommunities(params),

  feed: (params?: { page?: number }) =>
    getCommunitiesFeed(params),

  join: (communityId: string) =>
    joinCommunity({ communityId }),

  leave: (communityId: string) =>
    leaveCommunity({ communityId })

}