import { Suspense } from "react";
import Loading from "../components/loading";

function AboutLayout({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default AboutLayout;
