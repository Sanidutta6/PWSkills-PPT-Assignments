/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"
*/

const reverseStr = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

const ReverseWordsInSentence = (sentence) => {
    const words = sentence.split(" ");

    for(let i = 0;i < words.length;i++) {
        words[i] = reverseStr(words[i]);
    }

    return words.join(" ");
}

const s = "Let's take LeetCode contest";
console.log(ReverseWordsInSentence(s));