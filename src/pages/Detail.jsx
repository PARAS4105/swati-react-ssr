import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { PropertyDetail } from "../services/PropertyDetail";
import ReadMore from "../components/ReadMore";
import WalkthroughVideo from "../components/Walkthrough";
import "../../public/styles/Detail.css"
import { Swiper, SwiperSlide } from "swiper/react";


export default function Detail({propertylist , completedPropertylist }){
   const { slug } = useParams();
   const navigate = useNavigate()

const [projectDetail, setPropertyDetail] = useState(null);
  const [countryFlag, setCountryFlag] = useState(false);
  const [isMobilescreen , setMobileScreen] = useState(false);
  const [activeImage , setActiveImage] = useState("");
  const [selectedTab , setSelectedTab] = useState("3bhk");
  const [showNextImages, setShowNextImages] = useState(false);
    const [loading, setLoading] = useState(false);

    
    
    useEffect(  () => {
        
        async function  loadProjects (){
            setLoading(true);
            let ProjectsArray = [...propertylist , ...completedPropertylist];
            let Dataobj = await ProjectsArray.find((project) => (project.slug == slug));
            
            if(Dataobj){
               console.log(Dataobj)
                setPropertyDetail(Dataobj);

                 let activeImage = "";
            if ( Dataobj.gallery_data != undefined && Dataobj.gallery_data[0].image[0].title && Dataobj.gallery_data[0].image[0].title != '') {
                activeImage = Dataobj.gallery_data[0].image[0].title
            } else {
                activeImage = '';
            }
            setActiveImage(activeImage);

                  // ✅ Page Title
      document.title = Dataobj.meta_title || Dataobj.title || "Default Title";

      // ✅ Meta Description
      let metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          Dataobj.meta_description || ""
        );
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        metaDescription.content = Dataobj.meta_description || "";
        document.head.appendChild(metaDescription);
      }

      // ✅ Meta Keywords
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (metaKeywords) {
        metaKeywords.setAttribute(
          "content",
          Dataobj.meta_keywords || ""
        );
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.name = "keywords";
        metaKeywords.content = Dataobj.meta_keywords || "";
        document.head.appendChild(metaKeywords);
      }

      // ✅ OG Title
      let ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) {
        ogTitle.setAttribute("content", Dataobj.meta_title || Dataobj.title || "");
      } else {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        ogTitle.content = Dataobj.meta_title || Dataobj.title || "";
        document.head.appendChild(ogTitle);
      }

      // ✅ OG Description
      let ogDescription = document.querySelector("meta[property='og:description']");
      if (ogDescription) {
        ogDescription.setAttribute("content", Dataobj.meta_description || "");
      } else {
        ogDescription = document.createElement("meta");
        ogDescription.setAttribute("property", "og:description");
        ogDescription.content = Dataobj.meta_description || "";
        document.head.appendChild(ogDescription);
      }

      // ✅ OG Image
      let ogImage = document.querySelector("meta[property='og:image']");
      const imageUrl = Dataobj?.banners_data?.images?.[0]?.image_web_full || "";
      if (ogImage) {
        ogImage.setAttribute("content", imageUrl);
      } else {
        ogImage = document.createElement("meta");
        ogImage.setAttribute("property", "og:image");
        ogImage.content = imageUrl;
        document.head.appendChild(ogImage);
      }

                setLoading(false);
            }else {
               navigate('/');
            }
           
           }
        // If SSR prop matches the slug, use it. Else fetch.
        loadProjects();
  }, [slug]); 

    useEffect(() => {

        let fancyboxInstance;
        if (window.innerWidth < 767) {
            setMobileScreen(true);
          } 
         import("@fancyapps/ui").then(({ Fancybox }) => {
            
          fancyboxInstance = Fancybox.bind("[data-fancybox=project-gallery-fancy]", {
                Carousel: {
                infinite: true,
                },
            });   

            Fancybox.bind("[data-fancybox=project-gallery-fancy4]", {
                Carousel: {
                infinite: true,
                },
            });
            });
        return () => {
        import("@fancyapps/ui").then(({ Fancybox }) => {
            Fancybox.destroy();
        });
    };
    }, [slug]);

    
    if(!loading && projectDetail){
      return (
        <>
         <div className="reecosys-main-wrapper reecosys-detail-wrapper" id="reecosys-main-wrapper"
                 onClick={() => {setCountryFlag(false)}}>
                    <div id="reecosys-list-wrapper" className="relative">
                        <section className={`reecosys-section reecosys-banner-section relative ${projectDetail.project_id == 722 ? "four-bhk-banner" : "" } `} id="reecosys-project-detail-section-1">
                { projectDetail.project_id == 801 && (<div className="project_signia_banner_text" >
                    <div className="banner-title banner-title-border-div ">
                        <h2 className="white-color">
                            {projectDetail.project_title}
                        </h2>
                    </div>
                    <div className="flex-row flex-wrapgap1 alc inner-flex-smallest" style={{filter: "invert(1)"}}>
                        <div className={`project-information-div flex-row alc inner-flex-smallest ${isMobilescreen ? "w100" : ""} `}>
                            <div className="building-icon common-icon">
                                <img  src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/building.svg" alt="reecosys"/>
                            </div>
                            <div className="section-textpara banner-detail-row-grid-text">
                                <p className="capitalize">
                                    4 BHK Apartment
                                </p>
                            </div>
                        </div>
    
                        <div className={`project-information-div flex-row alc inner-flex-smallest ${isMobilescreen ? "w100" : ""} `}>
                            <div className="building-icon common-icon">
                                <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/location.svg" alt="reecosys"/>
                            </div>
                            <div className="section-textpara">
                                <p className="capitalize">
                                    Corporate Road, Prahladnagar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>)}
    
                { projectDetail.banners_data != undefined && projectDetail.banners_data.images.length > 0 &&
                    (<div >
                        <Swiper  spaceBetween={30} slidesPerView={1}  loop >
    
                        { projectDetail.banners_data.images != undefined && projectDetail.banners_data.images.map((banner_data , index)=>(
                            <SwiperSlide key={index}>
                            { banner_data.image_web_type == 'image' && banner_data.image_web_full && projectDetail.project_id != '772' && (<div className="project_banner_image relative overflow ">
                                <img  style={{aspectRatio : "384/173"}} src={`https://ik.imagekit.io/ol8mhbfe8/swati-procon/banner/${banner_data.image}`}
                                    alt={projectDetail.project_title} className="hide-tab-mobile"/>
                                <img  style={{aspectRatio : "3/4"}} src={`https://ik.imagekit.io/ol8mhbfe8/swati-procon/banner/${banner_data.image}`}
                                    alt={projectDetail.project_title} className="visible-tab-mobile"/>
                            </div>)}
                            { banner_data.image_web_type == 'image' && banner_data.image_web_full && projectDetail.project_id == '772' && (<div className={`project_banner_image project_banner_image_upcoming relative overflow`} 
                                >
                                <img  src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/upcoming-banner.jpg"
                                    alt={projectDetail.project_title} className="hide-tab-mobile"/>
                                <img  style={{aspectRatio : "3/4"}} src={`https://ik.imagekit.io/ol8mhbfe8/swati-procon/banner/${banner_data.image}`}
                                    alt={projectDetail.project_title} className="visible-tab-mobile"/>
                            </div>)}
                        </SwiperSlide>
                        )) }
                        </Swiper>
    
                    </div>)}
    
                </section>
    
     { (projectDetail.highlights != undefined  || projectDetail.rera_number != undefined || projectDetail.document_data != undefined || projectDetail.big_text_pain != undefined) && (
        <section className="reecosys-section relative section-padding" id="reecosys-project-detail-section-3">
                <div className="main-container">
                    <div className=" inner-flex inner-flex-small2">
                        <div className="inner-flex inner-flex-smallest">
                            { projectDetail.project_title && (<div className="banner-title banner-title-border-div"
                                >
                                <h2 className=" uppercase" data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="400"
                                    dangerouslySetInnerHTML={{ __html: projectDetail.project_title }}
    >
                                </h2>
                            </div>)}
                        </div>
    
                        <div className="new-detail-banner-abs-flex"data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="700">
                            <div className="inner-flex inner-flex-smallest">
                                <div className="new-detail-highlight-grid">
                                    { projectDetail.highlights != undefined && projectDetail.highlights.length > 0 &&   projectDetail.highlights.map((data , index)=>( 
                                        <div key={index} >
                                        <div className="section-paragraph">
                                            <p className="capitalize  semibold-fonts">
                                                {data.tag_line}
                                            </p>
                                        </div>
                                        <div className="section-paragraph">
                                            <p className="capitalize gray-color regular-fonts">
                                                {data.name}
                                            </p>
                                        </div>
                                    </div>))}
                                    {projectDetail.rera_number && (<div 
                                        style={{flexBasis: "100%" , opacity: "0.4"}}>
                                        <div className="section-paragraph">
                                            <p>
                                                <span className="primary-color bold-fonts">
                                                    RERA :
                                                </span>
                                                {projectDetail.rera_number}
                                            </p>
                                        </div>
                                    </div>)}
                                </div>
                                {projectDetail.big_text_pain && (<div className=" section-paragraph readmoreText detailReadMore"
                                    data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400"
                                    >
                                    <p>
                                        <ReadMore text={projectDetail.big_text_pain} maxLength={0} />
                                    </p>
                                </div>)}
                            </div>
                        </div>
    
                        <div className="" data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="1100">
                            <ul className="flex-row  downloadDataFlex">
                                <li  className={`${isMobilescreen ? "w100" : ""}`}>
                                    <button className={`reecosys-template-button button-style-secondary ${isMobilescreen ? "w100" : ""} `}
                                    // ng-click=" inquire_popup_click(); inquiry_from_click(); "
                                    >
                                    <span className="material-symbols-outlined">
                                        chat
                                    </span>
                                    <p className="capitalize">
                                        Inquire Now
                                    </p>
                                    </button>
                                </li>
                                { projectDetail.document_other_data != undefined && projectDetail.document_other_data.length > 0 && projectDetail.document_other_data.filter((download_data) => download_data.type == 'Brochure').map((download_data , index) => (  
                                    <li key={index}
                                    className={`${isMobilescreen ? "w100" : "" }`}>
                                    {/* ng-click="inquire_popup_click(); inquiry_from_click(download_data.type); "> */}
                                    <button className={`reecosys-template-button button-style-primary ${isMobilescreen ? "w100" : "" } `}>
                                        <span className="material-symbols-outlined">
                                            download
                                        </span>
                                        <p className="capitalize">
                                            {isMobilescreen ? "" : "Download "}{download_data.type}
                                        </p>
                                    </button>
                                </li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>)}
    
             { projectDetail.project_id != '759' && projectDetail.virtual_data != undefined && projectDetail.virtual_data.length > 0 && projectDetail.virtual_data.filter((video) => (video.type === 'walk-through' && video.image != "")).map((video , index) =>(<section key={index} 
            className="reecosys-section relative" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000"
                id="reecosys-project-detail-section-4" >
                <div className="main-container">
                    <div className="inner-flex inner-flex-medium inner-flex-center">
                        <div className="section-title">
                            {projectDetail.project_id != '763' && projectDetail.project_id != '764'&& (
                                <h2 className="uppercase text-center" data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="300" >
                                Sample House
                            </h2>)}
                            {(projectDetail.project_id == '763' || projectDetail.project_id == '764') && (
                                <h2 className="uppercase text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                                Walk-Through
                            </h2>)}
                        </div>
                        <div className="walkthrough-project-thumb  relative">
                            <div className="walk-thumbnail-image relative" data-aos="fade-in" data-aos-duration="1000"
                                data-aos-delay="600">
                                    <WalkthroughVideo virtualDataArray={video.url} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>))}
    
            {  projectDetail.project_id == '760' && (<div  className="section-padding pb0">
                 <section  className="reecosys-section relative " data-aos="fade-in"  data-aos-delay="400" data-aos-duration="1000"
                     id="reecosys-project-detail-section-4" >
                     <div className="main-container">
                        <div className="inner-flex inner-flex-medium inner-flex-center">
                            <div className="section-title">
                                <h2 className="uppercase text-center "data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                                    Walk-Through
                                </h2>
                            </div>
                            <div className="walkthrough-project-thumb  relative">
                                <div className="walk-thumbnail-image relative " data-aos="fade-in" data-aos-duration="1000"
                                    data-aos-delay="600">
                                        <WalkthroughVideo virtualDataArray="https://www.youtube.com/embed/zdCbBrTOW5k?si=cTK_Q-8rXpbGfrKe?mute=0&loop=1&enablejsapi=1&controls=1&cc_load_policy=0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>)}
    
     
             { projectDetail.project_id == '767' && (<div  className="section-padding pb0">
                <section className="reecosys-section relative" data-aos="fade-in"  data-aos-delay="400" data-aos-duration="1000">
                    <div className="main-container">
                        <div className="inner-flex inner-flex-medium inner-flex-center">
                            <div className="section-title">
                                <h2 className="uppercase text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                                    Sample House
                                </h2>
                            </div>
    
                            <div className={` tab_buttons`}>
                                <button onClick={()=>{setSelectedTab("3bhk")}} className={`${ selectedTab === '3bhk' ? "active_tab" : "" }`}>
                                    3 BHK
                                </button>
                                <button onClick={()=>{setSelectedTab("4bhk")}} className={`${ selectedTab === '4bhk' ? "active_tab" : "" }`}>
                                    4 BHK
                                </button>
                            </div>
    
                            <div className="tab-content w100">
                                { selectedTab === '3bhk' && (<div>
                                    <div className="walkthrough-project-thumb relative">
                                        <div className="walk-thumbnail-image relative " data-aos="fade-in"  data-aos-duration="1000"
                                            data-aos-delay="600">
                                                <WalkthroughVideo virtualDataArray="https://www.youtube.com/embed/q9lEBF_N3B8?mute=0&loop=1&enablejsapi=1&controls=1&cc_load_policy=0"></WalkthroughVideo>
                                            
                                        </div>
                                    </div>
                                </div>)}
    
                                { selectedTab === '4bhk' && (<div >
                                    <div className="walkthrough-project-thumb relative">
                                        <div className="walk-thumbnail-image relative " data-aos="fade-in"  data-aos-duration="1000"
                                            data-aos-delay="600">
                                                <WalkthroughVideo virtualDataArray="https://www.youtube.com/embed/7-UBgFTc_NI?mute=0&loop=1&enablejsapi=1&controls=1&cc_load_policy=0" ></WalkthroughVideo>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </section>
            </div>)}
    
            { projectDetail.project_id == '759' && (<div className="section-padding pb0">
                <section className="reecosys-section relative " data-aos="fade-in"  data-aos-delay="400" data-aos-duration="1000">
                    <div className="main-container">
                        <div className="inner-flex inner-flex-medium inner-flex-center">
                            <div className="section-title">
                                <h2 className="uppercase text-center" data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="300">
                                    Sample House
                                </h2>
                            </div>
                            <div className={` tab_buttons`}>
                                <button onClick={()=>{setSelectedTab("3bhk")}} className={`${ selectedTab === '3bhk' ? "active_tab" : "" }`}>
                                    3 BHK
                                </button>
                                <button onClick={()=>{setSelectedTab("4bhk")}} className={`${ selectedTab === '4bhk' ? "active_tab" : "" }`}>
                                    4 BHK
                                </button>
                            </div>
    
                            <div className="tab-content w100">
                                {selectedTab === '3bhk' && <div >
                                    <div className="walkthrough-project-thumb relative">
                                        <div className="walk-thumbnail-image relative " data-aos="fade-in"  data-aos-duration="1000"
                                            data-aos-delay="600">
                                            <WalkthroughVideo virtualDataArray="https://www.youtube.com/embed/7o-o3ND2TV8?si=1hma7wQDpy50TZaw?mute=0&loop=1&enablejsapi=1&controls=1" ></WalkthroughVideo>
                                        </div>
                                    </div>
                                </div>}
    
                                { selectedTab === '4bhk' && <div>
                                    <div className="walkthrough-project-thumb relative">
                                        <div className="walk-thumbnail-image relative " data-aos="fade-in" data-aos-duration="1000"
                                            data-aos-delay="600">
                                                <WalkthroughVideo virtualDataArray="https://www.youtube.com/embed/_gPcnLJa_CY?si=IGuQJRyAK9Bf2RM6?mute=0&loop=1&enablejsapi=1&controls=1" ></WalkthroughVideo>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>)}
    
            {projectDetail.project_id == '767' && (<div  className="section-padding pb0">
                <section className="reecosys-section relative" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000"
                    id="reecosys-project-detail-section-4">
                    <div className="main-container">
                        <div className="inner-flex inner-flex-medium inner-flex-center">
                            <div className="section-title">
                                <h2 className="uppercase text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                                    Walk-Through
                                </h2>
                            </div>
                            <div className="walkthrough-project-thumb  relative">
                                <div className="walk-thumbnail-image relative aos fadeIn" data-aos="fade-in" data-aos-duration="1000"
                                    data-aos-delay="600">
                                    <WalkthroughVideo virtualDataArray="https://www.youtube.com/embed/9kWq2NVTK-w?si=R5mc4SXgRdL3m0h8?mute=0&loop=1&enablejsapi=1&controls=1" ></WalkthroughVideo>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>)}
    
            { projectDetail.gallery_data != undefined &&  projectDetail.gallery_data[0].image != undefined && projectDetail.gallery_data[0].image.length > 0 && (<section id="reecosys-project-detail-section-5" style={{minHeight: "75vh"}}
                className="section-padding reecosys-section">
                 {projectDetail.gallery_data.map((gallery , index) => (<div key={index} id="reecosys-detail-section-gallery" >
                    <div className="inner-flex inner-flex-small">
                        <div className="main-container">
                            <div className="flex-row w100mob alc j-c-c relative " data-aos="fade-top" data-aos-duration="1000"
                                data-aos-delay="400">
                                { (gallery.title || gallery.tag_line) && (
                                    <div className="w100mob relative" >
                                    <div className="inner-flex inner-flex-smallest inner-flex-center w100mob">
                                        <div className="section-title uppercase relative">
                                            <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                                                Images
                                            </h2>
                                        </div>
                                        { projectDetail.project_id == 761 && (
                                            <div className="flex-row gallery-tab-images alc j-c-c inner-flex-smallest actualClickPara">
                                            <p onClick={()=>{setActiveImage('Actual') ; setShowNextImages(false);}}
                                                className={` ${activeImage == 'Actual' ? 'active' : ""} `}>
                                                Actual Image
                                            </p>
                                            <p onClick={()=>{setActiveImage('3D');  setShowNextImages(false);}}
                                                className={` ${activeImage == '3D' ? 'active' : ""} `}>
                                                3D Image
                                            </p>
                                        </div>)}
                                    </div>
                                </div>)}
    
    
                            </div>
                        </div>
    
                        <div className="main-container">
                            <div className="hide-tab-mobile">
                              <div className="gallery-image-grid">
                                {gallery.image !=undefined && gallery.image.map((gallaryImgData, index) => {
                                   const shouldShow = (() => {
                                        if (activeImage === "") {
                                            return index < 6;
                                        } else if (activeImage === "Actual") {
                                            return index < 6;
                                        } else if (activeImage === "3D") {
                                            return index >= 6 && index <= 11;
                                        } else {
                                            return false;
                                        }
                                    })();
    
                                    if (!shouldShow) return null;
    
                                    let sizeParam = "";
                                    switch (index) {
                                        case 0:
                                        case 5:
                                        case 11:
                                            sizeParam = "&w=888&q=100";
                                            break;
                                        case 1:
                                            sizeParam = "&w=520&q=100";
                                            break;
                                        case 2:
                                        case 3:
                                        case 8:
                                        case 9:
                                            sizeParam = "&h=432&q=100";
                                            break;
                                        case 4:
                                        case 10:
                                            sizeParam = "&h=794&q=100";
                                            break;
                                        case 6:
                                        case 7:
                                            sizeParam = "&w=888&q=100";
                                            break;
                                        default:
                                            sizeParam = "&w=888&q=100";
                                    }
    
                                    return (
                                        <div className="image-item relative" key={index}>
                                            <a
                                                data-fancybox="project-gallery-fancy"
                                                href={gallaryImgData.image_full}
                                                className="project-gallery-fancy relative"
                                                target="_self"
                                            >
                                                <img loading="lazy"
                                                    src={`${gallaryImgData.image}${sizeParam}`}
                                                    alt={projectDetail.size_price}
                                                    className="image-cover lazyload"
                                                    data-aos="fade-in"
                                                    data-aos-duration="1000"
                                                    data-aos-delay={`0.${index * 3}s`}
                                                />
                                                <div className="project-glaery-overlay"></div>
                                                <div className="project-enlarge-icons-galeery">
                                                    <span className="material-symbols-outlined">pan_zoom</span>
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                            </div>
                        </div>
    
                         <div className="main-container">
                            <div className="btns-midflex-detail ">
                                { gallery.image != undefined && gallery.image.map((gallaryImgData , index) =>( <a key={index} href={gallaryImgData.image_full}
                                    data-fancybox="project-gallery-fancy4" target="_self"  style={{ display: index === 0 ? 'block' : 'none' }} >
                                    <button className={`reecosys-template-button button-style-primary-outline  ${isMobilescreen ? "w100" : ""} `}
                                        data-aos="fade-top"  data-aos-duration="1000" data-aos-delay="400" >
                                        <span className="material-symbols-outlined">
                                            photo_library
                                        </span>
                                        <p>
                                            View All Images
                                        </p>
                                    </button>
                                </a>))}
                               
                                { projectDetail.amenities_data !=undefined && projectDetail.amenities_data.length > 0 && (<div className="" >
                                    <button className={`reecosys-template-button button-style-primary-outline  ${isMobilescreen ? "w100" : ""} `}
                                        data-aos="fade-top"  data-aos-duration="1000" 
                                        data-aos-delay="800" onClick={() => {setAmenityToggle(!isAmenityOpen)}}
                                        >
                                        <span className="material-symbols-outlined">
                                            category
                                        </span>
                                        <p className="capitalize">
                                            Amenities
                                        </p>
                                    </button>
                                </div>)}
                            </div>
                        </div> 
                    </div>
                </div>))}
            </section>)}
    
            { projectDetail.map_iframe != undefined && projectDetail.map_iframe != "" && ( <section className="reecosys-section section-padding relative" 
                id="reecosys-project-detail-section-8">
                <div className="inner-flex inner-flex-medium">
                    <div className="main-container" id="project_location">
                        <div className="">
                            { projectDetail.location_title != undefined && (<div className="inner-flex" data-aos="fade-top" data-aos-duration="1000" data-aos-delay="400"
                                >
                                <div className="lcoation-view-grid-swati">
                                    <div className="inner-flex inner-flex-medium">
                                        <div className="section-title">
                                            <h2 className="uppercase">
                                                Location
                                            </h2>
                                        </div>
                                        <div className="inner-flex inner-flex-small">
                                            <div className="inner-flex inner-flex-smallest" data-aos="fade-top"  data-aos-duration="1000"
                                                data-aos-delay="500">
                                                <div className="flex-row alc section-paragraph">
                                                    <span className="locationIcon" style={{alignSelf: "start" , paddingTop: "5px"}}>
                                                        <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/MapPinArea.svg" alt="Map ICon" />
                                                    </span>
                                                    <p className="gray-color  location-50"
                                                    dangerouslySetInnerHTML={{ __html: projectDetail.address_description }}>
                                                    </p>
                                                   
                                                </div>
                                                
                                            </div>
                                            <div className="flex-row alc locationFlex">
                                                <div className="inner-flex inner-flex-smallest " data-aos="fade-top"
                                                    data-aos-duration="1000" data-aos-delay="600">
                                                    <div className="flex-row alc section-paragraph">
                                                        <span className="locationIcon">
                                                            <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/EnvelopeOpen.svg" alt="Email Icon" />
                                                        </span>
                                                        <p className="gray-color">
                                                            <a href="mailto:info@swatiprocon.com" className="hover-color-link">
                                                                info@swatiprocon.com
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="inner-flex inner-flex-smallest " data-aos="fade-top"
                                                    data-aos-duration="1000" data-aos-delay="700">
                                                    <div className="flex-row alc section-paragraph">
                                                        <span className="locationIcon">
                                                            <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/PhoneCall.svg" alt="Call Icon" />
                                                        </span>
                                                        <p className="gray-color">
                                                            <a href="tel:+91 99090 40084" className="hover-color-link">+91 99090
                                                                40084
                                                            </a>
                                                        </p>
                                                    </div>
    
                                                </div>
                                            </div>
    
                                        </div>
                                        <div className="flex-row flex-col-mob alc">
                                            <div className={`altura-btn altura-filled-btn-black ${isMobilescreen ? "w100" : "" } `} data-aos="fade-top"
                                                data-aos-duration="1000" data-aos-delay="800 ">
                                                <a href="https://maps.app.goo.gl/fiBBova9ydoAXER29" style={{display: "block"}}
                                                    target="_blank" className={`${isMobilescreen ? "w100" : "" } `}>
                                                    <button className={`reecosys-template-button button-style-primary ${isMobilescreen ? "w100" : "" } `}>
                                                        <span className="material-symbols-outlined">
                                                            near_me
                                                        </span>
                                                        <p className=""> View on Map </p>
                                                    </button>
                                                </a>
                                            </div>
                                            {projectDetail.proximityData != undefined && projectDetail.proximityData.length > 0 && (<button
                                                className={`reecosys-template-button button-style-primary-outline ${isMobilescreen ? "w100" : "" } `}
                                                onClick={()=>{setProximityToggle(!isProximityOpen)}}>
                                                <span className="material-symbols-outlined">
                                                    location_city
                                                </span>
                                                <p>
                                                    View Proximities
                                                </p>
                                            </button>)}
                                        </div>
                                    </div>
                                    { projectDetail.map_iframe != undefined  && (<div  data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="500">
                                        <div className="detail-location-iframe ">
                                            <iframe src={projectDetail.map_iframe} allowFullScreen="" loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>)}
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </section>)}
    
            {/* <section className="inquiry-form-section section-padding">
                <div className="mini-container">
                    <div className="reecosys-section" id="reecosys-detail-section-get-touch">
                        <div className="inquiry_form_detail">
                        <div>
                            <div className="inner-flex inner-flex-medium">
                                <div className="inner-flex inner-flex-center inner-flex-smallest">
                                    <div className="section-title">
                                        <h2 className="semibold-fonts">
                                            Inquire Now
                                        </h2>
                                    </div>
                                    <div className="section-content">
                                        <p>
                                            Fill your latest details.
                                        </p>
                                    </div>
                                </div>
                                <div className=" project_detail_inquiry_form" data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="600">
                                    <form id="inquiry_form_detail" name="inquiry_form_detail" className="inner-flex" onSubmit={inquiryDetailForm} >
                                        <div className="form_wrapper">
                                            <div className="contact_lable">
                                                <span className="material-symbols-outlined icon-form-control">
                                                    person
                                                </span>
                                        <input id="client_name" name="client_name" type="text"
                                         className="form-control form-control-iconpad"
                                         value={inquiryObj.name}
                                         onChange={handleNameChange}
                                         tabindex="1" />
                                    <label className="md-lable" for="client_name">Name</label>
                                    <div className="valid-icon-of-form">
                                        <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/valid-icon.svg" alt="" />
                                    </div>
                                </div> */}
                                {/* <div className="contact_lable  relative">
                                    <span className="material-symbols-outlined icon-form-control">
                                        dialpad
                                    </span>
                                    <input id="contact_no" name="contact_no" type="tel"
                                        className="form-control form-control-iconpad contact-form"
                                        ng-model="inquiry_obj_detail.client_contact_no" numbers-only="" minlength="10"
                                        maxlength="10" required="" autocomplete="off" tabindex="2" ng-trim="false" />
                                    <label className="md-lable contact_code" for="contact_no">Mobile Number</label>
                                    <div className="valid-icon-of-form">
                                        <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/valid-icon.svg" alt="" />
                                    </div>
                                    <div className="conatct_number_input">
                                        <div className="country_code_data"
                                            ng-click="country_code_click(); $event.stopPropagation();">
                                            <div className="contact_country_flag">
                                                <img loading="lazy" src={inquiry_obj_detail.flag} alt="reecosys" />
                                            </div>
                                            <div>
                                                &nbsp;+{inquiry_obj_detail.country}
                                            </div>
                                            <div>
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="country_code_list_data" ng-className="{'active' : country_code_clickF}"
                                        ng-click="$event.stopPropagation();">
                                        <div className="search_c-code">
                                            <input type="text" ng-model="search" placeholder="Search" />
                                        </div>
                                        <ul>
                                            <li ng-repeat="country_list_detail in country_list | filter: search: phonecode"
                                                ng-click="country_click_inquiry_detail(country_list_detail.phonecode, country_list_detail.flag); detail_form_country_change();">
                                                <div ng-click="country_code_click_false();">
                                                    <div><img loading="lazy" src={country_list_detail.flag} alt="reecosys" />
                                                    </div>
                                                    <span
                                                        className="display_country_code">+{country_list_detail.phonecode}</span>
                                                    <span className="display_country_name">
                                                        {country_list_detail.nicename}
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contact_lable">
                                    <span className="material-symbols-outlined icon-form-control">
                                        alternate_email
                                    </span>
                                    <input id="client_email" name="client_email" type="email"
                                        ng-model="inquiry_obj_detail.email_address"
                                        className="form-control form-control-iconpad" required="" autocomplete="off"
                                        tabindex="3" />
                                    <label className="md-lable" for="client_email">Email</label>
                                    <div className="valid-icon-of-form">
                                        <img loading="lazy" src="https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/valid-icon.svg" alt="" />
                                    </div>
                                </div>
    
                               
                                <div className="contact_lable commentbox">
                                    <span className="material-symbols-outlined icon-form-control">
                                        chat_bubble
                                    </span>
                                    <textarea id="remark" name="remark" type="text" ng-model="inquiry_obj_detail.remarks"
                                        className="form-control form-control-iconpad" aria-invalid="false" autocomplete="off"
                                        tabindex="5" rows="1">
                                        </textarea>
                                    <label className="md-lable" for="remark">Comments</label>
                                </div>
                                <p style="width: 100%;">
                                    By submitting this form, you agree to the <a href="javascript:void(0);" className="hover-color-link">Terms &
                                        Conditions</a> of Swati Procon.
                                </p> */}
                                {/* <div className="sunmit-project-btn">
                                    <button className="reecosys-template-button button-style-primary" type="submit"
                                        ng-disabled="save_inquiry_detail_f" tabindex="7">
                                        <span className="material-symbols-outlined">
                                            send
                                        </span>
                                        <p>
                                            Submit                                        
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
    </div>
    </section> */}
                </div>
                </div>
                </>
      );
    }else {
        return (
            <h1>Please Wait</h1>
        )
    }
}


