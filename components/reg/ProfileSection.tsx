import { ChangeEvent } from "react";

type Props = {
  formData: {
    agreeToTerms: string;
    firstName: string;
    lastName: string;
    email: string;
    school: string;
    degree: string;
    discipline: string;
    year: string;
    expectedGradYear: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ProfileSection({ formData, onChange, onCheckboxChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Profile</h2>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms === "Yes"}
          onChange={onCheckboxChange}
          className="h-4 w-4 rounded"
          required
        />
        <label className="block text-white">I agree to the terms and conditions.</label>
      </div>

      <div>
        <label className="block text-white">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-white">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-white">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-white">School</label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-white">Degree</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-white">Discipline</label>
        <input
          type="text"
          name="discipline"
          value={formData.discipline}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-white">Year</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-white">Expected Graduation Year</label>
        <input
          type="text"
          name="expectedGradYear"
          value={formData.expectedGradYear}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
        />
      </div>
    </div>
  );
}
