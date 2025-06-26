"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import ProfileSection from "@/components/reg/ProfileSection";
import QuestionsSection from "@/components/reg/QuestionsSection";
import DocsSection from "@/components/reg/DocsSection";

export default function RegisterPage() {
  // State for form navigation and status
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone_num: "",
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
    team: "",
    confirmData: "",
  });

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Load form data from localStorage if available
    const saved = localStorage.getItem("registerFormData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("registerFormData", JSON.stringify(formData));
    }
  }, [formData, isClient]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

    // Validate all required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "phone_num",
      "email",
      "school",
      "degree",
      "discipline",
      "year",
      "expectedGradYear",
      "how_stats",
      "confirmData",
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (missingFields.length > 0) {
      setError(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      setIsSubmitting(false);
      return;
    }

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
        localStorage.removeItem("registerFormData");
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
        return <ProfileSection formData={formData} onChange={handleChange} />;
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
      firstName: "",
      lastName: "",
      phone_num: "",
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
      team: "",
      confirmData: "",
    });
    setCurrentStep(1);
    setIsSubmitted(false);
    localStorage.removeItem("registerFormData");
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
              width={320}
              height={320}
              className="mx-auto mb-4"
            />
            <Button
              onClick={() => (window.location.href = "/")}
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
    <div className="min-h-screen bg-gradient-to-br from-[var(--seafoam)] via-[var(--gnTeal)] to-[var(--canary)] p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="mb-4">
            <Link href="/">
              <Button className="bg-white/20 hover:bg-white/30 text-white px-4 sm:px-6 py-2">
                ← Back
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <img
                src="../mentormates.png"
                alt="MentorMates Logo"
                className="w-15 h-15 md:w-15 md:h-15"
              />
              <span>MentorMates Hackathon</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              Join us for an exciting weekend of innovation and creativity
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl sm:rounded-4xl p-4 sm:p-8 shadow-5xl">
            {renderStep()}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 max-w-2xl mx-auto mt-6 sm:mt-8">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={() => setCurrentStep((s) => s - 1)}
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-2 text-lg w-full sm:w-auto"
              >
                Previous
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={() => setCurrentStep((s) => s + 1)}
                className="ml-auto bg-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/90 text-white px-8 py-2 text-lg w-full sm:w-auto"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto bg-[var(--red)] hover:bg-[var(--red)]/90 text-white px-8 py-2 text-lg w-full sm:w-auto"
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
