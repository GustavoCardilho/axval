import { test, expect } from "vitest";
import Axval from "../../index";

test("Mask", () => {
  const mask = Axval.mask({
    mask: "000-000-000;000",
    value: "222.333.444---5",
    representativeCharacter: "a"
  });

  console.log(mask)

  expect(true).toEqual(mask.success);
});
