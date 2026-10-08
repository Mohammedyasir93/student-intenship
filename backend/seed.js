const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Job = require('./models/Job');

dotenv.config();

const sampleJobs = [
  {
    jobTitle: 'IoT Intern',
    company: 'SmartSense Labs',
    location: 'Chennai',
    category: 'IoT',
    jobType: 'On-site',
    applyLink: 'https://example.com/jobs/iot-intern',
    description: 'Sample IoT internship for demonstration purposes only.'
  },
  {
    jobTitle: 'Embedded Systems Engineer',
    company: 'CircuitWorks',
    location: 'Bengaluru',
    category: 'Embedded Systems',
    jobType: 'Hybrid',
    applyLink: 'https://example.com/jobs/embedded-systems',
    description: 'Sample embedded internship for demonstration purposes only.'
  },
  {
    jobTitle: 'Electronics Hardware Intern',
    company: 'VoltEdge',
    location: 'Hyderabad',
    category: 'Electronics',
    jobType: 'Remote',
    applyLink: 'https://example.com/jobs/electronics-hardware',
    description: 'Sample electronics internship for demonstration purposes only.'
  },
  {
    jobTitle: 'Frontend Web Developer',
    company: 'PixelNest',
    location: 'Pune',
    category: 'Web Development',
    jobType: 'Remote',
    applyLink: 'https://example.com/jobs/frontend-web',
    description: 'Sample web development internship for demonstration purposes only.'
  },
  {
    jobTitle: 'Software Engineer Intern',
    company: 'CodeSprint',
    location: 'Coimbatore',
    category: 'Software',
    jobType: 'Hybrid',
    applyLink: 'https://example.com/jobs/software-engineer',
    description: 'Sample software internship for demonstration purposes only.'
  },
  {
    jobTitle: 'IoT Application Developer',
    company: 'AquaLink',
    location: 'Chennai',
    category: 'IoT',
    jobType: 'On-site',
    applyLink: 'https://example.com/jobs/iot-application',
    description: 'Sample IoT app development internship for demonstration purposes only.'
  },
  {
    jobTitle: 'Embedded Firmware Intern',
    company: 'MicroNova',
    location: 'Trivandrum',
    category: 'Embedded Systems',
    jobType: 'On-site',
    applyLink: 'https://example.com/jobs/embedded-firmware',
    description: 'Sample firmware internship for demonstration purposes only.'
  },
  {
    jobTitle: 'Full Stack Developer Intern',
    company: 'WebOrbit',
    location: 'Bengaluru',
    category: 'Web Development',
    jobType: 'Remote',
    applyLink: 'https://example.com/jobs/full-stack',
    description: 'Sample full stack internship for demonstration purposes only.'
  }
];

const seedJobs = async () => {
  try {
    await connectDB();

    const count = await Job.countDocuments();

    if (count > 0) {
      console.log('Sample jobs already exist in the database.');
      return;
    }

    await Job.insertMany(sampleJobs);
    console.log(`Inserted ${sampleJobs.length} sample jobs successfully.`);
  } catch (error) {
    console.error('Seed failed:', error.message);
  } finally {
    mongoose.disconnect();
  }
};

seedJobs();
