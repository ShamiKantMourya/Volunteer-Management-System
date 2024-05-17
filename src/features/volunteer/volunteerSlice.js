import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";

const API_URL = "https://volunteer-management-apis.onrender.com";

export const fetchVolunteers = createAsyncThunk(
  "/volunteers/fetchVolunteers",
  async () => {
    const response = await axios.get(`${API_URL}/api/v1/volunteer`);
    return response?.data?.data;
  }
);

export const addVolunteer = createAsyncThunk(
  "/volunteers/addVolunteer",
  async (bodyData) => {
    const response = await axios.post(`${API_URL}/api/v1/volunteer`, bodyData);
    toast.success(response.data.message);
    return response.data.data;
  }
);

export const deleteVolunteer = createAsyncThunk(
  "/volunteers/deleteVolunteer",
  async (id) => {
    const response = await axios.delete(`${API_URL}/api/v1/volunteer/${id}`);
    toast.success(response.data.message);
    return response.data.data;
  }
);

export const updateVolunteer = createAsyncThunk(
  "/volunteers/updateVolunteer",
  async ({ id, volunteerData }) => {
    const response = await axios.put(
      `${API_URL}/api/v1/volunteer/${id}`,
      volunteerData
    );
    toast.success(response.data.message);
    console.log(response.data.data);
    return response.data.data;
  }
);

export const volunteerSlice = createSlice({
  name: "volunteers",
  initialState: {
    volunteers: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVolunteers.fulfilled, (state, action) => {
      state.volunteers = action.payload;
      state.status = "success";
      state.error = null;
    }),
      builder.addCase(fetchVolunteers.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "success";
      }),
      builder.addCase(fetchVolunteers.pending, (state) => {
        state.status = "loading";
      }),
      builder.addCase(addVolunteer.fulfilled, (state, action) => {
        state.volunteers = [action.payload, ...state.volunteers];
        state.status = "success";
        state.error = null;
      }),
      builder.addCase(addVolunteer.rejected, (state, action) => {
        state.error = action.payload;
      }),
      builder.addCase(addVolunteer.pending, (state) => {
        state.status = "loading";
      }),
      builder.addCase(deleteVolunteer.fulfilled, (state, action) => {
        state.volunteers = action.payload;
        state.status = "success";
        state.error = null;
      }),
      builder.addCase(deleteVolunteer.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "success";
      }),
      builder.addCase(deleteVolunteer.pending, (state) => {
        state.status = "loading";
      }),
      builder.addCase(updateVolunteer.fulfilled, (state, action) => {
        state.volunteers = action.payload;
        state.status = "success";
        state.error = null;
      }),
      builder.addCase(updateVolunteer.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "success";
      }),
      builder.addCase(updateVolunteer.pending, (state) => {
        state.status = "loading";
      });
  },
});

export default volunteerSlice.reducer;
