# Section 2 Notes

## Pseudo-Classes

Pseudo-Classes are keywords added to a selector that specify a special state of
the selected element(s). They start with a colon and the name of the
pseudo-class, always following another selector. 

The syntax is like this:

```css
selector:pseudo-class {
    property: value;
}
```

### :hover

The `:hover` pseudo-class is triggered by a user when hovering over the
specified selector with their mouse.

Syntax:

```css
div:hover {
    background: purple;
}
```

The above code changes the background to purple when the div is hovered over
with a mouse.

Example: https://codepen.io/ItheApologist/pen/KKgYxvR

### :active

