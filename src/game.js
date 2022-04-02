let meetingCounter = 0

export const createUnscheduledMeeting = ({
    duration, // minutes
}) => ({
    id: ++meetingCounter,
    duration,
})

// 9am = 0; 5pm = 480
export const minuteSlots = [
    '0',
    '30',
    '60',
    '90',
    '120',
    '150',
    '180',
    '210',
    '240',
    '270',
    '300',
    '330',
    '360',
    '390',
    '420',
    '450',
]
export const createBlankSchedule = (day) => ({
    day,
    slots: minuteSlots.reduce((obj, minute) => ({
        ...obj,
        [minute]: [],
    })),
})

// gimme a schedule back, updated
export const scheduleMeetings = (schedule) => (minute) => (meetings) => ({
    ...schedule,
    slots: {
        ...schedule.slots,
        [minute]: meetings,
    },
})
