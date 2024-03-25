import Header from "./components/Header";
import ContentComponent from "./components/ContentComponent"

export default function Home() {
  return (
    <>
      <Header/>
      <ContentComponent
        title="หน้าแรกพันทิป"
        detail="Announce"
      />
    </>
  );
}
