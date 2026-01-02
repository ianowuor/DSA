from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for _str in strs:
            sorted_str = "".join(sorted(_str))
            anagrams[sorted_str].append(_str)

        return list(anagrams.values())