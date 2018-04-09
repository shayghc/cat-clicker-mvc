describe('The cat objects array', function() {
    let obj = catObj;

    it('should be defined', function() {
        expect(obj).toBeDefined();
    });

    it('should contain a minimum of five objects', function() {
        expect(obj.length).toBeGreaterThan(4);
    });

    // Loop through the allCats array to check for correct content
    for (let i = 0; i < obj.length; i++) {
        let image = obj[i]['url'];
        let name = obj[i]['name'];

        (function() {
            it('should contain a url property containing a path for a .jpg file', function() {
                expect(image).toEqual(catObj[i]['url']);
            });

            it('should contain a name property containing a string', function() {
                expect(name).toEqual(catObj[i]['name']);
            });
        })(obj[i]);
    }
});

describe('The browser display', function() {

    it('should have a list of cat names', function() {
        //expectation here
    });

    it('should have a "display" area containing the cat name', function() {
        //expectation here
    });

    it('should have a "display" area containing the cat picture', function() {
        //expectation here
    });

    it('should have a "display" area containing the count of the number of clicks', function() {
        //expectation here
    });
});

describe('Interactivity requirements', function() {

    it('that the cat display area should display cat details for the selected cat when the name is clicked', function() {
        //expectation here
    });

    it('that click count should increment when the cat picture is clicked', function() {
        //expectation here
    });

    it('that the click count for each cat should persist', function() {
        //expectation here
    });
});
