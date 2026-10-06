import Navbar from "../../../Components/ui/Navbar";
import Footer from "../../../Components/ui/Footer";
import { useDispatch, useSelector } from "react-redux";
import Note from "../Components/Note";
import EventHeader from "../../../Components/ui/EventDetails/EventHeader";
import EventDescription from "../../../Components/ui/EventDetails/EventDescription";

import EventDetailsSkeleton from "../../../Components/ui/EventDetails/EventDetailsSkeleton";
import TicketTypesContainer from "../../../Components/ui/TicketTypes/TicketTypesContainer";
import { useEffect } from "react";
import { getSingleEvent } from "../../../Store/Slices/eventsSlice";
import { useParams } from "react-router-dom";
export default function EventDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, []);
  console.log("render from event details");
  return (
    <>
      {!isAuthenticated && <Navbar />}
      {loading ? (
        <EventDetailsSkeleton />
      ) : (
        <main className="w-full pt-20 bg-background">
          {!isAuthenticated && <Note />}
          <div className="flex flex-col w-full">
            <div className="w-full bg-background">
              <div className="max-w-[1360px] mx-auto px-gutter py-space-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                  {/*  LEFT COLUMN */}
                  <div className="lg:col-span-8 flex flex-col gap-space-xl">
                    {/* Event Header */}
                    <EventHeader />
                    {/* ABOUT EVENT*/}
                    <EventDescription />
                  </div>
                  {/*  RIGHT COLUMN TICKETS  */}
                  <TicketTypesContainer />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      {!isAuthenticated && <Footer />}
    </>
  );
}
