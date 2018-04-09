'use strict';

/*
 * Model construct *************************************************************
 * Set the cat objects array
 */
let model = {
    // Set objects array here.
    let count = 0,
    catArray = [];
    const catNames = ['Feynman', 'Oppenheimer', 'Frisch', 'Zazzles', 'Fermi'];
    // Royalty free images from https://www.pexels.com
    const catImages = ['images/catInBag.jpg', 'catInChair.jpg', 'greyCat.jpg', 'hidingCat.jpg', 'relaxedCat.jpg'];

    // allCats constructor declaration.
    class Cat {
        constructor(name, image, count) {
        this.name = name;
        this.url = image;
        this.count = count;
        }
    }

    // Create cat objects with name, image and own counter.
    for (let i = 0; i < catNames.length; i++) {
        catArray[i] = new Cat(catNames[i], catImages[i], count);
    }
};


/*
 * Controller construct *******************************************************
 */
let controller = {
 // Code here for driving the programme.
};


/*
 * View construct *************************************************************
 *
 * Two view objects are required, one for the list (which is called only once)
 * and one for the display area which changes when a cat in the list is selected.
 */
let listView = {
    // Initialise the view.
    // Create the buttons.
    // Assign the event listeners.

    // Render the display.

};


let displayView = {
    // Initialise the view: Cat name, cat image and click count.

    // Render the display.

};


// Ready?
controller.init();
