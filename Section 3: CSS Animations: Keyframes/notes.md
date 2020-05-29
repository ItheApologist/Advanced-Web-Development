# Section 3 Notes

## Keyframe Animations

[Animation Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

    Allow for the building of complex, multi-component, multi-state animations. They also allow for more control over the details of how an animation works.

Example: 
```css
@keyframes rainbowtext {
    0%{
        color: red;
        font-size: 20px;
    }
    25%{
        color: orange;
    }
    50%{
        color: yellow;
        font-size: 40px;
    }
    75%{
        color: green;
    }
    100%{
        color: blue;
        font-size: 20px;
    }
}
```
In the example above, ```@keyframes``` is the starting keyword to get the keyframe going. You then need to name it something relevant, in this case, ```rainbowtext```. This will work like naming a function, which we will assign to an element later. Lastly we have a set of defined percentages followed by CSS in brackets. These set of percentage and code tell the keyframe exactly what to do at a given percentage of completion.

Next we have to apply it to an element.

Example:
```css
p {
    animation-name: rainbowtext;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
}
```
The above example is how we apply the keyframe to an element. ```animation-name``` is the name we gave to the keyframe. ```animation-duration``` is the set amount of time it takes to complete the full keyframe. Note that the percentages we defined in the keyframe will be relevant to this time we define. ```animation-timing-function``` adjust the curve of the time much like with transition timing function. ```animation-delay``` sets a delay on the animation activation by the time specified. ```animation-iteration-count``` determines the number of times the animation happens.

## Direction

You can specify the direction of your animation with ```animation-direction``` using keywords ```forward, reverse, alternate```

## Fill Mode

Specifies how an animation should apply styles before and after the animation with ```animation-fill-mode``` using keywords ```forward, backward, both```. ```forward``` will keep the last percent styling after the animation ends. ```backward``` applies the first percent styling before the animation begins. ```both``` does both.

## Play State

Specifies whether the animation is running or paused with ```animation-play-state```.

## Shorthand Animations

    Just like with Transitions, you can write a shorthand version to simplify the code. Note that the order does not matter. However, the first time specified will be set to duration and the second set to delay. 

Example: ```animation: changecolor 3s linear 1s infinite