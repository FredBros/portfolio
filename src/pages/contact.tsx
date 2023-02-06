import { ContactsData } from '@/types/data'
import React from 'react'
import {GetContactData} from "../services/hygraphRequest"
import { ContactPage } from '@/components'

type Props={
  data: ContactsData
}
const contact = ({data}:Props) => {
console.log(data[0])
  return (
    <>
    <ContactPage data={data[0]}/>
    </>
  )
}

export default contact

export async function getStaticProps() {
  const data = await GetContactData();
  return {
    props: {
      data,
    },
  };
}
