import React from "react";

import Markdown from "react-markdown";

import gamesText from "../pages.json";

import Layout from "../components/Layout";

import "./pages.css";

const Games = () => {
  return (
    <Layout>
      <div className="post">
        <div className="page-content">
          <h1
            style={{
              textAlign: "center",
              marginBottom: "5vh",
              padding: "10px 20px",
              color: "white",
            }}
          >
            Games
          </h1>

          <Markdown source={gamesText[1].content} escapeHtml={false} />
        </div>
      </div>
    </Layout>
  );
};

export default Games