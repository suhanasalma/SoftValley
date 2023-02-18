import { ApiSlice } from "../Api/ApiSlice";
import { userLoggedIn } from "./AuthSlice";

export const AuthApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/admin/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({ token: result?.data?.data?.token })
          );
          dispatch(userLoggedIn(result?.data?.data?.token));
        } catch (err) {}
      },
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
