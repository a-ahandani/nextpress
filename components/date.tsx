import { parseISO, format } from "date-fns";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="font-sans to-blue-50 flex items-center"
    >
      <CalendarDaysIcon className="h-5 w-5 mr-2 " />{" "}
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
