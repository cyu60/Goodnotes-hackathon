"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProfileSection from "@/components/reg/ProfileSection";
import QuestionsSection from "@/components/reg/QuestionsSection";
import DocsSection from "@/components/reg/DocsSection";
import Link from "next/link";

export default function RegisterPage() {
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      "entry.1611259998": formData.get("firstName"),
      "entry.438556156": formData.get("lastName"), 
      "entry.242018488": formData.get("email"),
      "entry.1516008500": formData.get("school"),
      "entry.1444091658": formData.get("degree"),
      "entry.1512254965": formData.get("year"),
      "entry.730672657": formData.get("expectedGradYear"),
      "entry.1713755840": formData.get("q_experience"),
      "entry.1326196853": formData.get("q_background"),
      "entry.451350810": formData.get("q_goals"),
      "entry.677189088": formData.get("how_stats"),
      "entry.1319080282": formData.get("resume"),
    };

    try {
      await fetch("https://forms.gle/J3xVWqmUDSVo81276", {
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
      });

      e.currentTarget.reset();
      alert("Registration successful! We'll be in touch soon.");
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }

    setSubmitting(false);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--seafoam)] via-[var(--gnTeal)] to-[var(--canary)] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="absolute top-8 left-8">
            <Button
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2"
            >
              ← Back
            </Button>
          </Link>
          
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-white mb-2">
              Register for the Hackathon
            </h1>
            <p className="text-white/80 text-lg">
              Join us for an exciting weekend of innovation and creativity
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-4xl p-8 shadow-5xl">
            {currentStep === 1 && <ProfileSection />}
            {currentStep === 2 && <QuestionsSection />}
            {currentStep === 3 && <DocsSection />}
          </div>

          <div className="flex justify-between gap-6 max-w-2xl mx-auto">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-2 text-lg"
              >
                Previous
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/90 text-white px-8 py-2 text-lg ml-auto"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={submitting}
                className="bg-[var(--red)] hover:bg-[var(--red)]/90 text-white px-8 py-2 text-lg ml-auto"
              >
                {submitting ? "Submitting..." : "Submit Registration"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
