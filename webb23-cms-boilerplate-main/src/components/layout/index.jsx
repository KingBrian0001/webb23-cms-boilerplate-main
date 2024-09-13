// import "@/components/styling/index.css";
import Header from "../nestable/Header";
import Footer from "../nestable/Footer"; // Uncomment if you have a Footer component

export default function Layout({ config, children }) {
  return (
    <>
      <Header config={config} />
      <main>{children}</main>
      <Footer /> {/* Uncomment and implement the Footer if needed */}
    </>
  );
}
