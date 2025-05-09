import React from 'react';

const About = () => (
  <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
    <h2>About</h2>
    <p>
      Coin Exit Tracker helps crypto investors estimate their potential profits by visualizing coin exit prices across 1x to 25x multipliers.
    </p>
    <p>
      All data remains in your session and nothing is stored. LIVE prices are powered by CoinGecko API.
    </p>

    <h3>How the Calculations Work</h3>

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

<p><strong>5. Profit %</strong><br />
This shows the percentage gain you would make at each multiplier level if you sold your coins at that target price.  
<br />
<i>Formula:</i><br />
<code>Profit % = ((Target Value − Total Cost) ÷ Total Cost) × 100</code><br />
Example: If you bought 100 coins at $2 each (total cost = $200), and the target price is $6,  
then your total value is $600, and your profit is $400.<br />
Profit % = (400 ÷ 200) × 100 = <strong>200%</strong>
</p>

<p><strong>6. Progress</strong><br />
This shows how close the current market price is to reaching the target price for that multiplier level.  
<br />
<i>Formula:</i><br />
<code>Progress = (Live Price ÷ Target Price) × 100</code><br />
Example: If your 3x target price is $9 and the current market price is $6,  
then Progress = (6 ÷ 9) × 100 = <strong>66.67%</strong>  
<br />
Note: If the progress exceeds 100%, it is capped and shown as 100%.
</p>


<p></p>


    <h2>The Creator</h2>

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
    <p>
      Support him to continue building this web app via his <a href="https://buymeacoffee.com/emanoj" target="_blank" rel="noopener noreferrer">Buy Me a Coffee page.</a>
    </p>

    <h2>Contact</h2>
    <p>
      If you have any comments, suggestions, or issues, please contact me via <a href="https://tally.so/r/w8qkjP" target="_blank" rel="noopener noreferrer">this contact form</a>.

    </p>

  </div>
);

export default About;

