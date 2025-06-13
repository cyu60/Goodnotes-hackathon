import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log("Raw received data:", data);

        const requiredFields = [
            'firstName',
            'lastName',
            'email',
            'school',
            'degree',
            'discipline',
            'year',
            'expectedGradYear',
            'q_experience',
            'q_background',
            'q_goals',
            'how_stats',
            'resume',
            'agreeToTerms',
            'confirmResume'
        ];

        const fieldStatus = requiredFields.map(field => ({
            field,
            value: data[field],
            isEmpty: !data[field]
        }));
        console.log("Field validation status:", fieldStatus);

        const missingFields = requiredFields.filter(field => !data[field]);
        if (missingFields.length > 0) {
            console.log("Missing fields:", missingFields);
            return NextResponse.json(
                { 
                    success: false, 
                    message: `Please fill in all required fields: ${missingFields.join(', ')}` 
                },
                { status: 400 }
            );
        }

        console.log("All required fields are present, proceeding with submission");

        const formData = new URLSearchParams();
        
        const formMapping = {
            "entry.1036871479": data.agreeToTerms,
            "entry.546651345": data.firstName,
            "entry.1085819250": data.lastName,
            "entry.995361391": data.email,
            "entry.914222488": data.school,
            "entry.549486355": data.degree,
            "entry.242062961": data.discipline,
            "entry.971328453": data.year,
            "entry.717460292": data.expectedGradYear,
            "entry.1209593982": data.q_experience,
            "entry.1906901182": data.q_background,
            "entry.360517156": data.q_goals,
            "entry.1861936621": data.how_stats,
            "entry.785234570": data.resume,
            "entry.406871332": data.confirmResume
        };

        Object.entries(formMapping).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        console.log("Submitting to Google Form with data:", Object.fromEntries(formData));

        const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSf8WYtZ2g07XHd-D8TMUu1fyQjZAOK3kKPVbWfhaDHU5jCSIw/formResponse", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.9",
                "Origin": "https://docs.google.com",
                "Referer": "https://docs.google.com/forms/d/e/1FAIpQLSf8WYtZ2g07XHd-D8TMUu1fyQjZAOK3kKPVbWfhaDHU5jCSIw/viewform",
            },
            body: formData.toString(),
            mode: "no-cors",
            credentials: "omit",
        });

        console.log("Google Form submission completed");
        
        return NextResponse.json({
            success: true,
            message: "Form submitted successfully"
        });

    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json(
            { 
                success: false, 
                message: "An error occurred while submitting the form" 
            },
            { status: 500 }
        );
    }
}