import Projects from "../components/projects";
import Snowfall from 'react-snowfall'

export default function Home() {

  return (
    <>
      <Snowfall snowflakeCount={100} className='overflow-hidden' />
      <div className="w-9/12 mx-auto">
        <div className="font-sans text-xl md:text-2xl lg:text-3xl mt-10 text-center text-gray-400">BIWEEKLY FRONTEND</div>
        <div className="font-sans text-sm md:text-sm lg:text-lg mt-5 text-center text-gray-400">THIS IS A PROJECT WHERE I'AM DEVELOP A NEW FRONTEND WEBSITE EVERY TWO WEEKS</div>
      </div>
      <Projects />
    </>
  )
}
