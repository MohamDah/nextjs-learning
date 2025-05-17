import { getAllModels } from "@/lib/models"

export default async function ModelsList() {
    const modelsData = await getAllModels()
    return (
        <ul>
            {modelsData.map(model => (
                <li className="text-blue-800" key={model.id}>
                    <a href={`/3d-models/${model.id}`}>
                        {model.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}
