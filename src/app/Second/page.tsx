import React from "react";

const Second = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4 mt-4 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
Step by step guide for free property listing</h1>
        <div className="round-cards flex flex-col sm:flex-row justify-evenly items-center h-full w-full">
          <div className="round1 flex flex-col items-center gap-[10px]">
            <div className="rounded-full bg-sky-100 h-[100px] w-[100px] flex items-center justify-center">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-file-1510-434045.png?f=webp&w=512"
                alt=""
                className="h-[50px] w-[50px]"
              />
            </div>
            <h1 className="font-bold">Step 1: Add proper details</h1>
            <p>
              Start filling the form with a few basic details like <br />
              type of property, area, location, etc
            </p>
          </div>
          <div className="round2 flex flex-col items-center gap-[10px]">
            <div className="rounded-full bg-sky-100 h-[100px] w-[100px] flex items-center justify-center">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-gallery-44-267592.png?f=webp&w=512"
                alt=""
                className="h-[50px] w-[50px]"
              />
            </div>
            <h1 className="font-bold">Step 2: Add gallery</h1>
            <p>
              Upload high-quality images of your property <br/>to showcase its
              features.
            </p>
          </div>
          <div className="round3 flex flex-col items-center text-left gap-[10px]">
            <div className="rounded-full bg-sky-100 h-[100px] w-[100px] flex items-center justify-center">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-home-1771009-1505138.png?f=webp&w=512"
                alt=""
                className="h-[50px] w-[50px]"
              />
            </div>
            <h1 className="font-bold">Step 3: Review and submit</h1>
            <p>
              Review your details and submit your <br/>property listing for free.
            </p>
          </div>
        </div>
        <div className="inner-bg h-[160vh]	 w-full  md:h-[90vh]">
        <div className="img bg-[url('https://plus.unsplash.com/premium_photo-1670274229211-a46356f9d196?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full  bg-cover bg-no-repeat relative flex items-center justify-center ">
            <div className="para w-[80%] h-auto bg-slate-50 p-[20px] border-t-[1px] border-b-[10px] border-l-[5px] border-r-[5px] border-fuchsia-200 rounded translate-y-[6rem]">
                <h1 className="text-[40px] text-center">Why Choose Deal Acres?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, perspiciatis alias. Odio, officiis magni odit molestias nobis delectus, laborum aspernatur, minima facilis totam magnam. Quisquam dicta earum veniam asperiores consectetur fugit officiis! Vel alias assumenda praesentium commodi harum. Expedita magni consequuntur fuga odit fugit in tempore, vel error ipsa at modi dolorum illo distinctio, hic corporis, ratione aliquam velit id! Natus deleniti cupiditate voluptate quibusdam necessitatibus doloremque sequi fugit eligendi?</p>
                <br>
                </br>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit perferendis cupiditate voluptatibus expedita assumenda ad harum modi? Eum deleniti distinctio laborum cumque consequuntur ab quia repellendus nobis dolor repellat, porro, asperiores odit? Assumenda debitis pariatur amet consequuntur enim quae laborum.</p>
                <br>
                </br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quia repudiandae reiciendis minus illum obcaecati sequi perferendis praesentium blanditiis, ducimus quas qui error earum, ad asperiores, quo provident officia in. Animi, deserunt? Laboriosam et blanditiis repellat, modi dolores iste ipsa necessitatibus, porro voluptatum illum facilis ad sint pariatur sunt amet deleniti quisquam saepe tenetur similique. Corrupti dolore quia quod quisquam!</p>
            </div>
            <button className="absolute top-[150vh] bg-blue-800 text-white pl-10 pr-10 pt-3 pb-3 rounded-[12px] md:top-[65vh]">
                List Your Property For FREE NOW
            </button>
        </div>
        </div>
      
      </div>
    </>
  );
};

export default Second;
