class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        text = ""

        for c in s:
            if c.isalnum():
                text += c

        l = 0
        r = len(text) - 1

        while r >= l:
            if text[l] != text[r]:
                return False
            
            l += 1
            r -= 1

        return True