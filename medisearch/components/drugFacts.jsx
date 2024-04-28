"use client";

import { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { CiPillsBottle1 } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";


export default function DrugFacts({drugFacts}) {
    const {
        drugName,
        usage,
        genWarnings,
        allergyWarnings,
        pregWarnings,
        activeIngred,
        inactiveIngred,
    } = drugFacts;

    const usageItems = usage.split('.').filter(item => item.trim() !== '');
    const genWarnItems = genWarnings.split('.').filter(item => item.trim() !== '');
    const allergyWarnItems = allergyWarnings.split('.').filter(item => item.trim() !== '');
    const pregWarnItems = pregWarnings.split('.').filter(item => item.trim() !== '');


    const [isGenWarnOpen, setIsGenWarnOpen] = useState(false);
    const [isAllergyWarnOpen, setIsAllergyWarnOpen] = useState(false);
    const [isPregWarnOpen, setIsPregWarnOpen] = useState(false);
    const [isActiveOpen, setIsActiveOpen] = useState(false);
    const [isInactiveOpen, setIsInactiveOpen] = useState(false);


    return (
      <div className="mx-64 mt-20">
        <div className="text-4xl font-bold">
            {drugName}
        </div>
        <br/>
        <div className="flex items-center text-2xl font-bold">
            Usage
            <FaRegCheckCircle color="green" size={27} className="ml-2"/>
            
        </div>
        <ul className="list-disc mx-10 text-2xl">
            {usageItems.map((item, index) => (
                <li key={index}>{item.trim()}.</li>
            ))}
        </ul>
        <br/>
        <div className="flex text-2xl font-bold">
            Warnings
            <RiErrorWarningLine color="red" size={30} className="ml-2"/>
        </div>
        <ul className="mx-10 text-2xl font-bold">
            <li className="flex items-center" onClick={() => setIsGenWarnOpen(!isGenWarnOpen)} style={{ cursor: 'pointer' }}>
                General {isGenWarnOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isGenWarnOpen && (
                <ul className="list-disc mx-10 text-2xl font-normal">
                    {genWarnItems.map((item, index) => (
                        <li key={index}>{item.trim()}.</li>
                    ))}
                </ul>
            )}
            <li className="flex items-center" onClick={() => setIsAllergyWarnOpen(!isAllergyWarnOpen)} style={{ cursor: 'pointer' }}>
                Allergies {isAllergyWarnOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isAllergyWarnOpen && (
                <ul className="list-disc mx-10 text-2xl font-normal">
                    {allergyWarnItems.map((item, index) => (
                        <li key={index}>{item.trim()}.</li>
                    ))}
                </ul>
            )}
            <li className="flex items-center" onClick={() => setIsPregWarnOpen(!isPregWarnOpen)} style={{ cursor: 'pointer' }}>
                Pregnancy {isPregWarnOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isPregWarnOpen && (
                <ul className="list-disc mx-10 text-2xl font-normal">
                    {pregWarnItems.map((item, index) => (
                        <li key={index}>{item.trim()}.</li>
                    ))}
                </ul>
            )}
        </ul>
        <br/>
        <div className="flex text-2xl font-bold">
            Ingredients
            <CiPillsBottle1 color="87C4FF" size={30} stroke="#87C4FF" stroke-width="1" className="ml-1"/>
        </div>
        <ul className="list-disc mx-10 text-2xl font-bold">
            <li className="flex items-center" onClick={() => setIsActiveOpen(!isActiveOpen)} style={{ cursor: 'pointer' }}>
                Active {isActiveOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isActiveOpen && (
                <ul className="list-disc mx-10 text-2xl font-normal">
                    <li>{activeIngred}</li>
                </ul>
            )}
            <li className="flex items-center" onClick={() => setIsInactiveOpen(!isInactiveOpen)} style={{ cursor: 'pointer' }}>
                Inactive {isInactiveOpen ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {isInactiveOpen && (
                <ul className="list-disc mx-10 text-2xl font-normal">
                    <li>{inactiveIngred}</li>
                </ul>
            )}
        </ul>

      </div>
    );
  }