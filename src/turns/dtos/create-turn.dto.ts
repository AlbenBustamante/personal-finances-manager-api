export interface CreateTurnDto {
  date: Date;
  initialHour: Date;
  finalHour: Date;
  initialBreakHour: Date;
  finalBreakHour: Date;
  userId: string;
  salary?: number;
}
