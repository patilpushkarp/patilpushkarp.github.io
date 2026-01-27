export interface Location {
    city: string;
    region: string;
    country: string;
}

export interface Profile {
    network: string;
    username: string;
    url?: string;
}

export interface Stats {
    age: string;
    experience: string;
    projects: string;
    industries: string;
}

export interface Purpose {
    headline: string;
    description: string;
}

export interface Basics {
    name: string;
    label: string;
    email: string;
    phone: string;
    summary: string;
    location: Location;
    profiles: Profile[];
    stats?: Stats;
    purpose?: Purpose;
}

export interface Category {
    name: string;
    items: string[];
}

export interface Work {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    categories: Category[];
}

export interface Project {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
}

export interface Education {
    institution: string;
    area: string;
    score: string;
    startDate: string;
    endDate: string;
}

export interface Skills {
    languagesAndSoftwares: string[];
    frameworksAndLibraries: string[];
    sdlc: string[];
    cloudServices: string[];
}

export interface ResumeData {
    basics: Basics;
    work: Work[];
    projects: Project[];
    education: Education[];
    skills: Skills;
}

import resumeData from '../data/resume.json';

export const useResume = () => {
    // We import data directly, so no network redundancy or router issues
    // Wrap in ref to maintain reactivity interface if needed, although it's static data
    const resume = ref<ResumeData>(resumeData as unknown as ResumeData);
    const error = ref(null);

    return {
        resume,
        error
    };
};
