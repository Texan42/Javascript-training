function counterFactory(initialCount) {
    //private
    let count = !Number.isNaN(initialCount) ? initialCount : 0;
    console.log(count);
    //public
    function increment(step) {
        step = !Number.isNaN(step) ? step : 1;
        count += step;
    }
    //public
    function decrement(step) {
        step = !Number.isNaN(step) ? step : 1;
        count -= step;
    }

    function getCount() {
        return count;
    }

    return{
        increment,
        decrement,
        getCount
    };
}

const counter = counterFactory(0);
counter.increment(1);
console.log(counter.getCount());
counter.decrement(5);
console.log(counter.getCount());