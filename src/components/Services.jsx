import React from "react";

function Services() {
  return (
    <>
      <div className="text-center m-6">
        <h2 className="text-4xl font-semibold">Services</h2>
      </div>
      <div className="w-11/12 m-auto">
        <div className="md:flex  items-center mb-5 space-x-5">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-8">Web Developement</h2>
            <p className="text-lg text-justify">
              Web development is a broad field that involves creating and
              maintaining websites and web applications. It encompasses a range
              of tasks, from coding and designing user interfaces to managing
              server-side operations and databases.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg"
              alt="Web Development"
              className="w-[620px] h-80 rounded"
            />
          </div>
        </div>
        <div className="md:flex  items-center mb-5 space-x-5">
          <div className="md:w-1/2 p-4 md:order-1 order-2">
            <img
              src="https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png"
              alt="Web Development"
              className="w-[620px] h-80 rounded "
            />
          </div>
          <div className="md:w-1/2 p-4 md:order-2 order-1">
            <h2 className="text-3xl font-bold mb-8">Mobile App Developement</h2>
            <p className="text-lg text-justify">
              Mobile application development is the process of creating software
              applications that run on a mobile device, and a typical mobile
              application utilizes a network connection to work with remote
              computing resources. Hence, the mobile development process
              involves creating installable software bundles (code, binaries,
              assets, etc.) , implementing backend services such as data access
              with an API, and testing the application on target devices.
            </p>
          </div>
        </div>
        <div className="md:flex  items-center mb-5 space-x-5">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-8">Cyber Security</h2>
            <p className="text-lg text-justify">
              Cybersecurity is the practice of protecting internet-connected
              systems such as hardware, software and data from cyberthreats.
              It's used by individuals and enterprises to protect against
              unauthorized access to data centers and other computerized
              systems.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://assets.everspringpartners.com/dims4/default/0fc1868/2147483647/strip/true/crop/620x250+0+0/resize/620x250!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2F68%2F50%2F50bc96eb4ea998f053c9a6b9e914%2Fadobestock-245636933-620x250.jpg"
              alt="Web Development"
              className="w-[620px] h-80 rounded"
            />
          </div>
        </div>
        <div className="md:flex  items-center mb-5 space-x-5">
          <div className="md:w-1/2 p-4">
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg"
              alt="Web Development"
              className="w-[620px] h-80 rounded "
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-8">Digital Marketing</h2>
            <p className="text-lg text-justify">
              Digital marketing, also called online marketing, is the promotion
              of brands to connect with potential customers using the internet
              and other forms of digital communication. This includes not only
              email, social media, and web-based advertising, but also text and
              multimedia messages as a marketing channel.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
