import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import Me from "./pages/Me";
import BrandDetail from "./pages/BrandDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Partner from "./pages/Partner";
import Sponsor from "./pages/Sponsor";
import BrandGuidelines from "./pages/BrandGuidelines";
import TestimonialsPage from "./pages/TestimonialsPage";
import Feedback from "./pages/Feedback";
import TestPage from "./pages/TestPage";
import NotFound from "./pages/NotFound";
import NewHome from "./pages/NewHome";
import AdminLogin from "./pages/AdminLogin";
import AdminGuard from "./components/auth/AdminGuard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminGallery from "./pages/AdminGallery";
import Brands from "./pages/Brands";
import AdminBrands from "./pages/AdminBrands";
import Sellers from "./pages/Sellers";
import SellerDetail from "./pages/SellerDetail";
import AdminSellers from "./pages/AdminSellers";
import Buyers from "./pages/Buyers";
import BuyerDetail from "./pages/BuyerDetail";
import AdminBuyers from "./pages/AdminBuyers";
import Founders from "./pages/Founders";
import FounderDetail from "./pages/FounderDetail";
import AdminFounders from "./pages/AdminFounders";
import Cofounders from "./pages/Cofounders";
import CofounderDetail from "./pages/CofounderDetail";
import AdminCofounders from "./pages/AdminCofounders";
import Teams from "./pages/Teams";
import TeamDetail from "./pages/TeamDetail";
import AdminTeams from "./pages/AdminTeams";
import AdminAbout from "./pages/AdminAbout";
import AdminContact from "./pages/AdminContact";
import AdminCookies from "./pages/AdminCookies";
import AdminFeedback from "./pages/AdminFeedback";
import AdminGalleryDetail from "./pages/AdminGalleryDetail";
import AdminNotFound from "./pages/AdminNotFound";
import AdminPartner from "./pages/AdminPartner";
import AdminPrivacy from "./pages/AdminPrivacy";
import AdminSponsor from "./pages/AdminSponsor";
import AdminTerms from "./pages/AdminTerms";
import AdminTestimonials from "./pages/AdminTestimonials";
import AdminForms from "./pages/AdminForms";
import SubmitSuccess from "./pages/SubmitSuccess";
import SubmitError from "./pages/SubmitError";
import AdminSubmitSuccess from "./pages/AdminSubmitSuccess";
import AdminBranding from "./pages/AdminBranding";
import AdminLeads from "./pages/AdminLeads";
import AdminProfile from "./pages/AdminProfile";
import AdminTemplates from "./pages/AdminTemplates";
import AdminTheme from "./pages/AdminTheme";
import AdminNotifications from "./pages/AdminNotifications";
import AdminHomeSections from "./pages/AdminHomeSections";
import AdminHero from "./pages/AdminHero";
import AdminFooter from "./pages/AdminFooter";
import AdminComments from "./pages/AdminComments";
import AdminLikes from "./pages/AdminLikes";
import AdminReviews from "./pages/AdminReviews";
import AdminEditors from "./pages/AdminEditors";
import AdminBrandEditor from "./pages/AdminBrandEditor";
import AdminCelebrities from "./pages/AdminCelebrities";
import AdminBuyerEditor from "./pages/AdminBuyerEditor";
import AdminSellerEditor from "./pages/AdminSellerEditor";
import AdminTimeline from "./pages/AdminTimeline";
import AdminArches from "./pages/AdminArches";
import AdminStalls from "./pages/AdminStalls";
import AdminBuyerMosaic from "./pages/AdminBuyerMosaic";
import AdminVvips from "./pages/AdminVvips";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminFoundersEditor from "./pages/AdminFoundersEditor";
import AdminCofoundersEditor from "./pages/AdminCofoundersEditor";
import AdminCounts from "./pages/AdminCounts";
import AdminDualCta from "./pages/AdminDualCta";
import AdminProfileConfig from "./pages/AdminProfileConfig";
import AdminUsers from "./pages/AdminUsers";
import AdminDigests from "./pages/AdminDigests";
import AdminHomeLayout from "./pages/AdminHomeLayout";
import AdminTeamEditor from "./pages/AdminTeamEditor";
import AdminTestimonialEditor from "./pages/AdminTestimonialEditor";
import AdminMediaConfig from "./pages/AdminMediaConfig";

import ThemeLoader from "./components/ThemeLoader";
import { toast } from "@/components/ui/sonner";
import { ADMIN_SESSION_EXPIRED_EVENT } from "./lib/admin-session";
import GalleryIndividuals from "./components/GalleryIndividuals";





import Adminabout from "./pages/legacy/AdminAboutICEExhibitions";
import AdminFounderVision from "./pages/legacy/AdminFounderVision";
import AdminPhilosophy from "./pages/legacy/AdminOurMarketplacePhilosophy";
import AdminMissionVission from "./pages/legacy/AdminMissionVision";
import AdminJourney from "./pages/legacy/AdminOur30YearJourney";
import AdminIceTimeline from "./pages/legacy/AdminIceTimeline";
import AdminMilestone from "./pages/legacy/AdminICEMilestones";
import AdminBuildingBuyertrust from "./pages/legacy/AdminBuildingBuyerTrustSince1994";
import AdminLeadership from "./pages/legacy/AdminLegacyOfMarketplaceLeadership";
import AdminIceBrand from "./pages/legacy/AdminICEBrandEvolution";
import AdminHistoricAchieve from "./pages/legacy/AdminHistoricExhibitionsArchive";
import AdminHistoricBrand from "./pages/legacy/AdminHistoricBrandParticipation";
import AdminthroughDecades from "./pages/legacy/AdminICEThroughTheDecades";
import AdminNewspaper from "./pages/legacy/AdminHistoricNewspaperCoverage";
import AdminSushilMantri from "./pages/legacy/AdminTheSushilMantriStory";
import AdminIcetoIgen from "./pages/legacy/AdminICE1ToIGEN2";
import AdminEconomic from "./pages/legacy/AdminICEEconomicContribution";
import BuyerSuccess from "./pages/brands-and-success/BuyerSuccessStories";


import VideoTestimonial from "./pages/brands-and-success/VideoTestimonials";
import TopBrands from "./pages/brands-and-success/TopBrandsAtICE";
import StartupSuccess from "./pages/brands-and-success/StartupSuccessStories";
import ProductLaunch from "./pages/brands-and-success/ProductLaunchStories";
import NationalExihibition from "./pages/brands-and-success/NationalExhibitionNetwork";
import MarketPlace from "./pages/brands-and-success/MarketplaceLeaders";
import IceAcrossindia from "./pages/brands-and-success/ICEAcrossIndia";
import HistoricBrand from "./pages/brands-and-success/HistoricBrandParticipation";
import EmergingBrand from "./pages/brands-and-success/EmergingBrandsAtICE";
import CityWiseExihibition from "./pages/brands-and-success/CityWiseExhibitions";
import BuyerSuccessStories from "./pages/brands-and-success/BuyerSuccessStories";
import BusinessExpansion from "./pages/brands-and-success/BusinessExpansionStories";
import BrandSuccessStories from "./pages/brands-and-success/BrandSuccessStories";
import SellerSuccessStories from "./pages/brands-and-success/SellerSuccessStories";




  // upcomig-expo
import MegaExpoEvents from "./pages/upcoming-expos/MegaExpoEvents";
import IndustrySpecificExpos from "./pages/upcoming-expos/IndustrySpecificExpos";
import MultiCityEventSchedule from "./pages/upcoming-expos/MultiCityEventSchedule";
import ExhibitorRegistration from "./pages/upcoming-expos/ExhibitorRegistration";
import VisitorRegistration from "./pages/upcoming-expos/VisitorRegistration";
import SponsorshipRegistration from "./pages/upcoming-expos/SponsorshipRegistration";
import VIPAccessRegistration from "./pages/upcoming-expos/VIPAccessRegistration";
import EarlyBirdBooking from "./pages/upcoming-expos/EarlyBirdBooking";
import LaunchEvents from "./pages/upcoming-expos/LaunchEvents";
import B2BTradeEvents from "./pages/upcoming-expos/B2BTradeEvents";
import UpcomingEventsCalendar from "./pages/upcoming-expos/UpcomingEventsAndCalendar"

// Media Center

