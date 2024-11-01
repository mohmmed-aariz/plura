// import { generateComponents } from '@uploadthing/react'
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { generateReactHelpers } from '@uploadthing/react/hooks'

import type { OurFileRouter } from '@/app/api/uploadthing/core'

// export const { UploadButton, UploadDropzone, Uploader } =
//   generateComponents<OurFileRouter>()

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
// Uploader not imported

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>()
