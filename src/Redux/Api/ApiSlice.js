import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://crm.softvalley.sveducrm.com",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.Auth?.token;
      console.log("token", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
   

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
