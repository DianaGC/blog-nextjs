import { format } from "date-fns"

export const getDate = (
    timeStamp: number,
    formatOutput: string = "yyyy-MM-dd"
): string =>  format(timeStamp, formatOutput);
