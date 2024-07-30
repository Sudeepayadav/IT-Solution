import React from "react";

function Clients() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/modern-geometrical-background-with-white-triangles_23-2148811537.jpg?t=st=1721717711~exp=1721721311~hmac=9581be55a05a1821efccb7833a7440e9106006d1af52789f72e4686c1c619d34&w=1380')`,
        }}
      >
        <div className="text-center p-10 ">
          <div className="md:text-7xl text-3xl font-bold mb-4 ">
            We believe that <span className=" font-thin bg-gradient-to-br from-[#ff61d2] to-purple-600 text-transparent bg-clip-text"> technology</span>
            <br /> can <span className=" font-medium bg-gradient-to-br from-[#ff61d2] to-purple-600 text-transparent bg-clip-text">change </span> The World.
            
          </div>
          <p className=" mb-8 md:w-1/2 flex mx-auto text-xl">
            That's why we're committed to delivering innovative IT solutions to
            businesses of all sizes. Our team of experienced professionals is
            dedicated to helping you achieve your goals and thrive in a rapidly
            evolving digital landscape.
          </p>
          <div className="flex flex-row justify-evenly">
            <div className="">
              <h2 className="md:text-3xl text-2xl font-bold">500+</h2>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div>
              <h2 className="md:text-3xl text-2xl font-bold">98%</h2>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div>
              <h2 className="md:text-3xl text-2xl font-bold">35+</h2>
              <p className="text-gray-600">Handled Countries</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
