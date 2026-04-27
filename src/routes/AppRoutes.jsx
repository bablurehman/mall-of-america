import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import EventsPage from "../modules/events/EventsPage";
import LeasingPage from "../modules/leasing/LeasingPage";
import SponsorshipPage from "../modules/sponsorship/SponsorshipPage";

import VenuesPage from "../modules/venues/VenuesPage";
import VenueRotunda from "../modules/venues/VenueRotunda";
import VenuePerforming from "../modules/venues/VenuePerforming";
import VenueExposition from "../modules/venues/VenueExposition";

const AppRoutes = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* EVENTS */}
      <Route
        path="/events"
        element={
          <MainLayout>
            <EventsPage />
          </MainLayout>
        }
      />

      {/* LEASING */}
      <Route
        path="/leasing"
        element={
          <MainLayout>
            <LeasingPage />
          </MainLayout>
        }
      />

      {/* SPONSORSHIP */}
      <Route
        path="/sponsorship"
        element={
          <MainLayout>
            <SponsorshipPage />
          </MainLayout>
        }
      />

      {/* VENUES LIST */}
      <Route
        path="/venues"
        element={
          <MainLayout>
            <VenuesPage />
          </MainLayout>
        }
      />

      {/* VENUE DETAILS */}
      <Route
        path="/venues/rotunda"
        element={
          <MainLayout>
            <VenueRotunda />
          </MainLayout>
        }
      />

      <Route
        path="/venues/performing-arts"
        element={
          <MainLayout>
            <VenuePerforming />
          </MainLayout>
        }
      />

      <Route
        path="/venues/exposition"
        element={
          <MainLayout>
            <VenueExposition />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
