import GlobalStyles from "./styles/GlobalStyles.styles";
import Cover from "./pages/Cover";
import About from "./pages/About";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Company from "./pages/Company";
import Skills from "./pages/Skills";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import SideNav from "./components/SideNav";

function Root() {
  return (
    <>
      <GlobalStyles />
      <SideNav />
      <Cover />
      <About />
      <Project />
      <Team />
      <Company />
      <Skills />
      <Process />
      <Contact />
    </>
  );
}

export default Root;
