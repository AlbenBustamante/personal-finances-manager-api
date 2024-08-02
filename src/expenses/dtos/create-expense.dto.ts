export interface CreateExpenseDto {
  description: string;
  value: number;
  category: string;
  userId: string;
  date: Date;
}
