"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Web Design",
    description:
      "Beautiful, intuitive, and user-focused website designs that reflect your brand and engage your audience. Includes UI/UX, prototyping, and branding.",
    image: "/design-image.jpg", // You can change this to a more appropriate image if desired
    imagePosition: "left",
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites built with the latest technologies. Custom features, seamless animations, and optimized for all devices.",
    image: "/service-image1.jpg", // You can change this to a more appropriate image if desired
    imagePosition: "right",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isImageLeft = index % 2 === 0;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row ${
        !isImageLeft ? "md:flex-row-reverse" : ""
      } items-center mb-16`}
    >
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={260}
          className="rounded-xl object-cover w-full max-w-[400px] h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 px-0 md:px-10 text-center md:text-left">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {service.title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I specialize in designing and developing websites that help your
            business grow. Here’s how I can help you succeed online:
          </p>
        </motion.div>
        <div>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
