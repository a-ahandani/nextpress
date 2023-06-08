import { parseISO, format } from "date-fns";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <div className="max-w-4xl my-1  overflow-hidden">
      <p className="font-sans text-sm flex items-center mr-4">
        <CalendarDaysIcon className="h-5 w-5 mr-2 " />{" "}
        <time dateTime={dateString}>
          <span className="mt-1">{format(date, "LLLL	d, yyyy")}</span>
        </time>
      </p>
    </div>
  );
}
