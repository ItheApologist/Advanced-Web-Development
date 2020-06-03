# Section 4 Notes

## CSS Flexbox

Flexbox is an efficient way to lay out, align, and distribute space among items in a container.

There are two types of Flexbox properties:

* Container Properties: Properties that apply to containers.

* Flex Item Properties: Properties that apply to individual items within containers.

## Terminology

Flex Container

    The container that has the display: flex property.

Flex Item

    The elements within the div that has the display: flex property applied to it.

Main Axis

    The axis that the flex items are arranged on. This can by Y or X.

Cross Axis

    The opposite axis of the Main Axis.


## Display Flex

Though not a flexbox specific container, ```display: flex``` will set a container to become flexbox enabled. It will also make all items within the container inline.

## Container Properties

### Flex Direction

Specifies how items are placed in the flex container, defining the main axis and its direction. The default value is ```flex-direction: row```.

Possible values are:

* ```flex-direction: row``` - Sets the axis to X going from left to right.
* ```flex-direction: row-reverse``` - Sets the axis to X going from right to left.
* ```flex-direction: column``` - Sets the axis to Y going from top to bottom. 
* ```flex-direction: column-reverse``` - Sets the axis to Y going from bottom to top.

### Flex Wrap

Specifies whether items are forced into a single line OR can be wrapped into multiple lines. The default value is ```flex-wrap: no-wrap```.

Possible values are:

* ```flex-wrap: wrap``` - Allows for the content inside the container to grow to specified sizes and take up new lines if necessary.
* ```flex-wrap: wrap-reverse``` - Allows for the content to wrap and reverses the direction of the cross axis.

### Justify Content

Defines how space is distributed between items in a flex container along the main axis. The default value is ```flex-content: start```.

Possible values are: 

* ```justify-content: flex-end``` - Sets the content at the end of the main axis. 
* ```justify-content: center``` - Sets the content in the center of the main axis.
* ```justify-content: space-between``` - Sets the content so that each item has an even amount of space between one another on the main axis.
* ```justify-content: space-around``` - Sets the content so that each item has an even amount of space around itself. Note that it may look like space between items on the ends is less then the space between each item. This is not the case. The space at the ends is what is around on both sides of each item, so the space is doubled between two items.

### align-items

Defines how space is distributed between items in flex container along the cross axis. The default value is ```align-items: stretch```.

Possible values are:

* ```align-items: flex-start``` - Sets the content at the start of the cross axis.
* ```align-items: flex-end``` - Sets the content at the end fo the cross axis. 
* ```align-items: stretch``` - Sets the content to take up the entire space of the cross axis within the given container.
* align-items: center``` - Sets the content in the center of the main axis.

### align-content

Defines hwo space is distributed between rows in a flex container along the cross axis. The default value is ```align-content: stretch```.

Possible values are:

* ```align-content: stretch``` - Sets the content to take up the entire space of the cross axis within the given container.
* ```align-content: flex-start``` - Sets the content at the start of the cross axis.
* ```align-content: flex-end``` - Sets the content at the end fo the cross axis.
* ```align-content: space-between``` - Sets the content so that each item has an even amount of space between one another on the cross axis.
* ```align-content: space-around``` - Sets the content so that each item has an even amount of space around itself. Note that it may look like space between items on the ends is less then the space between each item. This is not the case. The space at the ends is what is around on both sides of each item, so the space is doubled between two items.
* ```align-content: center``` - Sets the content in the center of the cross axis.

## Item Properties

### Align Self

Allows you to override align-items on individual flex items.

Possible values are:

* ```align-content: stretch``` - Sets the item to take up the entire space of the cross axis within the given container.
* ```align-content: flex-start``` - Sets the item at the start of the cross axis.
* ```align-content: flex-end``` - Sets the item at the end fo the cross axis.
* ```align-content: center``` - Sets the item in the center of the cross axis.

### Order

Specifies the order used to lay out items in their flex container. All items are given an order value of 0. You can manipulate individual item positions by adjusting that number with positive or negative numbers. 

Example: ```.box-3 {order: -1}``` - Sets the item with the class box-3 with an order value of -1. If all other items in the container have a value of 0, that item will show first.

### Flex Basis

Specifies the ideal size of a flex item BEFORE it's placed into a flex container. You can assign it to the flex container to affect all items or individual flex items. The size is how much space it takes along the main axis. It does not affect the cross axis. The maximum value is the maximum size of the container. It will shrink down based off the value of flex-shrink.

Example: ```flex-basis: 100px``` - Sets the size of the item(s) to 100px width or height depending on the flex direction.

### Flex Grow

Dictates how the unused space should be spread amongst flex items. This is determined by ratios. For each item a value is given. The value of the available space is divided by the total value of the given value of all flex items. Then, depending on the value of each individual flex items, that ratio of space is given to that flex item. 

Examples:

In this example, all flex items are given a value of 1. Because nothing else is specified, all flex items have the same value and therefore share the available space evenly between them. This value can be 99 as well and the space will still be shared evenly because all flex items share the same value.

* ```css
    .box {
        flex-grow: 1
    }
    ```

In this example, all flex items are given a default value of 1. Then, box 2 is given a value of 2. If we have three items total with a total grow value of 4 and a total value of available space of 800px, get 200px per a value (800 / 4 = 200). Box 1 and 3 get 200px and box 2 is given 400px (200 * 2 = 400).

* ```css
        .box {
            flex-grow: 1;
        }
        .box-2 {
            flex-grow: 2;
        }
    ```

### Flex Shrink

Dictates how items should shrink when there isn't enough space in a container. The math does NOT work like flex grow. A value of 0 will prevent any container of items or items from shrinking. The default value is 1.

### Flex Shorthand

The flex shorthand allows you to write single-line code for flex basis, grow, and shrink. 

Example: ```flex: 1 1 200px``` - This sets the flex basis to 200px and gives the default value of 1 for both grow and shrink. 