<template>
  <v-app class="page">
    <div class="glow glow--left" aria-hidden="true"></div>
    <div class="glow glow--right" aria-hidden="true"></div>

    <v-container class="nav" fluid>
      <div class="nav__brand">Resume</div>
      <div class="nav__links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </v-container>

    <v-main>
      <v-container class="hero" fluid>
        <div class="hero__content">
          <p class="eyebrow">Product + Frontend</p>
          <h1>{{ profile.name }}</h1>
          <p class="headline">{{ profile.title }}</p>
          <p class="summary">{{ profile.summary }}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#contact">Contact me</a>
            <a class="btn btn--ghost" :href="profile.links.github" target="_blank" rel="noreferrer">GitHub</a>
            <a class="btn btn--ghost" :href="profile.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div class="meta">
            <span>{{ profile.location }}</span>
            <span>{{ profile.email }}</span>
          </div>
        </div>
        <div class="hero__card">
          <div class="stat">
            <p class="stat__label">Focus</p>
            <p class="stat__value">{{ profile.focus }}</p>
          </div>
          <div class="stat">
            <p class="stat__label">Tools</p>
            <p class="stat__value">{{ profile.tools.join(' • ') }}</p>
          </div>
          <div class="stat">
            <p class="stat__label">Highlights</p>
            <ul>
              <li v-for="item in profile.highlights" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </v-container>

      <section id="about" class="section">
        <v-container>
          <h2>About</h2>
          <div class="about-card">
            <div class="about-card__header">
              <div>
                <p class="about-card__headline">Automation + Full‑stack engineer focused on measurable impact.</p>
              </div>
              <div class="about-card__chips">
                <span class="chip">Automation</span>
                <span class="chip">DevOps</span>
                <span class="chip">Full‑stack</span>
              </div>
            </div>
            <p class="section__lead">
              Results-driven engineer with expertise in application development, migration, automation, and monitoring using
              Docker, Airflow, Elastic, and Kibana, recognized for delivering high-impact solutions and modernizing Ruby/Python
              applications.
            </p>
            <p class="section__lead">
              Proven stakeholder POC with strong Agile experience, skilled in CI/CD, database/API development, and building
              reusable Ruby gems and Python packages to optimize efficiency and scalability.
            </p>
            <div class="about-card__stats">
              <div class="stat-card">
                <span class="stat-card__label">Automation ROI (single app)</span>
                <span class="stat-card__value">600 hrs/mo</span>
              </div>
              <div class="stat-card">
                <span class="stat-card__label">Ops Savings</span>
                <span class="stat-card__value">150 hrs/wk</span>
              </div>
              <div class="stat-card">
                <span class="stat-card__label">Key Focus</span>
                <span class="stat-card__value">Automation</span>
              </div>
            </div>
          </div>
        </v-container>
      </section>

      <section id="skills" class="section section--alt">
        <v-container>
          <h2>Skills</h2>
          <div class="skill-grid">
            <article v-for="group in skills" :key="group.title" class="skill-card">
              <div class="skill-card__head">
                <h3>{{ group.title }}</h3>
                <span class="skill-card__count">{{ group.items.length }} skills</span>
              </div>
              <div class="skill-card__body">
                <span v-for="item in group.items" :key="item.name" class="pill">
                  <span v-if="item.logo" class="pill__logo">
                    <img :src="item.logo" :alt="`${item.name} logo`" :class="{ 'no-invert': item.invert === false }">
                  </span>
                  <span v-else class="pill__icon">{{ item.icon }}</span>
                  {{ item.name }}
                </span>
              </div>
            </article>
          </div>
        </v-container>
      </section>

      <section id="experience" class="section">
        <v-container>
          <h2>Experience</h2>
          <div class="featured-experience">
            <Charter />
          </div>
          <div class="featured-experience">
            <Infosys />
          </div>
          <div class="card-grid">
            <article v-for="job in experience" :key="job.company" class="card">
              <div class="card__head">
                <div>
                  <h3>{{ job.role }}</h3>
                  <p class="muted">{{ job.company }} · {{ job.location }}</p>
                </div>
                <p class="muted">{{ job.period }}</p>
              </div>
              <ul>
                <li v-for="point in job.highlights" :key="point">{{ point }}</li>
              </ul>
            </article>
          </div>
        </v-container>
      </section>

      <section id="projects" class="section section--alt">
        <v-container>
          <h2>Projects</h2>
          <Project />
        </v-container>
      </section>

      <section id="education" class="section">
        <v-container>
          <h2>Education</h2>
          <div class="card-grid">
            <article v-for="edu in education" :key="edu.school" class="card">
              <div class="card__head">
                <div>
                  <h3>{{ edu.degree }}</h3>
                  <p class="muted">{{ edu.school }}</p>
                </div>
                <p class="muted">{{ edu.period }}</p>
              </div>
              <p class="muted">{{ edu.details }}</p>
            </article>
          </div>
        </v-container>
      </section>

      <section id="certifications" class="section section--alt">
        <v-container>
          <h2>Certifications</h2>
          <div class="badge-grid">
            <a href="https://www.credly.com/badges/a33ba670-9e9a-4a45-8a96-77c4ed33b743" target="_blank" rel="noreferrer">
              <img src="@/assets/PCEP.png" alt="PCEP Certification Badge" class="badge">
            </a>
            <a href="https://www.credential.net/d3b6ee19-bffd-4ecc-9f32-869801b69946?key=444ec1bed8b70b8af80e36825deea3216de35dbdbb9ef115f7ab868b7d5b3a11#acc.Zz6qdb20" target="_blank" rel="noreferrer">
              <img src="@/assets/Ruby_silver.png" alt="Ruby Silver Certification Badge" class="badge">
            </a>
          </div>
        </v-container>
      </section>

      <section id="contact" class="section section--alt">
        <v-container>
          <h2>Contact</h2>
          <div class="contact-card">
            <div>
              <p class="muted">Email</p>
              <p class="contact">{{ profile.email }}</p>
            </div>
            <div>
              <p class="muted">Phone</p>
              <p class="contact">{{ profile.phone }}</p>
            </div>
            <div>
              <p class="muted">Links</p>
              <div class="links">
                <a :href="profile.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
                <a :href="profile.links.github" target="_blank" rel="noreferrer">GitHub</a>
                <a :href="profile.links.portfolio" target="_blank" rel="noreferrer">Portfolio</a>
              </div>
            </div>
          </div>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
