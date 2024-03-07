<<<<<<< HEAD
import examlist from "../../../data-clean/examlist_clean.json" assert { type: "json" };

//Have Node 21+ for this to work
const result = Object.groupBy(examlist, ({ date }) => date);

export default result;
=======
import examlist from "../../../data-clean/examlist_clean.json" assert { type: "json" };

//Have Node 21+ for this to work
const result = Object.groupBy(examlist, ({ date }) => date);

export default result;
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194
