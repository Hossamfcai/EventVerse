export default function TotalPrice() {
  return (
    <div className="pt-space-md space-y-space-xs bg-surface-container-low p-space-md rounded-xl text-body-sm font-body-sm">
      <div className="space-y-space-xs divide-y divide-outline-variant/30">
        <div className="py-1 text-secondary text-body-sm italic text-center">
          No tickets selected yet. Choose your quantity above.
        </div>
      </div>
      <div className="flex items-center justify-between pt-space-xs mt-space-xs border-t border-outline-variant/40 text-on-surface font-headline-sm text-headline-sm font-bold">
        <div>
          <span>Total Due</span>
          <span className="block text-label-sm font-normal text-secondary">
            0 tickets selected
          </span>
        </div>
        <span>$0.00</span>
      </div>
    </div>
  );
}
