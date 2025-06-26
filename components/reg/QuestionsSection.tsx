import { ChangeEvent } from "react";

type Props = {
  formData: {
    q_experience: string;
    q_background: string;
    q_goals: string;
    team: string;
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
          Tell us a bit about your experience with technology or hackathons
          (optional).
        </label>
        <textarea
          name="q_experience"
          value={formData.q_experience}
          onChange={onChange}
          placeholder="No experience? No problem! Just share anything you've explored or are curious about."
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          Describe your background experience in education and technology
          (optional).
        </label>
        <textarea
          name="q_background"
          value={formData.q_background}
          onChange={onChange}
          placeholder="Share your background in education and technology."
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          What are you hoping to achieve at the MentorMates Hackathon?
          (optional)
        </label>
        <textarea
          name="q_goals"
          value={formData.q_goals}
          onChange={onChange}
          placeholder="Share your goals for the hackathon."
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          How did you hear about the MentorMates hackathon?{" "}
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          name="how_stats"
          value={formData.how_stats}
          onChange={onChange}
          placeholder="e.g. From a friend, social media, or university newsletter."
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">
          Do you already have a team? (Optional)
        </label>
        <textarea
          name="team"
          value={formData.team}
          onChange={onChange}
          placeholder="If yes, please list your teammates below. (Note: Each teammate still needs to apply separately.) If not, no worries — we'll have networking and team formation activities on Friday evening to help you find teammates!"
          className="w-full mt-1 p-3 rounded-lg bg-white/80 border border-gray-300 focus:border-[var(--gnTeal)] focus:ring-2 focus:ring-[var(--gnTeal)] text-gray-900 placeholder-gray-400 shadow-sm transition"
          rows={4}
        />
        <span className="text-xs text-gray-200 mt-1 block">
          If you don't have a team yet, leave this blank. We'll help you find
          teammates during the event!
        </span>
      </div>
    </div>
  );
}
