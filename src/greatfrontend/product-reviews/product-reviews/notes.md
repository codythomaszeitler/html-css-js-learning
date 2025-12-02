What is the layout of this page going to be?
What are the components that we are going to work with? 

Is there a way to do this in just plain javascript?

How would you even do this without react components? 


Our goals should be something of the following:

1. What is the high level layout of the page?
 * 
2. It looks like the data that we are going to parse is from the .jsons that are included within the data directory. We are going to have to "load" this from the server (in a fake way, of course).
3. We are going to have to handle responsive web design. (This is going to have to be @media queries)
4. Why is there an X on the top right of the page? 



What should our next best first step be?
Our first header should be to make the high level layout, but we should do this by mapping this all out BEFORE we write all of the layout.

It looks like there are going to be two areas.

The first area has the overall rating.
The second area has all of the reviews within it.

The second area is going to be scrollable. (I believe that this has to do with the "overflow" property.)
This is normally done as "visible", meaning that the content overflows when it runs out of space.

What was the rule that we had to follow to allow the flex box to scroll? I am trying to remember what the issue was...


What is the point of the flex box though? I feel like this is backwards...

For example:
Their example does EXPLICIT height units. 
Relative versus absolute units of measurements.







Random Thoughts:
* There is going to be way to "sort" what reviews you are going to want to see.