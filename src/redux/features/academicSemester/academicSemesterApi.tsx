import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (userInfo) => ({
        url: "/academic-semesters",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery} = academicSemesterApi;