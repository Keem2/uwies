<<<<<<< HEAD
import examlist from "../../../data-clean/examlist_clean.json" assert { type: "json" };

//Function to sort array of objects alphabetically by course code
const compare = (a, b) => {
   if (a.course < b.course) {
      return -1;
   }
   if (a.course > b.course) {
      return 1;
   }
   return 0;
};

const courses = examlist.sort(compare);

export default courses;
=======
import examlist from "../../../data-clean/examlist_clean.json" assert { type: "json" };

//Function to sort array of objects alphabetically by course code
const compare = (a, b) => {
   if (a.course < b.course) {
      return -1;
   }
   if (a.course > b.course) {
      return 1;
   }
   return 0;
};

const courses = examlist.sort(compare);

export default courses;
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194
