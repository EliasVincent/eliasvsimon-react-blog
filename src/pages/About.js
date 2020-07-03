import React from "react";

import Markdown from "react-markdown";

import aboutText from "../pages.json";

import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="page-content">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "5vh",
            padding: "10px 20px",
            backgroundColor: "rgb(92, 0, 174)",
            color: "white",
          }}
        >
          About / Contact
        </h1>
        
        <Markdown source={aboutText[0].content} escapeHtml={false} />
      </div>
    </Layout>
  );
};

export default About;
