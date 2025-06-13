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
        <label className="block text-white mb-1">
          Tell us about your experience{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          name="q_experience"
          value={formData.q_experience}
          onChange={onChange}
          placeholder="e.g. I have participated in 2 hackathons and built several web apps."
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          What is your background?{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          name="q_background"
          value={formData.q_background}
          onChange={onChange}
          placeholder="e.g. Computer Science undergraduate, interested in AI."
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          What are your goals?{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          name="q_goals"
          value={formData.q_goals}
          onChange={onChange}
          placeholder="e.g. To learn, network, and build something impactful."
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          How did you hear about us?{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          name="how_stats"
          value={formData.how_stats}
          onChange={onChange}
          placeholder="e.g. From a friend, social media, or university newsletter."
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          rows={2}
          required
        />
      </div>
    </div>
  );
}
