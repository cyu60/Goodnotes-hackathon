import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProfileSection() {
  return (
    <div className="max-w-2xl mx-auto bg-[var(--white)] rounded-2xl shadow-xl p-8">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--seafoam)] text-white font-bold">
            1
          </div>
          <span className="font-semibold text-[var(--seafoam)]">
            Your Profile
          </span>
        </div>
        <div className="flex items-center gap-4 opacity-60">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-bold">
            2
          </div>
          <span>Business Information</span>
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
        <h2 className="text-xl font-bold text-[var(--seafoam)] mb-1">Step 1</h2>
        <h1 className="text-2xl font-bold mb-2">Your Profile</h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Enter your personal and academic information to get started.
        </p>
      </div>
      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Enter your first name"
            className="bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Enter your last name"
            className="bg-white"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email address"
            className="bg-white"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="school">School / University</Label>
          <Input
            id="school"
            name="school"
            type="text"
            required
            placeholder="Enter your school or university"
            className="bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="degree">Degree</Label>
          <Input
            id="degree"
            name="degree"
            type="text"
            required
            placeholder="e.g. BSc Computer Science"
            className="bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Current Year</Label>
          <Input
            id="year"
            name="year"
            type="text"
            required
            placeholder="e.g. 2nd Year"
            className="bg-white"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="expectedGradYear">Expected Graduation Year</Label>
          <Input
            id="expectedGradYear"
            name="expectedGradYear"
            type="text"
            required
            placeholder="e.g. 2025"
            className="bg-white"
          />
        </div>
      </div>
      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <a
          href="/login"
          className="text-[var(--seafoam)] text-sm hover:underline"
        >
          &lt; Back to Login
        </a>
        <Button className="bg-[var(--seafoam)] text-white px-8 py-2 rounded-lg hover:bg-[var(--seafoam)]/90 transition-colors">
          Next Step &rarr;
        </Button>
      </div>
    </div>
  );
}
