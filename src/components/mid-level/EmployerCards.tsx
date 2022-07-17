import Box from '@mui/material/Box'
import React from 'react'
import EmployerCard from '../low-level/EmployerCard'

type Props = {}

const EmployerCards = (props: Props) => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='stretch' px={20}>
      <EmployerCard
        position='Software Engineer'
        employer='Microsoft'
        start='August 2022' end='Present'
        points={['Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt', 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur']}
      />
      <EmployerCard
        position='Software Engineering Intern'
        employer='Microsoft'
        start='May 2020' end='August 2021'
        points={['Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt', 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur']} />
    </Box>
  )
}

export default EmployerCards