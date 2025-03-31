import { createContext, useContext, useState } from "react";
import { icons } from "@/assets/asset";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Wizkid-Made in Lagos Tour",
      organizer: "wizid fc",
      location: "The Landmark Beach Resort, Lagos",
      viewType: "physical",
      time: "Oct 30 | 06:00 PM",
      price: "Paid entry",
      image: icons.tems,
      buttonLabel: "Buy ticket",
      ticketStatus: "20 ticket left",
      about:
        "Made In Lagos concert will be held on the 6th of February, 2025. There’ll be lots of merriment and energy in the crowd and gifts incurring cash prices and an iPhone X. Fans will be entertained with new and old hits and will find themselves feeling extremely nostalgic as he performs.",
      month: "Mar",
      startTime: "06:PM",
      day1: "06",
      day2: "07",
      day3: "08",
    },
    {
      id: 2,
      title: "Asake Live Concert",
      organizer: "wizid fc",
      location: "Eko Hotel & Suites, Lagos",
      viewType: "physical",
      time: "Dec 10 | 07:00 PM",
      price: "Award for free",
      image: icons.asake,
      buttonLabel: "Award for free",
      about:
        "Made In Lagos concert will be held on the 6th of February, 2025. There’ll be lots of merriment and energy in the crowd and gifts incurring cash prices and an iPhone X. Fans will be entertained with new and old hits and will find themselves feeling extremely nostalgic as he performs.",
      month: "Mar",
      startTime: "06:PM",
      day1: "06",
      day2: "07",
      day3: "08",
    },
    {
      id: 3,
      organizer: "wizid fc",
      title: "Cruz Concert",
      location: "Tafawa Balewa Square, Lagos",
      viewType: "virtual",
      time: "Nov 15 | 08:00 PM",
      price: "Paid entry",
      image: icons.tems,
      buttonLabel: "Buy ticket",
      ticketStatus: "tickets available",
      month: "Mar",
      startTime: "06:PM",
      day1: "06",
      day2: "07",
      day3: "08",
    },
    {
      id: 4,
      title: "Cruz Concert",
      organizer: "wizid fc",
      location: "Tafawa Balewa Square, Lagos",
      viewType: "virtual",
      time: "Nov 15 | 08:00 PM",
      price: "Paid entry",
      image: icons.tems,
      buttonLabel: "Buy ticket",
      ticketStatus: "tickets available",
      month: "Mar",
      startTime: "06:PM",
      day1: "06",
      day2: "07",
      day3: "08",
    },
    {
      id: 5,
      title: "Cruz Concert",
      organizer: "wizid fc",
      location: "Tafawa Balewa Square, Lagos",
      viewType: "virtual",
      time: "Nov 15 | 08:00 PM",
      price: "Paid entry",
      image: icons.tems,
      buttonLabel: "Buy ticket",
      ticketStatus: "tickets available",
    },
  ]);

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const onClose = () => setIsFilterModalOpen(false);
  const onOpen = () => setIsFilterModalOpen(true);

  return (
    <EventContext.Provider
      value={{ events, setEvents, onOpen, onClose, isFilterModalOpen }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
