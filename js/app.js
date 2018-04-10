/*
 * Model construct *************************************************************
 * Set the cat objects array
 */
let model = {
    focusCat: null,
    catArray: [
        {
            count: 0,
            name: 'Feynman',
            image: 'images/catInBag.jpg'
        },
        {
            count: 0,
            name: 'Oppenheimer',
            image: 'images/catInChair.jpg'
        },
        {
            count: 0,
            name: 'Frisch',
            image: 'images/greyCat.jpg'
        },
        {
            count: 0,
            name: 'Oppenheimer',
            image: 'images/hidingCat.jpg'
        },
        {
            count: 0,
            name: 'Zazzles',
            image: 'images/relaxedCat.jpg'
        }
    ]
};


/*
 * Controller construct *******************************************************
 */
let controller = {
    // Initialise the display set up
    init: function() {
        model.focusCat = model.catArray[0];

        // Invoke view functions
        listView.init();
        displayView.init();
    },

    getWhichCat: function() {
        return model.focusCat;
    },

    getImage: function() {
        console.log(model.focusCat.image);
        return model.focusCat.image;
    },
    getCurrentCount: function() {
        return model.focusCat.count;
    }
};



/*
 * View construct *************************************************************
 *
 * Two view objects are required, one for the list (which is called only once)
 * and one for the display area which changes when a cat in the list is selected.
 */
let listView = {
    // Initialise the view.
    init: function() {

    }
    // Create the buttons.
    // Assign the event listeners.

    // Render the display.

};

// Initialise the view: Cat name, cat image and click count.
let displayView = {

    init: function() {
        this.displayName = document.querySelector('.catName');
        this.displayImage = document.querySelector('.catImage');
        this.count = document.querySelector('.counter');

        this.render();
    },
    // Render the display.
    render: function() {
        this.total = controller.getCurrentCount();
        // Heading (cat's name)
        this.displayName.textContent = controller.getWhichCat().name;
        // Image
        this.displayImage.src = controller.getImage();
        // Count display
        this.count.textContent = 'Total clicks on this cat = ' + this.total;
    }

};


// Ready?
controller.init();
