import React, { useEffect } from "react";
// import Sidebar from "../Layout/SidePanel/Sidebar";
// import LiveProjects from "./LiveProjects";
// import SearchForm from "./SearchForm";
// import VideoScroller from "./VideoScroller";
// import Founder from "./Founder";
// import Partners from "./Partners";
// import Footer from "../Footer/Footer";
// import Bottombar from "../Layout/BottomBar/Bottombar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import ListedProjects from "../ListedProjects";
import guide from "../../../../assets/getStarted/guide.png";
import upvote from "../../../../assets/getStarted/upvote.png";
import SubmitSection from "../../Footer/SubmitSection";
import { getCurrentRoleStatusRequestHandler } from "../../StateManagement/Redux/Reducers/userCurrentRoleStatusReducer";
import SpotLight from "../SpotLight";
import ImpactTool from "../ImpactTool";
import LaunchedProjects from "../LaunchedProjects";
import CurrentlyRaising from "../CurrentlyRaising";
import EventCard from "../EventCard";
import ProjectJobs from "../../Project/ProjectDetails/ProjectJobs";
import AssociatedProjects from "../AssociatedProjects";
import SecondEventCard from "../SecondEventCard";
import ListedProjects from "../ListedProjects";
import LiveProjectBar from "../liveProjectBar";
import LiveProjects from "../LiveProjects";
// import ProjectJobCard from "../../Project/ProjectDetails/ProjectJobCard";
// import Announcement from "../../Project/ProjectDetails/Announcement";

const MentorDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actor = useSelector((currState) => currState.actors.actor);
  // console.log("actor in MentorDashboard =>", actor);

  const principal = useSelector((currState) => currState.internet.principal);
  const userCurrentRoleStatus = useSelector(
    (currState) => currState.currentRoleStatus.rolesStatusArray
  );
  const userCurrentRoleStatusActiveRole = useSelector(
    (currState) => currState.currentRoleStatus.activeRole
  );

  useEffect(() => {
    const founderDataFetchHandler = async () => {
      // const founderDataFetch = await actor.get_mentor_candid();
      // console.log("dekho dekho founder data aaya => ", founderDataFetch);
    };
    // founderDataFetchHandler();
  }, [actor]);

  // useEffect(() => {
  //   if (actor) {
  //     if (!userCurrentRoleStatus.length) {
  //       console.log('dispatch')
  //       // dispatch(getCurrentRoleStatusRequestHandler());
  //     } else if (
  //       userCurrentRoleStatus.length === 4 &&
  //       userCurrentRoleStatus[0]?.status === "default"
  //     ) {
  //       navigate("/create-user");
  //     } else {
  //     }
  //   }
  // }, [actor, dispatch, userCurrentRoleStatus, userCurrentRoleStatusActiveRole]);

  const underline =
    "relative focus:after:content-[''] focus:after:block focus:after:w-full focus:after:h-[2px] focus:after:bg-blue-800 focus:after:absolute focus:after:left-0 focus:after:bottom-[-4px]";

  console.log("principal", principal);
  return (
    <section className="overflow-hidden relative bg-gray-100">
      <div className="font-fontUse flex flex-col w-full h-fit px-[5%] lg1:px-[4%] py-[4%]">
        <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
          <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Associated Projects
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4  mt-4 md:mb-8">
          <AssociatedProjects />
          <AssociatedProjects />
        </div>
        {/* <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
          <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Event Announcement
          </h1>
          
        </div>
        <div className="flex flex-wrap md:w-1/2 w-full md:flex-nowrap gap-4 mb-4">
          <SecondEventCard />
        </div> */}
        <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
          <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Spotlight on the month
          </h1>
          {/* <button className="border border-violet-800 px-4 py-2 rounded-md text-violet-800">
            Explore more
          </button> */}
        </div>
        <SpotLight />
        <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
          <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Event Announcement
          </h1>
          {/* <button className="border border-violet-800 px-4 py-2 rounded-md text-violet-800">
            Explore more
          </button> */}
        </div>
        <EventCard />
        <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
          <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Live Projects
          </h1>
          <button  onClick={()=> navigate("/launch-projects")}  className="border border-violet-800 px-4 py-2 rounded-md text-violet-800">
            Explore more
          </button>
        </div>
        <LiveProjects />
        <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
          <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Event Announcement
          </h1>
         <button
            onClick={() => navigate(`/event-form`)}
            className="border border-violet-800 px-4 py-2 rounded-md text-violet-800"
          >
            Create event
          </button>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4">
          <SecondEventCard />
          <SecondEventCard />
        </div>
      </div>
    </section>
  );
};

export default MentorDashboard;
