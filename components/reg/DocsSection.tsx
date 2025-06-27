import { ChangeEvent } from "react";

type Props = {
  formData: {
    resume: string;
    confirmData: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function DocsSection({
  formData,
  onChange,
  onCheckboxChange,
}: Props) {
  // Custom handler for Google Forms checkbox value
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChange({
      target: { name, value: checked ? "YES" : "" },
    } as any);
  };

  return (
    <div className="space-y-4 px-4 sm:px-0">
      <h2 className="text-xl font-semibold text-white">Documents</h2>

      <div>
        <label className="block text-white mb-1 text-sm sm:text-base">
          Please upload your link resume here (optional)
        </label>
        <input
          type="url"
          name="resume"
          value={formData.resume}
          onChange={onChange}
          placeholder="https://your-resume-link.com"
          className="w-full mt-1 p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--blue-light)] focus:ring-2 focus:ring-[var(--blue-light)] text-gray-900 placeholder-gray-400 shadow-sm transition"
        />
        <span className="text-xs text-gray-200 mt-1 block">
          Please provide a public link (Google Drive, Dropbox, etc.)
        </span>
      </div>

      <div className="flex items-start sm:items-center gap-2">
        <input
          type="checkbox"
          name="confirmData"
          checked={formData.confirmData === "YES"}
          onChange={handleCheckboxChange}
          className="h-4 w-4 mt-1 sm:mt-0 rounded border-gray-300 focus:ring-2 focus:ring-[var(--blue-light)] bg-white/80"
          required
        />
        <label className="block text-white text-sm sm:text-base">
          I hereby declare that all the information provided in this form is
          true and accurate to the best of my knowledge.
        </label>
      </div>
    </div>
  );
}
