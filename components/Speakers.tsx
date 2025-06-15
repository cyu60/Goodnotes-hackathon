import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function Speakers() {
    return(
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
                    The <span className="text-[var(--seafoam)]">Speakers</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-gradient-to-br from-[var(--seafoam)]/5 to-[var(--seafoam)]/10 border-none shadow-lg aspect-square">
                        <CardHeader>
                            <div className="flex flex-col items-start gap-4">
                                <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
                                    <Image 
                                        src="/goodnotes.png"
                                        alt="Speaker 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardTitle className="text-xl font-bold">
                                    Speaker 1
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-left">
                                Senior Software Engineer at TechCorp, specializing in AI and Machine Learning
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-[var(--seafoam)]/5 to-[var(--seafoam)]/10 border-none shadow-lg aspect-square">
                        <CardHeader>
                            <div className="flex flex-col items-start gap-4">
                                <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
                                    <Image 
                                        src="/goodnotes.png"
                                        alt="Speaker 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardTitle className="text-xl font-bold">
                                    Speaker 2
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-left">
                                CTO and Co-founder of InnovateLabs, Cloud Architecture Expert
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-[var(--seafoam)]/5 to-[var(--seafoam)]/10 border-none shadow-lg aspect-square">
                        <CardHeader>
                            <div className="flex flex-col items-start gap-4">
                                <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
                                    <Image 
                                        src="/goodnotes.png"
                                        alt="Speaker 3" 
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardTitle className="text-xl font-bold">
                                    Speaker 3
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-left">
                                Product Lead at StartupX, Full-Stack Development and UX Design
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            </div>
        </section>  
    );
}