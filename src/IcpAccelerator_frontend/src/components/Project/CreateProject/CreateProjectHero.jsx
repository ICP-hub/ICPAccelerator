import React, { useState, useEffect } from "react";
import DetailStatisticCard from "../../Common/DetailStatisticCard";
import  ProjectImage  from "../../../../assets/ProfIleEdit/g2.png"
const CreateProjectHero = () => {
 
  return (
    <section className="text-black bg-gray-100">
        <div className="w-full px-[4%] lg1:px-[5%]">
          <div className="flex dxl:justify-end">
            <div className="w-full h-fit relative">
              {/* <div className="w-[500px] xl2:w-[900px] xl:w-[700px] dxl:w-[630px] lgx:w-[600px] lg1:w-[550px] dlg:w-[525px] lg:w-[500px] md3:w-[470px] md2:w-[460px] md1:w-[450px]  md:w-[440px] sm:w-[430px] sm3:w-[400px] sm2:w-[390px] sm4:w-[380px] sm1:w-[360px] xxs1:w-[340px] xxs:w-[310px] dxs:w-[290px] ss4:w-[280px] ss3:w-[270px] ss2:w-[260px] ss1:w-[250px] ss:w-[240px] sxs3:w-[230px] sxs2:w-[220px] sxs1:w-[210px] sxs:w-[200px] sxxs:w-[190px]  h-[380px] left-[400px] top-[100px] absolute bg-fuchsia-800 rounded-full blur-[169px] xl2:left-[260px] xl:left-[280px] dxl:left-[230px] lgx:left-[200px] lg1:left-[180px] dlg:left-[170px] lg:left-[160px] md3:left-[150px] md2:left-[140px] md1:left-[130px] md:left-[120px] sm:left-[110px] sm3:left-[70px] sm2:left-[60px] sm4:left-[50px] sm1:left-[50px] xxs1:left-[45px] xxs:left-[40px] dxs:left-[35px] ss4:left-[30px] ss3:left-[25px] ss2:left-[20px] ss1:left-[15px] ss:left-[15px] sxs3:left-[15px] sxs2:left-[10px] sxs1:left-[10px] sxs:left-[5px] sxxs:left-[5px]"></div> */}
              <h1 className="left-[19px] top-[60px] absolute bg-gradient-to-r from-purple-800 to-blue-500 text-transparent bg-clip-text text-[90px] xl2:text-[88px] xl:text-[85px] dxl:text-[82px] lgx:text-[80px] lg1:text-[78px] dlg:text-[75px] lg:text-[72px] md3:text-[70px] md2:text-[68px] md1:text-[65px] md:text-[63px] sm:text-[60px] sm3:text-[58px] sm2:text-[55px] sm4:text-[53px] sm1:text-[50px] xxs1:text-[48px] xxs:text-[45px] dxs:text-[43px] ss4:text-[40px] ss3:text-[37px] ss2:text-[35px] ss1:text-[33px] ss:text-[30px] sxs3:text-[25px] sxs2:text-[25px] sxs1:text-[25px] sxs:text-[25px] sxxs:text-[25px] font-fontUse font-bold">
                ACCELERATE
              </h1>
              <div className="line-clamp-2 text-black text-[20px] xl2:text-[19.5px] xl:text-[19px] dxl:text-[18.5px] lgx:text-[18px] lg1:text-[17.5px] dlg:text-[17px] lg:text-[16.5px] md3:text-[16px] md2:text-[15.5px] md1:text-[15px] md:text-[14.5px] sm:text-[15px] sm3:text-[15px] sm2:text-[14px] sm4:text-[13.5px] sm1:text-[13px] xxs1:text-[12.5px] xxs:text-[12px] dxs:text-[12px] ss4:text-[12px] ss3:text-[12px] ss2:text-[12px] ss1:text-[12px] ss:text-[12px] sxs3:text-[12px] sxs2:text-[12px] sxs1:text-[12px] sxs:text-[12px] sxxs:text-[12px] top-[170px] xl2:top-[169px] xl:top-[168px] dxl:top-[167px] lgx:top-[166px] lg1:top-[165px] dlg:top-[164px] lg:top-[163px] md3:top-[162px] md2:top-[161px] md1:top-[160px] md:top-[159px] sm:top-[158px] sm3:top-[145px] sm2:top-[140px] sm4:top-[140px] sm1:top-[136px] xxs1:top-[132px] xxs:top-[130px] dxs:top-[130px] ss4:top-[120px] ss3:top-[120px] ss2:top-[110px] ss1:top-[110px] ss:top-[110px] sxs3:top-[100px] sxs2:top-[100px] sxs1:top-[95px] sxs:top-[95px] sxxs:top-[95px] left-[20px] font-extrabold font-circular absolute">
                Supercharging Web3 startups for breakthrough success
              </div>

              <button className="rounded-md my-2 bg-indigo-600 absolute w-[210px] left-[19px] top-[210px] xl2:top-[209.5px] xl:top-[225px] dxl:top-[225px] lgx:top-[220px] lg1:top-[215px] dlg:top-[215px] lg:top-[210px] md3:top-[210px] md2:top-[205px] md1:top-[205px] md:top-[204.5px] sm:top-[204px] sm3:top-[195px] sm2:top-[190px] sm4:top-[185px] sm1:top-[185px] xxs1:top-[191px] xxs:top-[191px] dxs:top-[191px] ss4:top-[151px] ss3:top-[150px] ss2:top-[145px] ss1:top-[160px] ss:top-[155px] sxs3:top-[140px] sxs2:top-[140px] sxs1:top-[190px] sxs:top-[135px] sxxs:top-[135px]">
                <div className=" text-[13px] xl2:text-[12.8px] xl:text-[12.5px] dxl:text-[12.3px] lgx:text-[12px] lg1:text-[11.8px] dlg:text-[11.5px] lg:text-[11.3px] md3:text-[11px] md2:text-[10.8.5px] md1:text-[10.5px] md:text-[10.3px] sm:text-[10px] sm3:text-[9.8px] sm2:text-[9.5px] sm4:text-[9.5px] sm1:text-[9.5px] xxs1:text-[9.5px] xxs:text-[9.5px] dxs:text-[9.5px] ss4:text-[9.5px] ss3:text-[9.5px] ss2:text-[9.5px] ss1:text-[9.5px] ss:text-[9.5px] sxs3:text-[9.5px] sxs2:text-[9.5px] sxs1:text-[9.5px] sxs:text-[9.5px] sxxs:text-[9.5px] text-center text-white border-b font-fontUse uppercase px-4 font-bold py-2 break-normal">
                  apply for the program
                </div>
              </button>
            </div>
            <div className="relative flex justify-center items-center">
              <img
                src={ProjectImage}
                alt="ProjectImage"
                className={`z-20 w-[500px] md:w-[350px] sm:w-[300px] sxs:w-[295px] md:h-64 relative  sxs:-right-3 right-16 md:right-8 sm:right-4 top-10`}
              />
              <div className="absolute top-[20px] -left-[10%] sm:-left-[18%] md:-left-[14%] sxs:left-[6%] w-[320px] h-[320px] md:w-[280px] md:h-[280px] sm:w-[230px] sm:h-[230px] sxs:w-[160px] sxs:h-[160px] rounded-full bg-gradient-to-r from-purple-300/40 to-purple-600"></div>
              <div className="absolute top-[200px]  sxs:top-[150px] left-[65%] sxs:left-[61%] w-[164px] h-[164px] md:w-[124px] md:h-[124px] sm:w-[94px] sm:h-[94px] sxs:w-[80px] sxs:h-[80px] rounded-full bg-gradient-to-r from-purple-900 to-blue-500 opacity-30"></div>
              <div className="absolute top-[120px] left-[45%] sxs:left-[53%] w-[190px] h-[200px] md:w-[140px] md:h-[150px] sm:w-[100px] sm:h-[110px] sxs:w-[80px] sxs:h-[80px] bg-gradient-to-b from-white/30 to-transparent rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
          <div className="relative dxl:top-[35px] md:top-[35px] sm:top-[60px] xxs:top-[65px] sxs:top-[65px]">
            <DetailStatisticCard />
          </div>
        </div>
      </section>
  );
};

export default CreateProjectHero;
