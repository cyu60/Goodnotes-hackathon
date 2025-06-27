import { ChangeEvent } from "react";

type Props = {
  formData: {
    firstName: string;
    lastName: string;
    phone_num: string;
    email: string;
    school: string;
    degree: string;
    discipline: string;
    year: string;
    expectedGradYear: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export default function ProfileSection({ formData, onChange }: Props) {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold text-white">Profile</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-sm sm:text-base text-white mb-1">
            First Name{" "}
            <span className="text-red-500 ml-1" aria-hidden="true">
              *
            </span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            placeholder="e.g. John"
            className="w-full mt-1 p-2 sm:p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition text-sm sm:text-base"
            autoComplete="given-name"
            required
          />
        </div>

        <div>
          <label className="block text-sm sm:text-base text-white mb-1">
            Last Name{" "}
            <span className="text-red-500 ml-1" aria-hidden="true">
              *
            </span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            placeholder="e.g. Doe"
            className="w-full mt-1 p-2 sm:p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition text-sm sm:text-base"
            autoComplete="family-name"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-white mb-1">
          Phone Number{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          name="phone_num"
          value={formData.phone_num}
          onChange={onChange}
          placeholder="e.g. +1 555-555-5555"
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          Email{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="e.g. john.doe@gmail.com"
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          School{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={onChange}
          placeholder="e.g. Stanford"
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          Degree{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <select
          name="degree"
          value={formData.degree}
          onChange={onChange}
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          required
        >
          <option value="">Select a degree</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-white mb-1">
          Discipline{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          name="discipline"
          value={formData.discipline}
          onChange={onChange}
          placeholder="e.g. Computer Science"
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          Year of Study{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={onChange}
          placeholder="e.g. 2nd Year"
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          Expected Graduation{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="date"
          name="expectedGradYear"
          value={formData.expectedGradYear}
          onChange={onChange}
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          required
        />
      </div>
    </div>
  );
}
