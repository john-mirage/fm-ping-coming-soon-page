import Footer from "@components/Footer";
import Form from "@components/Form";
import Header from "@components/Header";
import Image from "@components/Image";
import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-24 pt-84 pb-36">
      <Header className="mb-32" />
      <main className="mb-32">
        <Form className="mb-72" />
        <Image />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default App;
