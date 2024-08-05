import React from "react";
import { PiArticleLight } from "react-icons/pi";

function About() {
  return (
    <div className="w-[100%]">
      <div className=" w-[100%] md:w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-flow-col-2 mx-auto p-10 gap-5">
        <img
          src="https://github.com/mdalmamunit427/modern-react-js-blog-starter-files/blob/master/assets/about.png?raw=true"
          alt="Error"
        />
        <div className="pt-2">
          <p className="text-[1.2rem] font-semibold text-red-500">
            Who are You
          </p>
          <h2 className="text-2xl font-semibold mt-2">
            We provide high quality Articles & Blogs
          </h2>
          <p className="mt-2 font-serif">
            Our service delivers top-notch articles and blogs tailored to your
            specific needs. We ensure content that is not only engaging but also
            well-researched and informative. Whether you're looking for
            insightful articles or captivating blog posts, our team of
            experienced writers crafts each piece with precision and creativity.
            We focus on quality, delivering content that resonates with your
            target audience and boosts your online presence. With a commitment
            to excellence, we offer content that is original, SEO-optimized, and
            tailored to your brand voice. Trust us to enhance your content
            strategy and elevate your digital footprint with high-quality
            writing that stands out.
          </p>
        </div>
      </div>
      <div>
        <div className="w-[100%] p-10 ">
          <h1 className="text-3xl font-bold border-b-2 my-2 py-3 ">
            Top Authors
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-6 mt-5">
            <div className="p-7 border rounded-md shadow-md shadow-black flex  flex-col justify-center items-center">
              <img
                src="https://github.com/mdalmamunit427/modern-react-js-blog-starter-files/blob/master/assets/user-01.png?raw=true"
                alt=""
              />
              <h3 className="font-serif font-semibold mt-2 text-xl">
                Adrio Devid
              </h3>
              <p className="text-md mt-1">Director of Operation</p>
              <p className="text-md mt-1 flex items-center gap-2 ">
                <span>
                  <PiArticleLight className="text-xl" />
                </span>
                12 Articles Published
              </p>
            </div>
            <div className="p-7 border rounded-md shadow-md shadow-black flex  flex-col justify-center items-center">
              <img
                src="https://github.com/mdalmamunit427/modern-react-js-blog-starter-files/blob/master/assets/user-02.png?raw=true"
                alt=""
              />
              <h3 className="font-serif font-semibold mt-2 text-xl">
                Rayna Mario
              </h3>
              <p className="text-md mt-1">Content writer</p>
              <p className="text-md mt-1 flex items-center gap-2 ">
                <span>
                  <PiArticleLight className="text-xl" />
                </span>{" "}
                8 Articles Published
              </p>
            </div>
            <div className="p-7 border rounded-md shadow-md shadow-black flex  flex-col justify-center items-center">
              <img
                src="https://github.com/mdalmamunit427/modern-react-js-blog-starter-files/blob/master/assets/user-03.png?raw=true"
                alt=""
              />
              <h3 className="font-serif font-semibold mt-2 text-xl">
                Devid TAc
              </h3>
              <p className="text-md mt-1">Head of Marketing</p>
              <p className="text-md mt-1 flex items-center gap-2 ">
                <span>
                  <PiArticleLight className="text-xl" />
                </span>{" "}
                5 Articles Published
              </p>
            </div>
            <div className="p-7 border rounded-md shadow-md shadow-black flex  flex-col justify-center items-center">
              <img
                src="https://github.com/mdalmamunit427/modern-react-js-blog-starter-files/blob/master/assets/user-01.png?raw=true"
                alt=""
              />
              <h3 className="font-serif font-semibold mt-2 text-xl">
                Mark Jacob
              </h3>
              <p className="text-md mt-1">Head of Marketing</p>
              <p className="text-md mt-1 flex items-center gap-2 ">
                <span>
                  <PiArticleLight className="text-xl" />
                </span>{" "}
                10 Articles Published
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
