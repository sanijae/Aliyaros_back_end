import { Route, Routes } from "react-router-dom";
import { Body, GlobalStyled, MainSection } from "./GlobalStyle";
import Appbar from "./Components/Navbar/Appbar";
import Topics from './Pages/Topics/Topics';
import Proposals from './Pages/Proposals/Proposals';
import Projects from './Pages/Projects/Projects';
import Footer from "./Components/Footer/Footer";
import Auth from './Components/Auth/Auth';
import ResetPassword from './Components/Password_reset/ResetPassword';
import NewPassword from './Components/Password_reset/NewPassword';
import AddProjects from './Components/Add_New/AddProject';
import AddProposal from './Components/Add_New/AddProposal';
import AddTopic from './Components/Add_New/AddTopic';
import AddUser from './Components/Auth/AddUser';
import Details from './Components/Details/Details';
import ProjectsDetail from "./Components/Details/ProJectsDetails";
import ProposalDetails from "./Components/Details/ProposalDetail";
import TopicsDetails from "./Components/Details/TopicDetail";

function App() {
  const user = localStorage.getItem('user')

  return (
    <MainSection> 
      <GlobalStyled/>
      <Appbar/>
      <Body>
        <Routes>
          <Route path="/" exact index element={user ? <Projects/>:<Auth/>} />
          <Route path="/Projects" element={user ? <Projects/>:<Auth/>} />
          <Route path="/Proposals" element={user ? <Proposals/>: <Auth/>} />
          <Route path="/Topics" element={user ? <Topics/>: <Auth/>} />
          <Route path="/AddProjects" element={user ? <AddProjects/>: <Auth/>} />
          <Route path="/AddProposal" element={user ? <AddProposal/>: <Auth/>} />
          <Route path="/AddTopic" element={user ? <AddTopic/>: <Auth/>} />
          <Route path="/Detail/:title" element={user ? <Details/>: <Auth/>} />
          <Route path="/ProjectDetail/:title" element={user ? <ProjectsDetail/>: <Auth/>} />
          <Route path="/ProposalDetail/:title" element={user ? <ProposalDetails/>: <Auth/>} />
          <Route path="/TopicDetail/:title" element={user ? <TopicsDetails/>: <Auth/>} />
          <Route path="/AddUser" element={user ? <AddUser/>: <Auth/>} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/Auth" element={<Auth/>} />
        </Routes>
      </Body>
      <Footer/>
    </MainSection>
    );
}

export default App;
