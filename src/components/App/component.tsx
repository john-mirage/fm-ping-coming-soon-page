import Footer from "@components/Footer";
import Form from "@components/Form";
import Header from "@components/Header";
import Image from "@components/Image";
import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <main>
        <Form />
        <Image />
      </main>
      <Footer />
    </div>
  );
};

export default App;
