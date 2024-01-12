

type Props = {
    semester:String
    semesterYear:String
}

const Heading = ({semester, semesterYear}: Props) => {
  return (
    <h1 className="text-2xl md:text-3xl font-bold mt-10 md:ml-8">
        UWI Cave Hill Semester {semester} {semesterYear} <br></br>Exam Scheduler
    </h1>
  )
}

export default Heading