import PhotoGallery from "./pages/media-center/PhotoGallery";
import VideoGallery from "./pages/media-center/VideoGallery";
import HistoricArchives from "./pages/media-center/HistoricArchives";
import CelebritiesAtICE from "./pages/media-center/CelebritiesAtICE";
import VVIPsAtICE from "./pages/media-center/VVIPsAtICE";
import PoliticalLeadersAtICE from "./pages/media-center/PoliticalLeadersAtICE";
import IndustryIconsAtICE from "./pages/media-center/IndustryIconsAtICE";
import PressReleases from "./pages/media-center/PressReleases";
import MediaCoverage from "./pages/media-center/MediaCoverage";
import ICEInTheNews from "./pages/media-center/ICEInTheNews";
import TVDigitalMediaCoverage from "./pages/media-center/TVAndDigitalMediaCoverage"; 
import PressKitDownload from "./pages/media-center/PressKitDownload";
import ExhibitionTrendsBlog from "./pages/media-center/ExhibitionTrendsBlog";
import ConsumerTrendsBlog from "./pages/media-center/ConsumerTrendsBlog";
import MarketplaceInsightsBlog from "./pages/media-center/MarketplaceInsightsBlog";
import PhysicalVsDigitalMarketing from "./pages/media-center/PhysicalVsDigitalMarketing";
import BrandGrowthArticles from "./pages/media-center/BrandGrowthArticles";
import FutureOfExhibitions from "./pages/media-center/FutureOfExhibitions";
  

// ice to igen

import WhatIsIGEN from "./pages/ice-to-igen/WhatIsIGEN";
import ICEToIGEN from "./pages/ice-to-igen/ICE10ToIGEN20"; 
import PhysicalToDigital from "./pages/ice-to-igen/WhatICEDidPhysicallyIGENDigitally"; 
import TrustPlatforms from "./pages/ice-to-igen/TheFutureOfTrustPlatforms"; 
import IndiaGlobalExpoNews from "./pages/ice-to-igen/IndiaGlobalExpoNews";
import RecognitionEconomy from "./pages/ice-to-igen/RecognitionEconomy";
import ReputationEconomy from "./pages/ice-to-igen/ReputationEconomy";
import GlobalBuyerDiscovery from "./pages/ice-to-igen/GlobalBuyerDiscovery";
import ExportMarketplace from "./pages/ice-to-igen/ExportMarketplace";
import FutureOfB2BTrust from "./pages/ice-to-igen/FutureOfB2BTrust";
import SMEEcosystem from "./pages/ice-to-igen/SMEEcosystem";
import Mission2047 from "./pages/ice-to-igen/Mission2047";
import Building1000BusinessLeaders from "./pages/ice-to-igen/Building1000BusinessLeaders";
import FutureOfMarketplacePlatforms from "./pages/ice-to-igen/TheFutureOfMarketplacePlatforms"; 


// investor and partnership

import PartnershipOpportunities from "./pages/investor-and-partnership/PartnershipOpportunities";
import InvestorRelations from "./pages/investor-and-partnership/InvestorRelations";
import StrategicAlliances from "./pages/investor-and-partnership/StrategicAlliances";
import InternationalTradePartnerships from "./pages/investor-and-partnership/InternationalTradePartnerships";
import GlobalMarketplaceVision from "./pages/investor-and-partnership/GlobalMarketplaceVision";
import IndiaExpansionStrategy from "./pages/investor-and-partnership/IndiaExpansionStrategy";
import BrandCollaborations from "./pages/investor-and-partnership/BrandCollaborations";
import JointVentures from "./pages/investor-and-partnership/JointVentures";
import IndustryAssociations from "./pages/investor-and-partnership/IndustryAssociations";
import GovernmentCollaboration from "./pages/investor-and-partnership/GovernmentCollaboration";
import FranchiseInquiry from "./pages/investor-and-partnership/FranchiseInquiry";
import JoinICECareers from "./pages/investor-and-partnership/JoinICECareers";
import CareerOpportunities from "./pages/investor-and-partnership/CareerOpportunities";
import InternshipOpportunities from "./pages/investor-and-partnership/InternshipOpportunities";
import WhyWorkWithICE from "./pages/investor-and-partnership/WhyWorkWithICE";


// exhibit at ice

import WhyExhibitAtICE from "./pages/exhibit-at-ice/WhyExhibitAtICE";
import ExhibitorBenefits from "./pages/exhibit-at-ice/ExhibitorBenefits";
import WhyBrandsChooseICE from "./pages/exhibit-at-ice/WhyBrandsChooseICE";
import VisibilityCreatesSales from "./pages/exhibit-at-ice/VisibilityCreatesSales";
import LiveBuyerEngagement from "./pages/exhibit-at-ice/LiveBuyerEngagement";
import LeadGenerationAtICE from "./pages/exhibit-at-ice/LeadGenerationAtICE";
import ProductLaunchPlatform from "./pages/exhibit-at-ice/ProductLaunchPlatform";
import TrustTransferEffect from "./pages/exhibit-at-ice/TrustTransferEffect";
import ExhibitionROI from "./pages/exhibit-at-ice/ExhibitionROI";
import WhyStartupsShouldExhibit from "./pages/exhibit-at-ice/WhyStartupsShouldExhibit";
import WhySMEShouldExhibit from "./pages/exhibit-at-ice/WhySMEsShouldExhibit"
import WhyLargeBrandsExhibit from "./pages/exhibit-at-ice/WhyLargeBrandsExhibit";
import StallBooking from "./pages/exhibit-at-ice/StallBooking";
import SponsorshipPackages from "./pages/exhibit-at-ice/SponsorshipPackages";
import PavilionBooking from "./pages/exhibit-at-ice/PavilionBooking";
import PremiumBrandingZones from "./pages/exhibit-at-ice/PremiumBrandingZones";
import LEDDigitalPromotions from  "./pages/exhibit-at-ice/LEDAndDigitalPromotions"
import CustomStallDesign from "./pages/exhibit-at-ice/CustomStallDesign";
import MultiCityParticipation from "./pages/exhibit-at-ice/MultiCityParticipation";
import FirstTimeExhibitorGuide from "./pages/exhibit-at-ice/FirstTimeExhibitorGuide";
import ExhibitorFAQ from "./pages/exhibit-at-ice/ExhibitorFAQ";


// visit-ice

import WhyVisitICE from "./pages/visit-ice/WhyVisitICE";
import VisitorBenefits from "./pages/visit-ice/VisitorBenefits";
import ProductDiscovery from "./pages/visit-ice/ProductDiscovery";
import NewBrandDiscovery from "./pages/visit-ice/NewBrandDiscovery";
import InnovationShowcase from "./pages/visit-ice/InnovationShowcase";
import LiveDemonstrations from "./pages/visit-ice/LiveDemonstrations";
import ExclusiveExhibitionDeals from "./pages/visit-ice/ExclusiveExhibitionDeals";
import FamilyEntertainmentShopping from "./pages/visit-ice/FamilyEntertainmentAndShopping"
import CompareProductsLive from "./pages/visit-ice/CompareProductsLive";
import MeetBrandFoundersDirectly from "./pages/visit-ice/MeetBrandFoundersDirectly";
import BusinessNetworking from "./pages/visit-ice/BusinessNetworking";
import BuyerSellerMeetings from "./pages/visit-ice/BuyerSellerMeetings";
import DistributorRetailerConnect from "./pages/visit-ice/DistributorAndRetailerConnect";
import B2BMarketplaceOpportunities from "./pages/visit-ice/B2BMarketplaceOpportunities";
import VisitorFAQ from "./pages/visit-ice/VisitorFAQ";
import ExhibitionExperienceGuide from "./pages/visit-ice/ExhibitionExperienceGuide";



// industries-at-ice

import RealEstateExpo from "./pages/industries-at-ice/RealEstateExpo";
import EVMobilityExpo from "./pages/industries-at-ice/EVAndMobilityExpo";
import FMCGExpo from "./pages/industries-at-ice/FMCGExpo";
import ElectronicsExpo from "./pages/industries-at-ice/ElectronicsExpo";
import HomeAppliancesExpo from "./pages/industries-at-ice/HomeAppliancesExpo";
import FashionLifestyleExpo from "./pages/industries-at-ice/FashionAndLifestyleExpo";
import FoodBeverageExpo from "./pages/industries-at-ice/AdminFoodAndBeverageExpo";
import AyurvedaOrganicExpo from "./pages/industries-at-ice/AyurvedaAndOrganicExpo";
import HealthcareWellnessExpo from "./pages/industries-at-ice/HealthcareAndWellnessExpo";
import StartupExpo from "./pages/industries-at-ice/StartupExpo";
import MadeInIndiaExpo from "./pages/industries-at-ice/MadeInIndiaExpo";
import SmartHomeTechnologyExpo from "./pages/industries-at-ice/SmartHomeAndTechnologyExpo";
import EducationExpo from "./pages/industries-at-ice/EducationExpo";
import LuxuryProductsExpo from "./pages/industries-at-ice/LuxuryProductsExpo";
import FinancialServicesExpo from "./pages/industries-at-ice/FinancialServicesExpo";


// legacy


