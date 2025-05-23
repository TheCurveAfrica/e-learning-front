import { LucideIcon } from 'lucide-react';

export interface NavItem {
    name: string;
    href: string;
    icon: LucideIcon;
    badge?: string;
    active?: boolean;
}

export interface NavSection {
    title?: string;
    items: NavItem[];
}