function lengthOfLongestSubstring(s) {
    const charMap = {}; // To store the last index of each character
    let left = 0; // Left pointer of the window
    let maxLength = 0; // To store the maximum length found

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        // If the character is already in the map and within the current window
        if (char in charMap && charMap[char] >= left) {
            // Move the left pointer to the right of the previous occurrence
            left = charMap[char] + 1;
        }
        // Update the last index of the character
        charMap[char] = right;
        // Update the maximum length if the current window is larger
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Expected output: 3
console.log(lengthOfLongestSubstring(""));          // Expected output: 0
