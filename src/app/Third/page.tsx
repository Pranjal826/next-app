import React from "react";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Third=()=>{
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
    const questionsAndAnswers = [
        {
          question: "How many free listings can I post on deal acres?",
          answer: "You can post up to 5 free listings on deal acres.",
        },
        {
            question: "What is the duration of the free listing?",
            answer: "The free listing will be active for 30 days.",
        },
        {
            question: "What is the process of free listing?",
            answer: "The process of free listing is very simple. You just need to fill the form with the required details and submit it. Your listing will be live within 24 hours.",
        },
        {
            question: "What are the benefits of free listing?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "What are the benefits of free listing?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "What are the benefits of free listing?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "What are the benefits of free listing?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "What are the benefits of free listing?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "What are the benefits of free listing?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        
      ];
        const handleQuestionClick = (index: number) => {
            setSelectedQuestion(index === selectedQuestion ? null : index);

        };
   
        return (
            <>
              <div className="flex flex-col p-5 gap-[17px]">
                <h1 className="text-6xl tracking-wider	">
                  Everything you need to know about Deal Acres<br />
                  Free Property Listing.....
                </h1>
                <h3 className="font-bold text-xl">What is Free Property Listing?</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
                  ipsum quo placeat inventore repellat exercitationem praesentium fugiat
                  ipsam, magni quas, deserunt aliquam autem quos maiores possimus
                  excepturi? Porro quod, exercitationem omnis quidem ratione cupiditate
                  harum nam eum consequatur atque ipsum aliquam maxime vero veritatis?
                  Eligendi, quidem mollitia quae, a amet odio pariatur qui doloremque
                  quasi aut explicabo temporibus nulla nisi?
                </p>
                <h3 className="font-bold text-xl">Advantage</h3>
                <ul className="list-disc pl-6">
                  <li>Provide free online exposure to more buyers</li>
                  <li>A platform for buying and selling real estate</li>
                  <li>Interact with and engage potential customers in your area</li>
                  <li>Negotiate and expedite the prices.</li>
                  <li>You can save money by working as your own real estate</li>
                </ul>
                <div className="questions flex flex-col gap-[30px]">
                  <h1 className="text-6xl font-medium	">Frequently Asked Questions</h1>
                  <div className="question-list flex flex-col gap-[10px]">
                    {questionsAndAnswers.map((qa, index: number) => (
                      <div className=" pl-5 pr-5" key={index}>
                        <div
                          className={`que1 flex gap-[6px] items-start mt-[15px] ${
                            selectedQuestion === index ? "active" : ""
                          }`}
                          onClick={() => handleQuestionClick(index)}
                        >
                          <FontAwesomeIcon
                            icon={selectedQuestion === index ? faCaretDown : faCaretRight}
                            className={`mt-[5px] ml-2 cursor-pointer ${
                              selectedQuestion === index ? "text-blue-500" : ""
                            }`}
                          />
                          <div className="flex flex-col">
                            <h1 className="font-semibold">{qa.question}</h1>
                            {selectedQuestion === index && (
                              <div className="ml-4">{qa.answer}</div>
                            )}
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          );
        };        

export default Third;