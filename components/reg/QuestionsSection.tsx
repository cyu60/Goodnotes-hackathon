import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function QuestionsSection() {
    return (
        <div className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <Select name="experience" required>
            <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="0-1">0-1 years</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5+">5+ years</SelectItem>
            </SelectContent>
            </Select>
        </div>

        <div className="space-y-2">
            <Label htmlFor="motivation">
            Why do you want to participate in this hackathon?
            </Label>
            <Textarea
            id="motivation"
            name="motivation"
            required
            placeholder="Tell us about your motivation..."
            className="min-h-[100px]"
            />
        </div>

        <div className="space-y-2">
            <Label htmlFor="skills">
            What are your key skills and technologies?
            </Label>
            <Textarea
            id="skills"
            name="skills"
            required
            placeholder="List your main skills and technologies..."
            className="min-h-[100px]"
            />
        </div>

        <div className="space-y-2">
            <Label htmlFor="team">Are you coming with a team?</Label>
            <Select name="team" required>
            <SelectTrigger>
                <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="yes">Yes, I have a team</SelectItem>
                <SelectItem value="no">No, I'm looking for a team</SelectItem>
            </SelectContent>
            </Select>
        </div>
        </div>
    );
}
