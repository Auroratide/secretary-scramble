let meetingCounter = 0

export const createUnscheduledMeeting = ({
    duration, // minutes
}) => ({
    id: ++meetingCounter,
    duration,
})

// 9am = 0; 5pm = 480
export const scheduleMeeting = (meeting) => (day, minute) => ({
    ...meeting,
    start: {
        day,
        minute,
    },
})
