import CommList from "@/components/commList";
import Resources from "@/components/studyGuides";
import ContactForm from "@/components/contactForm";
import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  const studyGuideList = [
    'adhoc', 'unhsc','disec','asean','fcic','specpol'
  ]

  return (
    <NavBar/>
  );
}
