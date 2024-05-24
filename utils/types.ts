import { MouseEventHandler, ReactNode } from 'react'

export interface IPost {
    id: string
    title: string
    categoryId: string
    description: string
    content: string
    lastUpdated: string
    writtenDate: string
    thumbnail: string
    url: string 
    tag: string
    category?: {
        category: string
    }
}

export type CustomComp = {
    children?: ReactNode
    className?: string
    onClick?: MouseEventHandler<HTMLElement>
    disabled?: boolean
}
