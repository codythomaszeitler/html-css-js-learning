The MDN docs pose four questions that you should understand:

1. The second list item has the class my-class-1 applied. This sets the color of the <a> element nested inside to inherit. If you remove the rule, how does it change the color of the link?

2. Do you understand why the third and fourth links are the color that they are? The third link is set to initial, which means it uses the initial value of the property (in this case black) and not the browser default for links, which is blue. The fourth is set to unset which means that the link text uses the color of the parent element, green.

3. Which of the links will change color if you define a new color for the <a> element — for example a { color: red; }?

4. After reading the next section on resetting all properties, come back and change the color property to all. Notice how the second link is on a new line and has a bullet. What properties do you think were inherited?