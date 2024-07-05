import { HorizontalLine } from "common/GiobalStyles";
import { About } from "./About/About";
import { DataContainer, MainContainer } from "./App.styled";
import { Cases } from "./Cases/Cases";
import { ContactUs } from "./ContactUs/ContactUs";
import { Electricity } from "./Electricity/Electricity";
import { FAQ } from "./FAQ/FAQ";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <MainContainer >
      <DataContainer>
        <Header />
        <Main />
        <About />
        <Electricity />
        <Cases />
        <FAQ />
        <ContactUs />

        <HorizontalLine />
        
        <Footer />
      </DataContainer>
      <ToastContainer autoClose={1500} />
    </MainContainer>
  );
};
