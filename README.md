# TimestampMS

Use of microservice:
1) Pass a string as a parameter, and microservice will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2) If valid date is passed, then returns JSON of both the Unix timestamp and the natural language form of that date.
3) If it does not contain a date or Unix timestamp, it returns JSON with null for those properties.
Example usage:
http://microservice-timestamp.herokuapp.com/January%201,%202016
http://microservice-timestamp.herokuapp.com/1451606400
Example output:
{ "unix": 1451606400, "natural": "January 1, 2016" }
