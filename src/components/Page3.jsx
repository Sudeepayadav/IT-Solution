import React, { useState } from "react";
import { FaArrowRight, FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton , FaArrowTrendUp  } from "react-icons/fa6";
import { MdOutlineSecurity ,MdArrowForward} from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";

function Page3() {
  const [expandedSection, setExpandedSection] = useState(null);

  const services = [
    {
      title: "Web Development",
      description:
        "Web development is a broad field that involves creating and maintaining websites and web applications. It encompasses a range of tasks, from coding and designing user interfaces to managing server-side operations and databases.",
      img: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
      icon: FaLaptopCode,
    },
    {
      title: "Mobile App Development",
      description:
        "Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.) , implementing backend services such as data access with an API, and testing the application on target devices.",
      img: "https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png",
      icon: FaMobileScreenButton,
    },
    {
      title: "Cyber Security",
      description:
        "Cybersecurity is the practice of protecting internet-connected systems such as hardware, software and data from cyberthreats. It's used by individuals and enterprises to protect against unauthorized access to data centers and other computerized systems.",
      img: "https://assets.everspringpartners.com/dims4/default/0fc1868/2147483647/strip/true/crop/620x250+0+0/resize/620x250!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2F68%2F50%2F50bc96eb4ea998f053c9a6b9e914%2Fadobestock-245636933-620x250.jpg",
      icon: MdOutlineSecurity,
    },
    {
      title: "Digital Marketing",
      description:
        "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
      icon: BsGraphUpArrow,
    },
  ];

  const toggleExpand = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <>
      <div className="text-center m-6">
        <h2 className="text-4xl font-semibold">Services</h2>
      </div>
      <div className="w-11/12 m-auto">
        {services.map((service, index) => (
          <div key={index} className="mb-5 border-b border-black">
            <div className="md:flex items-center space-x-5">
              <div className="md:w-full p-4">
                <h2
                  className="md:text-3xl font-semibold md:mb-8 flex cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <service.icon className="mr-2 mt-1" />
                  {service.title} 
                  <MdArrowForward className="mt-1.5 ml-2 float-end" />
                </h2>
              </div>
            </div>
            {expandedSection === index && (
              <div className="md:flex items-center ">
                <div className="md:w-1/2 p-4 transition-all duration-300 ease-in-out">
                  <p className="md:text-lg text-justify">{service.description}</p>
                </div>
                <div className="md:w-1/2 p-4">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-[620px] md:h-80 rounded"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Page3;
