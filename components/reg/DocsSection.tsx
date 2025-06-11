import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function DocsSection() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="resume">Resume/CV</Label>
        <Input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="cursor-pointer bg-white"
        />
        <p className="text-sm text-gray-500">
          Upload your resume in PDF or Word format
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio">Portfolio (Optional)</Label>
        <Input
          id="portfolio"
          name="portfolio"
          type="file"
          accept=".pdf,.doc,.docx,.zip"
          className="cursor-pointer bg-white"
        />
        <p className="text-sm text-gray-500">
          Upload your portfolio or GitHub profile link
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="idProof">ID Proof</Label>
        <Input
          id="idProof"
          name="idProof"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          required
          className="cursor-pointer bg-white"
        />
        <p className="text-sm text-gray-500">
          Upload a government-issued ID for verification
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="agreement">Terms and Conditions</Label>
        <div className="flex items-center space-x-2">
          <Input
            id="agreement"
            name="agreement"
            type="checkbox"
            required
            className="w-4 h-4 bg-white"
          />
          <Label htmlFor="agreement" className="text-sm">
            I agree to the hackathon terms and conditions
          </Label>
        </div>
      </div>
    </div>
  );
}
