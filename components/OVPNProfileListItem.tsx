import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-identicon-sprites'
import Image from 'next/image'
import type { OVPNProfile } from '@/lib/types'

interface Props {
  OVPNProfile: OVPNProfile
}

export default function OVPNProfileListItem({ OVPNProfile }: Props) {
  const svg = createAvatar(style, {
    seed: OVPNProfile.name,
    dataUri: true,
  })

  return (
    <li className="flex flex-wrap items-center gap-1 px-3 py-2 rounded-md shadow-md dark:bg-gray-900/70">
      <div className="grid p-1 mr-2 overflow-hidden bg-gray-700 rounded-full place-items-center">
        <Image src={svg} width={40} height={40} alt={OVPNProfile.name} />
      </div>

      <strong className="text-[color:var(--c-primary)]">name:&nbsp;</strong>
      <span>{OVPNProfile.name}</span>

      {/* ================================================== */}

      <strong className="text-[color:var(--c-primary)]">
        startDate:&nbsp;
      </strong>
      <span>{OVPNProfile.startDate}</span>

      {/* ================================================== */}

      <strong className="text-[color:var(--c-primary)]">
        subscriptionLength:&nbsp;
      </strong>
      <span>{OVPNProfile.subscriptionLength}</span>
    </li>
  )
}
