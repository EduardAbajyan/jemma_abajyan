declare module "flowbite-datepicker/Datepicker" {
  export interface DatepickerOptions {
    autohide?: boolean;
    orientation?: string | { x?: "left" | "right" | "auto"; y?: "top" | "bottom" | "auto" };
    dateFormat?: string;
    minDate?: string | Date;
    maxDate?: string | Date;
    // Add more options if needed
    [key: string]: unknown;
  }

  export default class Datepicker {
    constructor(element: HTMLElement, options?: DatepickerOptions);
    show(): void;
    hide(): void;
    toggle(): void;
    update(options: DatepickerOptions): void;
  }
}

declare module "flowbite-datepicker/DateRangePicker" {
  export interface DateRangePickerOptions {
    autohide?: boolean;
    dateFormat?: string;
    minDate?: string | Date;
    maxDate?: string | Date;
    // Add more options if needed
    [key: string]: unknown;
  }

  export default class DateRangePicker {
    constructor(element: HTMLElement, options?: DateRangePickerOptions);
    show(): void;
    hide(): void;
    toggle(): void;
    update(options: DateRangePickerOptions): void;
  }
}
