import React from "react";
import { Zap, ShieldCheck, Leaf, Gauge } from "lucide-react";

const features = [
  {
    name: "Built for the city",
    description:
      "Every scooter on Trovelo is vetted for range, reliability, and ride comfort, so your daily commute never feels like a compromise.",
    icon: Gauge,
  },
  {
    name: "Verified sellers only",
    description:
      "We check listings and seller history before they go live, so you can buy with confidence.",
    icon: ShieldCheck,
  },
  {
    name: "Lower-impact transport",
    description:
      "Electric scooters cut emissions versus short car trips. Trovelo makes it easy to find one that fits your routine.",
    icon: Leaf,
  },
];

const About = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-24 sm:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-6">
            <Zap className="size-4 fill-blue-500 text-blue-500" />
            About Trovelo
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            The marketplace for electric scooters
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Trovelo connects riders with quality electric scooters from trusted
            sellers. Whether you're upgrading your commute or selling a scooter
            you've outgrown, we make it simple, transparent, and fast.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-start">
              <div className="rounded-lg bg-blue-500 p-2.5 mb-4">
                <feature.icon
                  className="size-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="text-base font-semibold text-ink">
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-slate-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;
