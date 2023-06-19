import { describe, it, test, expect } from "vitest";
import Axval from "../../index";

test("Verify", () => {
    const verify = Axval.verify({
      type: "cpf",
      value: "53997138885",
    });

    expect(true).toEqual(verify.success);
});
