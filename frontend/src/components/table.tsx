//DaisyUI table
//heigh in div is fixed. Was having overflow issue
const Table = () => {
   return (
      <>
         <p className="dark:text-white font-semibold text-base md:text-lg">
            Tuesday, June 14th
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
                  <tr>
                     <td>Quality Control Specialist</td>
                     <td>Littel, Schaden and Vandervort</td>
                     <td>Canada</td>
                     <td>12/16/2020</td>
                     <td>Blue</td>
                  </tr>
                  <tr>
                     <td>Desktop Support Technician</td>
                     <td>Zemlak, Daniel and Leannon</td>
                     <td>United States</td>
                     <td>12/5/2020</td>
                     <td>Purple</td>
                  </tr>
                  <tr>
                     <td>Tax Accountant</td>
                     <td>Carroll Group</td>
                     <td>China</td>
                     <td>8/15/2020</td>
                     <td>Red</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
};

export default Table;
