"use client";

export default function Rate() {
  return (
    <section className="bg-[#b3cf99] text-[#716045] py-20 px-4 text-center font-ebgaramond">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-ebgaramond mb-6">
          Rates and Insurance
        </h2>

        <p className="text-xl mb-3">Session Fee – $200 / individual</p>
        <p className="text-xl mb-6">Couples Session – $240</p>

        <p className="text-[19px] mb-4 leading-relaxed">
          I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </p>

        <p className="text-[18px] leading-relaxed">
          For out-of-network plans, I’ve partnered with Mentaya
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  );
}
