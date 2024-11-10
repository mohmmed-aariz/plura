// import { getPipelines } from '@/lib/queries'
import React from 'react'
// import PipelinesDataTable from './data-table'
// import { Plus } from 'lucide-react'
// import { columns } from './columns'
// import FunnelForm from '@/components/forms/funnel-form'
import BlurPage from '@/components/global/blur-page'

const Pipelines = async ({ params }: { params: { subaccountId: string } }) => {
  // const Pipelines = await getPipelines(params.subaccountId)
  // if (!Pipelines) return null

  return (
    <BlurPage>
      {/* <PipelinesDataTable
        actionButtonText={
          <>
            <Plus size={15} />
            Create Funnel
          </>
        }
        modalChildren={
          <FunnelForm subAccountId={params.subaccountId}></FunnelForm>
        }
        filterValue="name"
        columns={columns}
        data={Pipelines}
      /> */}
      Pipeline Page
    </BlurPage>
  )
}

export default Pipelines







// import { db } from '@/lib/db'
// import { redirect } from 'next/navigation'
// import React from 'react'

// type Props = {
//   params: { subaccountId: string }
// }

// const Pipelines = async ({ params }: Props) => {
//   const pipelineExists = await db.pipeline.findFirst({
//     where: { subAccountId: params.subaccountId },
//   })

//   if (pipelineExists)
//     return redirect(
//       `/subaccount/${params.subaccountId}/pipelines/${pipelineExists.id}`
//     )

//   try {
//     const response = await db.pipeline.create({
//       data: { name: 'First Pipeline', subAccountId: params.subaccountId },
//     })

//     return redirect(
//       `/subaccount/${params.subaccountId}/pipelines/${response.id}`
//     )
//   } catch (error) {
//     console.log()
//   }
// }

// export default Pipelines
