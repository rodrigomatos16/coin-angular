export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
  }
  
  export interface CoinDetails {
    id: string;
    symbol: string;
    name: string;
    description: { [language: string]: string };
    image: { thumb: string, small: string, large: string };
    market_data: {
      current_price: { [currency: string]: number };
      market_cap: { [currency: string]: number };
    };
  }
  