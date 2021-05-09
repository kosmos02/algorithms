// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as a tuple ↴ of integers (start_time, end_time). These integers represent the number of 30-minute blocks past 9:00am.

const teamMeetings = [
    {startTime: 5, endTime: 7},
    {startTime: 3, endTime: 4},
    {startTime: 5, endTime: 6},
    {startTime: 0, endTime: 2},
    {startTime: 11, endTime: 12},
]

function mergeRanges(teamMeetings){
    let updatedSchedule = []


    const sortedMeetings = teamMeetings.sort((a, b) => {
        return a.startTime - b.startTime
    })

    let lengthyMeeting = sortedMeetings[0]
    let highestEndTime = 0
    
    for (let i = 1; i < sortedMeetings.length; i++){
        if (sortedMeetings[i].endTime > highestEndTime){
            highestEndTime = sortedMeetings[i].endTime
        }
        if (sortedMeetings[i].startTime > lengthyMeeting.endTime){
            updatedSchedule.push(lengthyMeeting)
            lengthyMeeting = sortedMeetings[i]
        
        } else if (sortedMeetings[i] === sortedMeetings[sortedMeetings.length - 1]){
            lengthyMeeting.endTime = highestEndTime
            updatedSchedule.push(lengthyMeeting)
        } else {
            lengthyMeeting = {startTime: lengthyMeeting.startTime, endTime: sortedMeetings[i].endTime}
        }
        
    }
    console.log(updatedSchedule)
}

mergeRanges(teamMeetings)

// function mergeRanges(meetings){
//     //We are calling #sort on meetingsCopy, which is an array of meeting objects. sort() will sort items in an array by default
//     //in ascending order. We are passing in an optional function that provides an alternative way to sort the array.
//     //For example, if a.startTime (5) - b.startTime(3), this would produce a positive number.
//     //If a positive number is returned, b will now come first, and a will be pushed forward.
//     //This pattern will ensure that the smaller numbers come first.
//     const sortedMeetings = meetingsCopy.sort((a, b) => {
//     return a.startTime - b.startTime;
//     });
//     // initialize merged meetings with the first meeting from sorted meetings We know the first index is the earlier startTime.
//     const mergedMeetings = [sortedMeetings[0]];
//     // Loop over the sorted meetings to find the right ones to merge. Access current meeting in loop with currentMeeting.
//     //As we loop, the i value will increase until it's one less than the length of the mergedMeetings, ie. the last meeting.
//     for (let i = 1; i < sortedMeetings.length; i++) {
//     const currentMeeting    = sortedMeetings[i];
//     const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
//     if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
//     // [{startTime: 3, endTime: 5}, //{startTime: 3, endTime: 4}]
//     //--> {startTime: 3, endTime: //5}
//     // To merge them, we also have to make sure we take the larger endTime. Unlike startTimes, endTimes are not sorted.
//     //Math.max() will return the assigned the higher value to the variable lastMergedMeeting.endTime
//     lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
//     } else {
//     // Add the current meeting since it doesn't overlap
//     mergedMeetings.push(currentMeeting);
//     }
//     }
//     return mergedMeetings;
//     }