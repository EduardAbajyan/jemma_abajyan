"use client";

import { useEffect, useRef } from "react";
import Datepicker from "flowbite-datepicker/Datepicker";
import { useActionState } from "react";

type FormAction = { type: "SET_DATE"; payload: string };

export default function RegForm() {
  const [state, dispatch, isPending] = useActionState<
    { date: string },
    FormAction
  >(
    async (state, event) => {
      switch (event.type) {
        case "SET_DATE":
          return { ...state, date: event.payload };
        default:
          return state;
      }
    },
    { date: "" },
  );

  const dateInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!dateInputRef.current) return;
    new Datepicker(dateInputRef.current, {
      autohide: true,
      orientation: "bottom",
    });
  }, []);

  const handleAction = async (formData: FormData) => {
    const date = formData.get("date")?.toString() ?? "";
    dispatch({ type: "SET_DATE", payload: date });
  };

  return (
    <div>
      <form className="flex flex-col gap-4" action={handleAction}>
        <input type="email" placeholder="Ձեր էլեկտրոնային փոստը" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body mt-5 mb-2" />
        <div className="relative max-w-sm">
          <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
              />
            </svg>
          </div>
          <input
            ref={dateInputRef}
            name="date"
            id="datepicker-autohide"
            type="text"
            className="block w-full ps-9 pe-3 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="     Ընտրեք ամսաթիվը"
          />
        </div>

        <button type="submit" disabled={isPending} className="w-full bg-brand hover:bg-brand-dark focus:ring-4 focus:outline-none focus:ring-brand-light font-medium rounded-base text-sm px-5 py-2.5 text-center shadow-xs">
          {isPending ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
