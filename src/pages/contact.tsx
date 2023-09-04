import { ContactsData } from '@/types/data'
import React from 'react'
import {getContactData} from "../services/hygraphRequest"
import { ContactPage } from '@/components'

type Props={
  data: ContactsData
}
const contact = ({data}:Props) => {
  return (
    <>
    <ContactPage data={data[0]}/>
    </>
  )
}

export default contact

export async function getStaticProps() {
  const data = await getContactData();
  return {
    props: {
      data,
    },
  };
}
