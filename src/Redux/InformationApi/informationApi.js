import { ApiSlice } from "../Api/ApiSlice";

export const informationApi = ApiSlice.injectEndpoints({
  tagTypes: ["all_info"],
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: ({ page, perPage }) => ({
        url: `/api/admin/lead/list`,
        method: "POST",
        body: {
          search: "",
          lead_status_id: [],
          source_id: [],
          user_id: [],
          contacted_date_from: [],
          contacted_date_to: [],
        },
      }),
      providesTags: ["all_info"],
    }),
    editInfo: builder.mutation({
      query: (data) => {
        console.log( data)
        return {
          url: "/api/admin/lead/list",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["all_info"],
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
  useEditInfoMutation,
} = informationApi;
