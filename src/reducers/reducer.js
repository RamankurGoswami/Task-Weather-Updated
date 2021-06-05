import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather_data: {},
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        weatherDataReducer: (state, action) => {
            state.weather_data = action.payload;
        },
    },
});

export const selectWeatherData = (state) => state.weather.weather_data;

export const { weatherDataReducer } = weatherSlice.actions;

export default weatherSlice.reducer;