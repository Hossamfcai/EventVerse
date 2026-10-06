import TicketCard from "../../../Components/ui/TicketTypes/TicketCard";
import TotalPrice from "../../../Components/ui/TicketTypes/TotalPrice";
import { Ticket, Lock, QrCode } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { sectionVariants } from "../../../utils/constantsVariants";
export default function TicketTypesContainer() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { specificEvent } = useSelector((state) => state.events);
  return (
    <motion.aside
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      className="lg:col-span-4 sticky top-28"
    >
      <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-xl space-y-space-md">
        {/* Ticket Header */}
        <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest">
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Select Tickets
            </h3>
            <p className="font-body-sm text-body-sm text-secondary">
              All venue fees & municipal VAT included
            </p>
          </div>
          <Ticket size={22} className="text-secondary" aria-hidden="true" />
        </div>
        {/*  TICKET 1  */}
        {specificEvent?.ticketTypes?.map((ticket) => {
          return <TicketCard ticket={ticket} key={ticket.id} />;
        })}
        {/*  PRICE BREAKDOWN  */}
        <TotalPrice />
        {/*  ACTIONS  */}

        <button
          type="button"
          className="w-full py-4 px-6 rounded-xl bg-primary text-on-primary font-headline-sm text-headline-sm font-semibold hover:bg-inverse-surface active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isAuthenticated}
        >
          <span>Select Tickets to Continue</span>
          {!isAuthenticated && <Lock size={20} aria-hidden="true" />}
        </button>

        {/*  TRUST BADGES  */}
        <div className="pt-space-sm space-y-2 text-label-sm text-secondary">
          <div className="flex items-center gap-2">
            <QrCode size={18} className="text-[#15803D]" aria-hidden="true" />
            <span>Rapid QR Gate Admission & NFC terminal entry</span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
