import { parseISO, format } from "date-fns";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <div className="max-w-4xl my-1  overflow-hidden">
      <p className="font-sans text-sm flex items-center">
        <CalendarDaysIcon className="h-5 w-5 mr-2 " />{" "}
        <time
          dateTime={dateString}
        >
          <span className=" mt-1">
            {format(date, "LLLL	d, yyyy")}
          </span>
        </time>
      </p>
    </div>
  );
}
