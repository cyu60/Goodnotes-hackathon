"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export default function RegisterPage() {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
        "entry.1234567890": formData.get("fullName"),
        "entry.1234567891": formData.get("email"),
        "entry.1234567892": formData.get("phone"),
        "entry.1234567893": formData.get("organization"),
        "entry.1234567894": formData.get("role"),
        "entry.1234567895": formData.get("experience"),
        };

        try {
        const response = await fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSfxxxxxxxx/formResponse",
            {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(
                Object.fromEntries(
                Object.entries(data).map(([key, value]) => [
                    key,
                    String(value || ""),
                ])
                )
            ).toString(),
            }
        );

        // Reset form and show success message
        e.currentTarget.reset();
        alert("Registration successful! We'll be in touch soon.");
        } catch (error) {
        alert("There was an error submitting the form. Please try again.");
        }

        setSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--seafoam)] via-[var(--gnTeal)] to-[var(--apple)] py-12 px-4">
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
            <CardTitle className="text-3xl text-center">
                Register for the Hackathon
            </CardTitle>
            <CardDescription className="text-center">
                Join us for an exciting weekend of innovation and creativity
            </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-6 px-6">
            <div className="space-y-4">
                <div>
                <label htmlFor="fullName" className="block text-sm font-medium">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[var(--gnTeal)] focus:outline-none focus:ring-1 focus:ring-[var(--gnTeal)]"
                />
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[var(--gnTeal)] focus:outline-none focus:ring-1 focus:ring-[var(--gnTeal)]"
                />
                </div>

                <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[var(--gnTeal)] focus:outline-none focus:ring-1 focus:ring-[var(--gnTeal)]"
                />
                </div>

                <div>
                <label
                    htmlFor="organization"
                    className="block text-sm font-medium"
                >
                    Organization/University
                </label>
                <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[var(--gnTeal)] focus:outline-none focus:ring-1 focus:ring-[var(--gnTeal)]"
                />
                </div>

                <div>
                <label htmlFor="role" className="block text-sm font-medium">
                    Current Role
                </label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[var(--gnTeal)] focus:outline-none focus:ring-1 focus:ring-[var(--gnTeal)]"
                />
                </div>

                <div>
                <label htmlFor="experience" className="block text-sm font-medium">
                    Years of Experience
                </label>
                <select
                    id="experience"
                    name="experience"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[var(--gnTeal)] focus:outline-none focus:ring-1 focus:ring-[var(--gnTeal)]"
                >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                </select>
                </div>
            </div>

            <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[var(--red)] hover:bg-[var(--red)]/90 text-white"
            >
                {submitting ? "Submitting..." : "Register Now"}
            </Button>
            </form>
        </Card>
        </div>
    );
}
