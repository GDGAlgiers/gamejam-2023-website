const SectionTitle = ({ title }) => {
  return (
    <h2 className="flex justify-center">
      <span className="text-center text-2xl italic bg-gradient-to-r from-[#FCBC05] via-[#8900EF] to-[#4EFEF6] text-transparent bg-clip-text font-PTChaser lg:text-6xl">
        {title}
      </span>
    </h2>
  );
};

export default SectionTitle;