import AboutICEExhibitions from "./pages/legacy/AboutICEExhibitions";
import FounderVision from "./pages/legacy/FounderVision";
import OurMarketplacePhilosophy from "./pages/legacy/OurMarketplacePhilosophy";
import MissionVision from "./pages/legacy/MissionVision";
import Our30YearJourney from "./pages/legacy/Our30YearJourney";
import ICETimeline from "./pages/legacy/ICETimeline";
import ICEMilestones from "./pages/legacy/ICEMilestones";
import ICEAcrossGenerations from "./pages/legacy/ICEAcrossGenerations";
import BuildingBuyerTrustSince1994 from "./pages/legacy/BuildingBuyerTrustSince1994";
import LegacyOfMarketplaceLeadership from "./pages/legacy/LegacyOfMarketplaceLeadership";
import WhyIndiaTrustsICE from "./pages/legacy/WhyIndiaTrustsICE";
import ICEBrandEvolution from "./pages/legacy/IcebrandEvolution";
import HistoricExhibitionsArchive from "./pages/legacy/HistoricExhibitionsArchive";
import HistoricBrandParticipation from "./pages/legacy/HistoricbrandParticipation";
import ICEThroughTheDecades from "./pages/legacy/ICEThroughTheDecades";
import HistoricNewspaperCoverage from "./pages/legacy/HistoricNewspaperCoverage";
import TheSushilMantriStory from "./pages/legacy/TheSushilMantriStory";
import ICEToIGeN from "./pages/legacy/IcetoIgen";
import ICEEconomicContribution from "./pages/legacy/ICEEconomicContribution";




                     // Admin




                  // upcoming expo


import AdminUpcomingEventsAndCalendar from "./pages/upcoming-expos/AdminUpcomingEventsAndCalendar";
import AdminMegaExpoEvents from "./pages/upcoming-expos/AdminMegaExpoEvents";
import AdminIndustrySpecificExpos from "./pages/upcoming-expos/AdminIndustrySpecificExpos";
import AdminMultiCityEventSchedule from "./pages/upcoming-expos/AdminMultiCityEventSchedule";
import AdminExhibitorRegistration from "./pages/upcoming-expos/AdminExhibitorRegistration";
import AdminVisitorRegistration from "./pages/upcoming-expos/AdminVisitorRegistration";
import AdminSponsorshipRegistration from "./pages/upcoming-expos/AdminSponsorshipRegistration";
import AdminVIPAccessRegistration from "./pages/upcoming-expos/AdminVIPAccessRegistration";
import AdminEarlyBirdBooking from "./pages/upcoming-expos/AdminEarlyBirdBooking";
import AdminLaunchEvents from "./pages/upcoming-expos/AdminLaunchEvents";
import AdminB2BTradeEvents from "./pages/upcoming-expos/AdminB2BTradeEvents";

// media-center

import AdminPhotoGallery from "./pages/media-center/AdminPhotoGallery";
import AdminVideoGallery from "./pages/media-center/AdminVideoGallery";
import AdminHistoricArchives from "./pages/media-center/AdminHistoricArchives";
import AdminCelebritiesAtICE from "./pages/media-center/AdminCelebritiesAtICE";
import AdminVVIPsAtICE from "./pages/media-center/AdminVVIPsAtICE";
import AdminPoliticalLeadersAtICE from "./pages/media-center/AdminPoliticalLeadersAtICE";
import AdminIndustryIconsAtICE from "./pages/media-center/AdminIndustryIconsAtICE";
import AdminPressReleases from "./pages/media-center/AdminPressReleases";
import AdminMediaCoverage from "./pages/media-center/AdminMediaCoverage";
import AdminICEInTheNews from "./pages/media-center/AdminICEInTheNews";
import AdminTVAndDigitalMediaCoverage from "./pages/media-center/AdminTVAndDigitalMediaCoverage";
import AdminPressKitDownload from "./pages/media-center/AdminPressKitDownload";
import AdminExhibitionTrendsBlog from "./pages/media-center/AdminExhibitionTrendsBlog";
import AdminConsumerTrendsBlog from "./pages/media-center/AdminConsumerTrendsBlog";
import AdminMarketplaceInsightsBlog from "./pages/media-center/AdminMarketplaceInsightsBlog";
import AdminPhysicalVsDigitalMarketing from "./pages/media-center/AdminPhysicalVsDigitalMarketing";
import AdminBrandGrowthArticles from "./pages/media-center/AdminBrandGrowthArticles"; 
import AdminFutureOfExhibitions from "./pages/media-center/AdminFutureOfExhibitions";
import AdmiAdminSponsorshipRegistrationnabout from "./pages/upcoming-expos/AdminSponsorshipRegistration";


// visitice
import AdminB2BMarketplaceOpportunities from "./pages/visit-ice/AdminB2BMarketplaceOpportunities";
import AdminBusinessNetworking from "./pages/visit-ice/AdminBusinessNetworking";
import AdminBuyerSellerMeetings from "./pages/visit-ice/AdminBuyerSellerMeetings";
import AdminCompareProductsLive from "./pages/visit-ice/AdminCompareProductsLive";
import AdminDistributorAndRetailerConnect from "./pages/visit-ice/AdminDistributorAndRetailerConnect";
import AdminExclusiveExhibitionDeals from "./pages/visit-ice/AdminExclusiveExhibitionDeals";
import AdminExhibitionExperienceGuide from "./pages/visit-ice/AdminExhibitionExperienceGuide";
import AdminFamilyEntertainmentAndShopping from "./pages/visit-ice/AdminFamilyEntertainmentAndShopping";
import AdminInnovationShowcase from "./pages/visit-ice/AdminInnovationShowcase";
import AdminLiveDemonstrations from "./pages/visit-ice/AdminLiveDemonstrations";
import AdminMeetBrandFoundersDirectly from "./pages/visit-ice/AdminMeetBrandFoundersDirectly";
import AdminNewBrandDiscovery from "./pages/visit-ice/AdminNewBrandDiscovery";
import AdminProductDiscovery from "./pages/visit-ice/AdminProductDiscovery";
import AdminVisitorBenefits from "./pages/visit-ice/AdminVisitorBenefits";
import AdminVisitorFAQ from "./pages/visit-ice/AdminVisitorFAQ";
import AdminWhyVisitICE from "./pages/visit-ice/AdminWhyVisitICE";

// industries at ice
import AdminAyurvedaOrganicExpo from "./pages/industries-at-ice/AdminAyurvedaAndOrganicExpo";
import AdminEducationExpo from "./pages/industries-at-ice/AdminEducationExpo";
import AdminElectronicsExpo from "./pages/industries-at-ice/AdminElectronicsExpo";
import AdminEVMobilityExpo from "./pages/industries-at-ice/AdminEVAndMobilityExpo";
import AdminFashionLifestyleExpo from "./pages/industries-at-ice/AdminFashionAndLifestyleExpo";
import AdminFinancialServicesExpo from "./pages/industries-at-ice/AdminFinancialServicesExpo";
import AdminFMCGExpo from "./pages/industries-at-ice/AdminFMCGExpo";
import AdminFoodBeverageExpo from "./pages/industries-at-ice/AdminFoodAndBeverageExpo";
import AdminHealthcareWellnessExpo from "./pages/industries-at-ice/AdminHealthcareAndWellnessExpo";
import AdminHomeAppliancesExpo from "./pages/industries-at-ice/AdminHomeAppliancesExpo";
import AdminLuxuryProductsExpo from "./pages/industries-at-ice/AdminLuxuryProductsExpo";
import AdminMadeInIndiaExpo from "./pages/industries-at-ice/AdminMadeInIndiaExpo";
import AdminRealEstateExpo from "./pages/industries-at-ice/AdminRealEstateExpo";
import AdminSmartHomeTechnologyExpo from "./pages/industries-at-ice/AdminSmartHomeAndTechnologyExpo";


// investorand partnership


import AdminBrandCollaborations from "./pages/investor-and-partnership/AdminBrandCollaborations";
import AdminFranchiseInquiry from "./pages/investor-and-partnership/AdminFranchiseInquiry";
import AdminGlobalMarketplaceVision from "./pages/investor-and-partnership/AdminGlobalMarketplaceVision";
import AdminGovernmentCollaboration from "./pages/investor-and-partnership/AdminGovernmentCollaboration";
import AdminIndiaExpansionStrategy from "./pages/investor-and-partnership/AdminIndiaExpansionStrategy";
import AdminIndustryAssociations from "./pages/investor-and-partnership/AdminIndustryAssociations";
import AdminInternationalTradePartnerships from "./pages/investor-and-partnership/AdminInternationalTradePartnerships";
import AdminInternshipOpportunities from "./pages/investor-and-partnership/AdminInternshipOpportunities";
import AdminInvestorRelations from "./pages/investor-and-partnership/AdminInvestorRelations";
import AdminJoinICECareers from "./pages/investor-and-partnership/AdminJoinICECareers";
import AdminJointVentures from "./pages/investor-and-partnership/AdminJointVentures";
import AdminCareerOpportunities from "./pages/investor-and-partnership/AdminCareerOpportunities";
import AdminWhyWorkWithICE from "./pages/investor-and-partnership/AdminWhyWorkWithICE";
import AdminStrategicAlliances from "./pages/investor-and-partnership/AdminStrategicAlliances";
import AdminPartnershipOpportunities from "./pages/investor-and-partnership/AdminPartnershipOpportunities";


