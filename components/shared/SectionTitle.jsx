const SectionTitle = ({ title }) => {
  return (
    <h2 className="flex z-[9999] justify-center">
      <span className="block w-fit px-3 text-center text-2xl italic 
      bg-gradient-to-r from-[#FCBC05] via-[#8900EF] to-[#4EFEF6]
      bg-text 
      font-PTChaser lg:text-6xl">
        {title}
      </span>
    </h2>
  );
};

export default SectionTitle;
