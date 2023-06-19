import { describe, it, test, expect } from "vitest";
import Axval from "../../index";

test("Verify", () => {
  const verify = Axval.verify({
    type: {
      field: "cpf",
    },
    value: 53997138885,
  });

  console.log(verify);

  expect(true).toEqual(verify.success);
});
