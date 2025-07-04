import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type Model = {
    id: number
    name: string
    description: string
    likes: number
    image: string
    category: string
    dateAdded: string
}


export type ModelDetailPageProps = {
    params: Promise<{
        modelId: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type PillProps = {
    children: ReactNode
    className?: string
}