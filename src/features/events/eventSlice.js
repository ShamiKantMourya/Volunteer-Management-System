import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";

const API_URL = "";

export const fetchEvents = createAsyncThunk("/events/fetchEvents", async () => {
  const response = await axios.get(
    "https://volunteer-management-application.anushkajaiswal7.repl.co/event"
  );
  console.log("eve");
  return response?.data?.data;
});

export const addEvent = createAsyncThunk(
  "/events/addEvent",
  async (bodyData) => {
    const response = await axios.post(
      "https://volunteer-management-application.anushkajaiswal7.repl.co/event",
      bodyData
    );
    toast.success(response.data.message);
    return response.data.data;
  }
);

export const deleteEventData = createAsyncThunk(
  "/events/deleteEventData",
  async (id) => {
    const response = await axios.delete(
      `https://volunteer-management-application.anushkajaiswal7.repl.co/event/${id}`
    );
    toast.success(response.data.message);
    return response.data.data;
  }
);

export const updateEvent = createAsyncThunk(
  "/events/updateEvent",
  async ({ id, formData }) => {
    const response = await axios.put(
      `https://volunteer-management-application.anushkajaiswal7.repl.co/event/${id}`,
      formData
    );
    toast.success(response.data.message);
    return response.data.data;
  }
);

export const eventSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: builder=> {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload;
      state.status = "success";
      state.error = null;
    }),
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.error = action.payload;
    }),
    builder.addCase(fetchEvents.pending, (state) => {
      state.status = "loading";
    }),
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.events = [action.payload, ...state.events];
      state.status = "success";
      state.error = null;
    }),
    builder.addCase(addEvent.rejected, (state, action) => {
      state.error = action.payload;
    }),
    builder.addCase(addEvent.pending, (state) => {
      state.status = "loading";
    }),
    builder.addCase(deleteEventData.fulfilled, (state, action) => {
      state.events = action.payload;
      state.status = "success";
      state.error = null;
    }),
    builder.addCase(deleteEventData.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "success";
    }),
    builder.addCase(deleteEventData.pending, (state) => {
      state.status = "loading";
    }),
    builder.addCase(updateEvent.fulfilled, (state, action) => {
      state.events = action.payload;
      state.status = "success";
      state.error = null;
    }),
    builder.addCase(updateEvent.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "success";
    }),
    builder.addCase(updateEvent.pending, (state) => {
      state.status = "loading";
    })
  }
});

export default eventSlice.reducer;
