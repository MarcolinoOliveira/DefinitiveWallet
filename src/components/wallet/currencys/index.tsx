'use client'

import CurrencyActions from "./CurrencyActions";
import CurrencyAddNew from "./CurrencyAddNew";
import CurrencyAllTimeContributed from "./CurrencyAllTimeContribution";
import CurrencyAvaregePrice from "./CurrencyAvaregePrice";
import CurrencyBalance from "./CurrencyBalance";
import CurrencyBuyingAmount from "./CurrencyBuyingAmount";
import CurrencyCryptos from "./CurrencyCryptos";
import CurrencyDeleteAction from "./CurrencyDeleteAction";
import CurrencyHeader from "./CurrencyHeader";
import CurrencyProfit from "./CurrencyProfit";
import CurrencyRoot from "./roots/CurrencyRoot";
import CurrencyRootCoins from "./roots/CurrencyRootCoins";
import CurrencyRootContainer from "./roots/CurrencyRootContainer";
import CurrencyRootHeader from "./roots/CurrencyRootHeader";
import CurrencySellingAmount from "./CurrencySellingAmount";
import CurrencyRootDetails from "./roots/CurrencyRootDetails";
import CurrencyRootDividerDetails from "./roots/CurrencyRootDividerDetails";

export const Currency = {
  Root: CurrencyRoot,
  RootContainer: CurrencyRootContainer,
  RootHeader: CurrencyRootHeader,
  RootCoins: CurrencyRootCoins,
  RootDetails: CurrencyRootDetails,
  RootDividerDetails: CurrencyRootDividerDetails,
  Header: CurrencyHeader,
  DeleteAction: CurrencyDeleteAction,
  Balance: CurrencyBalance,
  AllTimeContributed: CurrencyAllTimeContributed,
  BuyingAmount: CurrencyBuyingAmount,
  SellingAmount: CurrencySellingAmount,
  Cryptos: CurrencyCryptos,
  AvaregePrice: CurrencyAvaregePrice,
  Profit: CurrencyProfit,
  Actions: CurrencyActions,
  AddNew: CurrencyAddNew,
}