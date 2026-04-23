function Button({ className }) {
  return (
    <div className={className || "h-[44px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[120px]"} data-node-id="11:27" data-name="BUTTON">
      <div className="absolute bg-[#b4d5d6] inset-0 rounded-[14px]" data-node-id="11:23" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[15.91%_18.33%_18.18%_18.33%] leading-[normal] not-italic text-[#0e1313] text-[24px] whitespace-nowrap" data-node-id="11:24">
        START
      </p>
    </div>
  );
}

export default function FaceWorkCard({ className }) {
  return (
    <div className={className || "h-[480px] relative w-[360px]"} data-node-id="21:69" data-name="Component 1">
      <div className="absolute bg-[#e5f6f7] inset-0 rounded-[16px]" data-node-id="2:12" data-name="card" />
      <div className="absolute bg-[#394445] inset-[6.04%_6.67%_56.46%_6.67%] rounded-[12px]" data-node-id="8:18" data-name="Placeholder" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[56.88%_18.61%_37.08%_18.89%] leading-[normal] not-italic text-[#8ca5a6] text-[24px] whitespace-nowrap" data-node-id="9:20">
        FACE WOREK CARD
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[62.92%_33.06%_31.04%_32.22%] leading-[normal] not-italic text-[#8ca5a6] text-[24px] whitespace-nowrap" data-node-id="10:21">
        WORKS BY
      </p>
      <Button className="absolute inset-[82.29%_34.44%_8.33%_32.22%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}
