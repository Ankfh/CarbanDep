import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BaseUrl } from "../../BaseURL/BaseUrl";

const token = JSON.parse(localStorage.getItem("token"));
// `${BaseUrl}/api/product/getallproduct/${companyId}`,
const companyId = JSON.parse(localStorage.getItem("companyId"));

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    GetAllProducts: builder.query({
      query: () => ({
        url: `product/getallproduct/${companyId}`,
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }),
      providesTags: ["User"],
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAllProductsQuery } = apiSlice;
