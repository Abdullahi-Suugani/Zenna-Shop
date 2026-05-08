import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import isWeekend from "../utils/isWeekend.js";
import isSatSun from "../utils/isWeekend.js";

// 15a
console.log(dayjs().add(5, "day").format("MMMM D"));

// 15b
console.log(dayjs().add(1, "month").format("MMMM D"));

// 15c
console.log(dayjs().subtract(1, "month").format("MMMM D"));

// 15d
console.log(dayjs().format("dddd"));

// 15e
console.log(isWeekend(dayjs()));
console.log(isWeekend(dayjs().add(1, "day")));
console.log(isWeekend(dayjs().add(2, "day")));

// 15f + 15g (default import renamed to isSatSun)
console.log(isSatSun(dayjs()));
