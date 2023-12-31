import { ReturnStatus, PaymentStatus } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Loan {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  userId: number;

  @ApiProperty({ type: Date })
  loanDate: Date;

  @ApiProperty({ type: Date })
  dueDate: Date;

  @ApiProperty({ enum: ReturnStatus, enumName: 'ReturnStatus' })
  returnStatus: ReturnStatus;

  @ApiProperty({ type: Number })
  totalAmount: number;

  @ApiPropertyOptional({ type: String })
  paymentId: string | null;

  @ApiPropertyOptional({ enum: PaymentStatus, enumName: 'PaymentStatus' })
  paymentStatus: PaymentStatus | null;

  @ApiPropertyOptional({ type: String })
  paymentMethod: string | null;

  @ApiPropertyOptional({ type: String })
  invoiceUrl: string | null;

  @ApiPropertyOptional({ type: Date })
  expiresAt: Date | null;
}
