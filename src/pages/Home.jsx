

import React from "react";
import {  useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import { HomeDetail } from '../services/HomeDetail'


      
export default function Home({ homeDetails, propertylist, completedPropertylist}) {

  const [isMobilescreen , setMobileScreen] = useState(false);
  const [homeDetailsData, setHomeDetail] = useState(homeDetails || null);

   useEffect(() => {
    if(window.innerWidth < 767){
        setMobileScreen(true)
    }
    if (!homeDetailsData) {
      HomeDetail().then(data => setHomeDetail(data));
    }
  }, []);

    if (!homeDetailsData) {
    return <div>Error loading data</div>;
  }

  return (
    <>
    <div className="reecosys-template-page-wrapper" id="home-page-wrapper-reecosys-template" style={{minHeight: "100vh"}} >
      <section id="home-banner-section-1" className="overflow_section piramyd-banner-section relative pt0">
        <div className="home-banner-swati">
            <Link to="Swati-18/">
            {/* { !isMobilescreen &&  <img src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/swati-18-web-banner.webp" alt="Swati 18 Banner" className="hide-tab-mobile" />} */}
            { !isMobilescreen &&  <img src="/images/swati-18-web-banner.webp" alt="Swati 18 Banner" className="hide-tab-mobile" />}
            {isMobilescreen && <img src="/images/swati-18-mob-banner.webp"    style={{height: "100%" , objectPosition: "bottom"}} alt="Swati 18 Banner" 
                className="visible-tab-mobile" />}
            </Link>
        </div>
      </section>

      <section className="reecosys-template-section section-padding pb0 relative" id="reecosys-template-home-section-2">
    <div className="main-container">
        <div className="grid-80">
            <div className="inner-flex inner-flex-medium">
                { homeDetailsData?.home_overview && (
                    <div className="section-paragraph">
                        <p data-aos="fade-in" data-aos-delay="300" data-aos-duration="1000">
                            {homeDetailsData.home_overview}
                        </p>
                    </div>
                )}
                { homeDetailsData?.highlights_array?.length > 0 && (
                    <div className="highlights-for-homes">
                        <div className="highlights-grid inner-flex inner-flex-smallest" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1000">
                            { homeDetailsData.highlights_array.map((data, index) => (
                                <div key={index}>
                                    <div className="banner-title">
                                        <h2>{data.name}</h2>
                                    </div>
                                    <div className="section-paragraph">
                                        <p className="primary-color">{data.tag_line}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="hide-tab-mobile">
                    <div className="about-btn-home outline-div-button button-div wfc">
                        <Link to="about-us/">
                            <div data-aos="fade-in" data-aos-delay="300" data-aos-duration="1000">
                                <button className="reecosys-template-button button-style-secondary">
                                    <p>Know More</p>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    { propertylist.length >0 && <section className="reecosys-template-section section-padding relative" id="reecosys-template-home-section-3">
        <div className="list-grid-block main-container active">
            <div className="inner-flex inner-flex-medium">
                <div className="inner-flex inner-flex-medium">
                    <div className="tab-projects-flex-wrapper">
                        <div className="section-title wfc  relative">
                            <h2 className="uppercase " data-aos="fade-in" data-aos-delay="300" data-aos-duration="1000">
                                Ongoing
                            </h2>
                        </div>
                    </div>
                    <div className="project-list-grid project-list-grid-2-column">
                        { propertylist.length > 0 && propertylist
                            .filter((project) => project.status !== 'pre launching')
                            .map((project, index) => (
                                <div key={index} className="project-list-card relative">
                                <div className="relative"  data-aos="fade-in" data-aos-delay="400" data-aos-duration={(index + 3) * 1000}> 
                                    <Link to={`${project.slug}/`} className="inner-flex"> 
                                         <div className="relative">
                                        {project.banner_data.image_web_type === 'image' && (
                                        <div className="project-img-list overflow relative"> 
                                            <img  loading="lazy"   src={`${project.banner_data.image_web_full}&w=730&h=570`}
                                            alt={project.project_title} />
                                            {/* <div className="animationOverlay"></div> */}
                                        </div>
                                        )}
                                    </div>

                                    <div className="project-info-list">
                                        <div className="inner-flex inner-flex-smallest">
                                        <div className="section-paragraph flex-row j-c-sb alc">
                                            <h2 className="text-uppercase charter_regular">
                                            {project.project_title}
                                            </h2>
                                        </div>
                                        <div className="flex-row alc j-c-sb">
                                            <div className="flex-row alc flex-mb-clm inner-flex-smallest projectHomeSpecs">
                                            {project.size_price && (
                                                <div className={`project-information-div flex-row alc inner-flex-smallest ${
                                                    isMobilescreen ? 'w100' : ''
                                                }`}>
                                                <div className="building-icon common-icon">
                                                    <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/building.svg" alt="reecosys" />
                                                </div>
                                                <div className="section-textpara banner-detail-row-grid-text">
                                                    <p className="capitalize ellipsis-1">{project.size_price}</p>
                                                </div>
                                                </div>)}

                                            {project.location && (
                                                <div className={`project-information-div flex-row alc inner-flex-smallest ${
                                                    isMobilescreen ? 'w100' : ''}`}>
                                                <div className="building-icon common-icon">
                                                    <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/location.svg" alt="reecosys" />
                                                </div>
                                                <div className="section-textpara">
                                                    <p className="capitalize ellipsis-1">{project.location}</p>
                                                </div>
                                                </div>)}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </Link>

                                        {/* inquire_popup_click();
                                        homeInquiryClick(project.project_id); */}
                                    <div className="projectListingBtn">
                                    <button className={`reecosys-template-button button-style-secondary 
                                    ${isMobilescreen ? 'w100' : ''}`}
                                        onClick={() => {}}>
                                        <span className="material-symbols-outlined">chat</span>
                                        <p className="capitalize">Inquire Now</p>
                                    </button>
                                    </div>
                                </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="inner-flex inner-flex-medium">
                    <div className="tab-projects-flex-wrapper">
                        <div className="section-title section-padding-small pb0 wfc  relative">
                            <h2 className="uppercase " data-aos="fade-in" data-aos-delay="300" data-aos-duration="1000">
                                Completed
                            </h2>
                        </div>
                    </div>
                    <div className="project-list-grid project-list-grid-2-column">
                        {completedPropertylist.length > 0 && completedPropertylist.map((project_list_data , index)=> (
                            <div className="project-list-card relative" key={index}>

                            <div className="relative  " data-aos="fade-in" data-aos-delay="400" data-aos-duration={((index+3)*1000)}>
                                <Link to={project_list_data.slug} className="inner-flex ">
                                    <div className="relative">
                                        { project_list_data.banner_data.image_web_type == 'image' && (
                                            <div className="project-img-list overflow relative">
                                            <img loading="lazy"  style={{aspectRatio : "32/25"}}
                                            src={`${project_list_data.banner_data.image_web_full}&w=730&h=570`} alt={project_list_data.project_title} />
                                        </div>)}

                                        { project_list_data.banner_data.image_web_type == 'video' && (
                                            <div className="project-img-list relative">
                                            <video autoPlay muted loop playsInline>
                                                <source src={project_list_data.banner_data.image_web_full}
                                                    type="video/mp4" />
                                            </video>
                                        </div>)}
                                    </div>

                                    <div className="project-info-list">
                                        <div className="inner-flex inner-flex-smallest">
                                            <div className="section-paragraph flex-row j-c-sb alc">
                                                <h2 className="text-uppercase charter_regular">
                                                    {project_list_data.project_title}
                                                </h2>
                                                <div className="project-arrow-icon common-icon">
                                                    <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/right_arrow_line.svg"
                                                        alt={project_list_data.project_title} />
                                                </div>
                                            </div>
                                            <div className="flex-row alc j-c-sb">
                                                <div
                                                    className="flex-row alc flex-mb-clm inner-flex-smallest projectHomeSpecs">
                                                    { project_list_data.size_price && (<div className={`project-information-div flex-row alc inner-flex-smallest ${isMobilescreen ? "w100" : ""} `}>
                                                        <div className="building-icon common-icon">
                                                            <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/building.svg" alt="reecosys" />
                                                        </div>
                                                        <div className="section-textpara banner-detail-row-grid-text">
                                                            <p className="capitalize ellipsis-1">
                                                                {project_list_data.size_price}
                                                            </p>
                                                        </div>
                                                    </div>)}

                                                    { project_list_data.location && (<div className={`project-information-div flex-row alc inner-flex-smallest ${isMobilescreen ? "w100" : ""} `}
                                                        >
                                                        <div className="building-icon common-icon">
                                                            <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/location.svg" alt="reecosys" />
                                                        </div>
                                                        <div className="section-textpara">
                                                            <p className="capitalize ellipsis-1">
                                                                {project_list_data.location}
                                                            </p>
                                                        </div>
                                                    </div>)}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
            <div className="view-all-projects-btn-home" >
                <Link to="projects">
                    <button className="reecosys-template-button button-style-secondary">
                        <p>View All</p>
                    </button>
                </Link>
            </div>
        </div>
    </section>}

    <section className="section-padding" style={{backgroundColor: "#2e2f2f"}}>
        <div className="section-title section-padding-small pt0">
            <h2 className="white-color text-center">
                Social Initiative
            </h2>
        </div>
        <div className="socialInitiativeImg overflow">
            <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/home/initiative.svg" className="hide-tab-mobile" alt="Social Initiative Image" />
            <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/home/initiative-mob.svg" className="visible-tab-mobile" alt="Social Initiative Image" />
        </div>
    </section>

    </div>
    </>
  );
}
