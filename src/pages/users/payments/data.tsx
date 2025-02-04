import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
    CheckIcon
  } from '@radix-ui/react-icons'
  
  export const labels = [
    {
      value: 'bug',
      label: 'Bug',
    },
    {
      value: 'feature',
      label: 'Feature',
    },
    {
      value: 'documentation',
      label: 'Documentation',
    },
  ]
  
  export const statuses = [
    {
      value: 'ACTIVO',
      label: 'ACTIVO',
      icon: CheckIcon,
    },
    {
      value: 'todo',
      label: 'Todo',
      icon: CircleIcon,
    },
    {
      value: 'in progress',
      label: 'In Progress',
      icon: StopwatchIcon,
    },
    {
      value: 'done',
      label: 'Done',
      icon: CheckCircledIcon,
    },
    {
      value: 'canceled',
      label: 'Canceled',
      icon: CrossCircledIcon,
    },
  ]
  
  export const priorities = [
    {
      label: 'Low',
      value: 'low',
      icon: ArrowDownIcon,
    },
    {
      label: 'Medium',
      value: 'medium',
      icon: ArrowRightIcon,
    },
    {
      label: 'High',
      value: 'high',
      icon: ArrowUpIcon,
    },
  ]
  