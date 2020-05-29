# Section 2 Notes

## Why Animations Matter

Animations are important in order to lend a better UI experience for the end user. Without them, not only does our page look static and old, but users won't have a more intuitive experience that helps them navigate and use the app.

## Pseudoclasses

[Pseudoclasses MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

    Pseudoclasses are special selectors that are added in addition to another CSS selector. They start with a colon and are placed after a selector. 

Example: `h1:hover` - This adds a hover effect to all h1's.

### :hover

[:hover Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)

    Triggered by a user mousing over the selector.

### :focus

[:focus Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

    Triggered when a selected element receives "focus", which can include or not include mouse-clicks or selection with TAB.

### :active

[:active Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

    Triggered when a selected element has become "active", which can include or not include post-mouse-clicks.

## Transform

    CSS transform allows you to move, wrap, rotate, and scale elements.

[Transform Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

### Translate

    Allows you to shift something across the screen.

Example:
```css
div {
    transform: translate(x, y);
}
```

### Scale

    Allows you to alter the size of an element.

Example:
```css
div {
    transform: scale(x, y);
}
```

### Transform-Origin

[Transform-Origin Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

    Specify the transformation of an element based off its origin.

Example:
```css
div {
    transform-origin(x, y);
}
```

### Rotation

    Allows you to rotate an element.

Example:
```css
div {
    transform: rotate(xdeg);
}
```

## Transitions

[Transition Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

    Allow you to control the animation speed of a transformed element. Default is instantaneously.

### Duration

[Duration Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)

    Allows you to set the time it takes for a transform takes to complete.

### Property

[Property Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)

    Allows you to specify which transformation you want to effect.

### Timing Function

[Timing Function Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

    Allows you to modify how much of an element is effected when given a time for transformation. For example, you can have 90% of an element transform in one second with the last 10% transforming in the other second when the element was given two seconds to transform.

### Delay

[Delay Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)

    Allows you to delay the time a transformation occurs. Default is none.

### Transition Shorthand

    You can write a shorthand version for all four transition types in one line. The order of items will be property, duration, timing-function, and delay. You can opt any of these out or include them all.

Example: `transition: background 1.5s ease-in 1s`

    You can have multiple transitions as well. They must be separated by a comma.

Example: `transition: background 1.5s ease-in 1s, color 1s ease-out 3s`

