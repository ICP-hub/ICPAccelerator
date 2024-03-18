import React, { useEffect } from "react";
// import Sidebar from "../Layout/SidePanel/Sidebar";
import LiveProjects from "./LiveProjects";
import SearchForm from "./SearchForm";
// import VideoScroller from "./VideoScroller";
// import Founder from "./Founder";
// import Partners from "./Partners";
// import Footer from "../Footer/Footer";
// import Bottombar from "../Layout/BottomBar/Bottombar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListedProjects from "./ListedProjects";
import guide from "../../../assets/getStarted/guide.png";
import upvote from "../../../assets/getStarted/upvote.png";
import SubmitSection from "../Footer/SubmitSection";
import { getCurrentRoleStatusRequestHandler } from "../StateManagement/Redux/Reducers/userCurrentRoleStatusReducer";
import SpotLight from "./SpotLight";
import ImpactTool from "./ImpactTool";
import LaunchedProjects from "./LaunchedProjects";
import CurrentlyRaising from "./CurrentlyRaising";
import EventCard from "./EventCard";
import ProjectJobCard from "../Project/ProjectDetails/ProjectJobCard";
import ProjectJobs from "../Project/ProjectDetails/ProjectJobs";
import Announcement from "../Project/ProjectDetails/Announcement";
import SecondEventCard from "./SecondEventCard";
import ment from "../../../assets/images/ment.jpg";
import InvestorCard from "./InvestorCard";
import MentorCard from "./MentorCard";
import RegisterCard from "./RegisterCard";
import hover from "../../../assets/images/hover.png";
import Testimonial from "./Testimonial";
import { IcpAccelerator_backend } from "../../../../declarations/IcpAccelerator_backend/index";
import ProjectDashboard from "./RoleDashboard/ProjectDashboard";
import MentorDashboard from "./RoleDashboard/MentorDashboard";
import InvestorDashboard from "./RoleDashboard/InvestorDashboard";

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actor = useSelector((currState) => currState.actors.actor);
  // console.log("actor in dashboard =>", actor);

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

  useEffect(() => {
    if (actor) {
      if (!userCurrentRoleStatus.length) {
        dispatch(getCurrentRoleStatusRequestHandler());
      } else if (
        userCurrentRoleStatus.length === 4 &&
        userCurrentRoleStatus[0]?.status === "default"
      ) {
        navigate("/create-user");
      } else {
      }
    }
  }, [actor, dispatch, userCurrentRoleStatus, userCurrentRoleStatusActiveRole]);

  const idArr = JSON.parse(localStorage.getItem("idArr")) || [];

  const projectJobData = [
    {
      image: ment,
      tags: ["Imo", "Ludi", "Ndaru"],
      country: "india",
      website: "https://www.google.co.in/",
    },
    {
      image: ment,
      tags: ["Ludi", "Ndaru", "Imo"],
      country: "America",
      website: "https://www.google.co.in/",
    },
  ];

  const underline =
    "relative focus:after:content-[''] focus:after:block focus:after:w-full focus:after:h-[2px] focus:after:bg-blue-800 focus:after:absolute focus:after:left-0 focus:after:bottom-[-4px]";

  console.log("principal", principal);
  const categories = [
    {
      title: "Register as an Investor",
      description: "Discover innovative projects to invest in.",
      buttonText: "Register Now",
      imgSrc: hover,
    },
  ];
  const mentorcategories = [
    {
      title: "Register as a Mentor",
      description: "Join our community as a mentor to guide projects.",
      buttonText: "Register Now",
      imgSrc: hover,
    },
  ];
  const testimonialcategories = [
    {
      title: "Add your testimonial",
      description:
        "See a project missing? All community members are invited to submit their projects to this page.",
      buttonText: "Add now",
      imgSrc: hover,
    },
  ];

  const getAllProject = async (caller) => {
    await caller
      .list_all_projects()
      .then((result) => {
        console.log("result-in-get-all-projects", result);
      })
      .catch((error) => {
        console.log("error-in-get-all-projects", error);
      });
  };

  // const getAllMentors = async (caller) => {
  //   await caller.get_all_mentors_candid().then((result) => {
  //     console.log('result-in-get-all-mentors', result)
  //   }).catch((error) => {
  //     console.log('error-in-get-all-mentors', error)
  //   })
  // }

  // const getAllInvestors = async (caller) => {
  //   await caller.list_all_vcs().then((result) => {
  //     console.log('result-in-get-all-investors', result)
  //   }).catch((error) => {
  //     console.log('error-in-get-all-investors', error)
  //   })
  // }

  useEffect(() => {
    if (actor) {
      getAllProject(actor);
      // getAllMentors(actor);
      // getAllInvestors(actor);
    } else {
      getAllProject(IcpAccelerator_backend);
      // getAllMentors(IcpAccelerator_backend);
      // getAllInvestors(IcpAccelerator_backend);
    }
  }, [actor]);

  switch (userCurrentRoleStatusActiveRole) {
    case "project":
      return <ProjectDashboard />;
    case "mentor":
      return <MentorDashboard />;
    case "vc":
      return <InvestorDashboard />;
    default:
      return (
        <section className="overflow-hidden relative bg-gray-100">
          <div className="font-fontUse flex flex-col w-full h-fit px-[5%] lg1:px-[4%] py-[4%]">
            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Spotlight on the month
              </h1>
            </div>
            <div className="mb-4">
              <SpotLight />
            </div>
            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Impact of the tool
              </h1>
            </div>
            <div className="mb-4">
              <ImpactTool />
            </div>
            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Launched Projects
              </h1>
              <button
                onClick={() => navigate("/launch-projects")}
                className="border border-violet-800 px-4 py-2 rounded-md text-violet-800"
              >
                View all
              </button>
            </div>
            <div className="mb-4">
              <LaunchedProjects />
            </div>
            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Currently Raising
              </h1>
              <button
                onClick={() => navigate("/raising-projects")}
                className="border border-violet-800 px-4 py-2 rounded-md text-violet-800"
              >
                View all
              </button>
            </div>
            <div className="mb-4">
              <CurrentlyRaising />
            </div>
            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Ongoing Accelerators
              </h1>
              {/* <button className="border border-violet-800 px-4 py-2 rounded-md text-violet-800">
                Explore more
              </button> */}
            </div>
            <EventCard />
            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Event Announcement
              </h1>
              {/* <button className="border border-violet-800 px-4 py-2 rounded-md text-violet-800">
                Explore more
              </button> */}
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4">
              <SecondEventCard />
              <SecondEventCard />
            </div>
            {/* <div className="flex md:w-[calc(100%/2-10px)] dxl:w-[calc(100%/3-10px)] justify-between w-full gap-4 flex-row">
              <div className="grid grid-col-2 gap-4">
                {[...Array(2)].map((_, index) => (
                  <SecondEventCard key={index} />
                ))}
              </div>
            </div> */}

            <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-3 font-bold">
              Jobs / Opportunity
            </h1>
            <div className="flex flex-wrap md:flex-nowrap gap-6 justify-between mb-8 overflow-x-auto">
              {idArr.slice(0, 5).map((id, index) => (
                <ProjectJobCard
                  key={index}
                  image={projectJobData[index % projectJobData.length].image}
                  tags={projectJobData[index % projectJobData.length].tags}
                  country={
                    projectJobData[index % projectJobData.length].country
                  }
                  website={
                    projectJobData[index % projectJobData.length].website
                  }
                />
              ))}
              {idArr.length === 0 && (
                <>
                  {projectJobData.map((data, index) => (
                    <ProjectJobCard
                      key={index}
                      image={data.image}
                      tags={data.tags}
                      country={data.country}
                      website={data.website}
                    />
                  ))}
                </>
              )}
            </div>

            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Investors
              </h1>
              <button
                onClick={() => navigate("/view-investor")}
                className="border border-violet-800 px-4 py-2 rounded-md text-violet-800"
              >
                See all Investors
              </button>
            </div>
            <div className="flex flex-wrap -mx-4 mb-4 flex-row items-start">
              <div className="overflow-x-auto flex w-3/4">
                <InvestorCard />
              </div>
              <div className="w-1/4">
                <RegisterCard
                  categories={categories}
                  redirect={"create-investor"}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Mentors
              </h1>
              <button
                onClick={() => navigate("/view-mentors")}
                className="border border-violet-800 px-4 py-2 rounded-md text-violet-800"
              >
                See all Mentors
              </button>
            </div>
            <div className="flex flex-wrap -mx-4 mb-4 flex-row items-start">
              <div className="overflow-x-auto flex w-3/4">
                <MentorCard />
              </div>
              <div className="w-1/4 py-3">
                <RegisterCard
                  categories={mentorcategories}
                  redirect={"create-mentor"}
                />
              </div>
            </div>
            {/* <Announcement/> */}
            <div className="flex items-center justify-between mb-4  flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
              <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Testimonial
              </h1>
            </div>
            <div className="flex flex-wrap -mx-4 mb-4 flex-row justify-center items-start bg-[#DBDDF3] rounded-lg p-4">
              <div className="overflow-x-auto flex w-[61%]">
                <Testimonial />
              </div>
              <div className="w-1/3">
                <RegisterCard
                  categories={testimonialcategories}
                  redirect={""}
                />
              </div>
            </div>
            <div className="flex- flex-col mb-10">
              <div className="flex items-center justify-between flex-row font-bold bg-clip-text text-transparent text-[13px] xxs1:text-[13px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px]">
                <h1 className="bg-gradient-to-r from-indigo-900 to-sky-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  Get Started
                </h1>
              </div>

              <div className="flex flex-row  gap-10 flex-wrap md:justify-start md:ml-6 justify-center items-center">
                <div className="mt-8 bg-white w-[280px] h-[345px] rounded-xl border border-gray-200 shadow-md">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-xl object-fill w-full h-[200px] hover:scale-125 transition-transform duration-300 ease-in-out"
                      src={guide}
                      alt="guide"
                    />
                  </div>
                  <div className="p-5 bg-custumSky h-[145px] justify-between flex flex-col rounded-b-xl">
                    <p className="font-normal text-xs  text-gray-700 text-start">
                      Here is a step-by-step guide to help you understanding how
                      to list a project{" "}
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
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-xl object-fill w-full h-[200px] hover:scale-125 transition-transform duration-300 ease-in-out"
                      src={upvote}
                      alt="guide"
                    />
                  </div>
                  <div className="p-5 bg-custumSky h-[145px] justify-between flex flex-col rounded-b-xl">
                    <h5>How to Vote a Project</h5>
                    <p className="font-normal text-xs  text-gray-700 text-start">
                      Here is a step-by-step guide to help you understanding how
                      to list a project
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
  }
};

export default DashBoard;
