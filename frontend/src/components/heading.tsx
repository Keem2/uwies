<<<<<<< HEAD
type Props = {
   semester: String;
   semesterYear: String;
};

const Heading = ({ semester, semesterYear }: Props) => {
   return (
      <h1 className="text-3xl font-bold mt-10 text-center">
         UWI Cave Hill Exam Scheduler <br /> <br /> Semester {semester}{" "}
         {semesterYear}
      </h1>
   );
};

export default Heading;
=======
type Props = {
   semester: String;
   semesterYear: String;
};

const Heading = ({ semester, semesterYear }: Props) => {
   return (
      <h1 className="text-3xl font-bold mt-10 text-center">
         UWI Cave Hill Exam Scheduler <br /> <br /> Semester {semester}{" "}
         {semesterYear}
      </h1>
   );
};

export default Heading;
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194
