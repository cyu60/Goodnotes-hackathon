import { ChangeEvent } from "react";

type Props = {
  formData: {
    resume: string;
    confirmResume: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function DocsSection({
  formData,
  onChange,
  onCheckboxChange,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Documents</h2>

      <div>
        <label className="block text-white mb-1">Link to your resume</label>
        <input
          type="url"
          name="resume"
          value={formData.resume}
          onChange={onChange}
          placeholder="https://your-resume-link.com"
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          required
        />
        <span className="text-xs text-gray-200 mt-1 block">
          Please provide a public link (Google Drive, Dropbox, etc.)
        </span>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="confirmResume"
          checked={formData.confirmResume === "Yes"}
          onChange={onCheckboxChange}
          className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-[var(--gnTeal)] bg-white/80"
          required
        />
        <label className="block text-white">
          I confirm my resume link is correct and accessible.
        </label>
      </div>
    </div>
  );
}
