import { Injectable } from '@nestjs/common';
import { Book } from '~/prisma/models/book';
import { PrismaService } from '~/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<Book[]> {
    return this.prismaService.book.findMany();
  }

  findById(id: number): Promise<Book> {
    return this.prismaService.book.findUnique({
      where: { id },
    });
  }
}
