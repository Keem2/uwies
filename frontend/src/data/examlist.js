import examlist from "./examlist_clean.json" assert { type: "json" };

//Have Node 21+ for this to work
const result = examlist
   .sort((a, b) => {
      /** Sorts schedules by date and time created
       * With earliest showing first*/
      return Date.parse(a.date) - Date.parse(b.date);
   })
   //reducing to sort by date value as a key
   .reduce((r, a) => {
      r[a.date] = r[a.date] || [];
      r[a.date].push(a);
      return r;
   }, Object.create(null));

export default result;
