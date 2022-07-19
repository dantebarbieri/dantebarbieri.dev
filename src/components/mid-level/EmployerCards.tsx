import React from 'react'
import Box from '@mui/material/Box'
import EmployerCard from '../low-level/EmployerCard'

type Props = {}

const EmployerCards = (props: Props) => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='stretch' px={20} width='100%' boxSizing='border-box'>
      <EmployerCard
        position='Software Engineer'
        employer='Microsoft'
        start='August 2022' end='Present'
        points={['Working on Azure Edge Zones', 'Introducing new features to Azure\'s Edge']}
      />
      <EmployerCard
        position='Software Engineering Intern'
        employer='Microsoft'
        start='May 2020' end='August 2021'
        points={['Developed web pages to fetch and display detailed statistics from an Azure Edge Cluster', 'Implemented a feature where Azure Ephemeral OS Disks are usable in Azure Edge Zones', 'Worked with a variety of teams and several different technologies']} />
    </Box>
  )
}

export default EmployerCards