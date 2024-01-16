//DaisyUI table
//heigh in div is fixed. Was having overflow issue
import result from "../data/examlist";
import Divider from "./ui/divider";
const Table = () => {
   return (
      <>
         {Object.keys(result).map((date) => {
            return (
               <>
                  <p
                     className="dark:text-white font-semibold text-base md:text-lg"
                     key={date}
                  >
                     {date}
                  </p>
                  <div className="overflow-x-auto">
                     <table
                        className="table table-sm 
       md:table-md dark:text-white"
                     >
                        <thead>
                           <tr className="bg-slate-100 dark:bg-gray-800 text-xs md:text-base dark:text-white">
                              <td>Course Code</td>
                              <td>Course Name</td>
                              <td>Time</td>
                              <td>Length</td>
                              <td>Location</td>
                              <td>Room</td>
                           </tr>
                        </thead>
                        <tbody>
                           {result[date].map((exam: any) => {
                              return (
                                 <tr>
                                    <td>{exam.course}</td>
                                    <td>{exam.description}</td>
                                    <td>{exam.time}</td>
                                    <td>{exam.hours}</td>
                                    <td>{exam.location}</td>
                                    <td>{exam.room}</td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
                  <Divider />
               </>
            );
         })}
      </>
   );
};

export default Table;
