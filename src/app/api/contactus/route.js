import DBConnection from "@/lib/MongoDbConnection";
import ContactUs from "@/models/contactUs";
export async function POST(request) {
    try {
        await DBConnection();
        const { name, email, phone } = await request.json();
        
        // Validate required fields
        if (!name || !email || !phone) {
            return Response.json(
                { 
                    success: false, 
                    message: 'All fields are required' 
                }, 
                { status: 400 }
            );
        }

        const response = await ContactUs.create({ name, email, phone });
        
        return Response.json({
            success: true,
            message: "Form submitted successfully",
            data: response
        });
        
    } catch (error) {
        console.error('API Error:', error);
        return Response.json(
            { 
                success: false, 
                message: 'Error saving contact', 
                error: error.message 
            }, 
            { status: 500 }
        );
    }
} 
