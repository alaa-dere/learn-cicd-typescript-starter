import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth.js";
describe("getAPIKey", () => {
  test("when header is valid", () => {
    const headers = {
      authorization: "ApiKey secret-alaa",
    };

    const result = getAPIKey(headers);
    expect(result).toBe("secret-alaa");
  });
  test("when header is missing", () => {
    const headers = {};

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
