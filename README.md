<h1>Timestamp microservice API</h1>
<p>
    Use of microservice:
    <ul>1) Pass a string as a parameter, and microservice will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</ul>
    <ul>2) If valid date is passed, then returns JSON of both the Unix timestamp and the natural language form of that date.</ul>
    <ul>3) If it does not contain a date or Unix timestamp, it returns JSON with null for those properties.</ul>
</p>
<h3>Example usage:</h3>
<code id="link">https://fcc-backend-api-projects-miloath.c9users.io/January%201,%202016</code><br>
<code id="link2">https://fcc-backend-api-projects-miloath.c9users.io/1451606400</code>
<h3>Example output:</h3>
<code>
        {
          "unix": 1451606400,
          "natural": "January 1, 2016"
        }
</code>
