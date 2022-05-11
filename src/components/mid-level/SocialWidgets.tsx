import React from 'react'
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Box from '@mui/system/Box';
import SocialWidget from '../low-level/SocialWidget';

interface IconButtonData {
  url: string
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  blank?: boolean
}

type Props = {
  buttons: {[label: string]: IconButtonData}
}

const SocialWidgets = (props: Props) => {
  const { buttons } = props

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
    {
      Object.entries(buttons).map(([key, value]) => (
        <SocialWidget key={key} href={value.url} icon={value.icon} blank={value.blank} />
      ))
    }
    </Box>
  )
}

export default SocialWidgets