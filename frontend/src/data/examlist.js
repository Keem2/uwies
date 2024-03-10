import examlist from "./examlist_clean.json" assert { type: "json" };

//Have Node 21+ for this to work
const result = Object.groupBy(examlist, ({ date }) => date);

export default result;
