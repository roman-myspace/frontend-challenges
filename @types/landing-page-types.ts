
export interface ChallengeCardProps {
    title: string;
    thumbnail: string;
    level: "Newbie" | "Junior" | "Intermediate" | "Advanced" | "Guru" | string;
    tech_stack: string[];
    github_link: {
        icon_url: string;
        url: string;
    };
    demo_link: string;
}