// icetoigen
import AdminBuilding1000BusinessLeaders from "./pages/ice-to-igen/AdminBuilding1000BusinessLeaders";
import AdminExportMarketplace from "./pages/ice-to-igen/AdminExportMarketplace";
import AdminFutureOfB2BTrust from "./pages/ice-to-igen/AdminFutureOfB2BTrust";
import AdminGlobalBuyerDiscovery from "./pages/ice-to-igen/AdminGlobalBuyerDiscovery";
import AdminICE1ToIGEN20 from "./pages/ice-to-igen/AdminICE10ToIGEN20";
import AdminIndiaGlobalExpoNews from "./pages/ice-to-igen/AdminIndiaGlobalExpoNews";
import AdminMission2047 from "./pages/ice-to-igen/AdminMission2047";
import AdminRecognitionEconomy from "./pages/ice-to-igen/AdminRecognitionEconomy";
import AdminReputationEconomy from "./pages/ice-to-igen/AdminReputationEconomy";
import AdminSMEEcosystem from "./pages/ice-to-igen/AdminSMEEcosystem";
import AdminFutureOfMarketplacePlatforms from "./pages/ice-to-igen/AdminTheFutureOfMarketplacePlatforms";
import AdminTheFutureOfTrustPlatforms from "./pages/ice-to-igen/AdminTheFutureOfTrustPlatforms";
import AdminWhatICEDidPhysicallyIGENDigitally from "./pages/ice-to-igen/AdminWhatICEDidPhysicallyIGENDigitally";
import AdminWhatIsIGEN from "./pages/ice-to-igen/AdminWhatIsIGEN";


// brandsand-success
import AdminBrandSuccessStories from "./pages/brands-and-success/AdminBrandSuccessStories";
import AdminBusinessExpansionStories from "./pages/brands-and-success/AdminBusinessExpansionStories";
import AdminBuyerSuccessStories from "./pages/brands-and-success/AdminBuyerSuccessStories";
import AdminaAdminCityWiseExhibitionsbout from "./pages/brands-and-success/AdminCityWiseExhibitions";
import AdminEmergingBrandsAtICE from "./pages/brands-and-success/AdminEmergingBrandsAtICE";
import AdminHistoricBrandParticipation from "./pages/brands-and-success/AdminHistoricBrandParticipation";
import AdminICEAcrossIndia from "./pages/brands-and-success/AdminICEAcrossIndia";
import AdminMarketplaceLeaders from "./pages/brands-and-success/AdminMarketplaceLeaders";
import AdminNationalExhibitionNetwork from "./pages/brands-and-success/AdminNationalExhibitionNetwork";
import AdminProductLaunchStories from "./pages/brands-and-success/AdminProductLaunchStories";
import AdminSellerSuccessStories from "./pages/brands-and-success/AdminSellerSuccessStories";
import AdminStartupSuccessStories from "./pages/brands-and-success/AdminStartupSuccessStories";
import AdminTopBrandsAtICE from "./pages/brands-and-success/AdminTopBrandsAtICE";
import AdminVideoTestimonials from "./pages/brands-and-success/AdminVideoTestimonials";



        // exhibitatice
import AdminStartupExpo from "./pages/industries-at-ice/AdminStartupExpo";
import AdminCustomStallDesign from "./pages/exhibit-at-ice/AdminCustomStallDesign";
import AdminExhibitionROI from "./pages/exhibit-at-ice/AdminExhibitionROI";
import AdminExhibitorBenefits from "./pages/exhibit-at-ice/AdminExhibitorBenefits";
import AdminExhibitorFAQ from "./pages/exhibit-at-ice/AdminExhibitorFAQ";
import AdminFirstTimeExhibitorGuide from "./pages/exhibit-at-ice/AdminFirstTimeExhibitorGuide";
import AdminLeadGenerationAtICE from "./pages/exhibit-at-ice/AdminLeadGenerationAtICE";
import AdminLEDAndDigitalPromotions from "./pages/exhibit-at-ice/AdminLEDAndDigitalPromotions";
import AdminLiveBuyerEngagement from "./pages/exhibit-at-ice/AdminLiveBuyerEngagement";
import AdminMultiCityParticipation from "./pages/exhibit-at-ice/AdminMultiCityParticipation";
import AdminPavilionBooking from "./pages/exhibit-at-ice/AdminPavilionBooking";
import AdminPremiumBrandingZones from "./pages/exhibit-at-ice/AdminPremiumBrandingZones";
import AdminProductLaunchPlatform from "./pages/exhibit-at-ice/AdminProductLaunchPlatform";
import AdminSponsorshipPackages from "./pages/exhibit-at-ice/AdminSponsorshipPackages";
import AdminStallBooking from "./pages/exhibit-at-ice/AdminStallBooking";
import AdminTrustTransferEffect from "./pages/exhibit-at-ice/AdminTrustTransferEffect";
import AdminVisibilityCreatesSales from "./pages/exhibit-at-ice/AdminVisibilityCreatesSales";
import AdminWhyBrandsChooseICE from "./pages/exhibit-at-ice/AdminWhyBrandsChooseICE";
import AdminWhyExhibitAtICE from "./pages/exhibit-at-ice/AdminWhyExhibitAtICE";
import AdminWhyLargeBrandsExhibit from "./pages/exhibit-at-ice/AdminWhyLargeBrandsExhibit";
import AdminWhySMEsShouldExhibit from "./pages/exhibit-at-ice/AdminWhySMEsShouldExhibit";
import AdminWhyStartupsShouldExhibit from "./pages/exhibit-at-ice/AdminWhyStartupsShouldExhibit";
import AdminICEAcrossGenerations from "./pages/legacy/AdminICEAcrossGenerations";
import AdminOur30YearJourney from "./pages/legacy/AdminOur30YearJourney";
import AdminBuildingBuyerTrustSince1994 from "./pages/legacy/AdminBuildingBuyerTrustSince1994";
import AdminICEEconomicContribution from "./pages/legacy/AdminICEEconomicContribution";
import AdminHistoricExhibitionsArchive from "./pages/legacy/AdminHistoricExhibitionsArchive";
import AdminAboutICEExhibitions from "./pages/legacy/AdminAboutICEExhibitions";
import AdminICEBrandEvolution from "./pages/legacy/AdminICEBrandEvolution";
import AdminICEThroughTheDecades from "./pages/legacy/AdminICEThroughTheDecades";
import AdminICE1ToIGEN2 from "./pages/legacy/AdminICE1ToIGEN2";
import AdminLegacyOfMarketplaceLeadership from "./pages/legacy/AdminLegacyOfMarketplaceLeadership";
import AdminIceLegacyWhyIndiaTrusts from "./pages/legacy/AdminIceLegacyWhyIndiaTrusts";
import AdminHistoricNewspaperCoverage from "./pages/legacy/AdminHistoricNewspaperCoverage";
import AdminTheSushilMantriStory from "./pages/legacy/AdminTheSushilMantriStory";
import AdminMissionVision from "./pages/legacy/AdminMissionVision";
import AdminICEMilestones from "./pages/legacy/AdminICEMilestones";
import AdminOurMarketplacePhilosophy from "./pages/legacy/AdminOurMarketplacePhilosophy";
import AdminWhyIndiaTrustsICE from "./pages/legacy/AdminWhyIndiaTrustsICE";
import AdminOldExhibitionPhotos from "./pages/legacy/AdminOldExhibitionPhotos";
import MissionVission from "./pages/legacy/MissionVision";


// icelegacy

