import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const AboutUs = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Experienced developer with a strong focus on React JS and a
            background in quality assurance. Skilled in building robust web
            applications using React JS, ensuring optimal user experiences and
            clean code practices. Proficient in implementing UI/UX principles
            and best practices. Demonstrated expertise in React JS development,
            utilizing modern libraries and frameworks to deliver high-quality
            frontend solutions. Passionate about pursuing a career in React JS,
            seeking opportunities to further enhance skills and contribute to
            innovative projects. Committed to continuous learning and staying
            updated with the latest advancements in React JS to deliver
            cutting-edge and performant applications.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
