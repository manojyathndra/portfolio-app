<template>
  <section class="charter">
    <div class="charter__media">
      <video class="charter__video" autoplay muted loop playsinline>
        <source src="@/assets/Charter.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="charter__overlay"></div>
      <div class="charter__badge">
        <span>System</span>
        <strong>Engineer II</strong>
      </div>
    </div>

    <div class="charter__content">
      <p class="charter__eyebrow">Charter Communications Inc. · Colorado</p>
      <h2 class="charter__title">System Engineer II</h2>
      <p class="charter__period">August 2022 – Present</p>
      <ul class="charter__list">
        <li>Developed full-fledged web applications using Ruby for backend, Vue.js for frontend, and Python Flask APIs, achieving up to 150 hours reduction in weekly operational time.</li>
        <li>Owned a large-scale migration across servers with different operating systems, implementing security changes and testing for stability in the new environment.</li>
        <li>Upgraded applications to the latest Ruby and Python versions with required code changes for compatibility and maintainability.</li>
        <li>Designed automation tools using Ruby, Node.js, and Python to support core video operations, streamlining channels and saving up to 600 hours per month.</li>
        <li>Built and maintained databases and APIs, including Flask APIs with SQLAlchemy and Postgres queries across multiple tables.</li>
        <li>Partnered with Operations to build CI/CD pipelines for Ruby, Vue.js, and Node projects from GitLab.</li>
        <li>Built Docker images and containerized apps for deployment, efficiency, and scalability across Python and Ruby services.</li>
        <li>Developed Airflow jobs using Python, Ruby, and Shell Scripting, fully containerized for reliable orchestration.</li>
        <li>Created custom Ruby gems and Python packages to reduce duplication and standardize reusable logic.</li>
        <li>Integrated Elasticsearch, Filebeat, Redpanda, and Kibana for log collection, monitoring, and faster root-cause analysis.</li>
        <li>Designed Kibana dashboards for real-time visibility into video device health, bitrates, and performance metrics.</li>
        <li>Acted as a stakeholder POC, reviewed JIRA intakes, and aligned delivery with business needs through requirement and testing sessions.</li>
        <li>Developed, tested, debugged, and documented software using Chalk and version control tools.</li>
        <li>Implemented NGINX configurations to reroute traffic for load balancing and minimal downtime.</li>
        <li>Received multiple recognitions from leadership for high-impact applications and successful migrations.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.charter {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 24px;
  align-items: center;
  background: rgba(20, 22, 32, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.4);
  animation: fadeIn 0.8s ease-out both;
}

.charter__media {
  position: relative;
  min-height: 360px;
  overflow: hidden;
  isolation: isolate;
}

.charter__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  animation: slowZoom 18s ease-in-out infinite;
}

.charter__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(15, 16, 20, 0.2), rgba(15, 16, 20, 0.85));
}

.charter__badge {
  position: absolute;
  bottom: 24px;
  left: 24px;
  padding: 12px 16px;
  border-radius: 14px;
  background: rgba(15, 16, 20, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f6f7fb;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  display: grid;
  gap: 6px;
  animation: float 6s ease-in-out infinite;
}

.charter__badge strong {
  font-size: 0.9rem;
  letter-spacing: 0.2em;
}

.charter__content {
  padding: 28px 28px 32px 8px;
  color: #f6f7fb;
  animation: slideUp 0.8s ease-out both;
}

.charter__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: #ffb347;
}

.charter__title {
  font-size: 2rem;
  margin: 8px 0;
}

.charter__period {
  color: #b8bfd4;
  margin-bottom: 18px;
}

.charter__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: #d5d9e6;
  line-height: 1.6;
}

.charter__list li {
  position: relative;
  padding-left: 20px;
  animation: fadeUp 0.5s ease-out both;
}

.charter__list li:nth-child(1) { animation-delay: 0.05s; }
.charter__list li:nth-child(2) { animation-delay: 0.1s; }
.charter__list li:nth-child(3) { animation-delay: 0.15s; }
.charter__list li:nth-child(4) { animation-delay: 0.2s; }
.charter__list li:nth-child(5) { animation-delay: 0.25s; }
.charter__list li:nth-child(6) { animation-delay: 0.3s; }
.charter__list li:nth-child(7) { animation-delay: 0.35s; }
.charter__list li:nth-child(8) { animation-delay: 0.4s; }
.charter__list li:nth-child(9) { animation-delay: 0.45s; }
.charter__list li:nth-child(10) { animation-delay: 0.5s; }
.charter__list li:nth-child(11) { animation-delay: 0.55s; }
.charter__list li:nth-child(12) { animation-delay: 0.6s; }
.charter__list li:nth-child(13) { animation-delay: 0.65s; }
.charter__list li:nth-child(14) { animation-delay: 0.7s; }
.charter__list li:nth-child(15) { animation-delay: 0.75s; }

.charter__list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #ffb347;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slowZoom {
  0%, 100% { transform: scale(1.05); }
  50% { transform: scale(1.15); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 960px) {
  .charter {
    grid-template-columns: 1fr;
  }

  .charter__content {
    padding: 24px;
  }
}
</style>
