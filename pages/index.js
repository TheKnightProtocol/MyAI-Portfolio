import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Sankalp Sharma | AI/ML Portfolio</title>
      </Head>

      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sankalp Sharma</h1>
        <nav>
          <a href="#projects" className="mx-2 hover:underline">Projects</a>
          <a href="#experience" className="mx-2 hover:underline">Experience</a>
          <a href="#contact" className="mx-2 hover:underline">Contact</a>
        </nav>
      </header>

      <main className="p-6 space-y-12">
        <section id="about" className="space-y-4">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p>AI/ML Engineer specializing in Generative AI, LLMs, and NLP. Proficient in Python, TensorFlow, PyTorch, SQL. Skilled in building end-to-end ML pipelines, MLOps, and cloud deployment.</p>
        </section>

        <section id="projects" className="space-y-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/THEKNIGHTPROTOCOL/SentinelX" className="text-cyan-400 hover:underline">SentinelX - Predict. Prevent. Protect.</a>
              <p>Analyzed 7,000+ telecom customers using Python & SQL to improve retention strategies.</p>
            </li>
            <li>
              <a href="https://github.com/THEKNIGHTPROTOCOL/EchoLogic" className="text-cyan-400 hover:underline">EchoLogic: Voice-to-Documentation Pipeline</a>
              <p>Built a Faster-Whisper + GPT pipeline with Streamlit UI for automated meeting reports.</p>
            </li>
            <li>
              <a href="https://github.com/TheKnightProtocol/NeuroSync-AI" className="text-cyan-400 hover:underline">NeuroSync-AI: Brain-Computer Interface</a>
              <p>Developed a real-time BCI using EEG signals and TensorFlow for cognitive state detection.</p>
            </li>
          </ul>
        </section>

        <section id="experience" className="space-y-4">
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul>
            <li>
              <p><strong>Indian Space Academy Intern</strong> (Jun-Jul 2025) - Built ML pipelines for 100K+ satellite records using Python, SQL, TensorFlow & PyTorch.</p>
            </li>
          </ul>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Email: <a href="mailto:SankalpAIera@gmail.com" className="text-cyan-400 hover:underline">SankalpAIera@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/DatumLab" className="text-cyan-400 hover:underline">DatumLab</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sankalp-sharma-6342532b4" className="text-cyan-400 hover:underline">Sankalp Sharma</a></p>
        </section>
      </main>
    </div>
  );
}
