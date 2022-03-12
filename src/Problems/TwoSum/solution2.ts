import { TwoSum } from ".";

interface NumsTable {
  [property: string]: number;
}

const twoSum: TwoSum = (nums, target) => {
  const numsTable: NumsTable = {};

  for (let i = 0; i < nums.length; i++) {
    const leftNum = (target - nums[i]).toString();
    if (numsTable.hasOwnProperty(leftNum)) {
      return [numsTable[leftNum], i];
    }
    numsTable[nums[i]] = i;
  }
};

export default twoSum;
