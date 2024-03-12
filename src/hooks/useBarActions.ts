'use client'

import ActionsContext from '@/context/ActionsContext';
import { useContextSelector } from 'use-context-selector'

const useBarActions = () => {
  const isCollapsed = useContextSelector(ActionsContext, toggle => toggle.isCollapsed);
  const isOpenSignIn = useContextSelector(ActionsContext, toggle => toggle.isOpenSignIn)
  const toggleSideBar = useContextSelector(ActionsContext, toggle => toggle.toggleSideBar);
  const toggleModalSignIn = useContextSelector(ActionsContext, toggle => toggle.toggleModalSignIn)

  return {
    isCollapsed,
    isOpenSignIn,
    toggleSideBar,
    toggleModalSignIn
  }
}

export default useBarActions