"use client"
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
            question: "When will my property become visibile on the site?",
            answer: "The free listing will be active for 30 days.",
        },
        {
            question: "Is there any limit on response of free listing?",
            answer: "The process of free listing is very simple. You just need to fill the form with the required details and submit it. Your listing will be live within 24 hours.",
        },
        {
            question: "What documents do I need to post property?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "Getting error while posting property. What to do?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "Why should I post my property online for rent/sale?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "Is it possible to rent homes without an agent?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "How do I sell/rent out a property myself?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question: "Can I list my commercial property for sale/rent?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        },
        {
            question:"What are the benefits of posting property on Deal Acres?",
            answer: "The benefits of free listing are: 1. Provide free online exposure to more buyers 2. A platform for buying and selling real estate 3. Interact with and engage potential customers in your area 4. Negotiate and expedite the prices. 5. You can save money by working as your own real estate",
        }
        
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
                It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently. It is the perfect way to reach the audience who want to rent their home or buy their dream home. By doing property listing you save your time for selling or renting it.
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