import React, { useEffect } from "react";
// import Sidebar from "../Layout/SidePanel/Sidebar";
import LiveProjects from "./LiveProjects";
import SearchForm from "./SearchForm";
// import VideoScroller from "./VideoScroller";
// import Founder from "./Founder";
// import Partners from "./Partners";
// import Footer from "../Footer/Footer";
// import Bottombar from "../Layout/BottomBar/Bottombar";
import { useSelector } from "react-redux";
import ListedProjects from "./ListedProjects";
import guide from "../../../assets/getStarted/guide.png";
import upvote from "../../../assets/getStarted/upvote.png";
import SubmitSection from "../Footer/SubmitSection";

const DashBoard = () => {
  const actor = useSelector((currState) => currState.actors.actor);

  // console.log("actor in dashboard =>", actor);

  useEffect(() => {
    const founderDataFetchHandler = async () => {
      const founderDataFetch = await actor.get_mentor_candid();
      // console.log("dekho dekho founder data aaya => ", founderDataFetch);
    };
    founderDataFetchHandler();
  }, [actor]);

  const underline =
    "relative focus:after:content-[''] focus:after:block focus:after:w-full focus:after:h-[2px] focus:after:bg-blue-800 focus:after:absolute focus:after:left-0 focus:after:bottom-[-4px]";

  return (
    <section className="overflow-hidden relative bg-gray-100">
      <div className="font-fontUse flex flex-col w-full h-fit px-[5%] lg1:px-[4%] py-[4%]">
        <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
          <h1 className="bg-gradient-to-r from-blue-900 to-sky-400 text-transparent bg-clip-text">
            Live Projects
          </h1>

          <div className="flex items-center flex-row gap-2 ">
            <SearchForm />
            <button className="border border-violet-800 p-1 rounded-md text-violet-800">
              Explore more
            </button>
          </div>
        </div>
        <LiveProjects />
        <div className="flex- flex-col mb-10">
          <div className="flex items-center justify-between mb-4  flex-row  bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
            <h1 className=" font-bold bg-gradient-to-r from-blue-900 to-sky-400 text-transparent bg-clip-text">
              Listed Projects
            </h1>
            <div className="space-x-3 text-xs text-gray-500">
              <a href="#" className={`${underline}`}>
                Latest
              </a>
              <a href="#" className={`${underline}`}>
                Popular
              </a>
            </div>
            <div className="flex items-center flex-row gap-2 ">
              <button className=" font-bold border border-violet-800 p-1 rounded-md text-violet-800">
                Explore more
              </button>
            </div>
          </div>
          <ListedProjects />

          <h1 className=" font-bold bg-gradient-to-r from-blue-900 to-sky-400 text-transparent bg-clip-text">
            Get Started
          </h1>

          <div className="flex flex-row  gap-10 flex-wrap md:justify-start md:ml-6 justify-center items-center">
            <div className="mt-8 bg-white w-[280px] h-[345px] rounded-xl border border-gray-200 shadow-md">
              <img
                className="rounded-t-xl object-fill w-full h-[200px]"
                src={guide}
                alt="guide"
              />
              <div className="p-5 bg-custumSky h-[145px] justify-between flex flex-col rounded-b-xl">
                <p className="font-normal text-xs  text-gray-700 text-start">
                  Here is a step-by-step guide to help you understanding how to
                  list a project{" "}
                </p>
                <div className="flex items-center">
                  <p className="text-white font-semibold text-sm mr-2">
                    Learn more
                  </p>
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 56 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "scaleX(-1)" }}
                  >
                    <path
                      id="Arrow 2"
                      d="M53.837 13.3223C54.6654 13.3228 55.3374 12.6516 55.3379 11.8232C55.3384 10.9947 54.6672 10.3228 53.8388 10.3223L53.837 13.3223ZM1.08727 10.7299C0.501131 11.3153 0.500559 12.2651 1.08599 12.8512L10.6262 22.4029C11.2116 22.989 12.1614 22.9896 12.7475 22.4042C13.3336 21.8187 13.3342 20.869 12.7488 20.2828L4.26861 11.7925L12.759 3.31228C13.3451 2.72684 13.3457 1.7771 12.7603 1.19096C12.1748 0.604819 11.2251 0.604248 10.639 1.18968L1.08727 10.7299ZM53.8388 10.3223L2.14819 10.2912L2.14639 13.2912L53.837 13.3223L53.8388 10.3223Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white w-[280px] h-[345px] rounded-xl border border-gray-200 shadow-md">
              <img
                className="rounded-t-xl object-fill w-full h-[200px]"
                src={upvote}
                alt="upvote"
              />
              <div className="p-5 bg-custumSky h-[145px] justify-between flex flex-col rounded-b-xl">
                <h5>How to Vote a Project</h5>
                <p className="font-normal text-xs  text-gray-700 text-start">
                  Here is a step-by-step guide to help you understanding how to
                  list a project
                </p>
                <div className="flex items-center">
                  <p className="text-white font-semibold text-sm mr-2">
                    Learn more
                  </p>
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 56 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "scaleX(-1)" }}
                  >
                    <path
                      id="Arrow 2"
                      d="M53.837 13.3223C54.6654 13.3228 55.3374 12.6516 55.3379 11.8232C55.3384 10.9947 54.6672 10.3228 53.8388 10.3223L53.837 13.3223ZM1.08727 10.7299C0.501131 11.3153 0.500559 12.2651 1.08599 12.8512L10.6262 22.4029C11.2116 22.989 12.1614 22.9896 12.7475 22.4042C13.3336 21.8187 13.3342 20.869 12.7488 20.2828L4.26861 11.7925L12.759 3.31228C13.3451 2.72684 13.3457 1.7771 12.7603 1.19096C12.1748 0.604819 11.2251 0.604248 10.639 1.18968L1.08727 10.7299ZM53.8388 10.3223L2.14819 10.2912L2.14639 13.2912L53.837 13.3223L53.8388 10.3223Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubmitSection />
      </div>
    </section>
  );
};

export default DashBoard;
