import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DocsSection() {
  return (
    <div className="max-w-2xl mx-auto bg-[var(--white)] rounded-2xl shadow-xl p-8">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4 opacity-60">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-bold">
            1
          </div>
          <span>Your Profile</span>
        </div>
        <div className="flex items-center gap-4 opacity-60">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-bold">
            2
          </div>
          <span>Short Questions</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--seafoam)] text-white font-bold">
            3
          </div>
          <span className="font-semibold text-[var(--seafoam)]">
            Additional Infromation
          </span>
        </div>
      </div>
      {/* Step Title */}
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold text-[var(--seafoam)] mb-1">Step 3</h2>
        <h1 className="text-2xl font-bold mb-2">Resume Upload</h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Please upload your resume in PDF or Word format to complete your
          registration.
        </p>
      </div>
      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="resume">Resume/CV</Label>
          <Input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            className="cursor-pointer bg-white"
          />
          <p className="text-sm text-gray-500">
            Upload your resume in PDF or Word format
          </p>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <a
          href="/register/questions"
          className="text-[var(--seafoam)] text-sm hover:underline"
        >
          &lt; Back
        </a>
        <Button className="bg-[var(--seafoam)] text-white px-8 py-2 rounded-lg hover:bg-[var(--seafoam)]/90 transition-colors">
          Submit
        </Button>
      </div>
    </div>
  );
}
