import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 30,
    suffix: "%",
    label: "Cost Efficiency",
    description:
      "We negotiate directly with trusted factories to deliver consistently better pricing on your garments",
  },
  {
    value: 70,
    suffix: "%",
    label: "Faster Launches",
    description:
      "Streamlined sourcing and production workflows mean your products reach market sooner",
  },
  {
    value: 100,
    suffix: "%",
    label: "Transparency",
    description:
      "Ethical sourcing, open communication and total cost clarity from first quote to final delivery",
  },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 bg-foreground">
      <div className="container-custom" ref={containerRef}>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {stat.label}
              </h3>
              <p className="text-white/60 text-sm md:text-base">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
