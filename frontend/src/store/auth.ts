import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Auth = {
  name: string;
  email: string;
  token: string;
};

type Register = {
  error: boolean;
  submitted: boolean;
};

type Login = {
  error: boolean;
  submitted: boolean;
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
  },
  login: {
    error: false,
    submitted: false,
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
  },
});

export default AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
