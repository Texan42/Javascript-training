//generator, function needs * to indicate its a generator

function* myGenerator(i) {
    yield i++;
    yield i +=2;
    yield i++;
}

const myGenitr = myGenerator(0);

for (val of myGenitr) {
    console.log(val);
}

//iterator
// identify with [Symbol.iterator]

function myIterator(arr) {
    let index = 0;
    return {
        next: function() {
            return (index < arr.length) ? {
                value: arr[index++],
                done: false
            } : {
                done: true
            };
        }
    }
}


const bands = ['Pink Floyd', 'Led Zeppelin', 'Queen', 'The Beatles', 'The Rolling Stones'];

const bandItr = myIterator(bands);


const myBetterBandItr = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            [Symbol.iterator]() {return this;},
            next() {
                return (index < bands.length) ? {
                    value: bands[index++],
                    done: false
                } : {
                    done: true
                }
            }
        }
    }
};

for (band of myBetterBandItr) {
        console.log(band);
}