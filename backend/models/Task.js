import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    required: true,
    enum: ['Early Game', 'Mid Game', 'Late Game', 'Joint Projects', 'Quick Start']
  },
  assignedTo: {
    type: String,
    required: true,
    enum: ['Tanveer', 'Arpit', 'Mukul', 'Sunny', 'Mehul', 'All']
  },
  role: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  completedAt: {
    type: Date,
    default: null
  }
});

export default mongoose.model('Task', taskSchema);
