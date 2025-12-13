import React from 'react'

import Layout from "../components/Layout";

import "./pages.css"
import "../components/components.css"

const AppsSite = () => {
    return (
        <div>
            <Layout>
                <div className="post">
                    <div className="page-content"
                        style={{
                            textAlign: "center",
                            marginBottom: "5vh",
                            padding: "10px 20px 30px 20px",
                            color: "white",
                            textDecoration:"none"
                        }}
                    >
                        <h1>Apps</h1>
                        <hr/>
                        <h2 className="apps-link"><a target="_blank" rel="noopener noreferrer" href="https://snotes.maidsin.space/">SNOTES - Simple Notes App</a></h2>
                        <h2 className="apps-link"><a target="_blank" rel="noopener noreferrer" href="https://github.com/EliasVincent/whisper-subtitles-webui">Whisper Subtitles WebUI</a></h2>
                        <h2 className="apps-link"><a target="_blank" rel="noopener noreferrer" href="https://eliasvincent.github.io/elden-ring-rune-calculator/">Elden Ring Rune Calculator</a></h2>
                        <h2 className="apps-link"><a target="_blank" rel="noopener noreferrer" href="https://github.com/EliasVincent/joplin-email-note">Joplin Email Note Plugin</a></h2>
                        <h2 className="apps-link"><a target="_blank" rel="noopener noreferrer" href="https://github.com/EliasVincent/ano-books">Ano Books Repo</a></h2>
                        <hr/>
                    </div>
                </div>
            </Layout>

        </div>
    )
}

export default AppsSite