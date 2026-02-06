<template>
  <section class="infosys">
    <div class="infosys__media">
      <img src="@/assets/Infosys.webp" alt="Infosys" class="infosys__image">
      <div class="infosys__overlay"></div>
    </div>
    <div class="infosys__content">
      <p class="infosys__eyebrow">Infosys Limited · Karnataka, India</p>
      <h3 class="infosys__title">System Engineer</h3>
      <p class="infosys__period">February 2020 – January 2021</p>
      <ul class="infosys__list">
        <li>Developed and maintained a logistics-focused B2C e-commerce application using C#, ADO.NET, Entity Framework, and MVC in a 3-tier Agile environment. Improved app performance by 20% by optimizing queries and caching strategies.</li>
        <li>Served as Scrum Master, assigning tasks, scheduling work, providing guidance, and resolving technical issues.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.infosys {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 24px;
  align-items: center;
  background: rgba(20, 22, 32, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.3);
}

.infosys__media {
  position: relative;
  min-height: 240px;
  overflow: hidden;
  isolation: isolate;
}

.infosys__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05);
  transform: scale(1.02);
}

.infosys__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(15, 16, 20, 0.2), rgba(15, 16, 20, 0.85));
}

.infosys__content {
  padding: 24px;
  color: #f6f7fb;
}

.infosys__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.7rem;
  color: #ffb347;
}

.infosys__title {
  font-size: 1.6rem;
  margin: 8px 0;
}

.infosys__period {
  color: #b8bfd4;
  margin-bottom: 14px;
}

.infosys__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: #d5d9e6;
  line-height: 1.6;
}

.infosys__list li {
  position: relative;
  padding-left: 18px;
}

.infosys__list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #ffb347;
}

@media (max-width: 960px) {
  .infosys {
    grid-template-columns: 1fr;
  }
}
</style>
