export const prerender = false;
import type { APIRoute } from 'astro';

interface Answer {
    question: number;
    answer: number;
}

interface CareerPath {
    title: string;
    description: string;
    courseLink: string;
    minScore: number;
}

const careerPaths: CareerPath[] = [
    {
        title: "Business Analyst",
        description: "You show strong analytical and problem-solving skills. Business Analysis might be the perfect career path for you, where you'll bridge the gap between business needs and technology solutions.",
        courseLink: "/courses/business-analysis",
        minScore: 20
    },
    {
        title: "Project Manager",
        description: "Your responses indicate strong leadership and organizational abilities. Project Management could be your calling, where you'll guide teams and projects to successful completion.",
        courseLink: "/courses/project-management",
        minScore: 15
    },
    {
        title: "Data Analyst",
        description: "You demonstrate a strong affinity for working with data and finding insights. A career in Data Analytics could be perfect for you, where you'll turn data into actionable business insights.",
        courseLink: "/courses/data-analytics",
        minScore: 10
    },
    {
        title: "IT Consultant",
        description: "Your profile shows a good balance of technical and business skills. IT Consulting could be your path, where you'll help organizations optimize their technology use.",
        courseLink: "/courses/it-consulting",
        minScore: 0
    }
];

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const answers: Answer[] = body.answers;

        // Calculate total score
        const totalScore = answers.reduce((sum, answer) => sum + answer.answer, 0);

        // Find appropriate career path based on score
        const recommendedPath = careerPaths.find(path => totalScore >= path.minScore) || careerPaths[careerPaths.length - 1];

        return new Response(JSON.stringify(recommendedPath), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid request' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
