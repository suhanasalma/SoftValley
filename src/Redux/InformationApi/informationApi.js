import { ApiSlice } from "../Api/ApiSlice";

export const informationApi = ApiSlice.injectEndpoints({
  tagTypes: ["all_info"],
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: ({ page, perPage ,userIdAssign,sourceId,statusId}) => ({
        url: `/api/admin/lead/list`,
        method: "POST",
        body: {
          search: "",
          lead_status_id: statusId, //id status
          source_id: sourceId, //id source
          user_id: userIdAssign, //userId assignee
          contacted_date_from: [],
          contacted_date_to: [],
        },
      }),
      providesTags: ["all_info"],
    }),
   
    fetchStatus: builder.query({
      query: () => "/api/admin/base/lead-status",
    }),
    fetchAssign: builder.query({
      query: () => "/api/admin/base/assignee",
    }),
    fetchSource: builder.query({
      query: () => "/api/admin/base/source",
    }),
  }),
});

export const {
  useGetInfoQuery,
  useFetchAssignQuery,
  useFetchStatusQuery,
  useFetchSourceQuery,
  
} = informationApi;
