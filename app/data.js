// app/data.js
export const emails = [
  {
    id: 1,
    sender: "SKAT",
    subject: "Årsopgørelse 2025",
    date: "Today",
    content: "Dear Citizen, Please pay 3.500 kr by 15 May...",
    isRead: false,
  },
  {
    id: 2,
    sender: "Danske Bank",
    subject: "Account Statement",
    date: "Yesterday",
    content: "Your monthly summary is ready...",
    isRead: true,
  }
];

export const timelineEvents = [
  {
    id: 101,
    type: "payment",
    title: "Pay Tax",
    amount: "3.500 DKK",
    date: "15 May",
    status: "due"
  },
  {
    id: 102,
    type: "meeting",
    title: "Jobcenter Meeting",
    location: "Copenhagen",
    date: "20 May",
    status: "upcoming"
  },
  {
    id: 103,
    type: "info",
    title: "Housing Benefit",
    location: "Approved",
    date: "01 June",
    status: "upcoming"
  }
];