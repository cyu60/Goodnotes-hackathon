import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function QuestionsSection() {
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
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--seafoam)] text-white font-bold">
            2
          </div>
          <span className="font-semibold text-[var(--seafoam)]">
            Business Information
          </span>
        </div>
        <div className="flex items-center gap-4 opacity-60">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-bold">
            3
          </div>
          <span>Additional Users</span>
        </div>
      </div>
      {/* Step Title */}
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold text-[var(--seafoam)] mb-1">Step 2</h2>
        <h1 className="text-2xl font-bold mb-2">Business Information</h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Tell us more about your experience and motivation for joining the
          hackathon.
        </p>
      </div>
      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="q_experience">
            Describe your experience relevant to this hackathon
          </Label>
          <Textarea
            id="q_experience"
            name="q_experience"
            required
            placeholder="E.g. previous hackathons, internships, projects, etc."
            className="min-h-[80px] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="q_background">Tell us about your background</Label>
          <Textarea
            id="q_background"
            name="q_background"
            required
            placeholder="E.g. your studies, interests, and skills"
            className="min-h-[80px] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="q_goals">
            What are your goals for this hackathon?
          </Label>
          <Textarea
            id="q_goals"
            name="q_goals"
            required
            placeholder="E.g. what you hope to achieve or learn"
            className="min-h-[80px] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="how_stats">How did you hear about us?</Label>
          <Textarea
            id="how_stats"
            name="how_stats"
            required
            placeholder="E.g. social media, friends, university, etc."
            className="min-h-[60px] bg-white"
          />
        </div>
      </div>
      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <a
          href="/register/profile"
          className="text-[var(--seafoam)] text-sm hover:underline"
        >
          &lt; Back
        </a>
        <Button className="bg-[var(--seafoam)] text-white px-8 py-2 rounded-lg hover:bg-[var(--seafoam)]/90 transition-colors">
          Next Step &rarr;
        </Button>
      </div>
    </div>
  );
}
