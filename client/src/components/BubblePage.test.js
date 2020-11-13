import React from "react";
import { render, screen, waitFor, wait } from "@testing-library/react";
import BubblePage from "./BubblePage";
import fetchColorList from "./../api/fetchColorList";

import { fetchColorList as mockFetchColorList } from "./../api/fetchColorList";
jest.mock('./../api/fetchColorList');

let colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  }
]

test("Fetches data and renders the bubbles", async () => {

  mockFetchColorList.mockResolvedValueOnce(colors);
  // jest.mock('fetchColorList', () => () => colors);
  render(<BubblePage />);

  const aliceBlue = screen.findByText('/aliceblue/i');

  expect(aliceBlue).toBeDefined()

});
