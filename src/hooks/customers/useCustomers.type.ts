export interface IDailyJoin {
  date: string;
  count: number;
}

export interface ICustomerData {
  status: 'success' | 'error';
  data: {
    start_date: string;
    end_date: string;
    daily_joins: IDailyJoin[];
  };
}
