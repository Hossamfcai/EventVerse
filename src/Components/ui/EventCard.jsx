import { cardVariants } from "../../utils/constantsVariants";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, MapPin, Ticket, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
export default function EventCard({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const date = new Date(data.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.article
      className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <div>
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
          <img
            src={
              data.imageUrl
                ? data.imageUrl
                : "https://lh3.googleusercontent.com/aida-public/AB6AXuDXmQewgomsrcLzLQ0eg8CAcIk0T7wiWZfQlnXQ8yMgeEe1bSNB0f4BeQAXIId1n0iYj7MNfFvid1gTZL_TISh7mnAkh7Mx0Kd6t2P0W2r9tk5YwkHQcFPAK_VRuGQyKx9uxLNuAyZsutRXG_VOjLruLZOnCVj_ZiQIt8L4BR2LXpdRkKRvilDMuYyCklLar3lJGD58hrMMiyx5mqDa37eoEqTVyU73B2vlzlsTlzB3Xxbeq2nkcmeL"
            }
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

          <div className="absolute top-space-md left-space-md right-space-md flex items-center justify-between pointer-events-none">
            <span className="pointer-events-auto bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
              {data.category.name}
            </span>
            {location.pathname.includes("Home") && (
              <button
                aria-label="Save Event"
                className="pointer-events-auto w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary hover:bg-surface-container-lowest flex items-center justify-center transition-colors shadow-sm"
              >
                <Heart aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="absolute bottom-space-md left-space-md text-on-primary flex items-center gap-1.5 font-label-sm text-label-sm">
            <MapPin className="text-[16px]" aria-hidden="true" />
            <span>{data.address}</span>
          </div>
        </div>

        <div className="p-space-lg">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{`${data.startTime} - ${data.endTime}`}</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
            {data.title}
          </h3>
          <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            {data.description}
          </p>
        </div>
      </div>

      <div className="p-space-lg pt-space-md bg-surface-container-low/50 flex items-center justify-between">
        <div>
          <span className="font-label-sm text-label-sm text-on-surface-variant block">
            {data.ticketTypes[0].name}
          </span>
          <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
            {`From $${data.ticketTypes[0].price}`}
          </div>
        </div>
        <button
          onClick={() => {
            navigate(`/Eventdetails/${data.id}`);
          }}
          className="hover:scale-105 transition-transform duration-300 drop-shadow-xl cursor-pointer font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-md py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-1.5 group"
        >
          {location.pathname.includes("Home") ? (
            <>
              <span>Book Ticket</span>
              <Ticket
                className="text-[16px] group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              {" "}
              <span>View Detials</span>
              <ArrowRight className="text-[16px] " aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}
