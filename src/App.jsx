import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-gray-100 h-screen flex justify-center items-center ">
        <h1 className="text-3xl">Projects</h1>
      </div>

      {/* Projects Section */}
    </>
  );
}

export default App;
