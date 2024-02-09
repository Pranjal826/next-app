'use client'
import Image from "next/image";
const Submit = () => {
    return (
      <>
        <div className="submit-form mt-20 flex flex-col gap-[30px] w-full">
          <div className="submit flex flex-col items-center gap-20 ">
            <div className="flex flex-col justify-evenly items-center relative w-80vw h-[60vh] border-4 rounded-[15px] border-blue-300 w-[400px]">
              <Image width={500} height={500}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCu48HjEdseGC-vnYl6z13tHrdAadhAFN3BBvnypU4A&s"
                className="w-5 h-5 absolute right-0 top-0 rounded-full"
                alt=""
              />
              <Image width={500} height={500} src="/submit.png" className="w-1/2 h-[20vh]" alt="" />
              <h1 className="text-4xl italic font-bold">SUBMITTED</h1>
            </div>
          </div>
          <div className="submit flex flex-col items-center gap-20 h-screen">
            <div className="p-3 flex flex-col justify-evenly items-center relative w-90vw md:w-80vw h-[60vh] border-4 rounded-[15px] border-blue-300">
              <h1 className="text-4xl">How was your Experience?</h1>
              <Image width={500} height={500}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCu48HjEdseGC-vnYl6z13tHrdAadhAFN3BBvnypU4A&s"
                className="w-5 h-5 absolute right-0 top-0 rounded-full"
                alt=""
              />
              <div className="flex gap-20 text-3xl md:text-5xl">
                ☹️ 🙁 😐 🙂 😊
              </div>
              <button className="border-t-3 w-[200px] border-2 border-blue-700 text-white rounded-[12px] p-2 text-[25px] bg-blue-600">
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Submit;
  