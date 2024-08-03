export interface CreateDbtDto {
  description: string;
  value: number;
  category: string;
  date: Date;
  userId: string;
  inFavor: boolean;
  client: string;
}
