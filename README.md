I have made an index.html file where the main webpage is present and used tailwind css to style it plus used keyframes in the style.css file for the wave below the countdown .
For the Javascript used we target the countdown id div using getelementbyid and next we use javascript datetime object .gettime() function to set a target date of new year .
For updating countdown we have 2 parts first we subtract current time from the target if it is less than or equal to 0 then we automatically show the new year message now for calculating the time we simply use basic maths to divide the distance variable we made indicating difference between current and target time and divide it by corresponding seconds to get days , hours , minutes , seconds . Finally we use setInterval() function to keep running our code at every 1000 milli seconds interval.
