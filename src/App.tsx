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
import IceExhibition from "./components/IceExhibition";


import IceLegacyWhyIndiaTrusts from "./pages/legacy/IceLegacyWhyIndiaTrusts";


import Timeline from "./pages/Timeline";
import Milestones from "./pages/Milestones";
;
import AdminIceLegacytrust from "./pages/legacy/AdminFounderVision";
import BuildingBuyerTrust from "./pages/legacy/BuildingBuyerTrust";
import IceExihibition from "./pages/legacy/IceExihibition";
import FounderVision from "./pages/legacy/FounderVision";
import Philosophy from "./pages/legacy/Philosophy";
import MissionVission from "./pages/legacy/MissionVission";
import TimeLine from "./pages/legacy/TimeLine";
import MileStone from "./pages/legacy/MileStone";
import Generation from "./pages/legacy/Generation";
import Markeplaceleadership from "./pages/legacy/Markeplaceleadership";
import IcebrandEvolution from "./pages/legacy/IcebrandEvolution";
import HistoricAchieve from "./pages/legacy/HistoricAchieve";
import HistoricBrandParticipation from "./pages/legacy/HistoricbrandParticipation";
import Decades from "./pages/legacy/Decades";
import NewpaperCoverage from "./pages/legacy/newpaperCoverage";
import SushilMantri from "./pages/legacy/SushilMantri";
import IcetoIgen from "./pages/legacy/IcetoIgen";
import EconomicContribution from "./pages/legacy/EconomicContribution";
import IceJourney from "./pages/legacy/IceJourney";
import Adminabout from "./pages/legacy/AdminICE Exhibitions";
import AdminFounderVision from "./pages/legacy/AdminFounderVision";
import AdminPhilosophy from "./pages/legacy/AdminMarketplace Philosophy";
import AdminMissionVission from "./pages/legacy/AdminMissionVission";
import AdminJourney from "./pages/legacy/Admin30yearsJourney";
import AdminIceTimeline from "./pages/legacy/AdminIceTimeline";
import AdminMilestone from "./pages/legacy/AdminMilestone";
import AdminBuildingBuyertrust from "./pages/legacy/AdminBuildingBuyers";
import AdminLeadership from "./pages/legacy/AdminLeadership";
import AdminIceBrand from "./pages/legacy/AdminIceBrand";
import AdminHistoricAchieve from "./pages/legacy/AdminHistoricAchieve";
import AdminHistoricBrand from "./pages/legacy/AdminHistoricBrand";
import AdminthroughDecades from "./pages/legacy/AdminIceThroughDecades";
import AdminNewspaper from "./pages/legacy/AdminNewpaper";
import AdminSushilMantri from "./pages/legacy/AdminsushilMantri";
import AdminIcetoIgen from "./pages/legacy/AdminIcetoIgen";
import AdminEconomic from "./pages/legacy/AdminEconomicExihibition";

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
          <Route path="/ice-legacy/buyer-trust" element={<BuildingBuyerTrust />} />
          <Route path="/ice-exihibition" element={<IceExihibition />} />
          <Route path="/ice-legacy/founder-vision" element={<FounderVision />} />
          <Route path="/ice-legacy/philosophy" element={<Philosophy />} />
          <Route path="/ice-legacy/mission-vision" element={<MissionVission />} />
          <Route path="/ice-legacy/30-year-journey" element={<IceJourney />} />
          <Route path="/ice-legacy/timeline" element={<TimeLine />} />
          <Route path="/ice-legacy/milestones" element={<MileStone />} />
          <Route path="/ice-legacy/generations" element={<Generation />} />
          <Route path="/ice-legacy/marketplace-leadership" element={<Markeplaceleadership />} />
          <Route path="/ice-legacy/brand-evolution" element={<IcebrandEvolution />} />
          <Route path="/ice-legacy/historic-archive" element={<HistoricAchieve />} />
          <Route path="/ice-legacy/historic-brands" element={<HistoricBrandParticipation />} />
          <Route path="/ice-legacy/through-decades" element={<Decades />} />
          <Route path="/ice-legacy/newspaper-coverage" element={<NewpaperCoverage />} />
          <Route path="/ice-legacy/sushil-mantri-story" element={<SushilMantri />} />
          <Route path="/ice-legacy/ice-to-igen" element={<IcetoIgen />} />
          <Route path="/ice-legacy/economic-contribution" element={<EconomicContribution />} />
         
          <Route path="/ice-legacy/why-india-trusts" element={<IceLegacyWhyIndiaTrusts />} />
         
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
