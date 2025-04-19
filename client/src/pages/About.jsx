import React from 'react';

const About = () => (
  <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
    <h2>About This Web App</h2>
    <p>
      Coin Exit Tracker helps crypto investors estimate their potential profits by visualizing coin exit prices across 1x to 25x multipliers.
    </p>
    <p>
      All data remains in your session and nothing is stored. Prices are powered by CoinGecko API.
    </p>

    <h2>How the Calculations Work</h2>

<p><strong>1. Average Price Paid per Coin</strong><br />
To calculate this, divide the total amount you spent on a coin by the number of coins you hold.  
<br />
<i>Formula: </i>  
<code>Average Price = Total Amount Spent ÷ Number of Coins Held</code><br />
Example: If you spent $500 to buy 100 coins, your average price per coin is $5.00.
</p>

<p><strong>2. Target Price (x Multiplier)</strong><br />
This shows what the price per coin would be if it increased by 1x, 2x, 3x... all the way up to 25x from your average price.<br />
<i>Formula: </i>  
<code>Target Price = Average Price × Multiplier</code><br />
Example: If your average price is $5 and you're looking at the 3x row, the target price is $15.
</p>

<p><strong>3. Total Value</strong><br />
This shows what your entire holding would be worth at that target price.<br />
<i>Formula: </i>  
<code>Total Value = Target Price × Number of Coins Held</code><br />
Example: At a $15 price and 100 coins, your total value would be $1,500.
</p>

<p><strong>4. Net Profit</strong><br />
This subtracts your original cost (total amount spent) from the potential value to show your profit.<br />
<i>Formula: </i>  
<code>Profit = Total Value − Total Amount Spent</code><br />
Example: If your total value is $1,500 and you originally spent $500, your profit is $1,000.
</p>

<p>This tracker helps you visualize how much you could potentially earn at different exit levels, using simple math.</p>


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

