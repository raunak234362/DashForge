import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
  companyData: [],
};

const companySlice = createSlice({
  name: "companyData",
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.companyData.push(action.payload);
    },
    setCompanyData: (state, action) => {
      state.companyData = action.payload;
    },
    deleteCompany: (state, action) => {
      state.companyData = state.companyData.filter(
        (company) => company._id !== action.payload
      );
    },
  },
});

export const { addCompany, setCompanyData, deleteCompany } =
  companySlice.actions;
export default companySlice.reducer;
