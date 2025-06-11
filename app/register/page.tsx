"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ProfileSection from "@/components/reg/ProfileSection";
import QuestionsSection from "@/components/reg/QuestionsSection";
import DocsSection from "@/components/reg/DocsSection";

export default function RegisterPage() {
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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
      // Add additional form fields for questions and docs sections
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

      e.currentTarget.reset();
      alert("Registration successful! We'll be in touch soon.");
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }

    setSubmitting(false);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const progress = (currentStep / 3) * 100;

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
          <div className="mt-4 space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-center text-gray-500">
              Step {currentStep} of 3
            </p>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit} className="space-y-6 px-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            {currentStep === 1 && <ProfileSection />}
            {currentStep === 2 && <QuestionsSection />}
            {currentStep === 3 && <DocsSection />}
          </div>

          <div className="flex justify-between gap-4">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 hover:bg-gray-600 text-white"
              >
                Previous
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/90 text-white ml-auto"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={submitting}
                className="bg-[var(--red)] hover:bg-[var(--red)]/90 text-white ml-auto"
              >
                {submitting ? "Submitting..." : "Submit Registration"}
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}
