import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { beforeAll, afterEach, afterAll } from "vitest";

import { server } from "./mocks/node.js";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});
