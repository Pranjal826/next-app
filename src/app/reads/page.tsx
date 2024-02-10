import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
    title: "Top 10 Best Schools in Gurgaon for Admission &...",
    description: "If you are looking for admission for your child in Gurgaon schools, then here are top 10 best schools",
    date: "07 Aug 2023",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww",
    title: "Top 10 Best Schools in Gurgaon for Admission &...",
    description: "If you are looking for admission for your child in Gurgaon schools, then here are top 10 best schools",
    date: "07 Aug 2023",
  },
  {
    id: 3,
    imageUrl: "https://plus.unsplash.com/premium_photo-1669748158379-b1460474807c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fHww",
    title: "Top 10 Best Schools in Gurgaon for Admission &...",
    description: "If you are looking for admission for your child in Gurgaon schools, then here are top 10 best schools",
    date: "07 Aug 2023",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "DHBVN Gurgaon Electricity Bill Online Payment",
    description: "If you are looking for admission for your child in Gurgaon schools, then here are top 10 best schools",
    date: "07 Aug 2023",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Top 10 Best Schools in Gurgaon for Admission &...",
    description: "If you are looking for admission for your child in Gurgaon schools, then here are top 10 best schools",
    date: "07 Aug 2023",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "7 best mall inn Gurgaon that are must to visit",
    description: "If you are looking for admission for your child in Gurgaon schools, then here are top 10 best schools",
    date: "07 Aug 2023",
  },

];

const Reads = () => {


  return (
    <div className="reads flex flex-col gap-[30px] p-5 translate-y-[12rem] md:translate-y-[1rem]">
      <h1 className="text-3xl font-semibold ">Interesting Reads</h1>
      <div className="overflow-scroll relative">
        <div className="cards flex gap-[100px] relative w-[150vw] ref={cardsRef} p-6">
          {cardData.map((card) => (
            <div key={card.id} className="card border-4 rounded-md flex flex-col gap-[10px] ">
              <Image src={card.imageUrl} className="rounded-md  h-[200px]" width={500} height={500} alt="" />
              <div className="cont flex flex-col gap-[10px] p-3">
                <h1 className="text-xl ">{card.title}</h1>
                <p className="text-stone-400">{card.description}</p>
                <div className="text-stone-400	date flex justify-between">
                  <h1>{card.date}</h1>
                  <FontAwesomeIcon icon={faShareNodes} size="2x" />
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Reads;

            