// import AdminIceLegacyWhyIndiaTrusts from "@/pages/admin/legacy/AdminIceLegacyWhyIndiaTrusts";
// import AdminAboutICEExhibitions from "@/pages/admin/legacy/AdminAboutICEExhibitions";
// import AdminFounderVision from "@/pages/admin/legacy/AdminFounderVision";
// import AdminOurMarketplacePhilosophy from "@/pages/admin/legacy/AdminOurMarketplacePhilosophy";
// import AdminMissionVision from "@/pages/admin/legacy/AdminMissionVision";
// import AdminOur30YearJourney from "@/pages/admin/legacy/AdminOur30YearJourney";
// import AdminICETimelineYearByYear from "@/pages/admin/legacy/AdminICETimelineYearByYear";
// import AdminICEMilestones from "@/pages/admin/legacy/AdminICEMilestones";
// import AdminICEAcrossGenerations from "@/pages/admin/legacy/AdminICEAcrossGenerations";
// import AdminBuildingBuyerTrustSince1994 from "@/pages/admin/legacy/AdminBuildingBuyerTrustSince1994";
// import AdminLegacyOfMarketplaceLeadership from "@/pages/admin/legacy/AdminLegacyOfMarketplaceLeadership";
// import AdminWhyIndiaTrustsICE from "@/pages/admin/legacy/AdminWhyIndiaTrustsICE";
// import AdminICEBrandEvolution from "@/pages/admin/legacy/AdminICEBrandEvolution";
// import AdminHistoricExhibitionsArchive from "@/pages/admin/legacy/AdminHistoricExhibitionsArchive";
// import AdminHistoricBrandParticipation from "@/pages/admin/legacy/AdminHistoricBrandParticipation";
// import AdminICEThroughTheDecades from "@/pages/admin/legacy/AdminICEThroughTheDecades";
// import AdminOldExhibitionPhotos from "@/pages/admin/legacy/AdminOldExhibitionPhotos";
// import AdminHistoricNewspaperCoverage from "@/pages/admin/legacy/AdminHistoricNewspaperCoverage";
// import AdminTheSushilMantriStory from "@/pages/admin/legacy/AdminTheSushilMantriStory";
// import AdminICE1ToIGEN2 from "@/pages/admin/legacy/AdminICE1ToIGEN2";
// import AdminICEEconomicContribution from "@/pages/admin/legacy/AdminICEEconomicContribution";


