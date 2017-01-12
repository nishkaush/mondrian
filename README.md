# mondrian
changing colours by choosing colours from a pallette

This was a challenging project but well worth the time

Main Challenges Faced:


(1) The premise of the project was to build a canvas with various divs and then make a pallette with 3 different colors.

(2) every time a color from the pallete is clicked, the color will be imparted to any divs that will be clickd after.

(3) so if lime color was clicked on from the pallette, whenever I would click any div, it would change the color of the div to lime.

(4) this would go on until all divs were of the same color or I chose another color from the pallete.


(5) had to add an event listener to 4 divs and then 4 more divs inside them, so in total 8 items. And may have had to add 24 event listeners in total (3 for each pallette color).

(6) but i got out of it by nesting functions inside one another and invoking them from one another.

(7) A point to remember - event propogation - make sure to use even propogation whenever you are manipulating DOM of nested divs or nested elements, otherwise, any action on the innermost div will go right all the way upto the parent element.

