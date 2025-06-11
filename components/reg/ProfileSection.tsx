import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileSection() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Enter your full name"
          className="bg-white"
        />
      </div>

      <div className="space-y-2">
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

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Enter your phone number"
          className="bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="organization">Organization</Label>
        <Input
          id="organization"
          name="organization"
          type="text"
          required
          placeholder="Enter your organization name"
          className="bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          name="role"
          type="text"
          required
          placeholder="Enter your role"
          className="bg-white"
        />
      </div>
    </div>
  );
}
