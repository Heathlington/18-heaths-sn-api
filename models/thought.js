const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
          type: Date,
          default: Date.now(), 
          //Use a getter method to format the timestamp on query 
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
          //Array of nested documents created with the reactionSchema  
        }
    }
);
thoughtSchemaSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.thoughts.length
  })

  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought; 