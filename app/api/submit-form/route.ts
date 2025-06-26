import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log("Raw received data:", data);

        const requiredFields = [
            'firstName',
            'lastName',
            'phone_num',
            'email',
            'school',
            'degree',
            'discipline',
            'year',
            'expectedGradYear',
            'how_stats',
            'confirmData'
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
            // First Name
            "entry.1611259998": data.firstName,
            // Last Name
            "entry.438556156": data.lastName,
            // Phone number
            "entry.112048001": data.phone_num,
            // Email
            "entry.242018488": data.email,
            // School
            "entry.1516008500": data.school,
            // Degree
            "entry.1444091658": data.degree,
            // Discipline
            "entry.1378784663": data.discipline,
            // Year of Study
            "entry.1512254965": data.year,
            // Expected Year of Graduation
            "entry.730672657": data.expectedGradYear,
            // Resume (optional)
            "entry.1319080282": data.resume,
            // Experience (optional)
            "entry.1713755840": data.q_experience,
            // Background (optional)
            "entry.1326196853": data.q_background,
            // Goals (optional)
            "entry.451350810": data.q_goals,
            // Team (optional)
            "entry.420248234": data.team,
            // How did you hear about the hackathon?
            "entry.677189088": data.how_stats,
            // Declaration checkbox
            "entry.613447457": data.confirmData
        };

        Object.entries(formMapping).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        console.log("Submitting to Google Form with data:", Object.fromEntries(formData));
        console.log("Form data string:", formData.toString());

        const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSf8WYtZ2g07XHd-D8TMUu1fyQjZAOK3kKPVbWfhaDHU5jCSIw/viewform?usp=preview", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.9",
                "Origin": "https://docs.google.com",
                "Referer": "https://docs.google.com/forms/d/e/1FAIpQLSf8WYtZ2g07XHd-D8TMUu1fyQjZAOK3kKPVbWfhaDHU5jCSIw/viewform?usp=preview",
            },
            body: formData.toString(),
            mode: "no-cors",
            credentials: "omit",
        });

        console.log("Google Form submission response status:", response.status);
        console.log("Google Form submission response ok:", response.ok);
        
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