import Charter from '@/components/Charter.vue'
import Infosys from '@/components/Infosys.vue'
import Project from '@/components/Project.vue'
import rubyLogo from '@/assets/skill-logos/ruby.svg'
import pythonLogo from '@/assets/skill-logos/python.svg'
import nodeLogo from '@/assets/skill-logos/nodejs.svg'
import vueLogo from '@/assets/skill-logos/vue.svg'
import shellLogo from '@/assets/skill-logos/shell.svg'
import postgresLogo from '@/assets/skill-logos/postgres.svg'
import mysqlLogo from '@/assets/skill-logos/mysql.svg'
import mongoLogo from '@/assets/skill-logos/mongodb.svg'
import dockerLogo from '@/assets/skill-logos/docker.svg'
import gitlabLogo from '@/assets/skill-logos/gitlab.svg'
import awsLogo from '@/assets/skill-logos/aws.svg'
import gcpLogo from '@/assets/skill-logos/gcp.svg'
import azureLogo from '@/assets/skill-logos/azure.svg'
import elasticLogo from '@/assets/skill-logos/elasticsearch.svg'
import filebeatLogo from '@/assets/skill-logos/filebeat.svg'
import kibanaLogo from '@/assets/skill-logos/kibana.svg'
import airflowLogo from '@/assets/skill-logos/airflow.svg'
import gitLogo from '@/assets/skill-logos/git.svg'
import bitbucketLogo from '@/assets/skill-logos/bitbucket.svg'
import jiraLogo from '@/assets/skill-logos/jira.svg'
import nginxLogo from '@/assets/skill-logos/nginx.svg'
import redpandaLogo from '@/assets/skill-logos/redpanda-kafka.png'

const profile = {
  name: 'Manoj Yathindra Thagadur Srinivasu',
  title: 'Automation + Full‑stack Engineer',
  summary: 'Results-driven engineer focused on automation, migration, and scalable systems that deliver measurable operational impact.',
  about: 'Short bio or professional summary from your resume.',
  location: 'Castle Pines, Colorado',
  email: 'manoj.yathindra@gmail.com',
  phone: '+1 (000) 000-0000',
  focus: 'Automation, DevOps, Full‑stack',
  tools: ['Ruby', 'Python', 'Node.js', 'Vue.js', 'Docker', 'Airflow', 'Elastic', 'Kibana'],
  highlights: [
    'Automation tooling delivered up to 600 hrs/month saved in operations for a single app.',
    'Built full-stack Ruby/Vue/Flask applications reducing weekly operational time by ~150 hours.',
    'Led large-scale migrations and upgrades across OS and runtime versions with security hardening.'
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/manoj-yathindra/',
    github: 'https://github.com/manojyathndra',
    portfolio: 'https://your-site.com'
  }
}

const skills = [
  {
    title: 'Languages & Frameworks',
    items: [
      { name: 'Ruby', logo: rubyLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Vue.js', logo: vueLogo },
      { name: 'Shell Scripting', logo: shellLogo }
    ]
  },
  {
    title: 'Databases',
    items: [
      { name: 'Postgres', logo: postgresLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongoLogo }
    ]
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'Docker', logo: dockerLogo },
      { name: 'GitLab CI/CD', logo: gitlabLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'GCP', logo: gcpLogo },
      { name: 'Azure', logo: azureLogo }
    ]
  },
  {
    title: 'Monitoring & Logging',
    items: [
      { name: 'Elasticsearch', logo: elasticLogo },
      { name: 'Filebeat', logo: filebeatLogo },
      { name: 'Redpanda', logo: redpandaLogo, invert: false },
      { name: 'Kibana', logo: kibanaLogo },
      { name: 'Airflow', logo: airflowLogo }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', logo: gitLogo },
      { name: 'Bitbucket', logo: bitbucketLogo },
      { name: 'JIRA', logo: jiraLogo },
      { name: 'NGINX', logo: nginxLogo }
    ]
  },
  {
    title: 'Video Devices',
    items: [
      { name: 'Cisco DCMs', icon: 'CD' },
      { name: 'Cisco vDCMs', icon: 'VD' },
      { name: 'Cisco Record Routers', icon: 'RR' },
      { name: 'Cisco Virtual Media Recorders', icon: 'VM' },
      { name: 'Harmonic XOS', icon: 'HX' }
    ]
  }
]

const experience = []

const education = [
  {
    school: 'Pace University · Seidenberg School of Computer Science and Information Systems',
    degree: 'Master of Science (MS) in Computer Science',
    period: 'May 2022',
    details: 'GPA: 3.8 · Magna Cum Laude · New York, NY'
  },
  {
    school: 'Visvesvaraya Technological University',
    degree: 'Bachelor of Engineering (B.E) in Computer Science',
    period: 'June 2019',
    details: 'Belagavi, Karnataka'
  }
]

</script>
