class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = []

        if len(temperatures) == 1:
            result = [0]
            return result

        for i, temperature in enumerate(temperatures):
            r = i + 1
            days_after = 0
            
            while r < len(temperatures):
                if temperatures[r] > temperatures[i]:
                    days_after = r - i
                    break
                r += 1

            result.append(days_after)

        return result