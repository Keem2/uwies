# University of the West Indies Exam Scheduler (UWIES)
## About the Project
This is the source code for The University of the West Indies (Cave Hill) Exam Scheduler (UWIES for short). This application simply allows students to input their enrolled courses, and the application generates a personalized exam timetable that can be viewed anytime.
## Project Data
The university releases a PDF file of the list of exams. This PDF is imported into an Excel file and the data is initially cleaned enough for the exam data to be formatted as CSV. This inital CSV file is in the **data-initial** folder.

The data is then cleaned further using Python (script.py) in the **data-clean** folder. This script also makes the final version of the CSV file and a JSON file. This JSON file contains the exam data consumed by the application, present in the **data/** section of the **frontend** folder. 

## Features
- **User Authentication** - User is logged in via Google OAuth, provided by Supabase.
- **Dark Mode**

## Built With
[![My Skills](https://skillicons.dev/icons?i=react,ts&theme=light)](https://skillicons.dev) React + Typescript

[![My Skills](https://skillicons.dev/icons?i=vite&theme=light)](https://skillicons.dev) Vite

[![My Skills](https://skillicons.dev/icons?i=tailwind&theme=light)](https://skillicons.dev) TailwindCSS

[![My Skills](https://skillicons.dev/icons?i=supabase&theme=light)](https://skillicons.dev) Supabase

## Usage 
You can use the application to search for your course, using either its name or code, and view the details of its exam. 

If you want to make or view a schedule, follow these steps:
1.  **Log In**: Click the Log In button and log in with your Google account.
2.  **Add Courses**: Click on "Create your schedule" and input the name of the schedule & the courses you are enrolled in for the current semester.
3.  **View Exam Schedule**: Click on "View saved schedules" to see the schedules you have created. You can click on an individual schedule to view its exams and the details of those exam.

## Roadmap
- [ ] Export saved schedules as a PDF
- [ ] Add schedules to different calendars (Google Calendar, Outlook Calendar, iOS etc.)
