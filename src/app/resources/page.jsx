import ResourcesFORMUN from '@/components/studyGuides'
import React from 'react'

const Resources = () => {
  const studyGuide = ['adhoc','unhsc','disec','asean','fcic','specpol']
  return (
    <>
      <ResourcesFORMUN studyGuide={studyGuide}/>
    </>
  )
}

export default Resources