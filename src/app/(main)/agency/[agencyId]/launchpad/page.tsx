import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { db } from '@/lib/db'
// import { getStripeOAuthLink } from '@/lib/utils'
import { CheckCircleIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { stripe } from '@/lib/stripe'

type Props = {
  params: {
    agencyId: string
  }
  searchParams: { code: string }
}

const LaunchPadPage = async ({ params, searchParams }: Props) => {
  const agencyDetails = await db.agency.findUnique({
    where: { id: params.agencyId },
  })

  if (!agencyDetails) return

  // const allDetailsExist =
  //   agencyDetails.address &&
  //   agencyDetails.address &&
  //   agencyDetails.agencyLogo &&
  //   agencyDetails.city &&
  //   agencyDetails.companyEmail &&
  //   agencyDetails.companyPhone &&
  //   agencyDetails.country &&
  //   agencyDetails.name &&
  //   agencyDetails.state &&
  //   agencyDetails.zipCode

  // const stripeOAuthLink = getStripeOAuthLink(
  //   'agency',
  //   `launchpad___${agencyDetails.id}`
  // )

  // let connectedStripeAccount = false

  // if (searchParams.code) {
  //   if (!agencyDetails.connectAccountId) {
  //     try {
  //       const response = await stripe.oauth.token({
  //         grant_type: 'authorization_code',
  //         code: searchParams.code,
  //       })
  //       await db.agency.update({
  //         where: { id: params.agencyId },
  //         data: { connectAccountId: response.stripe_user_id },
  //       })
  //       connectedStripeAccount = true
  //     } catch (error) {
  //       console.log('🔴 Could not connect stripe account')
  //     }
  //   }
  // }

  return (
    <div>
      Stripe Launchpad
    </div>
  )
}

export default LaunchPadPage
