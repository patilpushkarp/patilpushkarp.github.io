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

export interface Basics {
    name: string;
    label: string;
    email: string;
    phone: string;
    summary: string;
    location: Location;
    profiles: Profile[];
    stats?: Stats;
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

export const useResume = () => {
    const { data: resume, error } = useFetch<ResumeData>('/resume.json?v=' + new Date().getTime());

    return {
        resume,
        error
    };
};
