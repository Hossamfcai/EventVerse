import { Minus, Plus } from "lucide-react";
import { useSelector } from "react-redux";
export default function TicketCard({ ticket }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div className="space-y-space-sm">
      <div
        className={`p-space-md rounded-xl transition-all border bg-surface-container-lowest border-outline-variant/30 ${ticket?.availableQuantity ? "bg-surface-container-lowest" : "opacity-60 bg-surface-container-low cursor-not-allowed"}`}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-0.5 pr-2">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`font-label-lg font-bold text-on-surface ${ticket?.availableQuantity ? "text-on-surface" : "text-secondary line-through"}`}
              >
                {ticket?.name}
              </span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-semibold  ${ticket?.availableQuantity ? "bg-success/10 text-success" : "bg-surface-container-high text-on-surface"}`}
              >
                {ticket?.availableQuantity
                  ? ` Available . ${ticket?.availableQuantity} tickets`
                  : "Sold out"}
              </span>
            </div>
            {/* <p className="font-body-sm text-body-sm text-secondary">
              Full day access to the event.
            </p> */}
          </div>
          <div className="text-right shrink-0">
            <span
              className={`font-headline-sm text-headline-sm font-bold  ${ticket?.availableQuantity ? "text-on-surface" : "text-secondary line-through"}`}
            >
              ${ticket?.price}
            </span>
          </div>
        </div>
        {/* Quantity */}
        {isAuthenticated && (
          <div className="mt-space-md pt-space-sm flex items-center justify-between border-t border-outline-variant/20">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
              Quantity:
            </span>
            <div className="flex items-center gap-3 bg-surface-container px-3 py-1 rounded-full">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="cursor-pointer w-7 h-7 rounded-full bg-surface-container-lowest hover:bg-surface-container-high flex items-center justify-center font-bold text-on-surface transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed "
                disabled={!ticket?.availableQuantity}
              >
                <Minus size={16} aria-hidden="true" />
              </button>
              <span className="font-label-lg font-bold text-on-surface w-6 text-center">
                0
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                disabled={!ticket?.availableQuantity}
                className="cursor-pointer w-7 h-7 rounded-full bg-surface-container-lowest hover:bg-surface-container-high flex items-center justify-center font-bold text-on-surface transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
