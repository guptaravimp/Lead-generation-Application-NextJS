import mongoose from 'mongoose';

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("DB Connection successful");
    } catch (error) {
        console.log("DB Connection Issue:", error.message);
        throw error;
    }
};

export default DBConnection;