const queryClient = new QueryClient();
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const AdminSessionListener = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      toast.error("Session expired. Please log in again.");
      navigate("/admin/login", { replace: true });
    };
    window.addEventListener(ADMIN_SESSION_EXPIRED_EVENT, handler);
    return () => window.removeEventListener(ADMIN_SESSION_EXPIRED_EVENT, handler);
  }, [navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeLoader />
      <BrowserRouter>
        <ScrollToTop />
        <AdminSessionListener />
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/new-home" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              <AdminGuard>
                <AdminDashboard />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/gallery"
            element={
              <AdminGuard>
                <AdminGallery />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/founders"
            element={
              <AdminGuard>
                <AdminFounders />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/cofounders"
            element={
              <AdminGuard>
                <AdminCofounders />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/about"
            element={
              <AdminGuard>
                <AdminAbout />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/contact"
            element={
              <AdminGuard>
                <AdminContact />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/cookies"
            element={
              <AdminGuard>
                <AdminCookies />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/feedback"
            element={
              <AdminGuard>
                <AdminFeedback />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/gallery-detail"
            element={
              <AdminGuard>
                <AdminGalleryDetail />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/not-found"
            element={
              <AdminGuard>
                <AdminNotFound />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/partner"
            element={
              <AdminGuard>
                <AdminPartner />
              </AdminGuard>
            }
          />
          {/* <Route
            path="/admin/Ice Across Generations"
            element={
              <AdminGuard>
                <AdminIceGeneration />
              </AdminGuard>
            }
          /> */}
          <Route
            path="/admin/privacy"
            element={
              <AdminGuard>
                <AdminPrivacy />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/sponsor"
            element={
              <AdminGuard>
                <AdminSponsor />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/terms"
            element={
              <AdminGuard>
                <AdminTerms />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/testimonials"
            element={
              <AdminGuard>
                <AdminTestimonials />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/forms"
            element={
              <AdminGuard>
                <AdminForms />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/submit-success"
            element={
              <AdminGuard>
                <AdminSubmitSuccess />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/leads"
            element={
              <AdminGuard>
                <AdminLeads />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <AdminGuard>
                <AdminProfile />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/profile-config"
            element={
              <AdminGuard>
                <AdminProfileConfig />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/templates"
            element={
              <AdminGuard>
                <AdminTemplates />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/notifications"
            element={
              <AdminGuard>
                <AdminNotifications />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <AdminGuard>
                <AdminAnalytics />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminGuard>
                <AdminUsers />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/comments"
            element={
              <AdminGuard>
                <AdminComments />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/likes"
            element={
              <AdminGuard>
                <AdminLikes />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/theme"
            element={
              <AdminGuard>
                <AdminTheme />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/platform-branding"
            element={
              <AdminGuard>
                <AdminBranding />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/teams"
            element={
              <AdminGuard>
                <AdminTeams />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/buyers"
            element={
              <AdminGuard>
                <AdminBuyers />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/brands"
            element={
              <AdminGuard>
                <AdminBrands />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/sellers"
            element={
              <AdminGuard>
                <AdminSellers />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/home-sections"
            element={
              <AdminGuard>
                <AdminHomeSections />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/hero"
            element={
              <AdminGuard>
                <AdminHero />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/footer"
            element={
              <AdminGuard>
                <AdminFooter />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/reviews"
            element={
              <AdminGuard>
                <AdminReviews />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/editors"
            element={
              <AdminGuard>
                <AdminEditors />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/brand-editor"
            element={
              <AdminGuard>
                <AdminBrandEditor />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/team-editor"
            element={
              <AdminGuard>
                <AdminTeamEditor />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/testimonials-editor"
            element={
              <AdminGuard>
                <AdminTestimonialEditor />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/celebrities"
            element={
              <AdminGuard>
                <AdminCelebrities />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/buyer-editor"
            element={
              <AdminGuard>
                <AdminBuyerEditor />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/seller-editor"
            element={
              <AdminGuard>
                <AdminSellerEditor />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/timeline"
            element={
              <AdminGuard>
                <AdminTimeline />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/arches"
            element={
              <AdminGuard>
                <AdminArches />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/stalls"
            element={
              <AdminGuard>
                <AdminStalls />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/media-config"
            element={
              <AdminGuard>
                <AdminMediaConfig />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/about-ice-exhibition"
            element={
              <AdminGuard>
                <Adminabout />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/founder-vision"
            element={
              <AdminGuard>
                <AdminFounderVision />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/philosophy"
            element={
              <AdminGuard>
                <AdminPhilosophy />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/mission-vision"
            element={
              <AdminGuard>
                <AdminMissionVission />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/30-year-journey"
            element={
              <AdminGuard>
                <AdminJourney />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/timeline"
            element={
              <AdminGuard>
                <AdminIceTimeline />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/milestones"
            element={
              <AdminGuard>
                <AdminMilestone />
              </AdminGuard>
            }
          />
          {/* <Route
            path="/admin/ice-legacy/generations"
            element={
              <AdminGuard>
                <AdminMilestone />
              </AdminGuard>
            }
          /> */}
          <Route
            path="/admin/ice-legacy/buyer-trust"
            element={
              <AdminGuard>
                <AdminBuildingBuyertrust />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/marketplace-leadership"
            element={
              <AdminGuard>
                <AdminLeadership />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/brand-evolution"
            element={
              <AdminGuard>
                <AdminIceBrand />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/historic-archive"
            element={
              <AdminGuard>
                <AdminHistoricAchieve />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/historic-brands"
            element={
              <AdminGuard>
                <AdminHistoricBrand />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/through-decades"
            element={
              <AdminGuard>
                <AdminthroughDecades />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/newspaper-coverage"
            element={
              <AdminGuard>
                <AdminNewspaper />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/sushil-mantri-story"
            element={
              <AdminGuard>
                <AdminSushilMantri />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/ice-to-igen"
            element={
              <AdminGuard>
                <AdminIcetoIgen />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/ice-legacy/economic-contribution"
            element={
              <AdminGuard>
                <AdminEconomic />
              </AdminGuard>
            }
          />
          {/* <Route
            path="/admin/about-ice-exhibition"
            element={
              <AdminGuard>
                <Adminabout />
              </AdminGuard>
            }
          /> */}
          
          
          <Route
            path="/admin/buyer-mosaic"
            element={
              <AdminGuard>
                <AdminBuyerMosaic />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/vvips"
            element={
              <AdminGuard>
                <AdminVvips />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/founder-editor"
            element={
              <AdminGuard>
                <AdminFoundersEditor />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/cofounder-editor"
            element={
              <AdminGuard>
                <AdminCofoundersEditor />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/counts"
            element={
              <AdminGuard>
                <AdminCounts />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/dual-cta"
            element={
              <AdminGuard>
                <AdminDualCta />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/home-layout"
            element={
              <AdminGuard>
                <AdminHomeLayout />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/digests"
            element={
              <AdminGuard>
                <AdminDigests />
              </AdminGuard>
            }
          />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/founders/:id" element={<FounderDetail />} />
          <Route path="/cofounders" element={<Cofounders />} />
          <Route path="/cofounders/:id" element={<CofounderDetail />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/buyers/:id" element={<BuyerDetail />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/sellers/:id" element={<SellerDetail />} />
          <Route path="/brand-guidelines" element={<BrandGuidelines />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/submit-success" element={<SubmitSuccess />} />
          <Route path="/submit-error" element={<SubmitError />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/test" element={<TestPage />} />
         
          <Route path="/buyers/stories" element={<BuyerSuccess />} />


          {/* brands */}
           <Route path="/brands/video-testimonials" element={<VideoTestimonial />} />
           <Route path="/brands/topbrands"  element={<TopBrands />} />
           <Route path="/brands/startups"   element={<StartupSuccess />} />
           <Route path="/brands/product-launches"   element={<ProductLaunch />} />
           <Route path="/brands/national-network"   element={<NationalExihibition />} />
           <Route path="/brands/across-india"  element={<IceAcrossindia />} />
           <Route path="/brands/historic"  element={<HistoricBrand />} />
           <Route path="/brands/emerging" element={<EmergingBrand />} />
           <Route path="/brands/city-exhibitions" element={<CityWiseExihibition />} />
           <Route path="/buyers/stories" element={<BuyerSuccessStories />} />
           <Route path="/brands/expansion" element={<BusinessExpansion />} />
           <Route path="/brands/success-stories" element={<BrandSuccessStories />} />
           <Route path="/brands/seller"  element={<SellerSuccessStories />} />
         

         {/* Upcoming Expos */}

 <Route path="/expos/calendar" element={<UpcomingEventsCalendar />} />
<Route path="/expos/mega-events" element={<MegaExpoEvents />} />
<Route path="/expos/industry-specific" element={<IndustrySpecificExpos />} />
<Route path="/expos/multi-city" element={<MultiCityEventSchedule />} />
<Route path="/expos/exhibitor-registration" element={<ExhibitorRegistration />} />
<Route path="/expos/visitor-registration" element={<VisitorRegistration />} />
<Route path="/upcoming/sponsor" element={<SponsorshipRegistration />} />
<Route path="/expos/vip-access" element={<VIPAccessRegistration />} />
<Route path="/expos/early-bird" element={<EarlyBirdBooking />} />
<Route path="/expos/launch-events" element={<LaunchEvents />} />
<Route path="/expos/b2b-trade" element={<B2BTradeEvents />} />

  {/* media-center */}

  <Route path="/gallery" element={<PhotoGallery />} />
<Route path="/media/videos" element={<VideoGallery />} />
<Route path="/media/archives" element={<HistoricArchives />} />
<Route path="/media/celebrities" element={<CelebritiesAtICE />} />
<Route path="/media/vvips" element={<VVIPsAtICE />} />
<Route path="/media/political-leaders" element={<PoliticalLeadersAtICE />} />
<Route path="/media/industry-icons" element={<IndustryIconsAtICE />} />
<Route path="/media/press-releases" element={<PressReleases />} />
<Route path="/media/coverage" element={<MediaCoverage />} />
<Route path="/media/in-the-news" element={<ICEInTheNews />} />
<Route path="/media/tv-digital" element={<TVDigitalMediaCoverage />} />
<Route path="/media/press-kit" element={<PressKitDownload />} />
<Route path="/media/blog/exhibition-trends" element={<ExhibitionTrendsBlog />} />
<Route path="/media/blog/consumer-trends" element={<ConsumerTrendsBlog />} />
<Route path="/media/blog/marketplace-insights" element={<MarketplaceInsightsBlog />} />
<Route path="/media/blog/physical-vs-digital" element={<PhysicalVsDigitalMarketing />} />
<Route path="/media/blog/brand-growth" element={<BrandGrowthArticles />} />
<Route path="/media/blog/future-exhibitions" element={<FutureOfExhibitions />} />

{/* ice to igen */}

<Route path="/IgenWorld" element={<WhatIsIGEN />} />
<Route path="/igen/ice-to-igen" element={<ICEToIGEN />} />
<Route path="/igen/physical-to-digital" element={<PhysicalToDigital />} />
<Route path="/igen/trust-platforms" element={<TrustPlatforms />} />
<Route path="/igenNews" element={<IndiaGlobalExpoNews />} />
<Route path="/igen/recognition-economy" element={<RecognitionEconomy />} />
<Route path="/igen/reputation-economy" element={<ReputationEconomy />} />
<Route path="/igen/global-buyer-discovery" element={<GlobalBuyerDiscovery />} />
<Route path="/igen/export-marketplace" element={<ExportMarketplace />} />
<Route path="/igen/b2b-trust" element={<FutureOfB2BTrust />} />
<Route path="/igen/sme-ecosystem" element={<SMEEcosystem />} />
<Route path="/igen/mission-2047" element={<Mission2047 />} />
<Route path="/igen/1000-leaders" element={<Building1000BusinessLeaders />} />
<Route path="/igen/future-marketplace" element={<FutureOfMarketplacePlatforms />} />

{/* investor and partnership */}

<Route path="/partnership" element={<PartnershipOpportunities />} />
<Route path="/invest/investor-relations" element={<InvestorRelations />} />
<Route path="/invest/strategic-alliances" element={<StrategicAlliances />} />
<Route path="/invest/international-trade" element={<InternationalTradePartnerships />} />
<Route path="/invest/global-vision" element={<GlobalMarketplaceVision />} />
<Route path="/invest/india-expansion" element={<IndiaExpansionStrategy />} />
<Route path="/invest/brand-collaborations" element={<BrandCollaborations />} />
<Route path="/invest/joint-ventures" element={<JointVentures />} />
<Route path="/invest/industry-associations" element={<IndustryAssociations />} />
<Route path="/invest/government" element={<GovernmentCollaboration />} />
<Route path="/invest/franchise" element={<FranchiseInquiry />} />
<Route path="/invest/careers" element={<JoinICECareers />} />
<Route path="/invest/openings" element={<CareerOpportunities />} />
<Route path="/invest/internships" element={<InternshipOpportunities />} />
<Route path="/invest/why-work-with-ice" element={<WhyWorkWithICE />} />


{/* exhibit-at-ice */}

<Route path="/exhibit/why-exhibit" element={<WhyExhibitAtICE />} />
<Route path="/exhibit/benefits" element={<ExhibitorBenefits />} />
<Route path="/exhibit/why-brands" element={<WhyBrandsChooseICE />} />
<Route path="/exhibit/visibility-sales" element={<VisibilityCreatesSales />} />
<Route path="/exhibit/buyer-engagement" element={<LiveBuyerEngagement />} />
<Route path="/exhibit/lead-generation" element={<LeadGenerationAtICE />} />
<Route path="/exhibit/product-launch" element={<ProductLaunchPlatform />} />
<Route path="/exhibit/trust-transfer" element={<TrustTransferEffect />} />
<Route path="/exhibit/roi" element={<ExhibitionROI />} />
<Route path="/exhibit/startups" element={<WhyStartupsShouldExhibit />} />
<Route path="/exhibit/smes" element={<WhySMEShouldExhibit />} />
<Route path="/exhibit/large-brands" element={<WhyLargeBrandsExhibit />} />
<Route path="/exhibit/stall-booking" element={<StallBooking />} />
<Route path="/sponsor" element={<SponsorshipPackages />} />
<Route path="/exhibit/pavilion-booking" element={<PavilionBooking />} />
<Route path="/exhibit/branding-zones" element={<PremiumBrandingZones />} />
<Route path="/exhibit/led-digital" element={<LEDDigitalPromotions />} />
<Route path="/exhibit/stall-design" element={<CustomStallDesign />} />
<Route path="/exhibit/multi-city" element={<MultiCityParticipation />} />
<Route path="/exhibit/first-time-guide" element={<FirstTimeExhibitorGuide />} />
<Route path="/exhibit/faq" element={<ExhibitorFAQ />} />


{/* visit-ice */}

<Route path="/visit/why-visit" element={<WhyVisitICE />} />
<Route path="/visit/benefits" element={<VisitorBenefits />} />
<Route path="/visit/product-discovery" element={<ProductDiscovery />} />
<Route path="/visit/new-brands" element={<NewBrandDiscovery />} />
<Route path="/visit/innovation" element={<InnovationShowcase />} />
<Route path="/visit/live-demos" element={<LiveDemonstrations />} />
<Route path="/visit/deals" element={<ExclusiveExhibitionDeals />} />
<Route path="/visit/family" element={<FamilyEntertainmentShopping />} />
<Route path="/visit/compare-products" element={<CompareProductsLive />} />
<Route path="/visit/meet-founders" element={<MeetBrandFoundersDirectly />} />
<Route path="/visit/networking" element={<BusinessNetworking />} />
<Route path="/visit/buyer-seller-meetings" element={<BuyerSellerMeetings />} />
<Route path="/visit/distributor-connect" element={<DistributorRetailerConnect />} />
<Route path="/visit/b2b-marketplace" element={<B2BMarketplaceOpportunities />} />
<Route path="/visit/faq" element={<VisitorFAQ />} />
<Route path="/visit/experience-guide" element={<ExhibitionExperienceGuide />} />


{/* indrustries-at-ice */}

<Route path="/industries/real-estate" element={<RealEstateExpo />} />
<Route path="/industries/ev-mobility" element={<EVMobilityExpo />} />
<Route path="/industries/fmcg" element={<FMCGExpo />} />
<Route path="/industries/electronics" element={<ElectronicsExpo />} />
<Route path="/industries/home-appliances" element={<HomeAppliancesExpo />} />
<Route path="/industries/fashion-lifestyle" element={<FashionLifestyleExpo />} />
<Route path="/industries/food-beverage" element={<FoodBeverageExpo />} />
<Route path="/industries/ayurveda-organic" element={<AyurvedaOrganicExpo />} />
<Route path="/industries/healthcare-wellness" element={<HealthcareWellnessExpo />} />
<Route path="/industries/startup" element={<StartupExpo />} />
<Route path="/industries/made-in-india" element={<MadeInIndiaExpo />} />
<Route path="/industries/smart-home-tech" element={<SmartHomeTechnologyExpo />} />
<Route path="/industries/education" element={<EducationExpo />} />
<Route path="/industries/luxury" element={<LuxuryProductsExpo />} />
<Route path="/industries/financial-services" element={<FinancialServicesExpo />} />



{/* legacy */}

<Route path="/ice-exihibition" element={<AboutICEExhibitions />} />
<Route path="/ice-legacy/founder-vision" element={<FounderVision />} />
<Route path="/ice-legacy/philosophy" element={<OurMarketplacePhilosophy />} />
<Route path="/ice-legacy/mission-vision" element={<MissionVission />} />
<Route path="/ice-legacy/30-year-journey" element={<Our30YearJourney />} />
<Route path="/ice-legacy/timeline" element={<ICETimeline />} />
<Route path="/ice-legacy/milestones" element={<ICEMilestones />} />
<Route path="/ice-legacy/generations" element={<ICEAcrossGenerations />} />
<Route path="/ice-legacy/buyer-trust" element={<BuildingBuyerTrustSince1994 />} />
<Route path="/ice-legacy/marketplace-leadership" element={<LegacyOfMarketplaceLeadership />} />
<Route path="/ice-legacy/why-india-trusts" element={<WhyIndiaTrustsICE />} />
<Route path="/ice-legacy/brand-evolution" element={<ICEBrandEvolution />} />
<Route path="/ice-legacy/historic-archive" element={<HistoricExhibitionsArchive />} />
<Route path="/ice-legacy/historic-brands" element={<HistoricBrandParticipation />} />
<Route path="/ice-legacy/through-decades" element={<ICEThroughTheDecades />} />
<Route path="/ice-legacy/newspaper-coverage" element={<HistoricNewspaperCoverage />} />
<Route path="/ice-legacy/sushil-mantri-story" element={<TheSushilMantriStory />} />
<Route path="/ice-legacy/ice-to-igen" element={<ICEToIGeN />} />
<Route path="/ice-legacy/economic-contribution" element={<ICEEconomicContribution />} />

               {/* Admin */}
  
     {/* barnds and success  */}
<Route path="/admin/brands/top" element={<AdminTopBrandsAtICE />} />
<Route path="/admin/brands/historic" element={<AdminHistoricBrandParticipation />} />
<Route path="/admin/brands/emerging" element={<AdminEmergingBrandsAtICE />} />
<Route path="/admin/brands/success-stories" element={<AdminBrandSuccessStories />} />
<Route path="/admin/brands/marketplace-leaders" element={<AdminMarketplaceLeaders />} />
<Route path="/admin/brands/startups" element={<AdminStartupSuccessStories />} />
<Route path="/admin/sellers/success" element={<AdminSellerSuccessStories />} />
<Route path="/admin/buyers/success" element={<AdminBuyerSuccessStories />} />/admin
<Route path="/admin/brands/expansion" element={<AdminBusinessExpansionStories />} />
<Route path="/admin/brands/product-launches" element={<AdminProductLaunchStories />} />
<Route path="/admin/brands/video-testimonials" element={<AdminVideoTestimonials/>} />
<Route path="/admin/brands/across-india" element={<AdminICEAcrossIndia />} />
<Route path="/admin/brands/city-exhibitions" element={<AdminaAdminCityWiseExhibitionsbout />} />
<Route path="/admin/brands/national-network" element={<AdminNationalExhibitionNetwork />} />

  {/* upcoming expo */}

<Route path="/admin/expos/calendar" element={<AdminUpcomingEventsAndCalendar />} />
<Route path="/admin/expos/mega-events" element={<AdminMegaExpoEvents />} />
<Route path="/admin/expos/industry-specific" element={<AdminIndustrySpecificExpos />} />
<Route path="/admin/expos/multi-city" element={<AdminMultiCityEventSchedule />} />
<Route path="/admin/expos/exhibitor-registration" element={<AdminExhibitorRegistration />} />
<Route path="/admin/expos/visitor-registration" element={<AdminVisitorRegistration />} />
<Route path="/admin/sponsor/expo" element={<AdmiAdminSponsorshipRegistrationnabout />} />
<Route path="/admin/expos/vip-access" element={<AdminVIPAccessRegistration />} />
<Route path="/admin/expos/early-bird" element={<AdminEarlyBirdBooking />} />
<Route path="/admin/expos/launch-events" element={<AdminLaunchEvents />} />
<Route path="/admin/expos/b2b-trade" element={<AdminB2BTradeEvents />} />

{/* media-center */}

<Route path="/admin/gallery/photo" element={<AdminPhotoGallery />} />
<Route path="/admin/media/videos" element={<AdminVideoGallery />} />
<Route path="/admin/media/archives" element={<AdminHistoricArchives />} />
<Route path="/admin/media/celebrities" element={<AdminCelebritiesAtICE />} />
<Route path="/admin/media/vvips" element={<AdminVVIPsAtICE />} />
<Route path="/admin/media/political-leaders" element={<AdminPoliticalLeadersAtICE />} />
<Route path="/admin/media/industry-icons" element={<AdminIndustryIconsAtICE />} />
<Route path="/admin/media/press-releases" element={<AdminPressReleases />} />
<Route path="/admin/media/coverage" element={<AdminMediaCoverage />} />
<Route path="/admin/media/in-the-news" element={<AdminICEInTheNews />} />
<Route path="/admin/media/tv-digital" element={<AdminTVAndDigitalMediaCoverage />} />
<Route path="/admin/media/press-kit" element={<AdminPressKitDownload />} />
<Route path="/admin/media/blog/exhibition-trends" element={<AdminExhibitionTrendsBlog />} />
<Route path="/admin/media/blog/consumer-trends" element={<AdminConsumerTrendsBlog />} />
<Route path="/admin/media/blog/marketplace-insights" element={<AdminMarketplaceInsightsBlog />} />
<Route path="/admin/media/blog/physical-vs-digital" element={<AdminPhysicalVsDigitalMarketing />} />
<Route path="/admin/media/blog/brand-growth" element={<AdminBrandGrowthArticles />} />
<Route path="/admin/media/blog/future-exhibitions" element={<AdminFutureOfExhibitions />} />



{/* icetoigen */}

<Route path="/admin/IgenWorld" element={<AdminWhatIsIGEN />} />
<Route path="/admin/igen/ice-to-igen" element={<AdminICE1ToIGEN20 />} />
<Route path="/admin/igen/physical-to-digital" element={<AdminWhatICEDidPhysicallyIGENDigitally />} />
<Route path="/admin/igen/trust-platforms" element={<AdminTheFutureOfTrustPlatforms />} />
<Route path="/admin/igenNews" element={<AdminIndiaGlobalExpoNews />} />
<Route path="/admin/igen/recognition-economy" element={<AdminRecognitionEconomy />} />
<Route path="/admin/igen/reputation-economy" element={<AdminReputationEconomy />} />
<Route path="/admin/igen/global-buyer-discovery" element={<AdminGlobalBuyerDiscovery/>} />
<Route path="/admin/igen/export-marketplace" element={<AdminExportMarketplace />} />
<Route path="/admin/igen/b2b-trust" element={<AdminFutureOfB2BTrust />} />
<Route path="/admin/igen/sme-ecosystem" element={<AdminSMEEcosystem />} />
<Route path="/admin/igen/mission-2047" element={<AdminMission2047 />} />
<Route path="/admin/igen/1000-leaders" element={<AdminBuilding1000BusinessLeaders />} />
<Route path="/admin/igen/future-marketplace" element={<AdminFutureOfMarketplacePlatforms />} />

{/* industries and partnership */}


<Route path="/admin/partnership" element={<AdminPartnershipOpportunities />} />
<Route path="/admin/invest/investor-relations" element={<AdminInvestorRelations />} />
<Route path="/admin/invest/strategic-alliances" element={<AdminStrategicAlliances />} />
<Route path="/admin/invest/international-trade" element={<AdminInternationalTradePartnerships />} />
<Route path="/admin/invest/global-vision" element={<AdminGlobalMarketplaceVision />} />
<Route path="/admin/invest/india-expansion" element={<AdminIndiaExpansionStrategy />} />
<Route path="/admin/invest/brand-collaborations" element={<AdminBrandCollaborations />} />
<Route path="/admin/invest/joint-ventures" element={<AdminJointVentures/>} />
<Route path="/admin/invest/industry-associations" element={<AdminIndustryAssociations />} />
<Route path="/admin/invest/government" element={<AdminGovernmentCollaboration />} />
<Route path="/admin/invest/franchise" element={<AdminFranchiseInquiry />} />
<Route path="/admin/invest/careers" element={<AdminJoinICECareers />} />
<Route path="/admin/invest/openings" element={<AdminCareerOpportunities />} />
<Route path="/admin/invest/internships" element={<AdminInternshipOpportunities />} />
<Route path="/admin/invest/why-work-with-ice" element={<AdminWhyWorkWithICE />} />

{/* industries-at-ice */}

<Route path="/admin/industries/real-estate" element={<AdminRealEstateExpo />} />
<Route path="/admin/industries/ev-mobility" element={<AdminEVMobilityExpo />} />
<Route path="/admin/industries/fmcg" element={<AdminFMCGExpo />} />
<Route path="/admin/industries/electronics" element={<AdminElectronicsExpo />} />
<Route path="/admin/industries/home-appliances" element={<AdminHomeAppliancesExpo />} />
<Route path="/admin/industries/fashion-lifestyle" element={<AdminFashionLifestyleExpo />} />
<Route path="/admin/industries/food-beverage" element={<AdminFoodBeverageExpo />} />
<Route path="/admin/industries/ayurveda-organic" element={<AdminAyurvedaOrganicExpo />} />
<Route path="/admin/industries/healthcare-wellness" element={<AdminHealthcareWellnessExpo />} />
<Route path="/admin/industries/startup" element={<AdminStartupExpo />} />
<Route path="/admin/industries/made-in-india" element={<AdminMadeInIndiaExpo />} />
<Route path="/admin/industries/smart-home-tech" element={<AdminSmartHomeTechnologyExpo />} />
<Route path="/admin/industries/education" element={<AdminEducationExpo />} />
<Route path="/admin/industries/luxury" element={<AdminLuxuryProductsExpo />} />
<Route path="/admin/industries/financial-services" element={<AdminFinancialServicesExpo />} />








{/* visitice */}

<Route path="/admin/visit/why-visit" element={<AdminWhyVisitICE />} />
<Route path="/admin/visit/benefits" element={<AdminVisitorBenefits />} />
<Route path="/admin/visit/product-discovery" element={<AdminProductDiscovery />} />
<Route path="/admin/visit/new-brands" element={<AdminNewBrandDiscovery />} />
<Route path="/admin/visit/innovation" element={<AdminInnovationShowcase />} />
<Route path="/admin/visit/live-demos" element={<AdminLiveDemonstrations />} />
<Route path="/admin/visit/deals" element={<AdminExclusiveExhibitionDeals />} />
<Route path="/admin/visit/family" element={<AdminFamilyEntertainmentAndShopping />} />
<Route path="/admin/visit/compare-products" element={<AdminCompareProductsLive />} />
<Route path="/admin/visit/meet-founders" element={<AdminMeetBrandFoundersDirectly />} />
<Route path="/admin/visit/networking" element={<AdminBusinessNetworking />} />
<Route path="/admin/visit/buyer-seller-meetings" element={<AdminBuyerSellerMeetings />} />
<Route path="/admin/visit/distributor-connect" element={<AdminDistributorAndRetailerConnect />} />
<Route path="/admin/visit/b2b-marketplace" element={<AdminB2BMarketplaceOpportunities />} />
<Route path="/admin/visit/faq" element={<AdminVisitorFAQ />} />
<Route path="/admin/visit/experience-guide" element={<AdminExhibitionExperienceGuide />} />


{/* exhibitice */}

<Route path="/admin/exhibit/why-exhibit" element={<AdminWhyExhibitAtICE />} />
<Route path="/admin/exhibit/benefits" element={<AdminExhibitorBenefits />} />
<Route path="/admin/exhibit/why-brands" element={<AdminWhyBrandsChooseICE />} />
<Route path="/admin/exhibit/visibility-sales" element={<AdminVisibilityCreatesSales />} />
<Route path="/admin/exhibit/buyer-engagement" element={<AdminLiveBuyerEngagement />} />
<Route path="/admin/exhibit/lead-generation" element={<AdminLeadGenerationAtICE />} />
<Route path="/admin/exhibit/product-launch" element={<AdminProductLaunchPlatform />} />
<Route path="/admin/exhibit/trust-transfer" element={<AdminTrustTransferEffect />} />
<Route path="/admin/exhibit/roi" element={<AdminExhibitionROI />} />
<Route path="/admin/exhibit/startups" element={<AdminWhyStartupsShouldExhibit />} />
<Route path="/admin/exhibit/smes" element={<AdminWhySMEsShouldExhibit />} />

<Route path="/admin/exhibit/large-brands" element={<AdminWhyLargeBrandsExhibit />} />
<Route path="/admin/exhibit/stall-booking" element={<AdminStallBooking />} />
<Route path="/admin/sponsorship/package" element={<AdminSponsorshipPackages />} />
<Route path="/admin/exhibit/pavilion-booking" element={<AdminPavilionBooking />} />
<Route path="/admin/exhibit/branding-zones" element={<AdminPremiumBrandingZones />} />
<Route path="/admin/exhibit/led-digital" element={<AdminLEDAndDigitalPromotions />} />
<Route path="/admin/exhibit/stall-design" element={<AdminCustomStallDesign />} />
<Route path="/admin/exhibit/multi-city" element={<AdminMultiCityParticipation />} />
<Route path="/admin/exhibit/first-time-guide" element={<AdminFirstTimeExhibitorGuide />} />
<Route path="/admin/exhibit/faq" element={<AdminExhibitorFAQ />} />

{/* icelegacy */}

<Route path="/admin/ice-exhibition" element={<AdminIceLegacyWhyIndiaTrusts />} />
<Route path="/admin/about-ice-exhibition" element={<AdminAboutICEExhibitions />} />
<Route path="/admin/ice-legacy/founder-vision" element={<AdminFounderVision />} />
<Route path="/admin/ice-legacy/philosophy" element={<AdminOurMarketplacePhilosophy />} />
<Route path="/admin/ice-legacy/mission-vision" element={<AdminMissionVision />} />
<Route path="/admin/ice-legacy/30-year-journey" element={<AdminOur30YearJourney />} />
<Route path="/admin/ice-legacy/timeline" element={<AdminICEThroughTheDecades />} />
<Route path="/admin/ice-legacy/milestones" element={<AdminICEMilestones />} />
<Route path="/admin/ice-legacy/generations" element={<AdminICEAcrossGenerations />} />
<Route path="/admin/ice-legacy/buyer-trust" element={<AdminBuildingBuyerTrustSince1994 />} />

<Route path="/admin/ice-legacy/marketplace-leadership" element={<AdminLegacyOfMarketplaceLeadership />} />
<Route path="/admin/ice-legacy/why-india-trusts" element={<AdminWhyIndiaTrustsICE />} />
<Route path="/admin/ice-legacy/brand-evolution" element={<AdminICEBrandEvolution />} />
<Route path="/admin/ice-legacy/historic-archive" element={<AdminHistoricExhibitionsArchive />} />
<Route path="/admin/ice-legacy/historic-brands" element={<AdminHistoricBrandParticipation />} />
<Route path="/admin/ice-legacy/through-decades" element={<AdminICEThroughTheDecades />} />
<Route path="/old/gallery" element={<AdminOldExhibitionPhotos />} />
<Route path="/admin/ice-legacy/newspaper-coverage" element={<AdminHistoricNewspaperCoverage />} />
<Route path="/admin/ice-legacy/sushil-mantri-story" element={<AdminTheSushilMantriStory />} />
<Route path="/admin/ice-legacy/ice-to-igen" element={<AdminICE1ToIGEN2 />} />
<Route path="/admin/ice-legacy/economic-contribution" element={<AdminICEEconomicContribution />} />


          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/GalleryIndividuals" element={<GalleryIndividuals />} />
      <Route path="/gallery/:id" element={<GalleryDetail />} />
      <Route path="/me" element={<Me />} />
          <Route path="/brands/:slug" element={<BrandDetail />} />
          <Route path="/gallery/:slug" element={<GalleryDetail />} />
         
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
