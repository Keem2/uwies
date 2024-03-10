import examlist from "./examlist_clean.json" assert { type: "json" };

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
