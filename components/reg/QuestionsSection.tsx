import { ChangeEvent } from "react";

type Props = {
  formData: {
    q_experience: string;
    q_background: string;
    q_goals: string;
    how_stats: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function QuestionsSection({ formData, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Questions</h2>

      <div>
        <label className="block text-white">Tell us about your experience</label>
        <textarea
          name="q_experience"
          value={formData.q_experience}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-white">What is your background?</label>
        <textarea
          name="q_background"
          value={formData.q_background}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-white">What are your goals?</label>
        <textarea
          name="q_goals"
          value={formData.q_goals}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-white">How did you hear about stats?</label>
        <textarea
          name="how_stats"
          value={formData.how_stats}
          onChange={onChange}
          className="w-full mt-1 p-2 rounded"
          rows={2}
        />
      </div>
    </div>
  );
}
