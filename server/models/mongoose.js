var mongoose = require('mongoose');
var SurveySchema = new mongoose.Schema({
    name: String,
    question: String,
    option1: String,
    count1: Number,
    option2: String,
    count2: Number,
    option3: String,
    count3: Number,
    option4: String,
    count4: Number
});

mongoose.model('SurveyDb', SurveySchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');