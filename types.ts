import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface Certificate {
    title: string;
    issuer: string;
    url: string;
    year: string;
}

export interface Award {
    title: string;
    issuer: string;
    year: string;
    description: string;
}
