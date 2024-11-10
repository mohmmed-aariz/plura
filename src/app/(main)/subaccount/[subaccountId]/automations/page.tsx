// import { getAutomations } from '@/lib/queries'
import React from 'react'
// import AutomationsDataTable from './data-table'
// import { Plus } from 'lucide-react'
// import { columns } from './columns'
// import FunnelForm from '@/components/forms/funnel-form'
import BlurPage from '@/components/global/blur-page'

const Automations = async ({ params }: { params: { subaccountId: string } }) => {
  // const Automations = await getAutomations(params.subaccountId)
  // if (!Automations) return null

  return (
    <BlurPage>
      {/* <AutomationsDataTable
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
        data={Automations}
      /> */}
      Automation Page
    </BlurPage>
  )
}

export default Automations
