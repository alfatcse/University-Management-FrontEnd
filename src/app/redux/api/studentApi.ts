import { IMeta, IMyCourse, IStudent } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { getUserInfo } from "@/services/auth.service";
const auth = getUserInfo();
const STUDENT_URL = "/students";
export const studentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all students
    students: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${STUDENT_URL}`,
          method: "GET",
          params: arg,
          headers: {
            authorization: auth, // Include the authorization token in the header
          },
        };
      },
      transformResponse: (response: IStudent[], meta: IMeta) => {
        return {
          students: response,
          meta,
        };
      },
      providesTags: [tagTypes.student],
    }),
    // get single student
    student: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${STUDENT_URL}/${id}`,
        method: "GET",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      providesTags: [tagTypes.student],
    }),
    // create a new student
    addStudentWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        data,
        contentType: "multipart/form-data",
        // headers: {
        //   authorization: auth, // Include the authorization token in the header
        // },
      }),
      invalidatesTags: [tagTypes.student],
    }),
    // update student
    updateStudent: build.mutation({
      query: (data) => ({
        url: `${STUDENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.student],
    }),
    // delete student
    deleteStudent: build.mutation({
      query: (id) => ({
        url: `${STUDENT_URL}/${id}`,
        method: "DELETE",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.student],
    }),
    myCourses: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${STUDENT_URL}/my-courses`,
          method: "GET",
          params: arg,
          headers: {
            authorization: auth, // Include the authorization token in the header
          },
        };
      },
      transformResponse: (response: IMyCourse[], meta: IMeta) => {
        return {
          myCourses: response,
          meta,
        };
      },
      providesTags: [tagTypes.student],
    }),
    myCourseSchedules: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${STUDENT_URL}/my-course-schedules`,
          method: "GET",
          params: arg,
          headers: {
            authorization: auth, // Include the authorization token in the header
          },
        };
      },
      transformResponse: (response: IStudent[], meta: IMeta) => {
        return {
          myCourseSchedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.student],
    }),
    myAcademicInfos: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${STUDENT_URL}/my-academic-infos`,
        method: "GET",
        params: arg,
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      providesTags: [tagTypes.student],
    }),
  }),
});

export const {
  useAddStudentWithFormDataMutation, // create
  useStudentsQuery, // get all
  useStudentQuery, // get single
  useUpdateStudentMutation, // update
  useDeleteStudentMutation, // delete
  // my courses
  useMyCoursesQuery,
  useMyCourseSchedulesQuery,
  useMyAcademicInfosQuery,
} = studentApi;
