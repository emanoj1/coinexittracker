import React from 'react';

const About = () => (
  <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
    <h2>About This Web App</h2>
    <p>
      Coin Exit Tracker helps investors estimate their potential profits by visualizing coin exit prices across 1x to 25x multipliers.
    </p>
    <p>
      All data remains in your session and nothing is stored. Prices are powered by CoinGecko API.
    </p>

    <h2>About the Creator</h2>

    <img
      src="/ManojPolaroidBio.png"
      alt="Manoj Kumar"
      style={{
        width: '100%',
        maxWidth: '200px',
        borderRadius: '50%',
        display: 'block',
        marginBottom: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />

    <p>
      Manoj Kumar is based in Sydney, Australia, with a passion for building useful tools, telling stories, and sharing ideas.
      He enjoys coding web apps, drawing quirky illustrations, writing children’s books, vlogging everyday thoughts, recording podcasts, and experimenting in the kitchen.
    </p>
    <p>
      He built Coin Exit Tracker because he felt there had to be a better way to forecast crypto exit positions than juggling numbers in a messy Excel file.
      So, on the evening of Friday, 18 April 2025 — with a spark of inspiration (and Easter weekend ahead) — he put his head down and coded the whole thing.
    </p>
    <p>
      Whether it’s through tech or creativity, Manoj loves exploring different ways to engage with the world and hopes his projects help make life a little more fun, thoughtful, and practical.
    </p>
    <p>Support him to continue building this web app via the "Buy Me a Coffee" link below.</p>
  </div>
);

export default About;

