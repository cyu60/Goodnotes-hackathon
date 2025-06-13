"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import ProfileSection from "@/components/reg/ProfileSection";
import QuestionsSection from "@/components/reg/QuestionsSection";
import DocsSection from "@/components/reg/DocsSection";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    agreeToTerms: "",
    confirmResume: "",
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    degree: "",
    discipline: "",
    year: "",
    expectedGradYear: "",
    q_experience: "",
    q_background: "",
    q_goals: "",
    how_stats: "",
    resume: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked ? "Yes" : "No" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Log the form data before submission
    console.log("Submitting form data:", formData);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.message || "Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProfileSection
            formData={formData}
            onChange={handleChange}
            onCheckboxChange={handleCheckboxChange}
          />
        );
      case 2:
        return <QuestionsSection formData={formData} onChange={handleChange} />;
      case 3:
        return (
          <DocsSection
            formData={formData}
            onChange={handleChange}
            onCheckboxChange={handleCheckboxChange}
          />
        );
      default:
        return null;
    }
  };

  const resetForm = () => {
    setFormData({
      agreeToTerms: "",
      confirmResume: "",
      firstName: "",
      lastName: "",
      email: "",
      school: "",
      degree: "",
      discipline: "",
      year: "",
      expectedGradYear: "",
      q_experience: "",
      q_background: "",
      q_goals: "",
      how_stats: "",
      resume: "",
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--seafoam)] via-[var(--gnTeal)] to-[var(--canary)] p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-white/5 backdrop-blur-xl rounded-4xl p-8 shadow-5xl text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
            <p className="text-white/80 mb-6">
              Your registration has been submitted successfully.
            </p>
            <img
              src="/success.png"
              alt="Success Icon"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <Button
              onClick={() => window.location.href = "/"}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-2"
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--seafoam)] via-[var(--gnTeal)] to-[var(--canary)] p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="absolute top-8 left-8">
            <Button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2">
              ← Back
            </Button>
          </Link>
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <img
                src="/goodnotes.png"
                alt="GoodNotes Logo"
                width={32}
                height={32}
              />
              <span>GoodNotes Hackathon</span>
            </h1>
            <p className="text-white/80 text-lg">
              Join us for an exciting weekend of innovation and creativity
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="bg-white/5 backdrop-blur-xl rounded-4xl p-8 shadow-5xl">
            {renderStep()}
          </div>

          <div className="flex justify-between gap-6 max-w-2xl mx-auto mt-8">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={() => setCurrentStep((s) => s - 1)}
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-2 text-lg"
              >
                Previous
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={() => setCurrentStep((s) => s + 1)}
                className="ml-auto bg-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/90 text-white px-8 py-2 text-lg"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto bg-[var(--red)] hover:bg-[var(--red)]/90 text-white px-8 py-2 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
