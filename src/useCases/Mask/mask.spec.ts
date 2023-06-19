import { test, expect } from "vitest";
import Axval from "../../index";

test("Mask", () => {
  const mask = Axval.mask({
    mask: "000-000-000;000",
    value: "2223334445",
  });

  expect(true).toEqual(mask.success);
});
