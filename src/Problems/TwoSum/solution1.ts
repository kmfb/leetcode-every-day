import { TwoSum } from "."


const twoSum: TwoSum = (nums, target) => {
    let res: Array<any> = []
    const len = nums.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                res = [i, j]
            }
        }
    }
    return res
}

export default twoSum