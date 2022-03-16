// const twoSum1 = require("../Problems/twoSum/solution1.ts");
import twoSum1 from "../Problems/twoSum/solution1";

test("test twoSum1", () => {
  console.log(twoSum1);
  expect(twoSum1([2, 7, 19], 9)).toStrictEqual([0, 1]);
});
