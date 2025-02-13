import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import AdminLogin from "../pages/AdminLogin";

const mockStore = configureStore([]);

describe("AdminLogin", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        loading: false,
        error: null,
      },
    });
  });
});
