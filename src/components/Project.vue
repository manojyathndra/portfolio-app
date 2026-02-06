<template>
  <div class="project-grid">
    <section class="project">
      <div class="project__content">
        <p class="project__eyebrow">B.E. Capstone Project</p>
        <h3 class="project__title">Smart Irrigation System for Poly House</h3>
        <p class="project__meta">PHP · Python · Raspberry Pi · IoT · Cloud</p>
        <ul class="project__list">
          <li>Collaborated in a team of four to design and implement a web application that operated an IoT-based drip and sprinkler irrigation system using PHP, Python, and Raspberry Pi, earning a 10/10 grade and the “Best Project” award.</li>
          <li>Implemented the application using IoT architecture and deployed in cloud infrastructure with automated pipelines.</li>
        </ul>
        <a class="project__link" href="https://github.com/manojyathndra/SmartIrrigation" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
    </section>

    <section class="project">
      <div class="project__content">
        <p class="project__eyebrow">M.S. Project</p>
        <h3 class="project__title">NutraMeal Food Delivery</h3>
        <p class="project__meta">Food Delivery · Nutrition · Web App</p>
        <ul class="project__list">
          <li>Built a nutrition-focused food delivery platform as part of the M.S. program, emphasizing personalized meal planning and streamlined ordering.</li>
          <li>Designed the project to showcase end-to-end product flow from menu discovery to checkout and delivery tracking.</li>
        </ul>
        <a class="project__link" href="https://github.com/manojyathndra/NutraMeal-FoodDelivery" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
    </section>

  </div>
</template>

<style scoped>
.project {
  background: rgba(20, 22, 32, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.project__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.7rem;
  color: #ffb347;
}

.project__title {
  font-size: 1.6rem;
  margin: 8px 0 6px;
  color: #f6f7fb;
}

.project__meta {
  color: #b8bfd4;
  margin-bottom: 16px;
}

.project__list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: grid;
  gap: 10px;
  color: #d5d9e6;
  line-height: 1.6;
}

.project__list li {
  position: relative;
  padding-left: 18px;
}

.project__list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #ffb347;
}

.project__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f6f7fb;
  font-weight: 600;
  font-size: 0.85rem;
}
</style>
