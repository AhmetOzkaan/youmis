export const prerender = false;

import type { APIRoute } from 'astro';
import { GoogleGenerativeAI, SchemaType, type GenerationConfig } from '@google/generative-ai';
import * as promptFile from '../../data/prompt.md';
import {
    GOOGLE_API_KEY,
  } from 'astro:env/server'
  

interface Answer {
    question: number;
    answer: number;
}

interface CareerPath {
    id: number;
    title: string;
    courseLink: string;
}

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const systemInstruction = promptFile.rawContent();

const generationConfig : GenerationConfig = {
    temperature: 0.8,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseMimeType: "application/json", 
    responseSchema: {
        type: SchemaType.OBJECT,
        required: ["id", "description"],
        properties: {
            id: { type: SchemaType.NUMBER },
            description: { type: SchemaType.STRING },
        }
    }
 };


const model = genAI.getGenerativeModel({
    //model: "gemini-2.5-pro-exp-03-25",
    model: "gemini-2.5-flash-preview-04-17",
    systemInstruction,
    generationConfig
  });

async function getAPIResult(answers: Answer[]) {
    try {
      const result = await model.generateContent([
        JSON.stringify(answers)
      ]);
      
      const response = result.response;
      const text = response.text();
      const json = JSON.parse(text);
      
      return {
        success: true,
        json
      };
    } catch (error) {
      console.error('Error processing image:', error);
      return {
        success: false,
        error
};
    }
  }

const careerPaths: CareerPath[] = [
    {
        id: 1,
        title: "Business Analysis",
        courseLink: "/courses/business-analysis",
    },
    {
        id: 2,
        title: "Data Analytics",
        courseLink: "/courses/data-analytics",
    },
    {
        id: 3,
        title: "Digital Marketing and E-Commerce",
        courseLink: "/courses/digital-marketing",
    },
    {
        id: 4,
        title: "ERP and Business Processes",
        courseLink: "/courses/erp-and-processes",
    },
    {
        id: 5,
        title: "Organizational Behavior and Corporate Communication",
        courseLink: "/courses/organizational-behavior",
    },
    {
        id: 6,
        title: "Project and Strategy Management",
        courseLink: "/courses/project-strategy",
    },
    {
        id: 7,
        title: "Software Development",
        courseLink: "/courses/software-development",
    }
];

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const answers: Answer[] = body.answers;

        const apiResponse = await getAPIResult(answers);
        
        if (!apiResponse.success) {
            return new Response(JSON.stringify({ error: 'Error processing request' }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const bestCareerPath = careerPaths.find((path) => path.id === apiResponse.json.id);

        const result = {
            title: bestCareerPath?.title,
            description: apiResponse.json.description,
            courseLink: bestCareerPath?.courseLink,
        };


        return new Response(JSON.stringify(result), {
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
