import { Link, useLoaderData } from "react-router-dom"

const Jobs = () => {
    const jobsData = useLoaderData();
  return (
    <div className="job">
      {jobsData.map((job) => {
         return <Link>
           <h4>{job.title}</h4>
           <p>{job.location}</p>
         </Link>
      })}          
    </div>
  )
}

export default Jobs


export const JobsLoader = async ()=> {
  const res = await fetch ("http://localhost:5500/jobs");
  return res.json();
}