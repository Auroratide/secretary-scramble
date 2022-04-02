import { meetingTemplates } from './meeting-templates'

let meetingCounter = 0

export const createUnscheduledMeeting = ({
    name,
    duration, // minutes
}) => ({
    id: ++meetingCounter,
    name,
    duration,
})

const meetingQuanta = 15
export const randomMeeting = () => {
    const meetingType = meetingTemplates[Math.floor(Math.random() * meetingTemplates.length)]
    return createUnscheduledMeeting({
        name: meetingType.name,
        duration: meetingType.minDuration + meetingQuanta * Math.floor(Math.random() * (meetingType.maxDuration - meetingType.minDuration + meetingQuanta) / meetingQuanta),
    })
}

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
let scheduleCounter = 0
export const initialSchedule = {
    id: ++scheduleCounter,
    slots: {
        '0': [createUnscheduledMeeting({ name: 'Marketing Update', duration: 60 })],
        '30': [],
        '60': [],
        '90': [createUnscheduledMeeting({ name: 'Core Work Time', duration: 120 })],
        '120': [],
        '150': [],
        '180': [],
        '210': [createUnscheduledMeeting({ name: 'Lunch', duration: 60 })],
        '240': [],
        '270': [],
        '300': [],
        '330': [],
        '360': [],
        '390': [],
        '420': [],
        '450': [],
    }
}
export const createBlankSchedule = () => ({
    id: ++scheduleCounter,
    slots: minuteSlots.reduce((obj, minute) => ({
        ...obj,
        [minute]: [],
    }), {}),
})

// gimme a schedule back, updated
export const scheduleMeetings = (schedule) => (minute) => (meetings) => ({
    ...schedule,
    slots: {
        ...schedule.slots,
        [minute]: meetings,
    },
})

export const startOfDay = -30
export const endOfDay = startOfDay + 9 * 60
