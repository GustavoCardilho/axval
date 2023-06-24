import { describe, it, test, expect } from "vitest";
import Axval from "../../index";

test("Verify", () => {
  const verify = Axval.verify({
    type: {
      field: "phone",
    },
    value: "15996099414",
  });

  console.log(verify);

  expect(true).toEqual(verify.success);
});
