import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Terms = () => {
   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-screen overflow-x-hidden text-black dark:text-white">
         <Navbar />

         <h1 className="text-slate-900 capitalize dark:text-slate-300 font-extrabold ml-3.5 md:ml-1 mb-6 mt-8 text-3xl md:text-4xl">
            Terms of Service
         </h1>
         <div className="ml-3 md:ml-5 mt-7 text-black dark:text-white">
            <p>
               These Terms of Service govern your access to and use of UWIES
               (or, the "Service"). By accessing or using the Service, you agree
               to be bound by these Terms. If you do not agree to these Terms,
               please do not use the Service.
            </p>
            <h2 className="font-semibold mt-5">1. Use of Service</h2>
            <ul>
               <li className="mb-5">
                  1.1 - License: Subject to these Terms, we grant you a limited,
                  non-exclusive, non-transferable, and revocable license to use
                  the Service for your personal purposes.
               </li>
               <li>
                  1.2 - Prohibited Activities: You agree not to engage in any of
                  the following prohibited activities: (a) violating any laws or
                  regulations; (b) interfering with or disrupting the Service or
                  servers; (c) accessing the Service through any unauthorized
                  means; (d) impersonating any person or entity; (e)
                  transmitting any viruses or harmful code; (f) collecting or
                  harvesting any information from the Service; (g) using the
                  Service for any illegal or unauthorized purpose.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">2. User Content</h2>
            <ul>
               <li className="mb-5">
                  2.1 - Ownership: You retain ownership of any content that you
                  upload, submit, or display on the Service.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">3. Privacy</h2>
            <ul>
               <li className="mb-5">
                  3.1 - Privacy Policy: Our{" "}
                  <Link
                     to={`/privacy`}
                     className="underline text-neutral-500 dark:text-neutral-300"
                  >
                     Privacy Policy
                  </Link>{" "}
                  describes how we collect, use, and disclose your information
                  when you use the Service. By using the Service, you agree to
                  our Privacy Policy.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">4. Termination</h2>
            <ul>
               <li className="mb-5">
                  4.1 - Termination by Us: We may terminate or suspend your
                  access to the Service at any time and for any reason without
                  notice.
               </li>
               <li>
                  4.2 - Termination by You: You may stop using the Service at
                  any time.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">5. Disclaimer of Warranties</h2>
            <ul>
               <li className="mb-5">
                  5.1 - As Is: The Service is provided on an "as is" and "as
                  available" basis without warranties of any kind, either
                  express or implied. We do not warrant that the Service will be
                  uninterrupted or error-free.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">6. Contact Us</h2>
            <ul>
               <li className="mb-5">
                  6.1 - Questions: If you have any questions or concerns about
                  these Terms, please contact Akeem Smith at{" "}
                  <a
                     href="mailto:aksmith.578@gmail.com"
                     className="underline text-neutral-500 dark:text-neutral-300"
                  >
                     aksmith.578@gmail.com
                  </a>
               </li>
            </ul>
         </div>
      </section>
   );
};

export default Terms;
