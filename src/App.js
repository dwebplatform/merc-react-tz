import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { TopSection } from "./TopSection";
import { BlogSection } from "./BlogSection";
import { FormSection } from "./FormSection";
import { Footer } from "./Footer";
import "./styles.css";
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <TopSection />
        <BlogSection />
        <FormSection />
        <Footer />
      </main>
    </div>
  );
}
