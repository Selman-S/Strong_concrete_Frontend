import DeliveryTable from '@/app/components/deliveries/DeliveryTable'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = { title: "Deliveries", description: "Deliveries"};

const DeliveryPage = () => {
  return (
    <>
      <ul className="flex space-x-2 rtl:space-x-reverse mb-3">
        <li>
          <Link href="/" className="text-primary hover:underline">
            Dashboard
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Deliveries</span>
        </li>
      </ul>
      <DeliveryTable />
    </>

  )
}

export default DeliveryPage