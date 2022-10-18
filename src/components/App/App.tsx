import Footer from "@components/Footer";
import Header from "@components/Header";
import Main from "@components/Main";

const App = () => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-start px-24 pt-84 pb-36 lg:pb-48">
      <Header className="mb-40 lg:mb-48" />
      <Main className="mb-32" />
      <Footer className="mt-auto" />
    </div>
  );
};

export default App;
