#1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:-getElementById is used to select an element using an unique id;

 -getElementsByClassName is used to select all elements named by a class;

 -querySelector is used to select first  element of that selector;

 -querySelectorAll is used to select all elements of that selector;



#2. How do you **create and insert a new element into the DOM**?

Ans: First I have to select the parent element where new element will be inserted,
then i will create new element using document.createElement() and i will use innerHTML or innerText to add my content.
After finishing that i will append the new element into parent element which i selected at first using appendChild();



#3. What is **Event Bubbling** and how does it work?

   Ans: When an event is clicked browser automatically finds the its  parent and run its event if there is anything, when child was clicked and this goes on until document if it is not stopped.



#4. What is **Event Delegation** in JavaScript? Why is it useful?
    
   Ans: Instead of using same event on all elements of same parent we can use the event at the parent directly,and it will do event bubbling to the parent and we can know which element triggered the event by using event.target;

It is useful because saves memory ,recquires less code so it makes the code more readable.


#5. What is the difference between **preventDefault() and stopPropagation()** methods?    
    
   Ans: preventDefault() is used to stop browser reloading when a form is submitted and
   stopPropagation() is used to stop event bubbling

So the difference is preventDefault stops browser from default action and stopPropagation() prevents from bubbling up


