'use strict';

function cs142MakeMultiFilter(originalArray) {
    const arrayFilterer = function(filterCriteria, callback) {
        if (arrayFilterer.currentArray === undefined) {
            arrayFilterer.currentArray = [...originalArray];
        }

        if (typeof filterCriteria !== 'function') {
            return arrayFilterer.currentArray;
        }

        arrayFilterer.currentArray.map((val, i) => {
            if (!filterCriteria(val)) {
                arrayFilterer.currentArray.splice(i, 1);
            }
        });

        if (typeof callback !== 'function') {
            return arrayFilterer;
        }

        originalArray.callback = callback;
        originalArray.callback(arrayFilterer.currentArray);

        return arrayFilterer;
    };
    return arrayFilterer;
}