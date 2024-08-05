import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CiUser } from "react-icons/ci";

function Dummy() {
  const { id } = useParams();
  const data = useSelector((state) => state.blog.data);
  if (data == null) {
    return;
  }
  console.log(data[id]);

  return (
    <div className="w-[100%] mx-auto py-7"> 
      <div className="sm:w-[100%] md:w-[70%] lg:w-[70%] mx-auto border px-16 py-10 rounded-md bg-slate-200">
        <img src={data[id].image} alt="Error" width={800} className="rounded-md" />
        <h2 className="text-2xl mt-5 font-semibold">{data[id].title}</h2>

        <p className='flex items-center text-xl gap-2 mt-2'><CiUser  className="text-xl"/>{data[id].author}</p>

        <p className="mt-1 text-xl ">{`Published : ${data[id].published_date}`}</p>
        <p className="mt-1 text-xl">{`Read Time : ${data[id].reading_time}`}</p>
        <p className="mt-1 text-xl">{`Content : ${data[id].content}`}</p>
        <div className="w-[100%] mt-10">
          <h1 className="text-2xl font-semibold">Content :</h1>
          <p className="text-[1.2rem] indent-4">In today's fast-paced digital world, staying ahead of the curve requires constant adaptation and innovation. Whether you're a seasoned professional or just starting your journey, embracing new technologies and methodologies can be the key to unlocking your full potential. It's not just about keeping up with trends; it's about understanding how these advancements can be harnessed to drive real change. In this ever-evolving landscape, the ability to learn, unlearn, and relearn is crucial. As we navigate through this digital transformation, it's important to remain open to new ideas and approaches, ensuring that we're not just surviving, but thriving in the age of technology.</p>
        </div>
      </div>
    </div>
  );
}

export default Dummy;
