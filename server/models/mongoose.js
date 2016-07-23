var mongoose = require('mongoose');
var SurveySchema = new mongoose.Schema({
    name: String,
    question: {type:String,required:true},
    option1: {type:String,required:true},
    count1: {type: Number,required:true},
    option2: {type:String,required:true},
    count2: {type: Number,required:true},
    option3: {type:String,required:true},
    count3: {type: Number,required:true},
    option4: {type:String,required:true},
    count4: {type: Number,required:true}
},{timestamps:true});

mongoose.model('SurveyDb', SurveySchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');