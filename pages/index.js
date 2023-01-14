import Projects from "../components/projects";
import Snowfall from 'react-snowfall';

export default function Home() {

  return (
    <>
      <Snowfall snowflakeCount={100} className='overflow-hidden' />
      <div className="w-9/12 mx-auto">
        <div className="font-sans text-xl md:text-2xl lg:text-3xl mt-10 text-center text-gray-400">BIWEEKLY FRONTEND</div>
        <div className="font-sans text-sm md:text-sm lg:text-lg mt-5 text-center text-gray-400">THIS IS A PROJECT WHERE I'AM DEVELOP A NEW FRONTEND WEBSITE EVERY TWO WEEKS</div>
      </div>
      <Projects />
      <footer className="w-3/12 mx-auto my-10 text-center">
        <div className='my-2'>
          <p className="text-white">FIND ME AT</p>
        </div>
        <div>
          <a href="https://twitter.com/Donikus_" className="mr-5">
            <i aria-hidden className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/kusuma.doni1" className="mr-5">
            <i aria-hidden className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/kusumadoni77/" className="mr-5">
            <i aria-hidden className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/btrx" className="mr-5">
            <i aria-hidden className="fab fa-github fa-2x"></i>
          </a>
        </div >
      </footer>
    </>
  )
}
