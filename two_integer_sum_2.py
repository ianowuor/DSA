class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        nums_map = {}
        for i, number in enumerate(numbers):
            diff = target - number
            if diff not in nums_map.keys():
                nums_map[number] = i + 1
            else:
                return [nums_map[diff], i+1]

