import MotionH1 from "@/components/MotionH1";

const CreativePage = () => {
  return (
    <section className="pt-20 px-8 flex flex-col justify-center text-white">
      <p className="mt-4">Hi there, my name is</p>
      <MotionH1 className="text-4xl sm:text-6xl font-bold ">
        Mortada Emad
      </MotionH1>
      <MotionH1 className="text-4xl sm:text-6xl font-bold">
        I&apos;m a Junior Front-End Developer.
      </MotionH1>
      <p className=" py-4 max-w-[700px]">
        I’m a Front-End Developer specializing in building exceptional digital
        experiences. Currently, I’m focused on building responsive web
        applications.
      </p>
    </section>
  );
};

export default CreativePage;
