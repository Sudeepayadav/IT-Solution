import React from 'react';

const Projects = () => {
  return (
    <div className="projects p-5 bg-[#141627] text-white">
      <div className='flex'>
        <div className='text-4xl font-bold mb-3 mt-3 w-[375px] ml-12'>Projects</div>
        <div className='w-[700px] mb-10'>
          As an IT company, we pride ourselves on delivering customized solutions that meet our clients' specific needs. From project kickoffs to system maintenance, mobile development, cloud computing, cybersecurity, and application testing.
        </div>
      </div>
      <div className="project-cards flex gap-10 m-auto justify-center items-center">
        <div className="card relative bg-red-600 rounded-lg overflow-hidden w-[360px] h-[360px]">
          <img className='absolute w-full h-full object-cover' src="https://img.freepik.com/premium-photo/some-light-blue-leaves-light-blue-background-style-layered-translucency_625233-1164.jpg?ga=GA1.2.1446222.1720603128&semt=ais_user" alt="Project" />
          <h2 className='relative bottom-4 left-2 text-lg font-bold text-black  mt-72'>DGPEX CORP</h2>
          <p className='relative bottom-2 left-2 text-lg font-bold text-black'>2024</p>
        </div>
        <div className="card bg-[#b3e5fc] text-white shadow-md rounded-lg p-5 w-[360px] h-[360px] ">
          <h1 className='text-center text-xs font-bold mb-4'>CYBER SECURITY</h1>
          <h2 className='text-center text-4xl font-bold'>Mika</h2>
          <h4 className='text-center text-4xl font-bold mb-3'>Medika</h4>
          <p className='text-xs text-center w-[300px]  font-semibold mb-6'>
            Mika Medika facilitates a strong hospital network and ensures robust security of their patient data.
          </p>
          <span className='w-[100px] ml-28 block text-center border rounded-lg cursor-pointer p-2 mx-auto text-sm font-semibold bg-white text-black'>
            Read More
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;