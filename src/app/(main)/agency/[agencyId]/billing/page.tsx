import React from 'react'

type Props = {
  params: { agencyId: string }
}

const page = ({params}: Props) => {
  return (
      <div>
        <h1 className="text-4xl p-4">Billing Page</h1>
      </div>
    );
}

export default page