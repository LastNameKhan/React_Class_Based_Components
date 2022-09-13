Portals:-
Way to render children into the dom nodes that exists outside the DOM hierarchy of the parent element.
Portals provide ability to break out of this DOM tree.

How to use Portals-
1. Create a new div with id as portal-root in public/index.html.
2.Create a new Component.
3.Create a react DOM portal Method which takes two parameters.
First Parameter :- TSX you want to render 
Second Pramter :- DOM node on which you have  to mount the element to. 
4.Import ReactDOM package into the component
ans return ReactDOM.createPortal.

Q.Why do we need Portals?
A.

HOC :-
HOC is a pattern where a function takes a component as an argument and returns a new component

const NewComponent = HOC(originalComponent)
cosnt EnhancedComponent = HOC(originalComponent)


//corusel
//Card using axios