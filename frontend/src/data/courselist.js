import examlist from "../../../data-clean/examlist_clean.json" assert { type: "json" };

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
