import React from 'react';
import './Home.css'; // si tu veux du style

const Home = () => {
  return (
    <main className="main-content">
      <section id="home">
        <h1>Accueil</h1>
        <p>
          Bienvenue sur le projet de stage d'été réalisé par Aziz Baoueb. Ce site web a été conçu
          pour explorer les bases du développement frontend avec React et tester différentes
          fonctionnalités interactives.
        </p>
      </section>

      <section id="about">
        <h1>À propos</h1>
        <p>
          Ce projet a été développé pendant l'été 2025 dans le cadre d'un stage. L'objectif est de
          se familiariser avec React, la structure des composants, le CSS personnalisé et la
          navigation dynamique.
        </p>
      </section>

      <section id="projects">
        <h1>Projets</h1>
        <p>
          Le projet principal consiste à créer une architecture simple avec une sidebar, une barre
          de navigation visuelle et des sections bien définies. Il s'agit d'un exercice pratique
          pour comprendre le fonctionnement d'une application React.
        </p>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <p>
          Ce projet a été réalisé par Aziz Baoueb. Pour toute question ou retour, n'hésitez pas à le
          contacter. Le site est en constante évolution et pourra intégrer d'autres fonctionnalités
          à l'avenir.
        </p>
      </section>
    </main>
  );
};

export default Home;

