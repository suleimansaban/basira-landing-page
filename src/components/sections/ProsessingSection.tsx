'use client';

import Image from 'next/image';

export default function ProcessSection() {
  const processSteps = [
    {
      id: 1,
      title: 'Assessment',
      description:
        "A thorough analysis of the client's current state, identifying root causes of challenges and mapping opportunities",
      icon: '/images/img_test_results.png',
    },
    {
      id: 2,
      title: 'Strategy',
      description:
        "A thorough analysis of the client's current state, identifying root causes of challenges and mapping opportunities",
      icon: '/images/img_mind_map.png',
    },
    {
      id: 3,
      title: 'Execution',
      description:
        'Working hand-in-hand with client teams to ensure effective implementation of strategies, providing guidance and support',
      icon: '/images/img_goal.png',
    },
    {
      id: 4,
      title: 'Execution',
      description:
        'Working hand-in-hand with client teams to ensure effective implementation of strategies, providing guidance and support',
      icon: '/images/img_goal.png',
    },
  ];

  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-lato font-bold text-center mb-12 md:mb-16 lg:mb-20 px-4">
        Our Strategic <span className="text-orange-500">Approach</span>
      </h2>

      {/* MOBILE & TABLET: Vertical Layout */}
      <div className="block lg:hidden px-4">
        <div className="relative max-w-sm mx-auto">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative mb-16 last:mb-0">
              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[280px] w-0.5 h-16 bg-[#0D1BA1]" />
              )}

              <MobileStep step={step} />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP: Horizontal Zigzag Layout */}
      <div className="hidden lg:block">
        <div className="relative mx-auto w-[1263px] h-[405px]">
          {/* Desktop SVG ZIG-ZAG LINE */}
          <svg
            width="1263"
            height="405"
            viewBox="0 0 1263 405"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            <path
              d="
                M 40 20
                V 360
                H 340
                V 20
                H 640
                V 360
                H 940
                V 20
                H 1240
              "
              stroke="#0D1BA1"
              strokeWidth="1"
            />
          </svg>

          {/* Desktop STEPS */}
          <DesktopStep step={processSteps[0]} x={60} y={40} />
          <DesktopStep step={processSteps[1]} x={360} y={40} />
          <DesktopStep step={processSteps[2]} x={660} y={40} />
          <DesktopStep step={processSteps[3]} x={950} y={40} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- MOBILE STEP COMPONENT ---------------- */
function MobileStep({
  step,
}: {
  step: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}) {
  return (
    <div className="relative">
      {/* NUMBER CIRCLE */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-[3px] border-[#0D1BA1] bg-white text-[#0D1BA1] font-lato font-bold flex items-center justify-center z-10 text-lg">
        {step.id}
      </div>

      {/* CONTENT BOX */}
      <div className="p-5 bg-white border-2 border-gray-300 rounded-xl shadow-sm">
        <Image
          src={step.icon}
          alt={step.title}
          width={50}
          height={50}
          className="mb-3 grayscale opacity-70"
        />

        <h3 className="font-lato font-bold mb-2 text-black text-lg">
          {step.title}
        </h3>

        <p className="text-sm font-lato font-normal text-gray-700 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

/* ---------------- DESKTOP STEP COMPONENT ---------------- */
function DesktopStep({
  step,
  x,
  y,
}: {
  step: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
  x: number;
  y: number;
}) {
  const isTop = step.id % 2 !== 0;

  return (
    <div
      className="absolute w-[260px]"
      style={{ left: x, top: y }}
    >
      {/* NUMBER CIRCLE */}
      <div
        className={`absolute left-[-13px] -translate-x-1/2 ${
          isTop ? '-top-10' : '-bottom-10'
        } w-14 h-14 rounded-full border-2 border-[#0D1BA1] bg-white text-[#0D1BA1] font-lato font-bold flex items-center justify-center z-10`}
      >
        {step.id}
      </div>

      {/* CONTENT BOX */}
      <div className="p-6 bg-white">
        <Image
          src={step.icon}
          alt={step.title}
          width={40}
          height={40}
          className="mb-4"
        />

        <h3 className="font-lato font-semibold mb-2 text-black">
          {step.title}
        </h3>

        <p className="text-sm font-lato font-normal text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
