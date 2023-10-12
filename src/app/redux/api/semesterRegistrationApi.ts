import { IMeta, ISemesterRegistration } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { getUserInfo } from "@/services/auth.service";
const auth = getUserInfo();
const BASE_SEMESTER_REGISTRATION = "/semester-registrations";
export const semesterRegistrationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    semesterRegistrations: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_SEMESTER_REGISTRATION,
          method: "GET",
          params: arg,
          headers: {
            authorization: auth, // Include the authorization token in the header
          },
        };
      },
      transformResponse: (response: ISemesterRegistration[], meta: IMeta) => {
        return {
          semesterRegistrations: response,
          meta,
        };
      },
      providesTags: [tagTypes.semesterRegistration],
    }),
    semesterRegistration: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${id}`,
        method: "GET",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      providesTags: [tagTypes.semesterRegistration],
    }),
    addSemesterRegistrations: build.mutation({
      query: (data) => ({
        url: BASE_SEMESTER_REGISTRATION,
        method: "POST",
        data,
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.semesterRegistration],
    }),
    updateSemesterRegistrations: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${data.id}`,
        method: "PATCH",
        data: data.body,
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.semesterRegistration],
    }),
    deleteSemesterRegistrations: build.mutation({
      query: (id) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${id}`,
        method: "DELETE",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.semesterRegistration],
    }),
    myRegistration: build.query({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/my-registration`,
        method: "GET",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      providesTags: [tagTypes.courseRegistration],
    }),
    startRegistration: build.mutation({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/start-registration`,
        method: "POST",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
    }),
    mySemesterRegistrationCourses: build.query({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/my-semester-registration-courses`,
        method: "GET",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      providesTags: [tagTypes.courseRegistration],
    }),
    enrollIntoCourse: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/enroll-into-course`,
        method: "POST",
        data,
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.courseRegistration],
    }),
    withdrawFromCourse: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/withdraw-from-course`,
        method: "POST",
        data,
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.courseRegistration],
    }),
    confirmMyRegistration: build.mutation({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/confirm-registration`,
        method: "POST",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.courseRegistration],
    }),
    startNewSemester: build.mutation({
      query: (id) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${id}/start-new-semester`,
        method: "POST",
        headers: {
          authorization: auth, // Include the authorization token in the header
        },
      }),
      invalidatesTags: [tagTypes.courseRegistration],
    }),
  }),
});

export const {
  useSemesterRegistrationsQuery,
  useSemesterRegistrationQuery,
  useAddSemesterRegistrationsMutation,
  useDeleteSemesterRegistrationsMutation,
  useUpdateSemesterRegistrationsMutation,
  useMyRegistrationQuery,
  useStartRegistrationMutation,
  useMySemesterRegistrationCoursesQuery,
  useEnrollIntoCourseMutation,
  useConfirmMyRegistrationMutation,
  useWithdrawFromCourseMutation,
  useStartNewSemesterMutation,
} = semesterRegistrationApi;

export default semesterRegistrationApi;
