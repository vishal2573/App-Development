import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  petName: "",
  petType: "",
  petBreed: "",
  petGender: "",
  petDescription: "",
  age: 0,
  weight: 0,
  height: 0,
  diet: "",
  allergies: "",
  vaccinationStatus: "Vaccinated",
  vaccinationDate: null,
  medicalHistory: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPetName: (state, action) => {
      state.petName = action.payload;
    },
    setPetType: (state, action) => {
      state.petType = action.payload;
    },
    setPetBreed: (state, action) => {
      state.petBreed = action.payload;
    },
    setPetGender: (state, action) => {
      state.petGender = action.payload;
    },
    setPetDescription: (state, action) => {
      state.petDescription = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setDiet: (state, action) => {
      state.diet = action.payload;
    },
    setAllergies: (state, action) => {
      state.allergies = action.payload;
    },
    setVaccinationStatus: (state, action) => {
      state.vaccinationStatus = action.payload;
    },
    setVaccinationDate: (state, action) => {
      state.vaccinationDate = action.payload;
    },
    setMedicalHistory: (state, action) => {
      state.medicalHistory = action.payload;
    },
    resetForm: (state) => {
      state.petName = "";
      state.petType = "";
      state.petBreed = "";
      state.petGender = "";
      state.petDescription = "";
      state.age = 0;
      state.weight = 0;
      state.height = 0;
      state.diet = "";
      state.allergies = "";
      state.vaccinationStatus = "Vaccinated";
      state.vaccinationDate = null;
      state.medicalHistory = "";
    },
  },
});

export const {
  setPetName,
  setPetType,
  setPetBreed,
  setPetGender,
  setPetDescription,
  setAge,
  setWeight,
  setHeight,
  setDiet,
  setAllergies,
  setVaccinationStatus,
  setVaccinationDate,
  setMedicalHistory,
  resetForm,
} = formSlice.actions;

export const selectFormData = (state) => state.form;
export default formSlice.reducer;
