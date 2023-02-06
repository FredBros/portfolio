import { ContactsData } from '@/types/data'
import React from 'react'
import {GetContactData} from "../services/hygraphRequest"

type Props={
  data: ContactsData
}
const contact = ({data}:Props) => {
console.log(data[0])
  return (
    <div>contact</div>
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
