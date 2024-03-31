import Navbar from "../components/navbar";

const PrivacyPolicy = () => {
   return (
      <section className="px-7 pt-4 bg-slate-50 dark:bg-gray-900 font-body-font h-dvh overflow-x-hidden text-black dark:text-white">
         <Navbar />

         <h1 className="text-slate-900 capitalize dark:text-slate-300 font-extrabold ml-3.5 md:ml-1 mb-6 mt-8 text-3xl md:text-4xl">
            Privacy Policy
         </h1>
         <div className="ml-3 md:ml-5 mt-7 text-black dark:text-white">
            <p>
               UWIES is committed to protecting your privacy. This Privacy
               Policy outlines how we collect, use, and store your information
               when you interact with this web application.
            </p>
            <h2 className="font-semibold mt-5">1. Information We Collect</h2>
            <ul>
               <li className="mb-5">
                  Personal Information: We may collect personal information such
                  as your name, email address, and contact details when you
                  voluntarily provide it to us through forms or inquiries.
               </li>
               <li>
                  Personal information may be used for administrative purposes,
                  such as responding to inquiries and providing support.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">2. Use of Information</h2>
            <ul>
               <li className="mb-5">
                  We use the information collected to personalize your
                  experience.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">3. Storage and Security</h2>
            <ul>
               <li className="mb-5">
                  We utilize local storage and session storage mechanisms
                  instead of cookies to store certain information locally on
                  your device. This enables us to provide a seamless user
                  experience without compromising your privacy.
               </li>
               <li>
                  We take appropriate measures to safeguard your information
                  against unauthorized access, alteration, disclosure, or
                  destruction.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">4. Third-Party Services</h2>
            <ul>
               <li className="mb-5">
                  We may use third-party services, such as analytics providers,
                  to help us understand how our website is used and to improve
                  our services. These third parties may collect information
                  about your interactions with our website, subject to their
                  respective privacy policies.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">5. Your Choices</h2>
            <ul>
               <li className="mb-5">
                  You have the option to disable local storage or session
                  storage in your browser settings. However, please note that
                  certain features of our website may not function properly
                  without these technologies.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">
               6. Updates to this Privacy Policy
            </h2>
            <ul>
               <li className="mb-5">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We encourage
                  you to review this policy periodically for any updates.
               </li>
            </ul>

            <h2 className="font-semibold mt-5">7. Contact Us</h2>
            <ul>
               <li className="mb-5">
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact Akeem Smith at{" "}
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

export default PrivacyPolicy;
