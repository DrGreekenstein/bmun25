import CommList from "@/components/commList";
import Resources from "@/components/studyGuides";
import ContactForm from "@/components/contactForm";
import NavBar from "@/components/navbar";
import Chatbot from "@/components/chatbot/chatbot";
import BGAnimation from "@/components/utils/animation";


export default function Home() {
  const studyGuideList = [
    'adhoc', 'unhsc','disec','asean','fcic','specpol'
  ]

  return (
    <>
    <NavBar/>
    {/* <BGAnimation/> */}
    <Chatbot/>
    </>
  );
}
