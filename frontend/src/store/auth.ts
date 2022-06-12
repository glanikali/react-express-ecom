import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Auth = {
  name: string;
  email: string;
  token: string;
};

type Register = {
  error: boolean;
  submitted: boolean;
  success: boolean;
};

type Login = {
  error: boolean;
  submitted: boolean;
  success: boolean;
};

type initialStateProps = {
  auth: Auth;
  register: Register;
  login: Login;
};

const initialState: initialStateProps = {
  auth: { name: "", email: "", token: "" },
  register: {
    error: false,
    submitted: false,
    success: false,
  },
  login: {
    error: false,
    submitted: false,
    success: false,
  },
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
    },
    updateRegisterState: (state, action: PayloadAction<Register>) => {
      state.register = action.payload;
    },
    updateLoginState: (state, action: PayloadAction<Login>) => {
      state.login = action.payload;
    },
    resetRegisterState: (state) => {
      state.register = initialState.register;
    },
    resetLoginState: (state) => {
      state.login = initialState.login;
    },
  },
});

export default AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
