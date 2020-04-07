let mongoose = require("mongoose");
let db = require("../models/tips");
console.log(db)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
// description: Deadlifts x 10 reps 

let tipSeed = [
    {tip: ["The only bad workout is the one that did not happen."]},
    {tip: ["You're only one workout away from having a good mood."]},
    {tip: ["If it doesn't challenge you it won't change you."]},
    {tip: ["Good things take time."]},
    {tip: ["Constantly challenge yourself."]},
    {tip: ["Be stronger than your excuses."]},
    {tip: ["The harder you fight, the higher you soar."]},
    {tip: ["No goal was ever met without a little sweat."]},
    {tip: ["Use the talk test. If you can't speak a sentence or two with each breath, you're pushing too hard."]},
    {tip: ["Be sure to hydrate throughout the day. It takes a couple of hours for your body to absorb the water, so you can’t just drink right before exercise."]},
    {tip: ["Pick a cardio exercise you enjoy. It’s no fun to exercise if you hate it. And you won’t keep it up for very long. Pick something that’s fun."]},
    {tip: ["Exercising with friends is a great way to have fun while training and will also keep you accountable."]},
    {tip: ["Remember to cool down. Allow for 5-10 minutes of stretching after each workout. This helps your heart rate return to normal and can prevent injury."]},
    {tip: ["Reframe your negative thoughts. Chances are, you’re harder on yourself than anyone else in your life."]},
    {tip: ["Set Goals For Your Fitness Training And Be Specific. The more specific you are in terms of your goals, the easier it will be to fulfil them."]},
    {tip: ["A Huge De-Motivator Is Overtraining. It’s an easy trap to fall into but please don’t increase the duration or intensity of your training too quickly."]},
    {tip: ["The same way we grow our bodies we must attend to our mind and spirit."]},
    {tip: ["Your life is a journey that is always evolving in the present, taking shape based on the choices you make every single moment."]},
    {tip: ["The mind is just like a muscle - the more you exercise it, the stronger it gets and the more it can expand."]}
];

db.deleteMany({})
    .then(() => db.insertMany(tipSeed))
    .then(data => {
        console.log(data.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });