import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="main-content">
      <section id="home">
        <h1>{t('home.title')}</h1>
        <p>{t('home.description')}</p>
      </section>

      <section id="about">
        <h1>{t('about.title')}</h1>
        <p>{t('about.description')}</p>
      </section>

      <section id="projects">
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.description')}</p>
      </section>

      <section id="contact">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.description')}</p>
      </section>
    </main>
  );
};

export default Home;
