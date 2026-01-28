import { getAllConsultancies } from '@/lib/sanity/api'
import { ConsultancyList } from '@/components/consultancies/ConsultancyList'

export default async function ConsultanciesPage() {
    const consultancies = await getAllConsultancies()

    return (
        <ConsultancyList initialConsultancies={consultancies} />
    )
}
