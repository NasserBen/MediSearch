"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaRegCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { CiPillsBottle1 } from "react-icons/ci";

export default function DrugFacts({ drugFacts, onClose }) {
  const {
    drugName,
    usage,
    genWarnings,
    allergyWarnings,
    pregWarnings,
    activeIngred,
    inactiveIngred,
  } = drugFacts;

  const [isGenWarnOpen, setIsGenWarnOpen] = useState(false);
  const [isAllergyWarnOpen, setIsAllergyWarnOpen] = useState(false);
  const [isPregWarnOpen, setIsPregWarnOpen] = useState(false);
  const [isActiveOpen, setIsActiveOpen] = useState(false);
  const [isInactiveOpen, setIsInactiveOpen] = useState(false);

  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50  bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div
        ref={modalRef}
        className="rounded-lg p-10 max-w-3xl overflow-hidden bg-custom-bg"
      >
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">{drugName}</div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <br />
        <div className=" h-[700px] overflow-y-auto">
          <div className="flex items-center text-2xl font-bold">
            Usage
            <FaRegCheckCircle color="green" size={27} className="ml-2" />
          </div>
          <ul className="list-disc mx-10 text-2xl">
            {usage
              .split(".")
              .filter((item) => item.trim() !== "")
              .map((item, index) => (
                <li key={index}>{item.trim()}.</li>
              ))}
          </ul>
          <div className="flex text-2xl font-bold">
            Warnings
            <RiErrorWarningLine color="red" size={30} className="ml-2" />
          </div>
          <ul className="mx-10 text-2xl font-bold">
            <li
              className="flex items-center"
              onClick={() => setIsGenWarnOpen(!isGenWarnOpen)}
              style={{ cursor: "pointer" }}
            >
              General {isGenWarnOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isGenWarnOpen && (
              <ul className="list-disc mx-10 text-2xl font-normal">
                {genWarnings
                  .split(".")
                  .filter((item) => item.trim() !== "")
                  .map((item, index) => (
                    <li key={index}>{item.trim()}.</li>
                  ))}
              </ul>
            )}
            <li
              className="flex items-center"
              onClick={() => setIsAllergyWarnOpen(!isAllergyWarnOpen)}
              style={{ cursor: "pointer" }}
            >
              Allergies{" "}
              {isAllergyWarnOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isAllergyWarnOpen && (
              <ul className="list-disc mx-10 text-2xl font-normal">
                {allergyWarnings
                  .split(".")
                  .filter((item) => item.trim() !== "")
                  .map((item, index) => (
                    <li key={index}>{item.trim()}.</li>
                  ))}
              </ul>
            )}
            <li
              className="flex items-center"
              onClick={() => setIsPregWarnOpen(!isPregWarnOpen)}
              style={{ cursor: "pointer" }}
            >
              Pregnancy {isPregWarnOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isPregWarnOpen && (
              <ul className="list-disc mx-10 text-2xl font-normal">
                {pregWarnings
                  .split(".")
                  .filter((item) => item.trim() !== "")
                  .map((item, index) => (
                    <li key={index}>{item.trim()}.</li>
                  ))}
              </ul>
            )}
          </ul>
          <div className="flex text-2xl font-bold">
            Ingredients
            <CiPillsBottle1
              color="87C4FF"
              size={30}
              stroke="#87C4FF"
              strokeWidth="1"
              className="ml-1"
            />
          </div>
          <ul className="list-disc mx-10 text-2xl font-bold">
            <li
              className="flex items-center"
              onClick={() => setIsActiveOpen(!isActiveOpen)}
              style={{ cursor: "pointer" }}
            >
              Active {isActiveOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isActiveOpen && (
              <ul className="list-disc mx-10 text-2xl font-normal">
                <li>{activeIngred}</li>
              </ul>
            )}
            <li
              className="flex items-center"
              onClick={() => setIsInactiveOpen(!isInactiveOpen)}
              style={{ cursor: "pointer" }}
            >
              Inactive {isInactiveOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isInactiveOpen && (
              <ul className="list-disc mx-10 text-2xl font-normal">
                <li>{inactiveIngred}</li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}