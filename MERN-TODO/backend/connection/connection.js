import mongoose from 'mongoose'

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected To MongoDB!');
    } catch (error) {
        console.log('Error Arises:', error.message);
    }
}

export default connection