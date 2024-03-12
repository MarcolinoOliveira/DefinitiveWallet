import ActionsContext from "@/context/ActionsContext";
import { useContextSelector } from "use-context-selector";

export const useModalsWallet = () => {
  const isOpenAddCoin = useContextSelector(ActionsContext, toggle => toggle.isOpenAddCoin)
  const isOpenTrader = useContextSelector(ActionsContext, toggle => toggle.isOpenTrader)
  const isOpenDetailsWallet = useContextSelector(ActionsContext, toggle => toggle.isOpenDetailsWallet)
  const isOpenDetailsTrader = useContextSelector(ActionsContext, toggle => toggle.isOpenDetailsTrader)
  const toggleModalAddCoin = useContextSelector(ActionsContext, toggle => toggle.toggleModalAddCoin)
  const toggleModalTrader = useContextSelector(ActionsContext, toggle => toggle.toggleModalTrader)
  const toggleModalDetailsWallet = useContextSelector(ActionsContext, toggle => toggle.toggleModalDetailsWallet)
  const toggleModalDetailsTrader = useContextSelector(ActionsContext, toggle => toggle.toggleModalDetailsTrader)

  return {
    isOpenAddCoin,
    isOpenTrader,
    isOpenDetailsWallet,
    isOpenDetailsTrader,
    toggleModalAddCoin,
    toggleModalTrader,
    toggleModalDetailsWallet,
    toggleModalDetailsTrader,
  };
}