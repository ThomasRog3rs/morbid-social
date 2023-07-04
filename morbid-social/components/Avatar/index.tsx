'use client';

import { Avatar } from 'flowbite-react';

export default function DefaultAvatar() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar
        alt="avatar"
        img="../../images/profile.png"
        rounded
      />
    </div>
  )
}


