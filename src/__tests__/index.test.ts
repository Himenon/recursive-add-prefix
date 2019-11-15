import { addPrefix } from "../index";

describe("Only String value object", () => {
  test("Level 1", () => {
    const obj = { a: "level1" };
    expect(addPrefix("test-", obj)).toEqual({ a: "test-level1" });
  });

  test("Level 2", () => {
    const obj = { a: "level1", b: { c: "level2" } };
    expect(addPrefix("test-", obj)).toEqual({ a: "test-level1", b: { c: "test-level2" } });
  });

  test("Mix Level 2", () => {
    const obj = { a: "level1", b: { c: "level2", d: {} } };
    expect(addPrefix("test-", obj)).toEqual({ a: "test-level1", b: { c: "test-level2", d: {} } });
  });
});
