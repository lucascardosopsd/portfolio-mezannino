"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  classname?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  classname,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-xl mx-auto mb-6 text-center ${classname}`}>
      <h2 className="text-red mb-2 text-2xl font-semibold">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
