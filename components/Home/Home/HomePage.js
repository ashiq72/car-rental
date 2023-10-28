import Hero from "../Hero/Hero";
import CategoryList from "../CategoryList/CategoryList";
import Choose from "../Choose/Choose";
import HeaderHome from "../../Shared/Header/HeaderHome";

export default function HomePage() {
  return (
    <>
      <HeaderHome />
      <Hero />
      <CategoryList />
      <Choose />
    </>
  );
}
