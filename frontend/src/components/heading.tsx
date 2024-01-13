type Props = {
   semester: String;
   semesterYear: String;
};

const Heading = ({ semester, semesterYear }: Props) => {
   return (
      <h1 className="text-2xl md:text-3xl font-bold mt-14 md:ml-8 ">
         UWI Cave Hill Exam Scheduler <br /> <br /> Semester {semester}{" "}
         {semesterYear}
      </h1>
   );
};

export default Heading;
