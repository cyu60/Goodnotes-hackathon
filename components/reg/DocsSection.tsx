import { ChangeEvent } from "react";

type Props = {
  formData: {
    resume: string;
    confirmResume: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function DocsSection({ formData, onChange, onCheckboxChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Documents</h2>

      <div>
        <label className="block text-white">Link to your resume</label>
        <input
          type="text"
          name="resume"
          value={formData.resume}
          onChange={onChange}
          placeholder="https://..."
          className="w-full mt-1 p-2 rounded"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="confirmResume"
          checked={formData.confirmResume === "Yes"}
          onChange={onCheckboxChange}
          className="h-4 w-4 rounded"
          required
        />
        <label className="block text-white">I confirm my resume link is correct and accessible.</label>
      </div>
    </div>
  );
}
