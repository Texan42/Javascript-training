const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    actors: [String],
    reviews: [{
        company: String,
        rating: String
    }]
});

movieSchema.methods.containsActor = function(actorName){
    for(actor of this.actors){
        if (actorName === actor) return true;
    }
    return false;
}

const Movie = model('Movie', movieSchema);

module.exports = Movie;