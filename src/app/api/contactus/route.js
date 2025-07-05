import DBConnection from "@/lib/MongoDbConnection";
import ContactUs from "@/models/contactUs";
export async function POST(request) {
    await DBConnection();

    const { name, email, phone } = await request.json();
    try {
        const response = await ContactUs.create({ name, email, phone })
        return Response.json({
            success: true,
            message: "Form created succcesful",
            data: response
        })
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact', error: error.message });
    }
} 
