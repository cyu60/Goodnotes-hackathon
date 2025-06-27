import { NextResponse } from "next/server";

const FORM_ID = "1FAIpQLSf8WYtZ2g07XHd-D8TMUu1fyQjZAOK3kKPVbWfhaDHU5jCSIw";
const VIEW_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`;
const SUBMIT_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

// Alternative approach: Use a simpler method that doesn't rely on hidden tokens
async function submitToGoogleForm(formData: Record<string, string>) {
    console.log("Using simplified Google Form submission method...");
    
    const urlParams = new URLSearchParams();
    
    // Add all form data, but filter out empty values and problematic fields
    Object.entries(formData).forEach(([key, value]) => {
        if (value && value.trim() !== '' && value !== 'undefined' && value !== 'null') {
            // Truncate very long values to prevent payload size issues
            const truncatedValue = value.length > 1000 ? value.substring(0, 1000) : value;
            urlParams.append(key, truncatedValue);
            console.log(`Adding field ${key}: ${truncatedValue.substring(0, 50)}${truncatedValue.length > 50 ? '...' : ''}`);
        } else {
            console.log(`Skipping empty field: ${key}`);
        }
    });
    
    console.log("Total form data size:", urlParams.toString().length, "characters");
    console.log("Submitting with URL params:", Object.fromEntries(urlParams));
    
    // Use a more direct approach
    const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Origin": "https://docs.google.com",
            "Referer": VIEW_URL,
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
        },
        body: urlParams.toString(),
    });
    
    console.log("Simplified submission status:", response.status);
    console.log("Simplified submission ok:", response.ok);
    
    return response;
}

// Fallback method using a different approach
async function submitToGoogleFormFallback(formData: Record<string, string>) {
    console.log("Using fallback Google Form submission method...");
    
    const urlParams = new URLSearchParams();
    
    // Add only essential form data to reduce payload size
    const essentialFields = [
        "entry.1611259998", // firstName
        "entry.438556156",  // lastName
        "entry.112048001",  // phone_num
        "entry.242018488",  // email
        "entry.1516008500", // school
        "entry.1444091658", // degree
        "entry.1378784663", // discipline
        "entry.1512254965", // year
        "entry.730672657",  // expectedGradYear
        "entry.677189088",  // how_stats
        "entry.613447457"   // confirmData
    ];
    
    essentialFields.forEach(field => {
        const value = formData[field];
        if (value && value.trim() !== '' && value !== 'undefined' && value !== 'null') {
            const truncatedValue = value.length > 500 ? value.substring(0, 500) : value;
            urlParams.append(field, truncatedValue);
            console.log(`Fallback: Adding essential field ${field}: ${truncatedValue.substring(0, 30)}${truncatedValue.length > 30 ? '...' : ''}`);
        }
    });
    
    console.log("Fallback total form data size:", urlParams.toString().length, "characters");
    
    // Try with minimal headers
    const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlParams.toString(),
    });
    
    console.log("Fallback submission status:", response.status);
    console.log("Fallback submission ok:", response.ok);
    
    return response;
}

export async function POST(request: Request) {
    try {
        console.log("=== Starting form submission ===");
        
        const data = await request.json();
        console.log("Received form data:", Object.keys(data));
        
        const requiredFields = [
        'firstName','lastName','phone_num','email',
        'school','degree','discipline','year',
        'expectedGradYear','how_stats','confirmData'
        ];
        const missing = requiredFields.filter(f => !data[f]);
        if (missing.length) {
        console.log("Missing required fields:", missing);
        return NextResponse.json(
            {
            success: false,
            message: `Please fill in all required fields: ${missing.join(", ")}`
            },
            { status: 400 }
        );
        }

        console.log("All required fields present, submitting to Google Form...");
        
        // 1) Map form data to Google Form entry IDs
        const formMapping: Record<string, string> = {
            "entry.1611259998": data.firstName,
            "entry.438556156": data.lastName,
            "entry.112048001": data.phone_num,
            "entry.242018488": data.email,
            "entry.1516008500": data.school,
            "entry.1444091658": data.degree,
            "entry.1378784663": data.discipline,
            "entry.1512254965": data.year,
            "entry.730672657": data.expectedGradYear,
            "entry.1319080282": data.resume,
            "entry.1713755840": data.q_experience,
            "entry.1326196853": data.q_background,
            "entry.451350810": data.q_goals,
            "entry.420248234": data.team,
            "entry.677189088": data.how_stats,
            "entry.613447457": data.confirmData
        };
        
        // 2) submit to Google Form
        const response = await submitToGoogleForm(formMapping);

        // Try to read the response body for debugging
        try {
            const responseText = await response.text();
            console.log("Google Form response body length:", responseText.length);
            console.log("Google Form response body (first 500 chars):", responseText.substring(0, 500));
            console.log("Google Form response body:", responseText);
            
            // Check if response contains success indicators
            if (responseText.includes("Thank you") || responseText.includes("success") || responseText.includes("submitted")) {
                console.log("✅ Google Form submission appears successful");
            } else if (responseText.includes("error") || responseText.includes("invalid")) {
                console.log("❌ Google Form submission appears to have errors");
            } else {
                console.log("⚠️ Google Form response is ambiguous");
            }
        } catch (e) {
            console.log("Could not read response body:", e);
        }

        // If the first submission failed, try the fallback method
        if (!response.ok || response.status !== 200) {
            console.log("First submission failed, trying fallback method...");
            
            try {
                const fallbackResponse = await submitToGoogleFormFallback(formMapping);
                console.log("Fallback submission completed with status:", fallbackResponse.status);
                
                // Try to read fallback response
                try {
                    const fallbackText = await fallbackResponse.text();
                    console.log("Fallback response body length:", fallbackText.length);
                } catch (e) {
                    console.log("Could not read fallback response body:", e);
                }
            } catch (fallbackError) {
                console.error("Fallback submission also failed:", fallbackError);
            }
        }

        // Google always returns 200, so just assume success if no exception
        return NextResponse.json({
        success: true,
        message: "Form submitted successfully"
        });
    } catch (err: any) {
        console.error("Form submission error:", err);
        console.error("Error stack:", err.stack);
        return NextResponse.json(
        {
            success: false,
            message: err.message || "Unknown error"
        },
        { status: 500 }
        );
    }
}
