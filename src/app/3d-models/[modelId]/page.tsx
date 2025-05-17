import { getModelById } from '@/lib/models'
import { ModelDetailPageProps } from '@/types'
import React from 'react'

export default async function ModelDetails({ params }: ModelDetailPageProps) {
    const {modelId} = await params
    const model = await getModelById(modelId)
    console.log(modelId)
    return (
        <div>{JSON.stringify(model, null, 2)}</div>
    )
}
