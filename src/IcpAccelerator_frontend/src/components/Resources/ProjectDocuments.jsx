import React, { useState, useEffect } from "react";
import { task } from "../Utils/Data/SvgData";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import NoDataCard from "../Mentors/Event/NoDataCard";
import { useNavigate } from "react-router-dom";

const ProjectDocuments = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  const actor = useSelector((currState) => currState.actors.actor);
  const projectId = data?.uid;
  const [noData, setNoData] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [allowAccess, setAllowAccess] = useState(null);

  useEffect(() => {
    const fetchAccessPrivateData = async () => {
      if (!projectId) return;
      try {
        const result = await actor.access_private_docs(projectId);
        console.log("result-in-access", result);
        if ("Ok" in result) {
          setDocuments(result.Ok);
          // setNoData(false);
          setAllowAccess(true);
        } else if ("Err" in result) {
          setAllowAccess(false);
          toast.error(result.Err || "An unexpected error occurred");
          setDocuments([]);
          // setNoData(true);
        }
      } catch (error) {
        console.error("error-in-access", error);
        toast.error("An unexpected error occurred");
        setDocuments([]);
        // setNoData(true);
        setAllowAccess(false);
      }
    };

    if (isChecked) {
      fetchAccessPrivateData();
    } else {
      setDocuments(data?.params?.public_docs || []);
      setAllowAccess(true);
      // setNoData(data?.params?.public_docs?.length === 0);
    }
  }, [isChecked, actor, projectId, data?.params?.public_docs]);

  const sendPrivateDocumentRequest = async () => {
    if (!projectId) return;
    try {
      const result = await actor.send_private_docs_access_request(projectId);
      console.log("result-in-send-access-private-docs", result);
      if (result) {
        toast.success(result);
      } else {
        toast.error(result);
      }
    } catch (error) {
      console.log("error-in-send-access-private-docs", error);
    }
  };

  console.log("documents", documents);
  console.log("allowAccess", allowAccess);

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-end w-full">
        {!allowAccess === true ?'':
          <button
            className="text-white bg-blue-700 font-bold py-2 px-4 rounded-xl"
            onClick={sendPrivateDocumentRequest}
          >
            Ask for permission
          </button>}
          <button
            className="text-white bg-blue-700 font-bold py-2 px-4 rounded-xl"
            onClick={()=> navigate(`/project-private-document-requests`)}
          >
            View
          </button>
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggle"
                className="sr-only"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full  flex items-center justify-center ${
                  isChecked
                    ? "transform translate-x-full "
                    : "transition-transform"
                }`}
              >
                {isChecked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-4 h-4"
                  >
                    <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4"
                  >
                    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                  </svg>
                )}
              </div>
            </div>
          </label>
        </div>
        {
          documents.length === 0  ? (
            <NoDataCard />
          ) : (
          documents?.map(
            (doc, index) => (
              console.log("doc", doc),
              (
                <div
                  className="group w-[100%] md1:w-[calc(100%/2-10px)] dlg:w-[calc(100%/3-10px)]"
                  key={index}
                >
                  {allowAccess === true ? (
                    <div className=" md:m-1 p-4 mb-4 bg-gradient-to-b overflow-hidden from-[#B9C0F2] to-[#B9C0F23B] border-2 border-blue-400 rounded-2xl shadow">
                      <div className="relative">
                        <div className="relative z-10 p-2">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                            {doc?.title}
                            <br></br>
                            <span className="border-b border-[#4E5999] pb-2">
                              PDF
                            </span>
                          </h5>
                          <p className="font-[450] text-xs text-[#4E5999] py-4">
                            Give your weekend projects, side projects, hobby
                            projects, serious ventures a place to breathe,
                            invite collaborators and inspire other builders.
                          </p>
                          <div>
                            <a
                              href={doc?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {task}
                            </a>
                          </div>
                        </div>
                        <div className="absolute opacity-25 w-40 h-40 -left-[85px] -top-[28px] rounded-full bg-gradient-to-b from-[#3C04BA] to-[#4087BF]"></div>
                        <div className="absolute opacity-25 w-40 h-40 -right-[50px] -bottom-[52px] rounded-full bg-gradient-to-r from-[#3C04BA] to-[#4087BF]"></div>
                      </div>
                    </div>
                  ) : (
                    <div className=" md:m-1 p-4 mb-4 bg-gradient-to-b overflow-hidden from-[#B9C0F2] to-[#B9C0F23B] border-2 border-blue-400 rounded-2xl shadow">
                      <div className="relative">
                        <div className="relative z-10 p-2">
                          <div className=" -m-4 p-6 inset-0 bg-[#BDC4F3]/30 backdrop-blur-sm flex-col text-center items-center transition-opacity duration-300 ease-in-out opacity-100">
                            <h5 className="mb-2 text-2xl font-bold text-black">
                              Request to see Private Document
                            </h5>
                            <p className=" text-base text-white py-4">
                              Request to view Private Data
                            </p>
                          </div>
                        </div>
                        <div className="absolute opacity-25 w-40 h-40 -left-[85px] -top-[28px] rounded-full bg-gradient-to-b from-[#3C04BA] to-[#4087BF]"></div>
                        <div className="absolute opacity-25 w-40 h-40 -right-[50px] -bottom-[52px] rounded-full bg-gradient-to-r from-[#3C04BA] to-[#4087BF]"></div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )
          )
          )
        }
      </div>
      <Toaster />
    </div>
  );
};

export default ProjectDocuments;
