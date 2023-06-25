/*
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
*/

const canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // Sort intervals based on start time

  for (let i = 1; i < intervals.length; i++) {
    const prevEnd = intervals[i - 1][1];
    const currStart = intervals[i][0];

    if (currStart <= prevEnd) {
      return false; // Overlapping intervals found
    }
  }

  return true; // No overlapping intervals found
};

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
const canAttend = canAttendMeetings(intervals);
console.log(canAttend);