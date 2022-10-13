import Footer from "@components/Footer";
import Form from "@components/Form";
import Header from "@components/Header";
import Image from "@components/Image";
import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-start px-24 pt-84 pb-36">
      <Header className="mb-32" />
      <main className="mb-32">
        <Form className="mx-auto mb-72 max-w-280 lg:max-w-none" />
        <Image />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default App;
