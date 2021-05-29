import { Section } from "./components/Section";
import "./blog-section.css";
import { BlogCard } from "./ui/BlogCard";
import { useEffect, useState } from "react";
const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);

async function getJson(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Не удалось получить json по " + url);
  }
}
export const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getBlog() {
      try {
        const [blogRes, photoRes] = [
          await getJson(
            "https://jsonplaceholder.typicode.com/posts/?start=0&_limit=4"
          ),
          await getJson(
            "https://jsonplaceholder.typicode.com/photos/?start=0&_limit=4"
          )
        ];
        setBlogs(zip(blogRes, photoRes));
      } catch (e) {
        setError(true);
      }
    }
    getBlog();
  }, []);
  if (error) {
    return (
      <Section className="middle-section">
        <div style={{ color: "red" }}>Не удалось загрузить посты</div>
      </Section>
    );
  }
  return (
    <Section className="middle-section">
      <h3 className="middle-section__header">Header</h3>
      <div className="middle-section__items m-middle-section__items planshet-middle-section__items">
        {blogs.length &&
          blogs.map(([blogInfo, photoInfo], index) => {
            return (
              <BlogCard
                title={blogInfo.title}
                description={blogInfo.body}
                key={index}
                src={photoInfo.url}
              />
            );
          })}
      </div>
    </Section>
  );
};
