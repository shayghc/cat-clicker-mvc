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
            name: 'Fermi',
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

    getArray: function() {
        return model.catArray;
    },

    getWhichCat: function() {
        return model.focusCat;
    },

    getImage: function() {
        return model.focusCat.image;
    },

    getCurrentCount: function() {
        return model.focusCat.count;
    },

    getName: function(i) {
        return model.catArray[i].name;
    },

    setFocusCat: function(cat) {
        model.focusCat = cat;
    },

    incrementCounter: function() {
        model.focusCat.count++;
        displayView.render();
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
        // Capture/create DOM elements
        this.list = controller.getArray();

        // Create the buttons.
        for(let i = 0; i < this.list.length; i++) {
            let newButton = document.createElement('button');
            let target = document.querySelector('ul');
            newButton.textContent = controller.getName(i);
            this.render(newButton, i);
        }
    },

    // Render the display.
    render: function(newButton, index) {
        let elem = controller.getArray();
        this.element = document.querySelector('ul');
        this.element.appendChild(newButton);

        // Assign the event listeners.
        newButton.addEventListener('click', (function(cat) {
            return function() {
                controller.setFocusCat(cat);
                displayView.render();
            };
        })(elem[index]));
        return;
    }
};


// Initialise the view: cat name, cat image and click count.
let displayView = {

    init: function() {
        //Create pointers
        this.displayName = document.querySelector('.catName');
        this.displayImage = document.querySelector('.catImage');
        console.log(this.displayImage);
        this.count = document.querySelector('.counter');

        // Set event handler for click counter
        this.displayImage.addEventListener('click', function() {
            controller.incrementCounter();
        });

        this.render();
    },

    // Render the display.
    render: function() {
        this.total = controller.getCurrentCount();
        // Heading (cat's name)
        this.displayName.textContent = `"${controller.getWhichCat().name}"`;
        // Image
        this.displayImage.src = controller.getImage();
        // Count display
        this.count.textContent = `Total clicks on this cat = ${this.total}`;
    }
};


// Ready?
controller.init();
